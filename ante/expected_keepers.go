package ante

import (
	"github.com/cosmos/cosmos-sdk/x/srstaking/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

// BankKeeper defines the contract needed for supply related APIs (noalias)
type SrstakingKeeper interface {
	GetKyc(ctx sdk.Context, account string) (val types.Kyc, found bool)
	GetRegion(ctx sdk.Context, id string) (val types.Region, found bool)
	SendCoinsToRegionVaultAdmin(ctx sdk.Context, senderAddr sdk.AccAddress, regionId string, amt sdk.Coins) error
	SendCoinsToGlobalAdmin(ctx sdk.Context, senderAddr sdk.AccAddress, amt sdk.Coins) error
}
