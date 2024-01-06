/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "cosmos.srstaking.v1beta1";

export enum VAULT_ACCOUNT_TYPE {
  VAULT_ACCOUNT_TYPE_BASE = 0,
  VAULT_ACCOUNT_TYPE_FIXED_DEPOSIT = 1,
  VAULT_ACCOUNT_TYPE_BONUS = 2,
  VAULT_ACCOUNT_TYPE_FIXED_DELEGATION = 3,
  UNRECOGNIZED = -1,
}

export function vAULT_ACCOUNT_TYPEFromJSON(object: any): VAULT_ACCOUNT_TYPE {
  switch (object) {
    case 0:
    case "VAULT_ACCOUNT_TYPE_BASE":
      return VAULT_ACCOUNT_TYPE.VAULT_ACCOUNT_TYPE_BASE;
    case 1:
    case "VAULT_ACCOUNT_TYPE_FIXED_DEPOSIT":
      return VAULT_ACCOUNT_TYPE.VAULT_ACCOUNT_TYPE_FIXED_DEPOSIT;
    case 2:
    case "VAULT_ACCOUNT_TYPE_BONUS":
      return VAULT_ACCOUNT_TYPE.VAULT_ACCOUNT_TYPE_BONUS;
    case 3:
    case "VAULT_ACCOUNT_TYPE_FIXED_DELEGATION":
      return VAULT_ACCOUNT_TYPE.VAULT_ACCOUNT_TYPE_FIXED_DELEGATION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return VAULT_ACCOUNT_TYPE.UNRECOGNIZED;
  }
}

export function vAULT_ACCOUNT_TYPEToJSON(object: VAULT_ACCOUNT_TYPE): string {
  switch (object) {
    case VAULT_ACCOUNT_TYPE.VAULT_ACCOUNT_TYPE_BASE:
      return "VAULT_ACCOUNT_TYPE_BASE";
    case VAULT_ACCOUNT_TYPE.VAULT_ACCOUNT_TYPE_FIXED_DEPOSIT:
      return "VAULT_ACCOUNT_TYPE_FIXED_DEPOSIT";
    case VAULT_ACCOUNT_TYPE.VAULT_ACCOUNT_TYPE_BONUS:
      return "VAULT_ACCOUNT_TYPE_BONUS";
    case VAULT_ACCOUNT_TYPE.VAULT_ACCOUNT_TYPE_FIXED_DELEGATION:
      return "VAULT_ACCOUNT_TYPE_FIXED_DELEGATION";
    default:
      return "UNKNOWN";
  }
}

export interface RegionFixedDepositAnnualRate {
  annualRate_1_months: string;
  annualRate_3_months: string;
  annualRate_6_months: string;
  annualRate_12_months: string;
  annualRate_24_months: string;
  annualRate_48_months: string;
}

export interface RegionFixedDelegationAnnualRate {
  annualRate_1_months: string;
  annualRate_2_months: string;
  annualRate_3_months: string;
  annualRate_4_months: string;
  annualRate_5_months: string;
  annualRate_6_months: string;
  annualRate_7_months: string;
  annualRate_8_months: string;
  annualRate_9_months: string;
  annualRate_10_months: string;
  annualRate_11_months: string;
  annualRate_12_months: string;
  annualRate_24_months: string;
  annualRate_36_months: string;
  annualRate_48_months: string;
  annualRate_60_months: string;
}

export interface Region {
  regionName: string;
  regionId: string;
  regionTotalAS: string;
  regionTotalUAC: string;
  regionAsRate: string;
  delegatorsLimit: number;
  userMinDelegateAC: string;
  userMaxDelegateAC: string;
  regionFeeRate: string;
  regionAdminAddress: string;
  regionTotalStakeAllow: string;
  delegationAddress: string;
  baseAccountAddr: string;
  /**
   * string fixedDepositAccountAddr = 14;
   * RegionFixedDepositAnnualRate    fixedDepositAnnualRate = 15;
   */
  fixedDelegationAccountAddr: string;
  fixedDelegationAnnualRate: RegionFixedDelegationAnnualRate | undefined;
  permanentRate: string;
  isUndelegate: boolean;
}

export interface RegionDelegators {
  regionId: string;
  delegators: string[];
}

export interface RegionsDelegators {
  delegators: RegionDelegators[];
}

const baseRegionFixedDepositAnnualRate: object = {
  annualRate_1_months: "",
  annualRate_3_months: "",
  annualRate_6_months: "",
  annualRate_12_months: "",
  annualRate_24_months: "",
  annualRate_48_months: "",
};

export const RegionFixedDepositAnnualRate = {
  encode(
    message: RegionFixedDepositAnnualRate,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.annualRate_1_months !== "") {
      writer.uint32(10).string(message.annualRate_1_months);
    }
    if (message.annualRate_3_months !== "") {
      writer.uint32(18).string(message.annualRate_3_months);
    }
    if (message.annualRate_6_months !== "") {
      writer.uint32(26).string(message.annualRate_6_months);
    }
    if (message.annualRate_12_months !== "") {
      writer.uint32(34).string(message.annualRate_12_months);
    }
    if (message.annualRate_24_months !== "") {
      writer.uint32(42).string(message.annualRate_24_months);
    }
    if (message.annualRate_48_months !== "") {
      writer.uint32(50).string(message.annualRate_48_months);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): RegionFixedDepositAnnualRate {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRegionFixedDepositAnnualRate,
    } as RegionFixedDepositAnnualRate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.annualRate_1_months = reader.string();
          break;
        case 2:
          message.annualRate_3_months = reader.string();
          break;
        case 3:
          message.annualRate_6_months = reader.string();
          break;
        case 4:
          message.annualRate_12_months = reader.string();
          break;
        case 5:
          message.annualRate_24_months = reader.string();
          break;
        case 6:
          message.annualRate_48_months = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegionFixedDepositAnnualRate {
    const message = {
      ...baseRegionFixedDepositAnnualRate,
    } as RegionFixedDepositAnnualRate;
    if (
      object.annualRate_1_months !== undefined &&
      object.annualRate_1_months !== null
    ) {
      message.annualRate_1_months = String(object.annualRate_1_months);
    } else {
      message.annualRate_1_months = "";
    }
    if (
      object.annualRate_3_months !== undefined &&
      object.annualRate_3_months !== null
    ) {
      message.annualRate_3_months = String(object.annualRate_3_months);
    } else {
      message.annualRate_3_months = "";
    }
    if (
      object.annualRate_6_months !== undefined &&
      object.annualRate_6_months !== null
    ) {
      message.annualRate_6_months = String(object.annualRate_6_months);
    } else {
      message.annualRate_6_months = "";
    }
    if (
      object.annualRate_12_months !== undefined &&
      object.annualRate_12_months !== null
    ) {
      message.annualRate_12_months = String(object.annualRate_12_months);
    } else {
      message.annualRate_12_months = "";
    }
    if (
      object.annualRate_24_months !== undefined &&
      object.annualRate_24_months !== null
    ) {
      message.annualRate_24_months = String(object.annualRate_24_months);
    } else {
      message.annualRate_24_months = "";
    }
    if (
      object.annualRate_48_months !== undefined &&
      object.annualRate_48_months !== null
    ) {
      message.annualRate_48_months = String(object.annualRate_48_months);
    } else {
      message.annualRate_48_months = "";
    }
    return message;
  },

  toJSON(message: RegionFixedDepositAnnualRate): unknown {
    const obj: any = {};
    message.annualRate_1_months !== undefined &&
      (obj.annualRate_1_months = message.annualRate_1_months);
    message.annualRate_3_months !== undefined &&
      (obj.annualRate_3_months = message.annualRate_3_months);
    message.annualRate_6_months !== undefined &&
      (obj.annualRate_6_months = message.annualRate_6_months);
    message.annualRate_12_months !== undefined &&
      (obj.annualRate_12_months = message.annualRate_12_months);
    message.annualRate_24_months !== undefined &&
      (obj.annualRate_24_months = message.annualRate_24_months);
    message.annualRate_48_months !== undefined &&
      (obj.annualRate_48_months = message.annualRate_48_months);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RegionFixedDepositAnnualRate>
  ): RegionFixedDepositAnnualRate {
    const message = {
      ...baseRegionFixedDepositAnnualRate,
    } as RegionFixedDepositAnnualRate;
    if (
      object.annualRate_1_months !== undefined &&
      object.annualRate_1_months !== null
    ) {
      message.annualRate_1_months = object.annualRate_1_months;
    } else {
      message.annualRate_1_months = "";
    }
    if (
      object.annualRate_3_months !== undefined &&
      object.annualRate_3_months !== null
    ) {
      message.annualRate_3_months = object.annualRate_3_months;
    } else {
      message.annualRate_3_months = "";
    }
    if (
      object.annualRate_6_months !== undefined &&
      object.annualRate_6_months !== null
    ) {
      message.annualRate_6_months = object.annualRate_6_months;
    } else {
      message.annualRate_6_months = "";
    }
    if (
      object.annualRate_12_months !== undefined &&
      object.annualRate_12_months !== null
    ) {
      message.annualRate_12_months = object.annualRate_12_months;
    } else {
      message.annualRate_12_months = "";
    }
    if (
      object.annualRate_24_months !== undefined &&
      object.annualRate_24_months !== null
    ) {
      message.annualRate_24_months = object.annualRate_24_months;
    } else {
      message.annualRate_24_months = "";
    }
    if (
      object.annualRate_48_months !== undefined &&
      object.annualRate_48_months !== null
    ) {
      message.annualRate_48_months = object.annualRate_48_months;
    } else {
      message.annualRate_48_months = "";
    }
    return message;
  },
};

const baseRegionFixedDelegationAnnualRate: object = {
  annualRate_1_months: "",
  annualRate_2_months: "",
  annualRate_3_months: "",
  annualRate_4_months: "",
  annualRate_5_months: "",
  annualRate_6_months: "",
  annualRate_7_months: "",
  annualRate_8_months: "",
  annualRate_9_months: "",
  annualRate_10_months: "",
  annualRate_11_months: "",
  annualRate_12_months: "",
  annualRate_24_months: "",
  annualRate_36_months: "",
  annualRate_48_months: "",
  annualRate_60_months: "",
};

export const RegionFixedDelegationAnnualRate = {
  encode(
    message: RegionFixedDelegationAnnualRate,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.annualRate_1_months !== "") {
      writer.uint32(10).string(message.annualRate_1_months);
    }
    if (message.annualRate_2_months !== "") {
      writer.uint32(18).string(message.annualRate_2_months);
    }
    if (message.annualRate_3_months !== "") {
      writer.uint32(26).string(message.annualRate_3_months);
    }
    if (message.annualRate_4_months !== "") {
      writer.uint32(34).string(message.annualRate_4_months);
    }
    if (message.annualRate_5_months !== "") {
      writer.uint32(42).string(message.annualRate_5_months);
    }
    if (message.annualRate_6_months !== "") {
      writer.uint32(50).string(message.annualRate_6_months);
    }
    if (message.annualRate_7_months !== "") {
      writer.uint32(58).string(message.annualRate_7_months);
    }
    if (message.annualRate_8_months !== "") {
      writer.uint32(66).string(message.annualRate_8_months);
    }
    if (message.annualRate_9_months !== "") {
      writer.uint32(74).string(message.annualRate_9_months);
    }
    if (message.annualRate_10_months !== "") {
      writer.uint32(82).string(message.annualRate_10_months);
    }
    if (message.annualRate_11_months !== "") {
      writer.uint32(90).string(message.annualRate_11_months);
    }
    if (message.annualRate_12_months !== "") {
      writer.uint32(98).string(message.annualRate_12_months);
    }
    if (message.annualRate_24_months !== "") {
      writer.uint32(106).string(message.annualRate_24_months);
    }
    if (message.annualRate_36_months !== "") {
      writer.uint32(114).string(message.annualRate_36_months);
    }
    if (message.annualRate_48_months !== "") {
      writer.uint32(122).string(message.annualRate_48_months);
    }
    if (message.annualRate_60_months !== "") {
      writer.uint32(130).string(message.annualRate_60_months);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): RegionFixedDelegationAnnualRate {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRegionFixedDelegationAnnualRate,
    } as RegionFixedDelegationAnnualRate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.annualRate_1_months = reader.string();
          break;
        case 2:
          message.annualRate_2_months = reader.string();
          break;
        case 3:
          message.annualRate_3_months = reader.string();
          break;
        case 4:
          message.annualRate_4_months = reader.string();
          break;
        case 5:
          message.annualRate_5_months = reader.string();
          break;
        case 6:
          message.annualRate_6_months = reader.string();
          break;
        case 7:
          message.annualRate_7_months = reader.string();
          break;
        case 8:
          message.annualRate_8_months = reader.string();
          break;
        case 9:
          message.annualRate_9_months = reader.string();
          break;
        case 10:
          message.annualRate_10_months = reader.string();
          break;
        case 11:
          message.annualRate_11_months = reader.string();
          break;
        case 12:
          message.annualRate_12_months = reader.string();
          break;
        case 13:
          message.annualRate_24_months = reader.string();
          break;
        case 14:
          message.annualRate_36_months = reader.string();
          break;
        case 15:
          message.annualRate_48_months = reader.string();
          break;
        case 16:
          message.annualRate_60_months = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegionFixedDelegationAnnualRate {
    const message = {
      ...baseRegionFixedDelegationAnnualRate,
    } as RegionFixedDelegationAnnualRate;
    if (
      object.annualRate_1_months !== undefined &&
      object.annualRate_1_months !== null
    ) {
      message.annualRate_1_months = String(object.annualRate_1_months);
    } else {
      message.annualRate_1_months = "";
    }
    if (
      object.annualRate_2_months !== undefined &&
      object.annualRate_2_months !== null
    ) {
      message.annualRate_2_months = String(object.annualRate_2_months);
    } else {
      message.annualRate_2_months = "";
    }
    if (
      object.annualRate_3_months !== undefined &&
      object.annualRate_3_months !== null
    ) {
      message.annualRate_3_months = String(object.annualRate_3_months);
    } else {
      message.annualRate_3_months = "";
    }
    if (
      object.annualRate_4_months !== undefined &&
      object.annualRate_4_months !== null
    ) {
      message.annualRate_4_months = String(object.annualRate_4_months);
    } else {
      message.annualRate_4_months = "";
    }
    if (
      object.annualRate_5_months !== undefined &&
      object.annualRate_5_months !== null
    ) {
      message.annualRate_5_months = String(object.annualRate_5_months);
    } else {
      message.annualRate_5_months = "";
    }
    if (
      object.annualRate_6_months !== undefined &&
      object.annualRate_6_months !== null
    ) {
      message.annualRate_6_months = String(object.annualRate_6_months);
    } else {
      message.annualRate_6_months = "";
    }
    if (
      object.annualRate_7_months !== undefined &&
      object.annualRate_7_months !== null
    ) {
      message.annualRate_7_months = String(object.annualRate_7_months);
    } else {
      message.annualRate_7_months = "";
    }
    if (
      object.annualRate_8_months !== undefined &&
      object.annualRate_8_months !== null
    ) {
      message.annualRate_8_months = String(object.annualRate_8_months);
    } else {
      message.annualRate_8_months = "";
    }
    if (
      object.annualRate_9_months !== undefined &&
      object.annualRate_9_months !== null
    ) {
      message.annualRate_9_months = String(object.annualRate_9_months);
    } else {
      message.annualRate_9_months = "";
    }
    if (
      object.annualRate_10_months !== undefined &&
      object.annualRate_10_months !== null
    ) {
      message.annualRate_10_months = String(object.annualRate_10_months);
    } else {
      message.annualRate_10_months = "";
    }
    if (
      object.annualRate_11_months !== undefined &&
      object.annualRate_11_months !== null
    ) {
      message.annualRate_11_months = String(object.annualRate_11_months);
    } else {
      message.annualRate_11_months = "";
    }
    if (
      object.annualRate_12_months !== undefined &&
      object.annualRate_12_months !== null
    ) {
      message.annualRate_12_months = String(object.annualRate_12_months);
    } else {
      message.annualRate_12_months = "";
    }
    if (
      object.annualRate_24_months !== undefined &&
      object.annualRate_24_months !== null
    ) {
      message.annualRate_24_months = String(object.annualRate_24_months);
    } else {
      message.annualRate_24_months = "";
    }
    if (
      object.annualRate_36_months !== undefined &&
      object.annualRate_36_months !== null
    ) {
      message.annualRate_36_months = String(object.annualRate_36_months);
    } else {
      message.annualRate_36_months = "";
    }
    if (
      object.annualRate_48_months !== undefined &&
      object.annualRate_48_months !== null
    ) {
      message.annualRate_48_months = String(object.annualRate_48_months);
    } else {
      message.annualRate_48_months = "";
    }
    if (
      object.annualRate_60_months !== undefined &&
      object.annualRate_60_months !== null
    ) {
      message.annualRate_60_months = String(object.annualRate_60_months);
    } else {
      message.annualRate_60_months = "";
    }
    return message;
  },

  toJSON(message: RegionFixedDelegationAnnualRate): unknown {
    const obj: any = {};
    message.annualRate_1_months !== undefined &&
      (obj.annualRate_1_months = message.annualRate_1_months);
    message.annualRate_2_months !== undefined &&
      (obj.annualRate_2_months = message.annualRate_2_months);
    message.annualRate_3_months !== undefined &&
      (obj.annualRate_3_months = message.annualRate_3_months);
    message.annualRate_4_months !== undefined &&
      (obj.annualRate_4_months = message.annualRate_4_months);
    message.annualRate_5_months !== undefined &&
      (obj.annualRate_5_months = message.annualRate_5_months);
    message.annualRate_6_months !== undefined &&
      (obj.annualRate_6_months = message.annualRate_6_months);
    message.annualRate_7_months !== undefined &&
      (obj.annualRate_7_months = message.annualRate_7_months);
    message.annualRate_8_months !== undefined &&
      (obj.annualRate_8_months = message.annualRate_8_months);
    message.annualRate_9_months !== undefined &&
      (obj.annualRate_9_months = message.annualRate_9_months);
    message.annualRate_10_months !== undefined &&
      (obj.annualRate_10_months = message.annualRate_10_months);
    message.annualRate_11_months !== undefined &&
      (obj.annualRate_11_months = message.annualRate_11_months);
    message.annualRate_12_months !== undefined &&
      (obj.annualRate_12_months = message.annualRate_12_months);
    message.annualRate_24_months !== undefined &&
      (obj.annualRate_24_months = message.annualRate_24_months);
    message.annualRate_36_months !== undefined &&
      (obj.annualRate_36_months = message.annualRate_36_months);
    message.annualRate_48_months !== undefined &&
      (obj.annualRate_48_months = message.annualRate_48_months);
    message.annualRate_60_months !== undefined &&
      (obj.annualRate_60_months = message.annualRate_60_months);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RegionFixedDelegationAnnualRate>
  ): RegionFixedDelegationAnnualRate {
    const message = {
      ...baseRegionFixedDelegationAnnualRate,
    } as RegionFixedDelegationAnnualRate;
    if (
      object.annualRate_1_months !== undefined &&
      object.annualRate_1_months !== null
    ) {
      message.annualRate_1_months = object.annualRate_1_months;
    } else {
      message.annualRate_1_months = "";
    }
    if (
      object.annualRate_2_months !== undefined &&
      object.annualRate_2_months !== null
    ) {
      message.annualRate_2_months = object.annualRate_2_months;
    } else {
      message.annualRate_2_months = "";
    }
    if (
      object.annualRate_3_months !== undefined &&
      object.annualRate_3_months !== null
    ) {
      message.annualRate_3_months = object.annualRate_3_months;
    } else {
      message.annualRate_3_months = "";
    }
    if (
      object.annualRate_4_months !== undefined &&
      object.annualRate_4_months !== null
    ) {
      message.annualRate_4_months = object.annualRate_4_months;
    } else {
      message.annualRate_4_months = "";
    }
    if (
      object.annualRate_5_months !== undefined &&
      object.annualRate_5_months !== null
    ) {
      message.annualRate_5_months = object.annualRate_5_months;
    } else {
      message.annualRate_5_months = "";
    }
    if (
      object.annualRate_6_months !== undefined &&
      object.annualRate_6_months !== null
    ) {
      message.annualRate_6_months = object.annualRate_6_months;
    } else {
      message.annualRate_6_months = "";
    }
    if (
      object.annualRate_7_months !== undefined &&
      object.annualRate_7_months !== null
    ) {
      message.annualRate_7_months = object.annualRate_7_months;
    } else {
      message.annualRate_7_months = "";
    }
    if (
      object.annualRate_8_months !== undefined &&
      object.annualRate_8_months !== null
    ) {
      message.annualRate_8_months = object.annualRate_8_months;
    } else {
      message.annualRate_8_months = "";
    }
    if (
      object.annualRate_9_months !== undefined &&
      object.annualRate_9_months !== null
    ) {
      message.annualRate_9_months = object.annualRate_9_months;
    } else {
      message.annualRate_9_months = "";
    }
    if (
      object.annualRate_10_months !== undefined &&
      object.annualRate_10_months !== null
    ) {
      message.annualRate_10_months = object.annualRate_10_months;
    } else {
      message.annualRate_10_months = "";
    }
    if (
      object.annualRate_11_months !== undefined &&
      object.annualRate_11_months !== null
    ) {
      message.annualRate_11_months = object.annualRate_11_months;
    } else {
      message.annualRate_11_months = "";
    }
    if (
      object.annualRate_12_months !== undefined &&
      object.annualRate_12_months !== null
    ) {
      message.annualRate_12_months = object.annualRate_12_months;
    } else {
      message.annualRate_12_months = "";
    }
    if (
      object.annualRate_24_months !== undefined &&
      object.annualRate_24_months !== null
    ) {
      message.annualRate_24_months = object.annualRate_24_months;
    } else {
      message.annualRate_24_months = "";
    }
    if (
      object.annualRate_36_months !== undefined &&
      object.annualRate_36_months !== null
    ) {
      message.annualRate_36_months = object.annualRate_36_months;
    } else {
      message.annualRate_36_months = "";
    }
    if (
      object.annualRate_48_months !== undefined &&
      object.annualRate_48_months !== null
    ) {
      message.annualRate_48_months = object.annualRate_48_months;
    } else {
      message.annualRate_48_months = "";
    }
    if (
      object.annualRate_60_months !== undefined &&
      object.annualRate_60_months !== null
    ) {
      message.annualRate_60_months = object.annualRate_60_months;
    } else {
      message.annualRate_60_months = "";
    }
    return message;
  },
};

const baseRegion: object = {
  regionName: "",
  regionId: "",
  regionTotalAS: "",
  regionTotalUAC: "",
  regionAsRate: "",
  delegatorsLimit: 0,
  userMinDelegateAC: "",
  userMaxDelegateAC: "",
  regionFeeRate: "",
  regionAdminAddress: "",
  regionTotalStakeAllow: "",
  delegationAddress: "",
  baseAccountAddr: "",
  fixedDelegationAccountAddr: "",
  permanentRate: "",
  isUndelegate: false,
};

export const Region = {
  encode(message: Region, writer: Writer = Writer.create()): Writer {
    if (message.regionName !== "") {
      writer.uint32(10).string(message.regionName);
    }
    if (message.regionId !== "") {
      writer.uint32(18).string(message.regionId);
    }
    if (message.regionTotalAS !== "") {
      writer.uint32(26).string(message.regionTotalAS);
    }
    if (message.regionTotalUAC !== "") {
      writer.uint32(34).string(message.regionTotalUAC);
    }
    if (message.regionAsRate !== "") {
      writer.uint32(42).string(message.regionAsRate);
    }
    if (message.delegatorsLimit !== 0) {
      writer.uint32(48).int64(message.delegatorsLimit);
    }
    if (message.userMinDelegateAC !== "") {
      writer.uint32(58).string(message.userMinDelegateAC);
    }
    if (message.userMaxDelegateAC !== "") {
      writer.uint32(66).string(message.userMaxDelegateAC);
    }
    if (message.regionFeeRate !== "") {
      writer.uint32(74).string(message.regionFeeRate);
    }
    if (message.regionAdminAddress !== "") {
      writer.uint32(82).string(message.regionAdminAddress);
    }
    if (message.regionTotalStakeAllow !== "") {
      writer.uint32(90).string(message.regionTotalStakeAllow);
    }
    if (message.delegationAddress !== "") {
      writer.uint32(98).string(message.delegationAddress);
    }
    if (message.baseAccountAddr !== "") {
      writer.uint32(106).string(message.baseAccountAddr);
    }
    if (message.fixedDelegationAccountAddr !== "") {
      writer.uint32(114).string(message.fixedDelegationAccountAddr);
    }
    if (message.fixedDelegationAnnualRate !== undefined) {
      RegionFixedDelegationAnnualRate.encode(
        message.fixedDelegationAnnualRate,
        writer.uint32(122).fork()
      ).ldelim();
    }
    if (message.permanentRate !== "") {
      writer.uint32(130).string(message.permanentRate);
    }
    if (message.isUndelegate === true) {
      writer.uint32(136).bool(message.isUndelegate);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Region {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRegion } as Region;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.regionName = reader.string();
          break;
        case 2:
          message.regionId = reader.string();
          break;
        case 3:
          message.regionTotalAS = reader.string();
          break;
        case 4:
          message.regionTotalUAC = reader.string();
          break;
        case 5:
          message.regionAsRate = reader.string();
          break;
        case 6:
          message.delegatorsLimit = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.userMinDelegateAC = reader.string();
          break;
        case 8:
          message.userMaxDelegateAC = reader.string();
          break;
        case 9:
          message.regionFeeRate = reader.string();
          break;
        case 10:
          message.regionAdminAddress = reader.string();
          break;
        case 11:
          message.regionTotalStakeAllow = reader.string();
          break;
        case 12:
          message.delegationAddress = reader.string();
          break;
        case 13:
          message.baseAccountAddr = reader.string();
          break;
        case 14:
          message.fixedDelegationAccountAddr = reader.string();
          break;
        case 15:
          message.fixedDelegationAnnualRate = RegionFixedDelegationAnnualRate.decode(
            reader,
            reader.uint32()
          );
          break;
        case 16:
          message.permanentRate = reader.string();
          break;
        case 17:
          message.isUndelegate = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Region {
    const message = { ...baseRegion } as Region;
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
    if (object.regionTotalUAC !== undefined && object.regionTotalUAC !== null) {
      message.regionTotalUAC = String(object.regionTotalUAC);
    } else {
      message.regionTotalUAC = "";
    }
    if (object.regionAsRate !== undefined && object.regionAsRate !== null) {
      message.regionAsRate = String(object.regionAsRate);
    } else {
      message.regionAsRate = "";
    }
    if (
      object.delegatorsLimit !== undefined &&
      object.delegatorsLimit !== null
    ) {
      message.delegatorsLimit = Number(object.delegatorsLimit);
    } else {
      message.delegatorsLimit = 0;
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
    if (object.regionFeeRate !== undefined && object.regionFeeRate !== null) {
      message.regionFeeRate = String(object.regionFeeRate);
    } else {
      message.regionFeeRate = "";
    }
    if (
      object.regionAdminAddress !== undefined &&
      object.regionAdminAddress !== null
    ) {
      message.regionAdminAddress = String(object.regionAdminAddress);
    } else {
      message.regionAdminAddress = "";
    }
    if (
      object.regionTotalStakeAllow !== undefined &&
      object.regionTotalStakeAllow !== null
    ) {
      message.regionTotalStakeAllow = String(object.regionTotalStakeAllow);
    } else {
      message.regionTotalStakeAllow = "";
    }
    if (
      object.delegationAddress !== undefined &&
      object.delegationAddress !== null
    ) {
      message.delegationAddress = String(object.delegationAddress);
    } else {
      message.delegationAddress = "";
    }
    if (
      object.baseAccountAddr !== undefined &&
      object.baseAccountAddr !== null
    ) {
      message.baseAccountAddr = String(object.baseAccountAddr);
    } else {
      message.baseAccountAddr = "";
    }
    if (
      object.fixedDelegationAccountAddr !== undefined &&
      object.fixedDelegationAccountAddr !== null
    ) {
      message.fixedDelegationAccountAddr = String(
        object.fixedDelegationAccountAddr
      );
    } else {
      message.fixedDelegationAccountAddr = "";
    }
    if (
      object.fixedDelegationAnnualRate !== undefined &&
      object.fixedDelegationAnnualRate !== null
    ) {
      message.fixedDelegationAnnualRate = RegionFixedDelegationAnnualRate.fromJSON(
        object.fixedDelegationAnnualRate
      );
    } else {
      message.fixedDelegationAnnualRate = undefined;
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

  toJSON(message: Region): unknown {
    const obj: any = {};
    message.regionName !== undefined && (obj.regionName = message.regionName);
    message.regionId !== undefined && (obj.regionId = message.regionId);
    message.regionTotalAS !== undefined &&
      (obj.regionTotalAS = message.regionTotalAS);
    message.regionTotalUAC !== undefined &&
      (obj.regionTotalUAC = message.regionTotalUAC);
    message.regionAsRate !== undefined &&
      (obj.regionAsRate = message.regionAsRate);
    message.delegatorsLimit !== undefined &&
      (obj.delegatorsLimit = message.delegatorsLimit);
    message.userMinDelegateAC !== undefined &&
      (obj.userMinDelegateAC = message.userMinDelegateAC);
    message.userMaxDelegateAC !== undefined &&
      (obj.userMaxDelegateAC = message.userMaxDelegateAC);
    message.regionFeeRate !== undefined &&
      (obj.regionFeeRate = message.regionFeeRate);
    message.regionAdminAddress !== undefined &&
      (obj.regionAdminAddress = message.regionAdminAddress);
    message.regionTotalStakeAllow !== undefined &&
      (obj.regionTotalStakeAllow = message.regionTotalStakeAllow);
    message.delegationAddress !== undefined &&
      (obj.delegationAddress = message.delegationAddress);
    message.baseAccountAddr !== undefined &&
      (obj.baseAccountAddr = message.baseAccountAddr);
    message.fixedDelegationAccountAddr !== undefined &&
      (obj.fixedDelegationAccountAddr = message.fixedDelegationAccountAddr);
    message.fixedDelegationAnnualRate !== undefined &&
      (obj.fixedDelegationAnnualRate = message.fixedDelegationAnnualRate
        ? RegionFixedDelegationAnnualRate.toJSON(
            message.fixedDelegationAnnualRate
          )
        : undefined);
    message.permanentRate !== undefined &&
      (obj.permanentRate = message.permanentRate);
    message.isUndelegate !== undefined &&
      (obj.isUndelegate = message.isUndelegate);
    return obj;
  },

  fromPartial(object: DeepPartial<Region>): Region {
    const message = { ...baseRegion } as Region;
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
    if (object.regionTotalUAC !== undefined && object.regionTotalUAC !== null) {
      message.regionTotalUAC = object.regionTotalUAC;
    } else {
      message.regionTotalUAC = "";
    }
    if (object.regionAsRate !== undefined && object.regionAsRate !== null) {
      message.regionAsRate = object.regionAsRate;
    } else {
      message.regionAsRate = "";
    }
    if (
      object.delegatorsLimit !== undefined &&
      object.delegatorsLimit !== null
    ) {
      message.delegatorsLimit = object.delegatorsLimit;
    } else {
      message.delegatorsLimit = 0;
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
    if (object.regionFeeRate !== undefined && object.regionFeeRate !== null) {
      message.regionFeeRate = object.regionFeeRate;
    } else {
      message.regionFeeRate = "";
    }
    if (
      object.regionAdminAddress !== undefined &&
      object.regionAdminAddress !== null
    ) {
      message.regionAdminAddress = object.regionAdminAddress;
    } else {
      message.regionAdminAddress = "";
    }
    if (
      object.regionTotalStakeAllow !== undefined &&
      object.regionTotalStakeAllow !== null
    ) {
      message.regionTotalStakeAllow = object.regionTotalStakeAllow;
    } else {
      message.regionTotalStakeAllow = "";
    }
    if (
      object.delegationAddress !== undefined &&
      object.delegationAddress !== null
    ) {
      message.delegationAddress = object.delegationAddress;
    } else {
      message.delegationAddress = "";
    }
    if (
      object.baseAccountAddr !== undefined &&
      object.baseAccountAddr !== null
    ) {
      message.baseAccountAddr = object.baseAccountAddr;
    } else {
      message.baseAccountAddr = "";
    }
    if (
      object.fixedDelegationAccountAddr !== undefined &&
      object.fixedDelegationAccountAddr !== null
    ) {
      message.fixedDelegationAccountAddr = object.fixedDelegationAccountAddr;
    } else {
      message.fixedDelegationAccountAddr = "";
    }
    if (
      object.fixedDelegationAnnualRate !== undefined &&
      object.fixedDelegationAnnualRate !== null
    ) {
      message.fixedDelegationAnnualRate = RegionFixedDelegationAnnualRate.fromPartial(
        object.fixedDelegationAnnualRate
      );
    } else {
      message.fixedDelegationAnnualRate = undefined;
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

const baseRegionDelegators: object = { regionId: "", delegators: "" };

export const RegionDelegators = {
  encode(message: RegionDelegators, writer: Writer = Writer.create()): Writer {
    if (message.regionId !== "") {
      writer.uint32(10).string(message.regionId);
    }
    for (const v of message.delegators) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): RegionDelegators {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRegionDelegators } as RegionDelegators;
    message.delegators = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.regionId = reader.string();
          break;
        case 2:
          message.delegators.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegionDelegators {
    const message = { ...baseRegionDelegators } as RegionDelegators;
    message.delegators = [];
    if (object.regionId !== undefined && object.regionId !== null) {
      message.regionId = String(object.regionId);
    } else {
      message.regionId = "";
    }
    if (object.delegators !== undefined && object.delegators !== null) {
      for (const e of object.delegators) {
        message.delegators.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: RegionDelegators): unknown {
    const obj: any = {};
    message.regionId !== undefined && (obj.regionId = message.regionId);
    if (message.delegators) {
      obj.delegators = message.delegators.map((e) => e);
    } else {
      obj.delegators = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<RegionDelegators>): RegionDelegators {
    const message = { ...baseRegionDelegators } as RegionDelegators;
    message.delegators = [];
    if (object.regionId !== undefined && object.regionId !== null) {
      message.regionId = object.regionId;
    } else {
      message.regionId = "";
    }
    if (object.delegators !== undefined && object.delegators !== null) {
      for (const e of object.delegators) {
        message.delegators.push(e);
      }
    }
    return message;
  },
};

const baseRegionsDelegators: object = {};

export const RegionsDelegators = {
  encode(message: RegionsDelegators, writer: Writer = Writer.create()): Writer {
    for (const v of message.delegators) {
      RegionDelegators.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): RegionsDelegators {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRegionsDelegators } as RegionsDelegators;
    message.delegators = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.delegators.push(
            RegionDelegators.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegionsDelegators {
    const message = { ...baseRegionsDelegators } as RegionsDelegators;
    message.delegators = [];
    if (object.delegators !== undefined && object.delegators !== null) {
      for (const e of object.delegators) {
        message.delegators.push(RegionDelegators.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: RegionsDelegators): unknown {
    const obj: any = {};
    if (message.delegators) {
      obj.delegators = message.delegators.map((e) =>
        e ? RegionDelegators.toJSON(e) : undefined
      );
    } else {
      obj.delegators = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<RegionsDelegators>): RegionsDelegators {
    const message = { ...baseRegionsDelegators } as RegionsDelegators;
    message.delegators = [];
    if (object.delegators !== undefined && object.delegators !== null) {
      for (const e of object.delegators) {
        message.delegators.push(RegionDelegators.fromPartial(e));
      }
    }
    return message;
  },
};

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
