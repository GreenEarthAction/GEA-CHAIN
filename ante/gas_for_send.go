package ante

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/x/bank/types"
)

func calcSendFees(minSendFees sdk.Coins, sendFeesRate sdk.Dec, coinsToSend sdk.Coins) sdk.Coins {
	sendFeesDec := make(sdk.Coins, len(minSendFees))
	for i := range minSendFees {
		amount := sdk.NewInt(0)
		for j := range coinsToSend {
			if minSendFees[i].Denom == coinsToSend[j].Denom && minSendFees[i].Amount.IsPositive() {
				amount = amount.Add(coinsToSend[j].Amount)
			}
		}
		sendFeesDec[i].Amount = sendFeesRate.MulInt(amount).RoundInt()
		sendFeesDec[i].Denom = minSendFees[i].Denom
		if sendFeesDec[i].Amount.LT(minSendFees[i].Amount) {
			sendFeesDec[i].Amount = minSendFees[i].Amount
		}
	}
	return sendFeesDec
}

func calcMultiSendFees(minSendFees sdk.Coins, sendFeesRate sdk.Dec, multiSendInputs []types.Input) sdk.Coins {
	sendFeesDec := make(sdk.Coins, len(minSendFees))
	for i := range minSendFees {
		amount := sdk.NewInt(0)
		for _, subMsg := range multiSendInputs {
			for j := range subMsg.Coins {
				if minSendFees[i].Denom == subMsg.Coins[j].Denom && minSendFees[i].Amount.IsPositive() {
					amount = amount.Add(subMsg.Coins[j].Amount)
				}
			}
		}
		sendFeesDec[i].Amount = sendFeesRate.MulInt(amount).RoundInt()
		sendFeesDec[i].Denom = minSendFees[i].Denom
		if sendFeesDec[i].Amount.LT(minSendFees[i].Amount) {
			sendFeesDec[i].Amount = minSendFees[i].Amount
		}
	}
	return sendFeesDec
}

func calTotalSendFees(minSendFees sdk.Coins, sendFeesRate sdk.Dec, tx sdk.Tx) sdk.Coins {
	var requiredSendFees sdk.Coins
	hasSendFees := false

	if !minSendFees.IsZero() && sendFeesRate.IsPositive() {
		for _, msg := range tx.GetMsgs() {
			switch msg.(type) {
			case *types.MsgSend:
				hasSendFees = true
			case *types.MsgMultiSend:
				hasSendFees = true
			}
		}
	}

	if hasSendFees {
		//if msg is bank.send or bank.multi-send, check send fees:
		requiredSendFees = make(sdk.Coins, len(minSendFees))
		first := true
		for _, msg := range tx.GetMsgs() {
			switch msg := msg.(type) {
			case *types.MsgSend:
				t := calcSendFees(minSendFees, sendFeesRate, msg.Amount)
				if first {
					for i := range t {
						requiredSendFees[i] = t[i]
					}
					first = false
				} else {
					requiredSendFees.Add(t...)
				}
			case *types.MsgMultiSend:
				t := calcMultiSendFees(minSendFees, sendFeesRate, msg.Inputs)
				if first {
					for i := range t {
						requiredSendFees[i] = t[i]
					}
					first = false
				} else {
					requiredSendFees.Add(t...)
				}
			}
		}
	}

	return requiredSendFees
}

func calGasFees(minGasPrices sdk.DecCoins, gas int64) sdk.DecCoins {
	var requiredGasFees sdk.DecCoins
	if !minGasPrices.IsZero() {
		requiredGasFees = make(sdk.DecCoins, len(minGasPrices))
		// Determine the required fees by multiplying each required minimum gas
		// price by the gas limit, where fee = ceil(minGasPrice * gasLimit).
		glDec := sdk.NewDec(int64(gas))
		for i, gp := range minGasPrices {
			requiredGasFees[i].Denom = gp.Denom
			requiredGasFees[i].Amount = gp.Amount.Mul(glDec)
		}
	}

	return requiredGasFees
}

type GasForTxSendDecorator struct {
}

func NewGasForTxSendDecorator() GasForTxSendDecorator {
	return GasForTxSendDecorator{}
}

func (dfd GasForTxSendDecorator) AnteHandle(ctx sdk.Context, tx sdk.Tx, simulate bool, next sdk.AnteHandler) (newCtx sdk.Context, err error) {
	if ctx.IsCheckTx() && !simulate {
		log := ctx.Logger()
		feeTx, ok := tx.(sdk.FeeTx)
		if !ok {
			return ctx, sdkerrors.Wrap(sdkerrors.ErrTxDecode, "Tx must be FeeTx")
		}
		feeCoins := feeTx.GetFee()
		for _, coin := range feeCoins {
			if coin.Denom != sdk.BaseGeacDenom && coin.Denom != sdk.GeacDenom {
				return ctx, sdkerrors.Wrapf(sdkerrors.ErrInvalidCoins, "fees denom err. denom=%s", coin.Denom)
			}
		}

		//if msg is bank.send or bank.multi-send, check send fees:
		requiredSendFees := calTotalSendFees(ctx.MinSendFees(), ctx.SendFeesRate(), tx)

		minGasPrices := ctx.MinGasPrices()
		if !minGasPrices.IsZero() {
			if !requiredSendFees.IsZero() {
				gasSendMax := sdk.NewInt(0)
				for _, p := range requiredSendFees {
					gp := minGasPrices.AmountOf(p.Denom)
					if gp.IsPositive() {
						gasAmount := p.Amount.Quo(gp)
						if gasAmount.GT(gasSendMax) {
							gasSendMax = gasAmount
						}
					}
				}
				if gasSendMax.IsPositive() {
					gasToUse := gasSendMax.Uint64()
					log.Debug("ante.GasForTxSendDecorator", "IsCheckTx:", ctx.IsCheckTx(), "gasToUseForSend", gasToUse)
					ctx.GasMeter().ConsumeGas(gasToUse, "consume gas for bank send or bank multi-send")
				}
			}
		} else {
			if !requiredSendFees.IsZero() {
				for _, p := range requiredSendFees {
					sendFee := sdk.NewCoin(p.Denom, p.Amount)
					if sendFee.Amount.GT(feeCoins.AmountOf(sendFee.Denom)) {
						return ctx, sdkerrors.Wrapf(sdkerrors.ErrInsufficientFee,
							"insufficient fees for send or multi-send; got: %s required: %s",
							feeCoins, sendFee)
					}
				}
			}
		}
	}

	return next(ctx, tx, simulate)
}
