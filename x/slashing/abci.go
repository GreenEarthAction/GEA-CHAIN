package slashing

import (
	"fmt"
	stakingtypes "github.com/cosmos/cosmos-sdk/x/srstaking/types"
	"time"

	abci "github.com/tendermint/tendermint/abci/types"

	"github.com/cosmos/cosmos-sdk/telemetry"
	sdk "github.com/cosmos/cosmos-sdk/types"
	//"github.com/cosmos/cosmos-sdk/x/slashing/keeper"
	"gea-poa/x/slashing/keeper"
	//"github.com/cosmos/cosmos-sdk/x/slashing/types"
	"gea-poa/x/slashing/types"
)

// BeginBlocker check for infraction evidence or downtime of validators
// on every begin block
func BeginBlocker(ctx sdk.Context, req abci.RequestBeginBlock, k keeper.Keeper) {
	defer telemetry.ModuleMeasureSince(types.ModuleName, time.Now(), telemetry.MetricKeyBeginBlocker)

	logger := k.Logger(ctx)
	k.Sk.IterateValidators(ctx, func(index int64, validator stakingtypes.ValidatorI) bool {
		if validator.IsJailed() {
			consAddr, err := validator.GetConsAddr()
			if err != nil {
				logger.Error("get consAddr error", "err: ", err)
				panic(fmt.Sprintf("Validator consAddr not found, validator moniker is %s", validator.GetMoniker()))
			}

			// fetch signing info
			signInfo, found := k.GetValidatorSigningInfo(ctx, consAddr)
			if !found {
				logger.Error("get signing info error", "err: ", err)
				panic(fmt.Sprintf("Expected signing info for validator %s but not found", consAddr))
			}
			if signInfo.JailedUntil.Before(ctx.BlockHeader().Time) {
				signAddr, err := sdk.ConsAddressFromBech32(signInfo.Address)
				if err != nil {
					logger.Error("convert string address to consadress error", "err: ", err)
					panic(fmt.Sprintf("Can not convert string address to consadress %s", signInfo.Address))
				}
				k.Sk.Unjail(ctx, signAddr)
			}
		}

		return false
	})

	// Iterate over all the validators which *should* have signed this block
	// store whether or not they have actually signed it and slash/unbond any
	// which have missed too many blocks in a row (downtime slashing)
	for _, voteInfo := range req.LastCommitInfo.GetVotes() {
		k.HandleValidatorSignature(ctx, voteInfo.Validator.Address, voteInfo.Validator.Power, voteInfo.SignedLastBlock)
	}
}
