// DONTCOVER
package types

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/evidence module sentinel errors
var (
	ErrNoEvidenceHandlerExists = sdkerrors.Register(ModuleName, 1001, "unregistered handler for evidence type")
	ErrInvalidEvidence         = sdkerrors.Register(ModuleName, 1002, "invalid evidence")
	ErrNoEvidenceExists        = sdkerrors.Register(ModuleName, 1003, "evidence does not exist")
	ErrEvidenceExists          = sdkerrors.Register(ModuleName, 1004, "evidence already exists")
)
