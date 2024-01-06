// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgRemoveKyc } from "./types/cosmos/srstaking/v1beta1/tx";
import { MsgCreateFixedDelegation } from "./types/cosmos/srstaking/v1beta1/tx";
import { MsgWithdraw } from "./types/cosmos/srstaking/v1beta1/tx";
import { MsgCreateValidator } from "./types/cosmos/srstaking/v1beta1/tx";
import { MsgCreateDelegate } from "./types/cosmos/srstaking/v1beta1/tx";
import { MsgKickValidatorByAddress } from "./types/cosmos/srstaking/v1beta1/tx";
import { MsgDeleteRegion } from "./types/cosmos/srstaking/v1beta1/tx";
import { MsgCreateRegion } from "./types/cosmos/srstaking/v1beta1/tx";
import { MsgKickValidatorByPubkey } from "./types/cosmos/srstaking/v1beta1/tx";
import { MsgSetFixedDelegationInterestRate } from "./types/cosmos/srstaking/v1beta1/tx";
import { MsgAgToAc } from "./types/cosmos/srstaking/v1beta1/tx";
import { MsgTransferKYC } from "./types/cosmos/srstaking/v1beta1/tx";
import { MsgSetFixedDepositInterestRate } from "./types/cosmos/srstaking/v1beta1/tx";
import { MsgUpdateValidator } from "./types/cosmos/srstaking/v1beta1/tx";
import { MsgCreateFixedDeposit } from "./types/cosmos/srstaking/v1beta1/tx";
import { MsgDelegate } from "./types/cosmos/srstaking/v1beta1/tx";
import { MsgExitDelegate } from "./types/cosmos/srstaking/v1beta1/tx";
import { MsgUnDelegate } from "./types/cosmos/srstaking/v1beta1/tx";
import { MsgWithdrawFixedDelegation } from "./types/cosmos/srstaking/v1beta1/tx";
import { MsgNewKyc } from "./types/cosmos/srstaking/v1beta1/tx";
import { MsgWithdrawUnmovableInterest } from "./types/cosmos/srstaking/v1beta1/tx";
import { MsgUpdateRegion } from "./types/cosmos/srstaking/v1beta1/tx";
import { MsgWithdrawFixedDeposit } from "./types/cosmos/srstaking/v1beta1/tx";


const types = [
  ["/cosmos.srstaking.v1beta1.MsgRemoveKyc", MsgRemoveKyc],
  ["/cosmos.srstaking.v1beta1.MsgCreateFixedDelegation", MsgCreateFixedDelegation],
  ["/cosmos.srstaking.v1beta1.MsgWithdraw", MsgWithdraw],
  ["/cosmos.srstaking.v1beta1.MsgCreateValidator", MsgCreateValidator],
  ["/cosmos.srstaking.v1beta1.MsgCreateDelegate", MsgCreateDelegate],
  ["/cosmos.srstaking.v1beta1.MsgKickValidatorByAddress", MsgKickValidatorByAddress],
  ["/cosmos.srstaking.v1beta1.MsgDeleteRegion", MsgDeleteRegion],
  ["/cosmos.srstaking.v1beta1.MsgCreateRegion", MsgCreateRegion],
  ["/cosmos.srstaking.v1beta1.MsgKickValidatorByPubkey", MsgKickValidatorByPubkey],
  ["/cosmos.srstaking.v1beta1.MsgSetFixedDelegationInterestRate", MsgSetFixedDelegationInterestRate],
  ["/cosmos.srstaking.v1beta1.MsgAgToAc", MsgAgToAc],
  ["/cosmos.srstaking.v1beta1.MsgTransferKYC", MsgTransferKYC],
  ["/cosmos.srstaking.v1beta1.MsgSetFixedDepositInterestRate", MsgSetFixedDepositInterestRate],
  ["/cosmos.srstaking.v1beta1.MsgUpdateValidator", MsgUpdateValidator],
  ["/cosmos.srstaking.v1beta1.MsgCreateFixedDeposit", MsgCreateFixedDeposit],
  ["/cosmos.srstaking.v1beta1.MsgDelegate", MsgDelegate],
  ["/cosmos.srstaking.v1beta1.MsgExitDelegate", MsgExitDelegate],
  ["/cosmos.srstaking.v1beta1.MsgUnDelegate", MsgUnDelegate],
  ["/cosmos.srstaking.v1beta1.MsgWithdrawFixedDelegation", MsgWithdrawFixedDelegation],
  ["/cosmos.srstaking.v1beta1.MsgNewKyc", MsgNewKyc],
  ["/cosmos.srstaking.v1beta1.MsgWithdrawUnmovableInterest", MsgWithdrawUnmovableInterest],
  ["/cosmos.srstaking.v1beta1.MsgUpdateRegion", MsgUpdateRegion],
  ["/cosmos.srstaking.v1beta1.MsgWithdrawFixedDeposit", MsgWithdrawFixedDeposit],
  
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;
  let client;
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  }else{
    client = await SigningStargateClient.offline( wallet, { registry });
  }
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgRemoveKyc: (data: MsgRemoveKyc): EncodeObject => ({ typeUrl: "/cosmos.srstaking.v1beta1.MsgRemoveKyc", value: MsgRemoveKyc.fromPartial( data ) }),
    msgCreateFixedDelegation: (data: MsgCreateFixedDelegation): EncodeObject => ({ typeUrl: "/cosmos.srstaking.v1beta1.MsgCreateFixedDelegation", value: MsgCreateFixedDelegation.fromPartial( data ) }),
    msgWithdraw: (data: MsgWithdraw): EncodeObject => ({ typeUrl: "/cosmos.srstaking.v1beta1.MsgWithdraw", value: MsgWithdraw.fromPartial( data ) }),
    msgCreateValidator: (data: MsgCreateValidator): EncodeObject => ({ typeUrl: "/cosmos.srstaking.v1beta1.MsgCreateValidator", value: MsgCreateValidator.fromPartial( data ) }),
    msgCreateDelegate: (data: MsgCreateDelegate): EncodeObject => ({ typeUrl: "/cosmos.srstaking.v1beta1.MsgCreateDelegate", value: MsgCreateDelegate.fromPartial( data ) }),
    msgKickValidatorByAddress: (data: MsgKickValidatorByAddress): EncodeObject => ({ typeUrl: "/cosmos.srstaking.v1beta1.MsgKickValidatorByAddress", value: MsgKickValidatorByAddress.fromPartial( data ) }),
    msgDeleteRegion: (data: MsgDeleteRegion): EncodeObject => ({ typeUrl: "/cosmos.srstaking.v1beta1.MsgDeleteRegion", value: MsgDeleteRegion.fromPartial( data ) }),
    msgCreateRegion: (data: MsgCreateRegion): EncodeObject => ({ typeUrl: "/cosmos.srstaking.v1beta1.MsgCreateRegion", value: MsgCreateRegion.fromPartial( data ) }),
    msgKickValidatorByPubkey: (data: MsgKickValidatorByPubkey): EncodeObject => ({ typeUrl: "/cosmos.srstaking.v1beta1.MsgKickValidatorByPubkey", value: MsgKickValidatorByPubkey.fromPartial( data ) }),
    msgSetFixedDelegationInterestRate: (data: MsgSetFixedDelegationInterestRate): EncodeObject => ({ typeUrl: "/cosmos.srstaking.v1beta1.MsgSetFixedDelegationInterestRate", value: MsgSetFixedDelegationInterestRate.fromPartial( data ) }),
    msgAgToAc: (data: MsgAgToAc): EncodeObject => ({ typeUrl: "/cosmos.srstaking.v1beta1.MsgAgToAc", value: MsgAgToAc.fromPartial( data ) }),
    msgTransferKYC: (data: MsgTransferKYC): EncodeObject => ({ typeUrl: "/cosmos.srstaking.v1beta1.MsgTransferKYC", value: MsgTransferKYC.fromPartial( data ) }),
    msgSetFixedDepositInterestRate: (data: MsgSetFixedDepositInterestRate): EncodeObject => ({ typeUrl: "/cosmos.srstaking.v1beta1.MsgSetFixedDepositInterestRate", value: MsgSetFixedDepositInterestRate.fromPartial( data ) }),
    msgUpdateValidator: (data: MsgUpdateValidator): EncodeObject => ({ typeUrl: "/cosmos.srstaking.v1beta1.MsgUpdateValidator", value: MsgUpdateValidator.fromPartial( data ) }),
    msgCreateFixedDeposit: (data: MsgCreateFixedDeposit): EncodeObject => ({ typeUrl: "/cosmos.srstaking.v1beta1.MsgCreateFixedDeposit", value: MsgCreateFixedDeposit.fromPartial( data ) }),
    msgDelegate: (data: MsgDelegate): EncodeObject => ({ typeUrl: "/cosmos.srstaking.v1beta1.MsgDelegate", value: MsgDelegate.fromPartial( data ) }),
    msgExitDelegate: (data: MsgExitDelegate): EncodeObject => ({ typeUrl: "/cosmos.srstaking.v1beta1.MsgExitDelegate", value: MsgExitDelegate.fromPartial( data ) }),
    msgUnDelegate: (data: MsgUnDelegate): EncodeObject => ({ typeUrl: "/cosmos.srstaking.v1beta1.MsgUnDelegate", value: MsgUnDelegate.fromPartial( data ) }),
    msgWithdrawFixedDelegation: (data: MsgWithdrawFixedDelegation): EncodeObject => ({ typeUrl: "/cosmos.srstaking.v1beta1.MsgWithdrawFixedDelegation", value: MsgWithdrawFixedDelegation.fromPartial( data ) }),
    msgNewKyc: (data: MsgNewKyc): EncodeObject => ({ typeUrl: "/cosmos.srstaking.v1beta1.MsgNewKyc", value: MsgNewKyc.fromPartial( data ) }),
    msgWithdrawUnmovableInterest: (data: MsgWithdrawUnmovableInterest): EncodeObject => ({ typeUrl: "/cosmos.srstaking.v1beta1.MsgWithdrawUnmovableInterest", value: MsgWithdrawUnmovableInterest.fromPartial( data ) }),
    msgUpdateRegion: (data: MsgUpdateRegion): EncodeObject => ({ typeUrl: "/cosmos.srstaking.v1beta1.MsgUpdateRegion", value: MsgUpdateRegion.fromPartial( data ) }),
    msgWithdrawFixedDeposit: (data: MsgWithdrawFixedDeposit): EncodeObject => ({ typeUrl: "/cosmos.srstaking.v1beta1.MsgWithdrawFixedDeposit", value: MsgWithdrawFixedDeposit.fromPartial( data ) }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
