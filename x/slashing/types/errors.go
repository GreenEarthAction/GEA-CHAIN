package types

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/slashing module sentinel errors
var (
	ErrNoValidatorForAddress        = sdkerrors.Register(ModuleName, 1001, "address is not associated with any known validator")
	ErrBadValidatorAddr             = sdkerrors.Register(ModuleName, 1002, "validator does not exist for that address")
	ErrValidatorJailed              = sdkerrors.Register(ModuleName, 1003, "validator still jailed; cannot be unjailed")
	ErrValidatorNotJailed           = sdkerrors.Register(ModuleName, 1004, "validator not jailed; cannot be unjailed")
	ErrMissingSelfDelegation        = sdkerrors.Register(ModuleName, 1005, "validator has no self-delegation; cannot be unjailed")
	ErrSelfDelegationTooLowToUnjail = sdkerrors.Register(ModuleName, 1006, "validator's self delegation less than minimum; cannot be unjailed")
	ErrNoSigningInfoFound           = sdkerrors.Register(ModuleName, 1007, "no validator signing info found")
)
