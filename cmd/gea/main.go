package main

import (
	"gea-poa/app"
	"gea-poa/cmd"
	"github.com/cosmos/cosmos-sdk/server"
	svrcmd "github.com/cosmos/cosmos-sdk/server/cmd"
	"os"
)

func main() {
	rootCmd, _ := cmd.NewRootCmd(app.AppName,
		app.AccountAddressPrefix,
		app.DefaultNodeHome,
		app.AppName)

	if err := svrcmd.Execute(rootCmd, app.DefaultNodeHome); err != nil {
		switch e := err.(type) {
		case server.ErrorCode:
			os.Exit(e.Code)

		default:
			os.Exit(1)
		}
	}
}
