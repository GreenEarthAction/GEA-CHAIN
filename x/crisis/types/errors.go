package types

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/crisis module sentinel errors
var (
	ErrNoSender         = sdkerrors.Register(ModuleName, 1001, "sender address is empty")
	ErrUnknownInvariant = sdkerrors.Register(ModuleName, 1002, "unknown invariant")
)
