/* eslint-disable */
import {
  FixedDelegationTerm,
  fixedDelegationTermFromJSON,
  fixedDelegationTermToJSON,
} from "../../../cosmos/srstaking/v1beta1/delegation";
import {
  FixedDepositPeriod,
  fixedDepositPeriodFromJSON,
  fixedDepositPeriodToJSON,
} from "../../../cosmos/srstaking/v1beta1/fixed_deposit";
import {
  KYC_ROLE,
  kYC_ROLEFromJSON,
  kYC_ROLEToJSON,
} from "../../../cosmos/srstaking/v1beta1/kyc";
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Description } from "../../../cosmos/srstaking/v1beta1/validator";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "cosmos.srstaking.v1beta1";

export interface MsgCreateRegion {
  creator: string;
  regionName: string;
  regionId: string;
  regionTotalAS: string;
  delegatorsLimit: number;
  regionFeeRate: string;
  userMinDelegateAC: string;
  userMaxDelegateAC: string;
  regionTotalStakeAllow: string;
  permanentRate: string;
}

export interface MsgCreateRegionResponse {}

export interface MsgUpdateRegion {
  creator: string;
  regionID: string;
  regionName: string;
  regionTotalAS: string;
  delegatorsLimit: number;
  regionFeeRate: string;
  userMinDelegateAC: string;
  userMaxDelegateAC: string;
  regionTotalStakeAllow: string;
  permanentRate: string;
  isUndelegate: boolean;
}

export interface MsgUpdateRegionResponse {}

export interface MsgDeleteRegion {
  creator: string;
  regionKey: string;
}

export interface MsgDeleteRegionResponse {}

export interface MsgCreateValidator {
  creator: string;
  valAddress: string;
  valPubkey: string;
  description: Description | undefined;
  RegionName: string;
}

export interface MsgCreateValidatorResponse {}

export interface MsgUpdateValidator {
  creator: string;
  valAddress: string;
  RegionName: string;
}

export interface MsgUpdateValidatorResponse {}

export interface MsgKickValidatorByAddress {
  creator: string;
  validatorAddress: string;
}

export interface MsgKickValidatorByAddressResponse {}

export interface MsgKickValidatorByPubkey {
  creator: string;
  pubkey: string;
}

export interface MsgKickValidatorByPubkeyResponse {}

export interface MsgDelegate {
  creator: string;
  amount: Coin | undefined;
}

export interface MsgDelegateResponse {}

export interface MsgUnDelegate {
  creator: string;
  amount: Coin | undefined;
  isUnmovable: boolean;
}

export interface MsgUnDelegateResponse {}

export interface MsgExitDelegate {
  creator: string;
  delegatorAddress: string;
}

export interface MsgExitDelegateResponse {}

export interface MsgCreateDelegate {
  creator: string;
  amount: Coin | undefined;
  isUnmovable: boolean;
}

export interface MsgCreateDelegateResponse {}

export interface MsgWithdraw {
  creator: string;
}

export interface MsgWithdrawResponse {
  receive_address: string;
  region_id: string;
  from_height: number;
  to_height: number;
  /**
   * string srs = 5 [
   *    (gogoproto.moretags) = "yaml:\"srs\"",
   *    (gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Dec",
   *    (gogoproto.nullable) = false
   *  ];
   *  string src = 6 [
   *    (gogoproto.moretags) = "yaml:\"src\"",
   *    (gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Int",
   *    (gogoproto.nullable) = false
   *  ];
   *  string srg = 7 [
   *    (gogoproto.moretags) = "yaml:\"srg\"",
   *    (gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Int",
   *    (gogoproto.nullable) = false
   *  ];
   */
  amount: string;
}

export interface MsgCreateFixedDelegation {
  creator: string;
  amount: Coin | undefined;
  term: FixedDelegationTerm;
}

export interface MsgCreateFixedDelegationResponse {
  id: number;
}

export interface MsgWithdrawFixedDelegation {
  creator: string;
  delegationId: number;
}

export interface MsgWithdrawFixedDelegationResponse {
  receive_address: string;
  region_id: string;
  from_height: number;
  to_height: number;
  /**
   * string srs             = 5 [
   *    (gogoproto.moretags)   = "yaml:\"srs\"",
   *    (gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Dec",
   *    (gogoproto.nullable)   = false
   *  ];
   *  string src = 6 [
   *    (gogoproto.moretags)   = "yaml:\"src\"",
   *    (gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Int",
   *    (gogoproto.nullable)   = false
   *  ];
   *  string srg = 7 [
   *    (gogoproto.moretags)   = "yaml:\"srg\"",
   *    (gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Int",
   *    (gogoproto.nullable)   = false
   *  ];
   */
  amount: string;
}

export interface MsgAgToAc {
  account: string;
  /**
   * string agAmount = 2 [
   *    (gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Int",
   *    (gogoproto.nullable)   = false
   *  ];
   */
  AgAmount: Coin | undefined;
}

export interface MsgAgToAcResponse {
  retcode: string;
}

export interface MsgCreateFixedDeposit {
  account: string;
  denom: string;
  amount: string;
  period: FixedDepositPeriod;
}

export interface MsgCreateFixedDepositResponse {
  id: number;
}

export interface MsgWithdrawFixedDeposit {
  account: string;
  id: number;
}

export interface MsgWithdrawFixedDepositResponse {
  retcode: string;
}

export interface MsgNewKyc {
  creator: string;
  account: string;
  regionId: string;
  role: KYC_ROLE;
}

export interface MsgNewKycResponse {
  retcode: string;
}

export interface MsgRemoveKyc {
  creator: string;
  account: string;
}

export interface MsgRemoveKycResponse {
  retcode: string;
}

export interface MsgSetFixedDepositInterestRate {
  admin: string;
  regionId: string;
  rate: string;
  depositPeiod: FixedDepositPeriod;
}

export interface MsgSetFixedDepositInterestRateResponse {
  retcode: string;
}

export interface MsgSetFixedDelegationInterestRate {
  admin: string;
  regionId: string;
  rate: string;
  depositPeiod: FixedDelegationTerm;
}

export interface MsgSetFixedDelegationInterestRateResponse {
  retcode: string;
}

export interface MsgTransferKYC {
  fromRegion: string;
  toRegion: string;
  address: string[];
  creator: string;
}

export interface MsgTransferKYCResponse {}

export interface MsgWithdrawUnmovableInterest {
  creator: string;
}

export interface MsgWithdrawUnmovableInterestResponse {
  receive_address: string;
  region_id: string;
  from_height: number;
  to_height: number;
  amount: string;
}

const baseMsgCreateRegion: object = {
  creator: "",
  regionName: "",
  regionId: "",
  regionTotalAS: "",
  delegatorsLimit: 0,
  regionFeeRate: "",
  userMinDelegateAC: "",
  userMaxDelegateAC: "",
  regionTotalStakeAllow: "",
  permanentRate: "",
};

export const MsgCreateRegion = {
  encode(message: MsgCreateRegion, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.regionName !== "") {
      writer.uint32(18).string(message.regionName);
    }
    if (message.regionId !== "") {
      writer.uint32(26).string(message.regionId);
    }
    if (message.regionTotalAS !== "") {
      writer.uint32(34).string(message.regionTotalAS);
    }
    if (message.delegatorsLimit !== 0) {
      writer.uint32(40).int64(message.delegatorsLimit);
    }
    if (message.regionFeeRate !== "") {
      writer.uint32(50).string(message.regionFeeRate);
    }
    if (message.userMinDelegateAC !== "") {
      writer.uint32(58).string(message.userMinDelegateAC);
    }
    if (message.userMaxDelegateAC !== "") {
      writer.uint32(66).string(message.userMaxDelegateAC);
    }
    if (message.regionTotalStakeAllow !== "") {
      writer.uint32(74).string(message.regionTotalStakeAllow);
    }
    if (message.permanentRate !== "") {
      writer.uint32(82).string(message.permanentRate);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateRegion {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateRegion } as MsgCreateRegion;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.regionName = reader.string();
          break;
        case 3:
          message.regionId = reader.string();
          break;
        case 4:
          message.regionTotalAS = reader.string();
          break;
        case 5:
          message.delegatorsLimit = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.regionFeeRate = reader.string();
          break;
        case 7:
          message.userMinDelegateAC = reader.string();
          break;
        case 8:
          message.userMaxDelegateAC = reader.string();
          break;
        case 9:
          message.regionTotalStakeAllow = reader.string();
          break;
        case 10:
          message.permanentRate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateRegion {
    const message = { ...baseMsgCreateRegion } as MsgCreateRegion;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.regionName !== undefined && object.regionName !== null) {
      message.regionName = String(object.regionName);
    } else {
      message.regionName = "";
    }
    if (object.regionId !== undefined && object.regionId !== null) {
      message.regionId = String(object.regionId);
    } else {
      message.regionId = "";
    }
    if (object.regionTotalAS !== undefined && object.regionTotalAS !== null) {
      message.regionTotalAS = String(object.regionTotalAS);
    } else {
      message.regionTotalAS = "";
    }
    if (
      object.delegatorsLimit !== undefined &&
      object.delegatorsLimit !== null
    ) {
      message.delegatorsLimit = Number(object.delegatorsLimit);
    } else {
      message.delegatorsLimit = 0;
    }
    if (object.regionFeeRate !== undefined && object.regionFeeRate !== null) {
      message.regionFeeRate = String(object.regionFeeRate);
    } else {
      message.regionFeeRate = "";
    }
    if (
      object.userMinDelegateAC !== undefined &&
      object.userMinDelegateAC !== null
    ) {
      message.userMinDelegateAC = String(object.userMinDelegateAC);
    } else {
      message.userMinDelegateAC = "";
    }
    if (
      object.userMaxDelegateAC !== undefined &&
      object.userMaxDelegateAC !== null
    ) {
      message.userMaxDelegateAC = String(object.userMaxDelegateAC);
    } else {
      message.userMaxDelegateAC = "";
    }
    if (
      object.regionTotalStakeAllow !== undefined &&
      object.regionTotalStakeAllow !== null
    ) {
      message.regionTotalStakeAllow = String(object.regionTotalStakeAllow);
    } else {
      message.regionTotalStakeAllow = "";
    }
    if (object.permanentRate !== undefined && object.permanentRate !== null) {
      message.permanentRate = String(object.permanentRate);
    } else {
      message.permanentRate = "";
    }
    return message;
  },

  toJSON(message: MsgCreateRegion): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.regionName !== undefined && (obj.regionName = message.regionName);
    message.regionId !== undefined && (obj.regionId = message.regionId);
    message.regionTotalAS !== undefined &&
      (obj.regionTotalAS = message.regionTotalAS);
    message.delegatorsLimit !== undefined &&
      (obj.delegatorsLimit = message.delegatorsLimit);
    message.regionFeeRate !== undefined &&
      (obj.regionFeeRate = message.regionFeeRate);
    message.userMinDelegateAC !== undefined &&
      (obj.userMinDelegateAC = message.userMinDelegateAC);
    message.userMaxDelegateAC !== undefined &&
      (obj.userMaxDelegateAC = message.userMaxDelegateAC);
    message.regionTotalStakeAllow !== undefined &&
      (obj.regionTotalStakeAllow = message.regionTotalStakeAllow);
    message.permanentRate !== undefined &&
      (obj.permanentRate = message.permanentRate);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateRegion>): MsgCreateRegion {
    const message = { ...baseMsgCreateRegion } as MsgCreateRegion;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.regionName !== undefined && object.regionName !== null) {
      message.regionName = object.regionName;
    } else {
      message.regionName = "";
    }
    if (object.regionId !== undefined && object.regionId !== null) {
      message.regionId = object.regionId;
    } else {
      message.regionId = "";
    }
    if (object.regionTotalAS !== undefined && object.regionTotalAS !== null) {
      message.regionTotalAS = object.regionTotalAS;
    } else {
      message.regionTotalAS = "";
    }
    if (
      object.delegatorsLimit !== undefined &&
      object.delegatorsLimit !== null
    ) {
      message.delegatorsLimit = object.delegatorsLimit;
    } else {
      message.delegatorsLimit = 0;
    }
    if (object.regionFeeRate !== undefined && object.regionFeeRate !== null) {
      message.regionFeeRate = object.regionFeeRate;
    } else {
      message.regionFeeRate = "";
    }
    if (
      object.userMinDelegateAC !== undefined &&
      object.userMinDelegateAC !== null
    ) {
      message.userMinDelegateAC = object.userMinDelegateAC;
    } else {
      message.userMinDelegateAC = "";
    }
    if (
      object.userMaxDelegateAC !== undefined &&
      object.userMaxDelegateAC !== null
    ) {
      message.userMaxDelegateAC = object.userMaxDelegateAC;
    } else {
      message.userMaxDelegateAC = "";
    }
    if (
      object.regionTotalStakeAllow !== undefined &&
      object.regionTotalStakeAllow !== null
    ) {
      message.regionTotalStakeAllow = object.regionTotalStakeAllow;
    } else {
      message.regionTotalStakeAllow = "";
    }
    if (object.permanentRate !== undefined && object.permanentRate !== null) {
      message.permanentRate = object.permanentRate;
    } else {
      message.permanentRate = "";
    }
    return message;
  },
};

const baseMsgCreateRegionResponse: object = {};

export const MsgCreateRegionResponse = {
  encode(_: MsgCreateRegionResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateRegionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateRegionResponse,
    } as MsgCreateRegionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateRegionResponse {
    const message = {
      ...baseMsgCreateRegionResponse,
    } as MsgCreateRegionResponse;
    return message;
  },

  toJSON(_: MsgCreateRegionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateRegionResponse>
  ): MsgCreateRegionResponse {
    const message = {
      ...baseMsgCreateRegionResponse,
    } as MsgCreateRegionResponse;
    return message;
  },
};

const baseMsgUpdateRegion: object = {
  creator: "",
  regionID: "",
  regionName: "",
  regionTotalAS: "",
  delegatorsLimit: 0,
  regionFeeRate: "",
  userMinDelegateAC: "",
  userMaxDelegateAC: "",
  regionTotalStakeAllow: "",
  permanentRate: "",
  isUndelegate: false,
};

export const MsgUpdateRegion = {
  encode(message: MsgUpdateRegion, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.regionID !== "") {
      writer.uint32(18).string(message.regionID);
    }
    if (message.regionName !== "") {
      writer.uint32(26).string(message.regionName);
    }
    if (message.regionTotalAS !== "") {
      writer.uint32(34).string(message.regionTotalAS);
    }
    if (message.delegatorsLimit !== 0) {
      writer.uint32(40).int64(message.delegatorsLimit);
    }
    if (message.regionFeeRate !== "") {
      writer.uint32(50).string(message.regionFeeRate);
    }
    if (message.userMinDelegateAC !== "") {
      writer.uint32(58).string(message.userMinDelegateAC);
    }
    if (message.userMaxDelegateAC !== "") {
      writer.uint32(66).string(message.userMaxDelegateAC);
    }
    if (message.regionTotalStakeAllow !== "") {
      writer.uint32(74).string(message.regionTotalStakeAllow);
    }
    if (message.permanentRate !== "") {
      writer.uint32(82).string(message.permanentRate);
    }
    if (message.isUndelegate === true) {
      writer.uint32(88).bool(message.isUndelegate);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateRegion {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateRegion } as MsgUpdateRegion;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.regionID = reader.string();
          break;
        case 3:
          message.regionName = reader.string();
          break;
        case 4:
          message.regionTotalAS = reader.string();
          break;
        case 5:
          message.delegatorsLimit = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.regionFeeRate = reader.string();
          break;
        case 7:
          message.userMinDelegateAC = reader.string();
          break;
        case 8:
          message.userMaxDelegateAC = reader.string();
          break;
        case 9:
          message.regionTotalStakeAllow = reader.string();
          break;
        case 10:
          message.permanentRate = reader.string();
          break;
        case 11:
          message.isUndelegate = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateRegion {
    const message = { ...baseMsgUpdateRegion } as MsgUpdateRegion;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.regionID !== undefined && object.regionID !== null) {
      message.regionID = String(object.regionID);
    } else {
      message.regionID = "";
    }
    if (object.regionName !== undefined && object.regionName !== null) {
      message.regionName = String(object.regionName);
    } else {
      message.regionName = "";
    }
    if (object.regionTotalAS !== undefined && object.regionTotalAS !== null) {
      message.regionTotalAS = String(object.regionTotalAS);
    } else {
      message.regionTotalAS = "";
    }
    if (
      object.delegatorsLimit !== undefined &&
      object.delegatorsLimit !== null
    ) {
      message.delegatorsLimit = Number(object.delegatorsLimit);
    } else {
      message.delegatorsLimit = 0;
    }
    if (object.regionFeeRate !== undefined && object.regionFeeRate !== null) {
      message.regionFeeRate = String(object.regionFeeRate);
    } else {
      message.regionFeeRate = "";
    }
    if (
      object.userMinDelegateAC !== undefined &&
      object.userMinDelegateAC !== null
    ) {
      message.userMinDelegateAC = String(object.userMinDelegateAC);
    } else {
      message.userMinDelegateAC = "";
    }
    if (
      object.userMaxDelegateAC !== undefined &&
      object.userMaxDelegateAC !== null
    ) {
      message.userMaxDelegateAC = String(object.userMaxDelegateAC);
    } else {
      message.userMaxDelegateAC = "";
    }
    if (
      object.regionTotalStakeAllow !== undefined &&
      object.regionTotalStakeAllow !== null
    ) {
      message.regionTotalStakeAllow = String(object.regionTotalStakeAllow);
    } else {
      message.regionTotalStakeAllow = "";
    }
    if (object.permanentRate !== undefined && object.permanentRate !== null) {
      message.permanentRate = String(object.permanentRate);
    } else {
      message.permanentRate = "";
    }
    if (object.isUndelegate !== undefined && object.isUndelegate !== null) {
      message.isUndelegate = Boolean(object.isUndelegate);
    } else {
      message.isUndelegate = false;
    }
    return message;
  },

  toJSON(message: MsgUpdateRegion): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.regionID !== undefined && (obj.regionID = message.regionID);
    message.regionName !== undefined && (obj.regionName = message.regionName);
    message.regionTotalAS !== undefined &&
      (obj.regionTotalAS = message.regionTotalAS);
    message.delegatorsLimit !== undefined &&
      (obj.delegatorsLimit = message.delegatorsLimit);
    message.regionFeeRate !== undefined &&
      (obj.regionFeeRate = message.regionFeeRate);
    message.userMinDelegateAC !== undefined &&
      (obj.userMinDelegateAC = message.userMinDelegateAC);
    message.userMaxDelegateAC !== undefined &&
      (obj.userMaxDelegateAC = message.userMaxDelegateAC);
    message.regionTotalStakeAllow !== undefined &&
      (obj.regionTotalStakeAllow = message.regionTotalStakeAllow);
    message.permanentRate !== undefined &&
      (obj.permanentRate = message.permanentRate);
    message.isUndelegate !== undefined &&
      (obj.isUndelegate = message.isUndelegate);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateRegion>): MsgUpdateRegion {
    const message = { ...baseMsgUpdateRegion } as MsgUpdateRegion;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.regionID !== undefined && object.regionID !== null) {
      message.regionID = object.regionID;
    } else {
      message.regionID = "";
    }
    if (object.regionName !== undefined && object.regionName !== null) {
      message.regionName = object.regionName;
    } else {
      message.regionName = "";
    }
    if (object.regionTotalAS !== undefined && object.regionTotalAS !== null) {
      message.regionTotalAS = object.regionTotalAS;
    } else {
      message.regionTotalAS = "";
    }
    if (
      object.delegatorsLimit !== undefined &&
      object.delegatorsLimit !== null
    ) {
      message.delegatorsLimit = object.delegatorsLimit;
    } else {
      message.delegatorsLimit = 0;
    }
    if (object.regionFeeRate !== undefined && object.regionFeeRate !== null) {
      message.regionFeeRate = object.regionFeeRate;
    } else {
      message.regionFeeRate = "";
    }
    if (
      object.userMinDelegateAC !== undefined &&
      object.userMinDelegateAC !== null
    ) {
      message.userMinDelegateAC = object.userMinDelegateAC;
    } else {
      message.userMinDelegateAC = "";
    }
    if (
      object.userMaxDelegateAC !== undefined &&
      object.userMaxDelegateAC !== null
    ) {
      message.userMaxDelegateAC = object.userMaxDelegateAC;
    } else {
      message.userMaxDelegateAC = "";
    }
    if (
      object.regionTotalStakeAllow !== undefined &&
      object.regionTotalStakeAllow !== null
    ) {
      message.regionTotalStakeAllow = object.regionTotalStakeAllow;
    } else {
      message.regionTotalStakeAllow = "";
    }
    if (object.permanentRate !== undefined && object.permanentRate !== null) {
      message.permanentRate = object.permanentRate;
    } else {
      message.permanentRate = "";
    }
    if (object.isUndelegate !== undefined && object.isUndelegate !== null) {
      message.isUndelegate = object.isUndelegate;
    } else {
      message.isUndelegate = false;
    }
    return message;
  },
};

const baseMsgUpdateRegionResponse: object = {};

export const MsgUpdateRegionResponse = {
  encode(_: MsgUpdateRegionResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateRegionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateRegionResponse,
    } as MsgUpdateRegionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateRegionResponse {
    const message = {
      ...baseMsgUpdateRegionResponse,
    } as MsgUpdateRegionResponse;
    return message;
  },

  toJSON(_: MsgUpdateRegionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateRegionResponse>
  ): MsgUpdateRegionResponse {
    const message = {
      ...baseMsgUpdateRegionResponse,
    } as MsgUpdateRegionResponse;
    return message;
  },
};

const baseMsgDeleteRegion: object = { creator: "", regionKey: "" };

export const MsgDeleteRegion = {
  encode(message: MsgDeleteRegion, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.regionKey !== "") {
      writer.uint32(18).string(message.regionKey);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteRegion {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteRegion } as MsgDeleteRegion;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.regionKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteRegion {
    const message = { ...baseMsgDeleteRegion } as MsgDeleteRegion;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.regionKey !== undefined && object.regionKey !== null) {
      message.regionKey = String(object.regionKey);
    } else {
      message.regionKey = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteRegion): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.regionKey !== undefined && (obj.regionKey = message.regionKey);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteRegion>): MsgDeleteRegion {
    const message = { ...baseMsgDeleteRegion } as MsgDeleteRegion;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.regionKey !== undefined && object.regionKey !== null) {
      message.regionKey = object.regionKey;
    } else {
      message.regionKey = "";
    }
    return message;
  },
};

const baseMsgDeleteRegionResponse: object = {};

export const MsgDeleteRegionResponse = {
  encode(_: MsgDeleteRegionResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteRegionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteRegionResponse,
    } as MsgDeleteRegionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteRegionResponse {
    const message = {
      ...baseMsgDeleteRegionResponse,
    } as MsgDeleteRegionResponse;
    return message;
  },

  toJSON(_: MsgDeleteRegionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteRegionResponse>
  ): MsgDeleteRegionResponse {
    const message = {
      ...baseMsgDeleteRegionResponse,
    } as MsgDeleteRegionResponse;
    return message;
  },
};

const baseMsgCreateValidator: object = {
  creator: "",
  valAddress: "",
  valPubkey: "",
  RegionName: "",
};

export const MsgCreateValidator = {
  encode(
    message: MsgCreateValidator,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.valAddress !== "") {
      writer.uint32(18).string(message.valAddress);
    }
    if (message.valPubkey !== "") {
      writer.uint32(26).string(message.valPubkey);
    }
    if (message.description !== undefined) {
      Description.encode(
        message.description,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.RegionName !== "") {
      writer.uint32(42).string(message.RegionName);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateValidator {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateValidator } as MsgCreateValidator;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.valAddress = reader.string();
          break;
        case 3:
          message.valPubkey = reader.string();
          break;
        case 4:
          message.description = Description.decode(reader, reader.uint32());
          break;
        case 5:
          message.RegionName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateValidator {
    const message = { ...baseMsgCreateValidator } as MsgCreateValidator;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.valAddress !== undefined && object.valAddress !== null) {
      message.valAddress = String(object.valAddress);
    } else {
      message.valAddress = "";
    }
    if (object.valPubkey !== undefined && object.valPubkey !== null) {
      message.valPubkey = String(object.valPubkey);
    } else {
      message.valPubkey = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = Description.fromJSON(object.description);
    } else {
      message.description = undefined;
    }
    if (object.RegionName !== undefined && object.RegionName !== null) {
      message.RegionName = String(object.RegionName);
    } else {
      message.RegionName = "";
    }
    return message;
  },

  toJSON(message: MsgCreateValidator): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.valAddress !== undefined && (obj.valAddress = message.valAddress);
    message.valPubkey !== undefined && (obj.valPubkey = message.valPubkey);
    message.description !== undefined &&
      (obj.description = message.description
        ? Description.toJSON(message.description)
        : undefined);
    message.RegionName !== undefined && (obj.RegionName = message.RegionName);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateValidator>): MsgCreateValidator {
    const message = { ...baseMsgCreateValidator } as MsgCreateValidator;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.valAddress !== undefined && object.valAddress !== null) {
      message.valAddress = object.valAddress;
    } else {
      message.valAddress = "";
    }
    if (object.valPubkey !== undefined && object.valPubkey !== null) {
      message.valPubkey = object.valPubkey;
    } else {
      message.valPubkey = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = Description.fromPartial(object.description);
    } else {
      message.description = undefined;
    }
    if (object.RegionName !== undefined && object.RegionName !== null) {
      message.RegionName = object.RegionName;
    } else {
      message.RegionName = "";
    }
    return message;
  },
};

const baseMsgCreateValidatorResponse: object = {};

export const MsgCreateValidatorResponse = {
  encode(
    _: MsgCreateValidatorResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateValidatorResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateValidatorResponse,
    } as MsgCreateValidatorResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateValidatorResponse {
    const message = {
      ...baseMsgCreateValidatorResponse,
    } as MsgCreateValidatorResponse;
    return message;
  },

  toJSON(_: MsgCreateValidatorResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateValidatorResponse>
  ): MsgCreateValidatorResponse {
    const message = {
      ...baseMsgCreateValidatorResponse,
    } as MsgCreateValidatorResponse;
    return message;
  },
};

const baseMsgUpdateValidator: object = {
  creator: "",
  valAddress: "",
  RegionName: "",
};

export const MsgUpdateValidator = {
  encode(
    message: MsgUpdateValidator,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.valAddress !== "") {
      writer.uint32(18).string(message.valAddress);
    }
    if (message.RegionName !== "") {
      writer.uint32(26).string(message.RegionName);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateValidator {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateValidator } as MsgUpdateValidator;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.valAddress = reader.string();
          break;
        case 3:
          message.RegionName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateValidator {
    const message = { ...baseMsgUpdateValidator } as MsgUpdateValidator;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.valAddress !== undefined && object.valAddress !== null) {
      message.valAddress = String(object.valAddress);
    } else {
      message.valAddress = "";
    }
    if (object.RegionName !== undefined && object.RegionName !== null) {
      message.RegionName = String(object.RegionName);
    } else {
      message.RegionName = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateValidator): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.valAddress !== undefined && (obj.valAddress = message.valAddress);
    message.RegionName !== undefined && (obj.RegionName = message.RegionName);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateValidator>): MsgUpdateValidator {
    const message = { ...baseMsgUpdateValidator } as MsgUpdateValidator;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.valAddress !== undefined && object.valAddress !== null) {
      message.valAddress = object.valAddress;
    } else {
      message.valAddress = "";
    }
    if (object.RegionName !== undefined && object.RegionName !== null) {
      message.RegionName = object.RegionName;
    } else {
      message.RegionName = "";
    }
    return message;
  },
};

const baseMsgUpdateValidatorResponse: object = {};

export const MsgUpdateValidatorResponse = {
  encode(
    _: MsgUpdateValidatorResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateValidatorResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateValidatorResponse,
    } as MsgUpdateValidatorResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateValidatorResponse {
    const message = {
      ...baseMsgUpdateValidatorResponse,
    } as MsgUpdateValidatorResponse;
    return message;
  },

  toJSON(_: MsgUpdateValidatorResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateValidatorResponse>
  ): MsgUpdateValidatorResponse {
    const message = {
      ...baseMsgUpdateValidatorResponse,
    } as MsgUpdateValidatorResponse;
    return message;
  },
};

const baseMsgKickValidatorByAddress: object = {
  creator: "",
  validatorAddress: "",
};

export const MsgKickValidatorByAddress = {
  encode(
    message: MsgKickValidatorByAddress,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgKickValidatorByAddress {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgKickValidatorByAddress,
    } as MsgKickValidatorByAddress;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgKickValidatorByAddress {
    const message = {
      ...baseMsgKickValidatorByAddress,
    } as MsgKickValidatorByAddress;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (
      object.validatorAddress !== undefined &&
      object.validatorAddress !== null
    ) {
      message.validatorAddress = String(object.validatorAddress);
    } else {
      message.validatorAddress = "";
    }
    return message;
  },

  toJSON(message: MsgKickValidatorByAddress): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.validatorAddress !== undefined &&
      (obj.validatorAddress = message.validatorAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgKickValidatorByAddress>
  ): MsgKickValidatorByAddress {
    const message = {
      ...baseMsgKickValidatorByAddress,
    } as MsgKickValidatorByAddress;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (
      object.validatorAddress !== undefined &&
      object.validatorAddress !== null
    ) {
      message.validatorAddress = object.validatorAddress;
    } else {
      message.validatorAddress = "";
    }
    return message;
  },
};

const baseMsgKickValidatorByAddressResponse: object = {};

export const MsgKickValidatorByAddressResponse = {
  encode(
    _: MsgKickValidatorByAddressResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgKickValidatorByAddressResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgKickValidatorByAddressResponse,
    } as MsgKickValidatorByAddressResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgKickValidatorByAddressResponse {
    const message = {
      ...baseMsgKickValidatorByAddressResponse,
    } as MsgKickValidatorByAddressResponse;
    return message;
  },

  toJSON(_: MsgKickValidatorByAddressResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgKickValidatorByAddressResponse>
  ): MsgKickValidatorByAddressResponse {
    const message = {
      ...baseMsgKickValidatorByAddressResponse,
    } as MsgKickValidatorByAddressResponse;
    return message;
  },
};

const baseMsgKickValidatorByPubkey: object = { creator: "", pubkey: "" };

export const MsgKickValidatorByPubkey = {
  encode(
    message: MsgKickValidatorByPubkey,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.pubkey !== "") {
      writer.uint32(18).string(message.pubkey);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgKickValidatorByPubkey {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgKickValidatorByPubkey,
    } as MsgKickValidatorByPubkey;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.pubkey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgKickValidatorByPubkey {
    const message = {
      ...baseMsgKickValidatorByPubkey,
    } as MsgKickValidatorByPubkey;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.pubkey !== undefined && object.pubkey !== null) {
      message.pubkey = String(object.pubkey);
    } else {
      message.pubkey = "";
    }
    return message;
  },

  toJSON(message: MsgKickValidatorByPubkey): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.pubkey !== undefined && (obj.pubkey = message.pubkey);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgKickValidatorByPubkey>
  ): MsgKickValidatorByPubkey {
    const message = {
      ...baseMsgKickValidatorByPubkey,
    } as MsgKickValidatorByPubkey;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.pubkey !== undefined && object.pubkey !== null) {
      message.pubkey = object.pubkey;
    } else {
      message.pubkey = "";
    }
    return message;
  },
};

const baseMsgKickValidatorByPubkeyResponse: object = {};

export const MsgKickValidatorByPubkeyResponse = {
  encode(
    _: MsgKickValidatorByPubkeyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgKickValidatorByPubkeyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgKickValidatorByPubkeyResponse,
    } as MsgKickValidatorByPubkeyResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgKickValidatorByPubkeyResponse {
    const message = {
      ...baseMsgKickValidatorByPubkeyResponse,
    } as MsgKickValidatorByPubkeyResponse;
    return message;
  },

  toJSON(_: MsgKickValidatorByPubkeyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgKickValidatorByPubkeyResponse>
  ): MsgKickValidatorByPubkeyResponse {
    const message = {
      ...baseMsgKickValidatorByPubkeyResponse,
    } as MsgKickValidatorByPubkeyResponse;
    return message;
  },
};

const baseMsgDelegate: object = { creator: "" };

export const MsgDelegate = {
  encode(message: MsgDelegate, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDelegate {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDelegate } as MsgDelegate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDelegate {
    const message = { ...baseMsgDelegate } as MsgDelegate;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromJSON(object.amount);
    } else {
      message.amount = undefined;
    }
    return message;
  },

  toJSON(message: MsgDelegate): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDelegate>): MsgDelegate {
    const message = { ...baseMsgDelegate } as MsgDelegate;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    } else {
      message.amount = undefined;
    }
    return message;
  },
};

const baseMsgDelegateResponse: object = {};

export const MsgDelegateResponse = {
  encode(_: MsgDelegateResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDelegateResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDelegateResponse } as MsgDelegateResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDelegateResponse {
    const message = { ...baseMsgDelegateResponse } as MsgDelegateResponse;
    return message;
  },

  toJSON(_: MsgDelegateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDelegateResponse>): MsgDelegateResponse {
    const message = { ...baseMsgDelegateResponse } as MsgDelegateResponse;
    return message;
  },
};

const baseMsgUnDelegate: object = { creator: "", isUnmovable: false };

export const MsgUnDelegate = {
  encode(message: MsgUnDelegate, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    if (message.isUnmovable === true) {
      writer.uint32(32).bool(message.isUnmovable);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUnDelegate {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUnDelegate } as MsgUnDelegate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.isUnmovable = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUnDelegate {
    const message = { ...baseMsgUnDelegate } as MsgUnDelegate;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromJSON(object.amount);
    } else {
      message.amount = undefined;
    }
    if (object.isUnmovable !== undefined && object.isUnmovable !== null) {
      message.isUnmovable = Boolean(object.isUnmovable);
    } else {
      message.isUnmovable = false;
    }
    return message;
  },

  toJSON(message: MsgUnDelegate): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.isUnmovable !== undefined &&
      (obj.isUnmovable = message.isUnmovable);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUnDelegate>): MsgUnDelegate {
    const message = { ...baseMsgUnDelegate } as MsgUnDelegate;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    } else {
      message.amount = undefined;
    }
    if (object.isUnmovable !== undefined && object.isUnmovable !== null) {
      message.isUnmovable = object.isUnmovable;
    } else {
      message.isUnmovable = false;
    }
    return message;
  },
};

const baseMsgUnDelegateResponse: object = {};

export const MsgUnDelegateResponse = {
  encode(_: MsgUnDelegateResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUnDelegateResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUnDelegateResponse } as MsgUnDelegateResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUnDelegateResponse {
    const message = { ...baseMsgUnDelegateResponse } as MsgUnDelegateResponse;
    return message;
  },

  toJSON(_: MsgUnDelegateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUnDelegateResponse>): MsgUnDelegateResponse {
    const message = { ...baseMsgUnDelegateResponse } as MsgUnDelegateResponse;
    return message;
  },
};

const baseMsgExitDelegate: object = { creator: "", delegatorAddress: "" };

export const MsgExitDelegate = {
  encode(message: MsgExitDelegate, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.delegatorAddress !== "") {
      writer.uint32(18).string(message.delegatorAddress);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgExitDelegate {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgExitDelegate } as MsgExitDelegate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.delegatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgExitDelegate {
    const message = { ...baseMsgExitDelegate } as MsgExitDelegate;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (
      object.delegatorAddress !== undefined &&
      object.delegatorAddress !== null
    ) {
      message.delegatorAddress = String(object.delegatorAddress);
    } else {
      message.delegatorAddress = "";
    }
    return message;
  },

  toJSON(message: MsgExitDelegate): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.delegatorAddress !== undefined &&
      (obj.delegatorAddress = message.delegatorAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgExitDelegate>): MsgExitDelegate {
    const message = { ...baseMsgExitDelegate } as MsgExitDelegate;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (
      object.delegatorAddress !== undefined &&
      object.delegatorAddress !== null
    ) {
      message.delegatorAddress = object.delegatorAddress;
    } else {
      message.delegatorAddress = "";
    }
    return message;
  },
};

const baseMsgExitDelegateResponse: object = {};

export const MsgExitDelegateResponse = {
  encode(_: MsgExitDelegateResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgExitDelegateResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgExitDelegateResponse,
    } as MsgExitDelegateResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgExitDelegateResponse {
    const message = {
      ...baseMsgExitDelegateResponse,
    } as MsgExitDelegateResponse;
    return message;
  },

  toJSON(_: MsgExitDelegateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgExitDelegateResponse>
  ): MsgExitDelegateResponse {
    const message = {
      ...baseMsgExitDelegateResponse,
    } as MsgExitDelegateResponse;
    return message;
  },
};

const baseMsgCreateDelegate: object = { creator: "", isUnmovable: false };

export const MsgCreateDelegate = {
  encode(message: MsgCreateDelegate, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    if (message.isUnmovable === true) {
      writer.uint32(24).bool(message.isUnmovable);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateDelegate {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateDelegate } as MsgCreateDelegate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.isUnmovable = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateDelegate {
    const message = { ...baseMsgCreateDelegate } as MsgCreateDelegate;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromJSON(object.amount);
    } else {
      message.amount = undefined;
    }
    if (object.isUnmovable !== undefined && object.isUnmovable !== null) {
      message.isUnmovable = Boolean(object.isUnmovable);
    } else {
      message.isUnmovable = false;
    }
    return message;
  },

  toJSON(message: MsgCreateDelegate): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.isUnmovable !== undefined &&
      (obj.isUnmovable = message.isUnmovable);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateDelegate>): MsgCreateDelegate {
    const message = { ...baseMsgCreateDelegate } as MsgCreateDelegate;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    } else {
      message.amount = undefined;
    }
    if (object.isUnmovable !== undefined && object.isUnmovable !== null) {
      message.isUnmovable = object.isUnmovable;
    } else {
      message.isUnmovable = false;
    }
    return message;
  },
};

const baseMsgCreateDelegateResponse: object = {};

export const MsgCreateDelegateResponse = {
  encode(
    _: MsgCreateDelegateResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateDelegateResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateDelegateResponse,
    } as MsgCreateDelegateResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateDelegateResponse {
    const message = {
      ...baseMsgCreateDelegateResponse,
    } as MsgCreateDelegateResponse;
    return message;
  },

  toJSON(_: MsgCreateDelegateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateDelegateResponse>
  ): MsgCreateDelegateResponse {
    const message = {
      ...baseMsgCreateDelegateResponse,
    } as MsgCreateDelegateResponse;
    return message;
  },
};

const baseMsgWithdraw: object = { creator: "" };

export const MsgWithdraw = {
  encode(message: MsgWithdraw, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgWithdraw {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgWithdraw } as MsgWithdraw;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgWithdraw {
    const message = { ...baseMsgWithdraw } as MsgWithdraw;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: MsgWithdraw): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgWithdraw>): MsgWithdraw {
    const message = { ...baseMsgWithdraw } as MsgWithdraw;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

const baseMsgWithdrawResponse: object = {
  receive_address: "",
  region_id: "",
  from_height: 0,
  to_height: 0,
  amount: "",
};

export const MsgWithdrawResponse = {
  encode(
    message: MsgWithdrawResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.receive_address !== "") {
      writer.uint32(10).string(message.receive_address);
    }
    if (message.region_id !== "") {
      writer.uint32(18).string(message.region_id);
    }
    if (message.from_height !== 0) {
      writer.uint32(24).int64(message.from_height);
    }
    if (message.to_height !== 0) {
      writer.uint32(32).int64(message.to_height);
    }
    if (message.amount !== "") {
      writer.uint32(42).string(message.amount);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgWithdrawResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgWithdrawResponse } as MsgWithdrawResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.receive_address = reader.string();
          break;
        case 2:
          message.region_id = reader.string();
          break;
        case 3:
          message.from_height = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.to_height = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgWithdrawResponse {
    const message = { ...baseMsgWithdrawResponse } as MsgWithdrawResponse;
    if (
      object.receive_address !== undefined &&
      object.receive_address !== null
    ) {
      message.receive_address = String(object.receive_address);
    } else {
      message.receive_address = "";
    }
    if (object.region_id !== undefined && object.region_id !== null) {
      message.region_id = String(object.region_id);
    } else {
      message.region_id = "";
    }
    if (object.from_height !== undefined && object.from_height !== null) {
      message.from_height = Number(object.from_height);
    } else {
      message.from_height = 0;
    }
    if (object.to_height !== undefined && object.to_height !== null) {
      message.to_height = Number(object.to_height);
    } else {
      message.to_height = 0;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    return message;
  },

  toJSON(message: MsgWithdrawResponse): unknown {
    const obj: any = {};
    message.receive_address !== undefined &&
      (obj.receive_address = message.receive_address);
    message.region_id !== undefined && (obj.region_id = message.region_id);
    message.from_height !== undefined &&
      (obj.from_height = message.from_height);
    message.to_height !== undefined && (obj.to_height = message.to_height);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgWithdrawResponse>): MsgWithdrawResponse {
    const message = { ...baseMsgWithdrawResponse } as MsgWithdrawResponse;
    if (
      object.receive_address !== undefined &&
      object.receive_address !== null
    ) {
      message.receive_address = object.receive_address;
    } else {
      message.receive_address = "";
    }
    if (object.region_id !== undefined && object.region_id !== null) {
      message.region_id = object.region_id;
    } else {
      message.region_id = "";
    }
    if (object.from_height !== undefined && object.from_height !== null) {
      message.from_height = object.from_height;
    } else {
      message.from_height = 0;
    }
    if (object.to_height !== undefined && object.to_height !== null) {
      message.to_height = object.to_height;
    } else {
      message.to_height = 0;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = "";
    }
    return message;
  },
};

const baseMsgCreateFixedDelegation: object = { creator: "", term: 0 };

export const MsgCreateFixedDelegation = {
  encode(
    message: MsgCreateFixedDelegation,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    if (message.term !== 0) {
      writer.uint32(24).int32(message.term);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateFixedDelegation {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateFixedDelegation,
    } as MsgCreateFixedDelegation;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.term = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateFixedDelegation {
    const message = {
      ...baseMsgCreateFixedDelegation,
    } as MsgCreateFixedDelegation;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromJSON(object.amount);
    } else {
      message.amount = undefined;
    }
    if (object.term !== undefined && object.term !== null) {
      message.term = fixedDelegationTermFromJSON(object.term);
    } else {
      message.term = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateFixedDelegation): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.term !== undefined &&
      (obj.term = fixedDelegationTermToJSON(message.term));
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateFixedDelegation>
  ): MsgCreateFixedDelegation {
    const message = {
      ...baseMsgCreateFixedDelegation,
    } as MsgCreateFixedDelegation;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    } else {
      message.amount = undefined;
    }
    if (object.term !== undefined && object.term !== null) {
      message.term = object.term;
    } else {
      message.term = 0;
    }
    return message;
  },
};

const baseMsgCreateFixedDelegationResponse: object = { id: 0 };

export const MsgCreateFixedDelegationResponse = {
  encode(
    message: MsgCreateFixedDelegationResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateFixedDelegationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateFixedDelegationResponse,
    } as MsgCreateFixedDelegationResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateFixedDelegationResponse {
    const message = {
      ...baseMsgCreateFixedDelegationResponse,
    } as MsgCreateFixedDelegationResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateFixedDelegationResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateFixedDelegationResponse>
  ): MsgCreateFixedDelegationResponse {
    const message = {
      ...baseMsgCreateFixedDelegationResponse,
    } as MsgCreateFixedDelegationResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgWithdrawFixedDelegation: object = { creator: "", delegationId: 0 };

export const MsgWithdrawFixedDelegation = {
  encode(
    message: MsgWithdrawFixedDelegation,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.delegationId !== 0) {
      writer.uint32(16).uint64(message.delegationId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgWithdrawFixedDelegation {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgWithdrawFixedDelegation,
    } as MsgWithdrawFixedDelegation;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.delegationId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgWithdrawFixedDelegation {
    const message = {
      ...baseMsgWithdrawFixedDelegation,
    } as MsgWithdrawFixedDelegation;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.delegationId !== undefined && object.delegationId !== null) {
      message.delegationId = Number(object.delegationId);
    } else {
      message.delegationId = 0;
    }
    return message;
  },

  toJSON(message: MsgWithdrawFixedDelegation): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.delegationId !== undefined &&
      (obj.delegationId = message.delegationId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgWithdrawFixedDelegation>
  ): MsgWithdrawFixedDelegation {
    const message = {
      ...baseMsgWithdrawFixedDelegation,
    } as MsgWithdrawFixedDelegation;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.delegationId !== undefined && object.delegationId !== null) {
      message.delegationId = object.delegationId;
    } else {
      message.delegationId = 0;
    }
    return message;
  },
};

const baseMsgWithdrawFixedDelegationResponse: object = {
  receive_address: "",
  region_id: "",
  from_height: 0,
  to_height: 0,
  amount: "",
};

export const MsgWithdrawFixedDelegationResponse = {
  encode(
    message: MsgWithdrawFixedDelegationResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.receive_address !== "") {
      writer.uint32(10).string(message.receive_address);
    }
    if (message.region_id !== "") {
      writer.uint32(18).string(message.region_id);
    }
    if (message.from_height !== 0) {
      writer.uint32(24).int64(message.from_height);
    }
    if (message.to_height !== 0) {
      writer.uint32(32).int64(message.to_height);
    }
    if (message.amount !== "") {
      writer.uint32(42).string(message.amount);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgWithdrawFixedDelegationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgWithdrawFixedDelegationResponse,
    } as MsgWithdrawFixedDelegationResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.receive_address = reader.string();
          break;
        case 2:
          message.region_id = reader.string();
          break;
        case 3:
          message.from_height = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.to_height = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgWithdrawFixedDelegationResponse {
    const message = {
      ...baseMsgWithdrawFixedDelegationResponse,
    } as MsgWithdrawFixedDelegationResponse;
    if (
      object.receive_address !== undefined &&
      object.receive_address !== null
    ) {
      message.receive_address = String(object.receive_address);
    } else {
      message.receive_address = "";
    }
    if (object.region_id !== undefined && object.region_id !== null) {
      message.region_id = String(object.region_id);
    } else {
      message.region_id = "";
    }
    if (object.from_height !== undefined && object.from_height !== null) {
      message.from_height = Number(object.from_height);
    } else {
      message.from_height = 0;
    }
    if (object.to_height !== undefined && object.to_height !== null) {
      message.to_height = Number(object.to_height);
    } else {
      message.to_height = 0;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    return message;
  },

  toJSON(message: MsgWithdrawFixedDelegationResponse): unknown {
    const obj: any = {};
    message.receive_address !== undefined &&
      (obj.receive_address = message.receive_address);
    message.region_id !== undefined && (obj.region_id = message.region_id);
    message.from_height !== undefined &&
      (obj.from_height = message.from_height);
    message.to_height !== undefined && (obj.to_height = message.to_height);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgWithdrawFixedDelegationResponse>
  ): MsgWithdrawFixedDelegationResponse {
    const message = {
      ...baseMsgWithdrawFixedDelegationResponse,
    } as MsgWithdrawFixedDelegationResponse;
    if (
      object.receive_address !== undefined &&
      object.receive_address !== null
    ) {
      message.receive_address = object.receive_address;
    } else {
      message.receive_address = "";
    }
    if (object.region_id !== undefined && object.region_id !== null) {
      message.region_id = object.region_id;
    } else {
      message.region_id = "";
    }
    if (object.from_height !== undefined && object.from_height !== null) {
      message.from_height = object.from_height;
    } else {
      message.from_height = 0;
    }
    if (object.to_height !== undefined && object.to_height !== null) {
      message.to_height = object.to_height;
    } else {
      message.to_height = 0;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = "";
    }
    return message;
  },
};

const baseMsgAgToAc: object = { account: "" };

export const MsgAgToAc = {
  encode(message: MsgAgToAc, writer: Writer = Writer.create()): Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.AgAmount !== undefined) {
      Coin.encode(message.AgAmount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAgToAc {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAgToAc } as MsgAgToAc;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.AgAmount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAgToAc {
    const message = { ...baseMsgAgToAc } as MsgAgToAc;
    if (object.account !== undefined && object.account !== null) {
      message.account = String(object.account);
    } else {
      message.account = "";
    }
    if (object.AgAmount !== undefined && object.AgAmount !== null) {
      message.AgAmount = Coin.fromJSON(object.AgAmount);
    } else {
      message.AgAmount = undefined;
    }
    return message;
  },

  toJSON(message: MsgAgToAc): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.AgAmount !== undefined &&
      (obj.AgAmount = message.AgAmount
        ? Coin.toJSON(message.AgAmount)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAgToAc>): MsgAgToAc {
    const message = { ...baseMsgAgToAc } as MsgAgToAc;
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    } else {
      message.account = "";
    }
    if (object.AgAmount !== undefined && object.AgAmount !== null) {
      message.AgAmount = Coin.fromPartial(object.AgAmount);
    } else {
      message.AgAmount = undefined;
    }
    return message;
  },
};

const baseMsgAgToAcResponse: object = { retcode: "" };

export const MsgAgToAcResponse = {
  encode(message: MsgAgToAcResponse, writer: Writer = Writer.create()): Writer {
    if (message.retcode !== "") {
      writer.uint32(10).string(message.retcode);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAgToAcResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAgToAcResponse } as MsgAgToAcResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.retcode = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAgToAcResponse {
    const message = { ...baseMsgAgToAcResponse } as MsgAgToAcResponse;
    if (object.retcode !== undefined && object.retcode !== null) {
      message.retcode = String(object.retcode);
    } else {
      message.retcode = "";
    }
    return message;
  },

  toJSON(message: MsgAgToAcResponse): unknown {
    const obj: any = {};
    message.retcode !== undefined && (obj.retcode = message.retcode);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAgToAcResponse>): MsgAgToAcResponse {
    const message = { ...baseMsgAgToAcResponse } as MsgAgToAcResponse;
    if (object.retcode !== undefined && object.retcode !== null) {
      message.retcode = object.retcode;
    } else {
      message.retcode = "";
    }
    return message;
  },
};

const baseMsgCreateFixedDeposit: object = {
  account: "",
  denom: "",
  amount: "",
  period: 0,
};

export const MsgCreateFixedDeposit = {
  encode(
    message: MsgCreateFixedDeposit,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.period !== 0) {
      writer.uint32(32).int32(message.period);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateFixedDeposit {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateFixedDeposit } as MsgCreateFixedDeposit;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        case 4:
          message.period = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateFixedDeposit {
    const message = { ...baseMsgCreateFixedDeposit } as MsgCreateFixedDeposit;
    if (object.account !== undefined && object.account !== null) {
      message.account = String(object.account);
    } else {
      message.account = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    if (object.period !== undefined && object.period !== null) {
      message.period = fixedDepositPeriodFromJSON(object.period);
    } else {
      message.period = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateFixedDeposit): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    message.period !== undefined &&
      (obj.period = fixedDepositPeriodToJSON(message.period));
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateFixedDeposit>
  ): MsgCreateFixedDeposit {
    const message = { ...baseMsgCreateFixedDeposit } as MsgCreateFixedDeposit;
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    } else {
      message.account = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = "";
    }
    if (object.period !== undefined && object.period !== null) {
      message.period = object.period;
    } else {
      message.period = 0;
    }
    return message;
  },
};

const baseMsgCreateFixedDepositResponse: object = { id: 0 };

export const MsgCreateFixedDepositResponse = {
  encode(
    message: MsgCreateFixedDepositResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateFixedDepositResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateFixedDepositResponse,
    } as MsgCreateFixedDepositResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateFixedDepositResponse {
    const message = {
      ...baseMsgCreateFixedDepositResponse,
    } as MsgCreateFixedDepositResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateFixedDepositResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateFixedDepositResponse>
  ): MsgCreateFixedDepositResponse {
    const message = {
      ...baseMsgCreateFixedDepositResponse,
    } as MsgCreateFixedDepositResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgWithdrawFixedDeposit: object = { account: "", id: 0 };

export const MsgWithdrawFixedDeposit = {
  encode(
    message: MsgWithdrawFixedDeposit,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgWithdrawFixedDeposit {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgWithdrawFixedDeposit,
    } as MsgWithdrawFixedDeposit;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgWithdrawFixedDeposit {
    const message = {
      ...baseMsgWithdrawFixedDeposit,
    } as MsgWithdrawFixedDeposit;
    if (object.account !== undefined && object.account !== null) {
      message.account = String(object.account);
    } else {
      message.account = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgWithdrawFixedDeposit): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgWithdrawFixedDeposit>
  ): MsgWithdrawFixedDeposit {
    const message = {
      ...baseMsgWithdrawFixedDeposit,
    } as MsgWithdrawFixedDeposit;
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    } else {
      message.account = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgWithdrawFixedDepositResponse: object = { retcode: "" };

export const MsgWithdrawFixedDepositResponse = {
  encode(
    message: MsgWithdrawFixedDepositResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.retcode !== "") {
      writer.uint32(10).string(message.retcode);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgWithdrawFixedDepositResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgWithdrawFixedDepositResponse,
    } as MsgWithdrawFixedDepositResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.retcode = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgWithdrawFixedDepositResponse {
    const message = {
      ...baseMsgWithdrawFixedDepositResponse,
    } as MsgWithdrawFixedDepositResponse;
    if (object.retcode !== undefined && object.retcode !== null) {
      message.retcode = String(object.retcode);
    } else {
      message.retcode = "";
    }
    return message;
  },

  toJSON(message: MsgWithdrawFixedDepositResponse): unknown {
    const obj: any = {};
    message.retcode !== undefined && (obj.retcode = message.retcode);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgWithdrawFixedDepositResponse>
  ): MsgWithdrawFixedDepositResponse {
    const message = {
      ...baseMsgWithdrawFixedDepositResponse,
    } as MsgWithdrawFixedDepositResponse;
    if (object.retcode !== undefined && object.retcode !== null) {
      message.retcode = object.retcode;
    } else {
      message.retcode = "";
    }
    return message;
  },
};

const baseMsgNewKyc: object = {
  creator: "",
  account: "",
  regionId: "",
  role: 0,
};

export const MsgNewKyc = {
  encode(message: MsgNewKyc, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.account !== "") {
      writer.uint32(18).string(message.account);
    }
    if (message.regionId !== "") {
      writer.uint32(26).string(message.regionId);
    }
    if (message.role !== 0) {
      writer.uint32(32).int32(message.role);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgNewKyc {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgNewKyc } as MsgNewKyc;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.account = reader.string();
          break;
        case 3:
          message.regionId = reader.string();
          break;
        case 4:
          message.role = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgNewKyc {
    const message = { ...baseMsgNewKyc } as MsgNewKyc;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.account !== undefined && object.account !== null) {
      message.account = String(object.account);
    } else {
      message.account = "";
    }
    if (object.regionId !== undefined && object.regionId !== null) {
      message.regionId = String(object.regionId);
    } else {
      message.regionId = "";
    }
    if (object.role !== undefined && object.role !== null) {
      message.role = kYC_ROLEFromJSON(object.role);
    } else {
      message.role = 0;
    }
    return message;
  },

  toJSON(message: MsgNewKyc): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.account !== undefined && (obj.account = message.account);
    message.regionId !== undefined && (obj.regionId = message.regionId);
    message.role !== undefined && (obj.role = kYC_ROLEToJSON(message.role));
    return obj;
  },

  fromPartial(object: DeepPartial<MsgNewKyc>): MsgNewKyc {
    const message = { ...baseMsgNewKyc } as MsgNewKyc;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    } else {
      message.account = "";
    }
    if (object.regionId !== undefined && object.regionId !== null) {
      message.regionId = object.regionId;
    } else {
      message.regionId = "";
    }
    if (object.role !== undefined && object.role !== null) {
      message.role = object.role;
    } else {
      message.role = 0;
    }
    return message;
  },
};

const baseMsgNewKycResponse: object = { retcode: "" };

export const MsgNewKycResponse = {
  encode(message: MsgNewKycResponse, writer: Writer = Writer.create()): Writer {
    if (message.retcode !== "") {
      writer.uint32(10).string(message.retcode);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgNewKycResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgNewKycResponse } as MsgNewKycResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.retcode = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgNewKycResponse {
    const message = { ...baseMsgNewKycResponse } as MsgNewKycResponse;
    if (object.retcode !== undefined && object.retcode !== null) {
      message.retcode = String(object.retcode);
    } else {
      message.retcode = "";
    }
    return message;
  },

  toJSON(message: MsgNewKycResponse): unknown {
    const obj: any = {};
    message.retcode !== undefined && (obj.retcode = message.retcode);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgNewKycResponse>): MsgNewKycResponse {
    const message = { ...baseMsgNewKycResponse } as MsgNewKycResponse;
    if (object.retcode !== undefined && object.retcode !== null) {
      message.retcode = object.retcode;
    } else {
      message.retcode = "";
    }
    return message;
  },
};

const baseMsgRemoveKyc: object = { creator: "", account: "" };

export const MsgRemoveKyc = {
  encode(message: MsgRemoveKyc, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.account !== "") {
      writer.uint32(18).string(message.account);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRemoveKyc {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRemoveKyc } as MsgRemoveKyc;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.account = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveKyc {
    const message = { ...baseMsgRemoveKyc } as MsgRemoveKyc;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.account !== undefined && object.account !== null) {
      message.account = String(object.account);
    } else {
      message.account = "";
    }
    return message;
  },

  toJSON(message: MsgRemoveKyc): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.account !== undefined && (obj.account = message.account);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRemoveKyc>): MsgRemoveKyc {
    const message = { ...baseMsgRemoveKyc } as MsgRemoveKyc;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    } else {
      message.account = "";
    }
    return message;
  },
};

const baseMsgRemoveKycResponse: object = { retcode: "" };

export const MsgRemoveKycResponse = {
  encode(
    message: MsgRemoveKycResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.retcode !== "") {
      writer.uint32(10).string(message.retcode);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRemoveKycResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRemoveKycResponse } as MsgRemoveKycResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.retcode = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveKycResponse {
    const message = { ...baseMsgRemoveKycResponse } as MsgRemoveKycResponse;
    if (object.retcode !== undefined && object.retcode !== null) {
      message.retcode = String(object.retcode);
    } else {
      message.retcode = "";
    }
    return message;
  },

  toJSON(message: MsgRemoveKycResponse): unknown {
    const obj: any = {};
    message.retcode !== undefined && (obj.retcode = message.retcode);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRemoveKycResponse>): MsgRemoveKycResponse {
    const message = { ...baseMsgRemoveKycResponse } as MsgRemoveKycResponse;
    if (object.retcode !== undefined && object.retcode !== null) {
      message.retcode = object.retcode;
    } else {
      message.retcode = "";
    }
    return message;
  },
};

const baseMsgSetFixedDepositInterestRate: object = {
  admin: "",
  regionId: "",
  rate: "",
  depositPeiod: 0,
};

export const MsgSetFixedDepositInterestRate = {
  encode(
    message: MsgSetFixedDepositInterestRate,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.regionId !== "") {
      writer.uint32(18).string(message.regionId);
    }
    if (message.rate !== "") {
      writer.uint32(26).string(message.rate);
    }
    if (message.depositPeiod !== 0) {
      writer.uint32(32).int32(message.depositPeiod);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSetFixedDepositInterestRate {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetFixedDepositInterestRate,
    } as MsgSetFixedDepositInterestRate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.regionId = reader.string();
          break;
        case 3:
          message.rate = reader.string();
          break;
        case 4:
          message.depositPeiod = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetFixedDepositInterestRate {
    const message = {
      ...baseMsgSetFixedDepositInterestRate,
    } as MsgSetFixedDepositInterestRate;
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = String(object.admin);
    } else {
      message.admin = "";
    }
    if (object.regionId !== undefined && object.regionId !== null) {
      message.regionId = String(object.regionId);
    } else {
      message.regionId = "";
    }
    if (object.rate !== undefined && object.rate !== null) {
      message.rate = String(object.rate);
    } else {
      message.rate = "";
    }
    if (object.depositPeiod !== undefined && object.depositPeiod !== null) {
      message.depositPeiod = fixedDepositPeriodFromJSON(object.depositPeiod);
    } else {
      message.depositPeiod = 0;
    }
    return message;
  },

  toJSON(message: MsgSetFixedDepositInterestRate): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.regionId !== undefined && (obj.regionId = message.regionId);
    message.rate !== undefined && (obj.rate = message.rate);
    message.depositPeiod !== undefined &&
      (obj.depositPeiod = fixedDepositPeriodToJSON(message.depositPeiod));
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSetFixedDepositInterestRate>
  ): MsgSetFixedDepositInterestRate {
    const message = {
      ...baseMsgSetFixedDepositInterestRate,
    } as MsgSetFixedDepositInterestRate;
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    } else {
      message.admin = "";
    }
    if (object.regionId !== undefined && object.regionId !== null) {
      message.regionId = object.regionId;
    } else {
      message.regionId = "";
    }
    if (object.rate !== undefined && object.rate !== null) {
      message.rate = object.rate;
    } else {
      message.rate = "";
    }
    if (object.depositPeiod !== undefined && object.depositPeiod !== null) {
      message.depositPeiod = object.depositPeiod;
    } else {
      message.depositPeiod = 0;
    }
    return message;
  },
};

const baseMsgSetFixedDepositInterestRateResponse: object = { retcode: "" };

export const MsgSetFixedDepositInterestRateResponse = {
  encode(
    message: MsgSetFixedDepositInterestRateResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.retcode !== "") {
      writer.uint32(10).string(message.retcode);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSetFixedDepositInterestRateResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetFixedDepositInterestRateResponse,
    } as MsgSetFixedDepositInterestRateResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.retcode = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetFixedDepositInterestRateResponse {
    const message = {
      ...baseMsgSetFixedDepositInterestRateResponse,
    } as MsgSetFixedDepositInterestRateResponse;
    if (object.retcode !== undefined && object.retcode !== null) {
      message.retcode = String(object.retcode);
    } else {
      message.retcode = "";
    }
    return message;
  },

  toJSON(message: MsgSetFixedDepositInterestRateResponse): unknown {
    const obj: any = {};
    message.retcode !== undefined && (obj.retcode = message.retcode);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSetFixedDepositInterestRateResponse>
  ): MsgSetFixedDepositInterestRateResponse {
    const message = {
      ...baseMsgSetFixedDepositInterestRateResponse,
    } as MsgSetFixedDepositInterestRateResponse;
    if (object.retcode !== undefined && object.retcode !== null) {
      message.retcode = object.retcode;
    } else {
      message.retcode = "";
    }
    return message;
  },
};

const baseMsgSetFixedDelegationInterestRate: object = {
  admin: "",
  regionId: "",
  rate: "",
  depositPeiod: 0,
};

export const MsgSetFixedDelegationInterestRate = {
  encode(
    message: MsgSetFixedDelegationInterestRate,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.regionId !== "") {
      writer.uint32(18).string(message.regionId);
    }
    if (message.rate !== "") {
      writer.uint32(26).string(message.rate);
    }
    if (message.depositPeiod !== 0) {
      writer.uint32(32).int32(message.depositPeiod);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSetFixedDelegationInterestRate {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetFixedDelegationInterestRate,
    } as MsgSetFixedDelegationInterestRate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.regionId = reader.string();
          break;
        case 3:
          message.rate = reader.string();
          break;
        case 4:
          message.depositPeiod = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetFixedDelegationInterestRate {
    const message = {
      ...baseMsgSetFixedDelegationInterestRate,
    } as MsgSetFixedDelegationInterestRate;
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = String(object.admin);
    } else {
      message.admin = "";
    }
    if (object.regionId !== undefined && object.regionId !== null) {
      message.regionId = String(object.regionId);
    } else {
      message.regionId = "";
    }
    if (object.rate !== undefined && object.rate !== null) {
      message.rate = String(object.rate);
    } else {
      message.rate = "";
    }
    if (object.depositPeiod !== undefined && object.depositPeiod !== null) {
      message.depositPeiod = fixedDelegationTermFromJSON(object.depositPeiod);
    } else {
      message.depositPeiod = 0;
    }
    return message;
  },

  toJSON(message: MsgSetFixedDelegationInterestRate): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.regionId !== undefined && (obj.regionId = message.regionId);
    message.rate !== undefined && (obj.rate = message.rate);
    message.depositPeiod !== undefined &&
      (obj.depositPeiod = fixedDelegationTermToJSON(message.depositPeiod));
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSetFixedDelegationInterestRate>
  ): MsgSetFixedDelegationInterestRate {
    const message = {
      ...baseMsgSetFixedDelegationInterestRate,
    } as MsgSetFixedDelegationInterestRate;
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    } else {
      message.admin = "";
    }
    if (object.regionId !== undefined && object.regionId !== null) {
      message.regionId = object.regionId;
    } else {
      message.regionId = "";
    }
    if (object.rate !== undefined && object.rate !== null) {
      message.rate = object.rate;
    } else {
      message.rate = "";
    }
    if (object.depositPeiod !== undefined && object.depositPeiod !== null) {
      message.depositPeiod = object.depositPeiod;
    } else {
      message.depositPeiod = 0;
    }
    return message;
  },
};

const baseMsgSetFixedDelegationInterestRateResponse: object = { retcode: "" };

export const MsgSetFixedDelegationInterestRateResponse = {
  encode(
    message: MsgSetFixedDelegationInterestRateResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.retcode !== "") {
      writer.uint32(10).string(message.retcode);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSetFixedDelegationInterestRateResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetFixedDelegationInterestRateResponse,
    } as MsgSetFixedDelegationInterestRateResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.retcode = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetFixedDelegationInterestRateResponse {
    const message = {
      ...baseMsgSetFixedDelegationInterestRateResponse,
    } as MsgSetFixedDelegationInterestRateResponse;
    if (object.retcode !== undefined && object.retcode !== null) {
      message.retcode = String(object.retcode);
    } else {
      message.retcode = "";
    }
    return message;
  },

  toJSON(message: MsgSetFixedDelegationInterestRateResponse): unknown {
    const obj: any = {};
    message.retcode !== undefined && (obj.retcode = message.retcode);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSetFixedDelegationInterestRateResponse>
  ): MsgSetFixedDelegationInterestRateResponse {
    const message = {
      ...baseMsgSetFixedDelegationInterestRateResponse,
    } as MsgSetFixedDelegationInterestRateResponse;
    if (object.retcode !== undefined && object.retcode !== null) {
      message.retcode = object.retcode;
    } else {
      message.retcode = "";
    }
    return message;
  },
};

const baseMsgTransferKYC: object = {
  fromRegion: "",
  toRegion: "",
  address: "",
  creator: "",
};

export const MsgTransferKYC = {
  encode(message: MsgTransferKYC, writer: Writer = Writer.create()): Writer {
    if (message.fromRegion !== "") {
      writer.uint32(10).string(message.fromRegion);
    }
    if (message.toRegion !== "") {
      writer.uint32(18).string(message.toRegion);
    }
    for (const v of message.address) {
      writer.uint32(26).string(v!);
    }
    if (message.creator !== "") {
      writer.uint32(34).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgTransferKYC {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgTransferKYC } as MsgTransferKYC;
    message.address = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromRegion = reader.string();
          break;
        case 2:
          message.toRegion = reader.string();
          break;
        case 3:
          message.address.push(reader.string());
          break;
        case 4:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgTransferKYC {
    const message = { ...baseMsgTransferKYC } as MsgTransferKYC;
    message.address = [];
    if (object.fromRegion !== undefined && object.fromRegion !== null) {
      message.fromRegion = String(object.fromRegion);
    } else {
      message.fromRegion = "";
    }
    if (object.toRegion !== undefined && object.toRegion !== null) {
      message.toRegion = String(object.toRegion);
    } else {
      message.toRegion = "";
    }
    if (object.address !== undefined && object.address !== null) {
      for (const e of object.address) {
        message.address.push(String(e));
      }
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: MsgTransferKYC): unknown {
    const obj: any = {};
    message.fromRegion !== undefined && (obj.fromRegion = message.fromRegion);
    message.toRegion !== undefined && (obj.toRegion = message.toRegion);
    if (message.address) {
      obj.address = message.address.map((e) => e);
    } else {
      obj.address = [];
    }
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgTransferKYC>): MsgTransferKYC {
    const message = { ...baseMsgTransferKYC } as MsgTransferKYC;
    message.address = [];
    if (object.fromRegion !== undefined && object.fromRegion !== null) {
      message.fromRegion = object.fromRegion;
    } else {
      message.fromRegion = "";
    }
    if (object.toRegion !== undefined && object.toRegion !== null) {
      message.toRegion = object.toRegion;
    } else {
      message.toRegion = "";
    }
    if (object.address !== undefined && object.address !== null) {
      for (const e of object.address) {
        message.address.push(e);
      }
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

const baseMsgTransferKYCResponse: object = {};

export const MsgTransferKYCResponse = {
  encode(_: MsgTransferKYCResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgTransferKYCResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgTransferKYCResponse } as MsgTransferKYCResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgTransferKYCResponse {
    const message = { ...baseMsgTransferKYCResponse } as MsgTransferKYCResponse;
    return message;
  },

  toJSON(_: MsgTransferKYCResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgTransferKYCResponse>): MsgTransferKYCResponse {
    const message = { ...baseMsgTransferKYCResponse } as MsgTransferKYCResponse;
    return message;
  },
};

const baseMsgWithdrawUnmovableInterest: object = { creator: "" };

export const MsgWithdrawUnmovableInterest = {
  encode(
    message: MsgWithdrawUnmovableInterest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgWithdrawUnmovableInterest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgWithdrawUnmovableInterest,
    } as MsgWithdrawUnmovableInterest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgWithdrawUnmovableInterest {
    const message = {
      ...baseMsgWithdrawUnmovableInterest,
    } as MsgWithdrawUnmovableInterest;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: MsgWithdrawUnmovableInterest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgWithdrawUnmovableInterest>
  ): MsgWithdrawUnmovableInterest {
    const message = {
      ...baseMsgWithdrawUnmovableInterest,
    } as MsgWithdrawUnmovableInterest;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

const baseMsgWithdrawUnmovableInterestResponse: object = {
  receive_address: "",
  region_id: "",
  from_height: 0,
  to_height: 0,
  amount: "",
};

export const MsgWithdrawUnmovableInterestResponse = {
  encode(
    message: MsgWithdrawUnmovableInterestResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.receive_address !== "") {
      writer.uint32(10).string(message.receive_address);
    }
    if (message.region_id !== "") {
      writer.uint32(18).string(message.region_id);
    }
    if (message.from_height !== 0) {
      writer.uint32(24).int64(message.from_height);
    }
    if (message.to_height !== 0) {
      writer.uint32(32).int64(message.to_height);
    }
    if (message.amount !== "") {
      writer.uint32(42).string(message.amount);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgWithdrawUnmovableInterestResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgWithdrawUnmovableInterestResponse,
    } as MsgWithdrawUnmovableInterestResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.receive_address = reader.string();
          break;
        case 2:
          message.region_id = reader.string();
          break;
        case 3:
          message.from_height = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.to_height = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgWithdrawUnmovableInterestResponse {
    const message = {
      ...baseMsgWithdrawUnmovableInterestResponse,
    } as MsgWithdrawUnmovableInterestResponse;
    if (
      object.receive_address !== undefined &&
      object.receive_address !== null
    ) {
      message.receive_address = String(object.receive_address);
    } else {
      message.receive_address = "";
    }
    if (object.region_id !== undefined && object.region_id !== null) {
      message.region_id = String(object.region_id);
    } else {
      message.region_id = "";
    }
    if (object.from_height !== undefined && object.from_height !== null) {
      message.from_height = Number(object.from_height);
    } else {
      message.from_height = 0;
    }
    if (object.to_height !== undefined && object.to_height !== null) {
      message.to_height = Number(object.to_height);
    } else {
      message.to_height = 0;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    return message;
  },

  toJSON(message: MsgWithdrawUnmovableInterestResponse): unknown {
    const obj: any = {};
    message.receive_address !== undefined &&
      (obj.receive_address = message.receive_address);
    message.region_id !== undefined && (obj.region_id = message.region_id);
    message.from_height !== undefined &&
      (obj.from_height = message.from_height);
    message.to_height !== undefined && (obj.to_height = message.to_height);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgWithdrawUnmovableInterestResponse>
  ): MsgWithdrawUnmovableInterestResponse {
    const message = {
      ...baseMsgWithdrawUnmovableInterestResponse,
    } as MsgWithdrawUnmovableInterestResponse;
    if (
      object.receive_address !== undefined &&
      object.receive_address !== null
    ) {
      message.receive_address = object.receive_address;
    } else {
      message.receive_address = "";
    }
    if (object.region_id !== undefined && object.region_id !== null) {
      message.region_id = object.region_id;
    } else {
      message.region_id = "";
    }
    if (object.from_height !== undefined && object.from_height !== null) {
      message.from_height = object.from_height;
    } else {
      message.from_height = 0;
    }
    if (object.to_height !== undefined && object.to_height !== null) {
      message.to_height = object.to_height;
    } else {
      message.to_height = 0;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = "";
    }
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateRegion(request: MsgCreateRegion): Promise<MsgCreateRegionResponse>;
  UpdateRegion(request: MsgUpdateRegion): Promise<MsgUpdateRegionResponse>;
  /** rpc DeleteRegion(MsgDeleteRegion) returns (MsgDeleteRegionResponse); */
  CreateValidator(
    request: MsgCreateValidator
  ): Promise<MsgCreateValidatorResponse>;
  UpdateValidator(
    request: MsgUpdateValidator
  ): Promise<MsgUpdateValidatorResponse>;
  KickValidatorByAddress(
    request: MsgKickValidatorByAddress
  ): Promise<MsgKickValidatorByAddressResponse>;
  KickValidatorByPubkey(
    request: MsgKickValidatorByPubkey
  ): Promise<MsgKickValidatorByPubkeyResponse>;
  /** rpc Delegate(MsgDelegate) returns (MsgDelegateResponse); */
  UnDelegate(request: MsgUnDelegate): Promise<MsgUnDelegateResponse>;
  ExitDelegate(request: MsgExitDelegate): Promise<MsgExitDelegateResponse>;
  CreateDelegate(
    request: MsgCreateDelegate
  ): Promise<MsgCreateDelegateResponse>;
  Withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse>;
  AgToAc(request: MsgAgToAc): Promise<MsgAgToAcResponse>;
  TransferKYC(request: MsgTransferKYC): Promise<MsgTransferKYCResponse>;
  /**
   * rpc CreateFixedDeposit(MsgCreateFixedDeposit) returns (MsgCreateFixedDepositResponse);
   *  rpc WithdrawFixedDeposit(MsgWithdrawFixedDeposit) returns (MsgWithdrawFixedDepositResponse);
   */
  WithdrawUnmovableInterest(
    request: MsgWithdrawUnmovableInterest
  ): Promise<MsgWithdrawUnmovableInterestResponse>;
  NewKyc(request: MsgNewKyc): Promise<MsgNewKycResponse>;
  /**
   * rpc RemoveKyc(MsgRemoveKyc) returns (MsgRemoveKycResponse);
   *  rpc SetFixedDepositInterestRate(MsgSetFixedDepositInterestRate) returns (MsgSetFixedDepositInterestRateResponse);
   */
  SetFixedDelegationInterestRate(
    request: MsgSetFixedDelegationInterestRate
  ): Promise<MsgSetFixedDelegationInterestRateResponse>;
  CreateFixedDelegation(
    request: MsgCreateFixedDelegation
  ): Promise<MsgCreateFixedDelegationResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  WithdrawFixedDelegation(
    request: MsgWithdrawFixedDelegation
  ): Promise<MsgWithdrawFixedDelegationResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateRegion(request: MsgCreateRegion): Promise<MsgCreateRegionResponse> {
    const data = MsgCreateRegion.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.srstaking.v1beta1.Msg",
      "CreateRegion",
      data
    );
    return promise.then((data) =>
      MsgCreateRegionResponse.decode(new Reader(data))
    );
  }

  UpdateRegion(request: MsgUpdateRegion): Promise<MsgUpdateRegionResponse> {
    const data = MsgUpdateRegion.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.srstaking.v1beta1.Msg",
      "UpdateRegion",
      data
    );
    return promise.then((data) =>
      MsgUpdateRegionResponse.decode(new Reader(data))
    );
  }

  CreateValidator(
    request: MsgCreateValidator
  ): Promise<MsgCreateValidatorResponse> {
    const data = MsgCreateValidator.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.srstaking.v1beta1.Msg",
      "CreateValidator",
      data
    );
    return promise.then((data) =>
      MsgCreateValidatorResponse.decode(new Reader(data))
    );
  }

  UpdateValidator(
    request: MsgUpdateValidator
  ): Promise<MsgUpdateValidatorResponse> {
    const data = MsgUpdateValidator.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.srstaking.v1beta1.Msg",
      "UpdateValidator",
      data
    );
    return promise.then((data) =>
      MsgUpdateValidatorResponse.decode(new Reader(data))
    );
  }

  KickValidatorByAddress(
    request: MsgKickValidatorByAddress
  ): Promise<MsgKickValidatorByAddressResponse> {
    const data = MsgKickValidatorByAddress.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.srstaking.v1beta1.Msg",
      "KickValidatorByAddress",
      data
    );
    return promise.then((data) =>
      MsgKickValidatorByAddressResponse.decode(new Reader(data))
    );
  }

  KickValidatorByPubkey(
    request: MsgKickValidatorByPubkey
  ): Promise<MsgKickValidatorByPubkeyResponse> {
    const data = MsgKickValidatorByPubkey.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.srstaking.v1beta1.Msg",
      "KickValidatorByPubkey",
      data
    );
    return promise.then((data) =>
      MsgKickValidatorByPubkeyResponse.decode(new Reader(data))
    );
  }

  UnDelegate(request: MsgUnDelegate): Promise<MsgUnDelegateResponse> {
    const data = MsgUnDelegate.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.srstaking.v1beta1.Msg",
      "UnDelegate",
      data
    );
    return promise.then((data) =>
      MsgUnDelegateResponse.decode(new Reader(data))
    );
  }

  ExitDelegate(request: MsgExitDelegate): Promise<MsgExitDelegateResponse> {
    const data = MsgExitDelegate.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.srstaking.v1beta1.Msg",
      "ExitDelegate",
      data
    );
    return promise.then((data) =>
      MsgExitDelegateResponse.decode(new Reader(data))
    );
  }

  CreateDelegate(
    request: MsgCreateDelegate
  ): Promise<MsgCreateDelegateResponse> {
    const data = MsgCreateDelegate.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.srstaking.v1beta1.Msg",
      "CreateDelegate",
      data
    );
    return promise.then((data) =>
      MsgCreateDelegateResponse.decode(new Reader(data))
    );
  }

  Withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse> {
    const data = MsgWithdraw.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.srstaking.v1beta1.Msg",
      "Withdraw",
      data
    );
    return promise.then((data) => MsgWithdrawResponse.decode(new Reader(data)));
  }

  AgToAc(request: MsgAgToAc): Promise<MsgAgToAcResponse> {
    const data = MsgAgToAc.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.srstaking.v1beta1.Msg",
      "AgToAc",
      data
    );
    return promise.then((data) => MsgAgToAcResponse.decode(new Reader(data)));
  }

  TransferKYC(request: MsgTransferKYC): Promise<MsgTransferKYCResponse> {
    const data = MsgTransferKYC.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.srstaking.v1beta1.Msg",
      "TransferKYC",
      data
    );
    return promise.then((data) =>
      MsgTransferKYCResponse.decode(new Reader(data))
    );
  }

  WithdrawUnmovableInterest(
    request: MsgWithdrawUnmovableInterest
  ): Promise<MsgWithdrawUnmovableInterestResponse> {
    const data = MsgWithdrawUnmovableInterest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.srstaking.v1beta1.Msg",
      "WithdrawUnmovableInterest",
      data
    );
    return promise.then((data) =>
      MsgWithdrawUnmovableInterestResponse.decode(new Reader(data))
    );
  }

  NewKyc(request: MsgNewKyc): Promise<MsgNewKycResponse> {
    const data = MsgNewKyc.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.srstaking.v1beta1.Msg",
      "NewKyc",
      data
    );
    return promise.then((data) => MsgNewKycResponse.decode(new Reader(data)));
  }

  SetFixedDelegationInterestRate(
    request: MsgSetFixedDelegationInterestRate
  ): Promise<MsgSetFixedDelegationInterestRateResponse> {
    const data = MsgSetFixedDelegationInterestRate.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.srstaking.v1beta1.Msg",
      "SetFixedDelegationInterestRate",
      data
    );
    return promise.then((data) =>
      MsgSetFixedDelegationInterestRateResponse.decode(new Reader(data))
    );
  }

  CreateFixedDelegation(
    request: MsgCreateFixedDelegation
  ): Promise<MsgCreateFixedDelegationResponse> {
    const data = MsgCreateFixedDelegation.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.srstaking.v1beta1.Msg",
      "CreateFixedDelegation",
      data
    );
    return promise.then((data) =>
      MsgCreateFixedDelegationResponse.decode(new Reader(data))
    );
  }

  WithdrawFixedDelegation(
    request: MsgWithdrawFixedDelegation
  ): Promise<MsgWithdrawFixedDelegationResponse> {
    const data = MsgWithdrawFixedDelegation.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.srstaking.v1beta1.Msg",
      "WithdrawFixedDelegation",
      data
    );
    return promise.then((data) =>
      MsgWithdrawFixedDelegationResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
