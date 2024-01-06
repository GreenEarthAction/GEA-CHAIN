/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "cosmos.srstaking.v1beta1";

/** Params defines the parameters for the module. */
export interface Params {
  region_delegators_limit: number;
  commission_power_denom: string;
  bond_denom: string;
  gov_power_denom: string;
  max_commission_power: string;
  denom2_commission_power_rate: string;
  gov_power2_denom_rate: string;
  gov_power2_commission_power_rate: string;
  min_delegate_bond_denom: string;
  min_delegate_commission_power: string;
  clear_period_blocks: number;
  historical_entries: number;
  unbonding_time: number;
  max_validators: number;
  virtualRegion: default_virtual_region | undefined;
}

export interface default_virtual_region {
  regionId: string;
  regionName: string;
  regionTotalAS: string;
  regionTotalStakeAllow: string;
  delegatorsLimit: number;
  regionFeeRate: string;
  userMinDelegateAC: string;
  userMaxDelegateAC: string;
  regionAdmin: string;
}

const baseParams: object = {
  region_delegators_limit: 0,
  commission_power_denom: "",
  bond_denom: "",
  gov_power_denom: "",
  max_commission_power: "",
  denom2_commission_power_rate: "",
  gov_power2_denom_rate: "",
  gov_power2_commission_power_rate: "",
  min_delegate_bond_denom: "",
  min_delegate_commission_power: "",
  clear_period_blocks: 0,
  historical_entries: 0,
  unbonding_time: 0,
  max_validators: 0,
};

export const Params = {
  encode(message: Params, writer: Writer = Writer.create()): Writer {
    if (message.region_delegators_limit !== 0) {
      writer.uint32(8).int64(message.region_delegators_limit);
    }
    if (message.commission_power_denom !== "") {
      writer.uint32(18).string(message.commission_power_denom);
    }
    if (message.bond_denom !== "") {
      writer.uint32(26).string(message.bond_denom);
    }
    if (message.gov_power_denom !== "") {
      writer.uint32(34).string(message.gov_power_denom);
    }
    if (message.max_commission_power !== "") {
      writer.uint32(42).string(message.max_commission_power);
    }
    if (message.denom2_commission_power_rate !== "") {
      writer.uint32(50).string(message.denom2_commission_power_rate);
    }
    if (message.gov_power2_denom_rate !== "") {
      writer.uint32(58).string(message.gov_power2_denom_rate);
    }
    if (message.gov_power2_commission_power_rate !== "") {
      writer.uint32(66).string(message.gov_power2_commission_power_rate);
    }
    if (message.min_delegate_bond_denom !== "") {
      writer.uint32(74).string(message.min_delegate_bond_denom);
    }
    if (message.min_delegate_commission_power !== "") {
      writer.uint32(82).string(message.min_delegate_commission_power);
    }
    if (message.clear_period_blocks !== 0) {
      writer.uint32(88).int64(message.clear_period_blocks);
    }
    if (message.historical_entries !== 0) {
      writer.uint32(96).uint32(message.historical_entries);
    }
    if (message.unbonding_time !== 0) {
      writer.uint32(104).int64(message.unbonding_time);
    }
    if (message.max_validators !== 0) {
      writer.uint32(112).uint32(message.max_validators);
    }
    if (message.virtualRegion !== undefined) {
      default_virtual_region
        .encode(message.virtualRegion, writer.uint32(122).fork())
        .ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.region_delegators_limit = longToNumber(
            reader.int64() as Long
          );
          break;
        case 2:
          message.commission_power_denom = reader.string();
          break;
        case 3:
          message.bond_denom = reader.string();
          break;
        case 4:
          message.gov_power_denom = reader.string();
          break;
        case 5:
          message.max_commission_power = reader.string();
          break;
        case 6:
          message.denom2_commission_power_rate = reader.string();
          break;
        case 7:
          message.gov_power2_denom_rate = reader.string();
          break;
        case 8:
          message.gov_power2_commission_power_rate = reader.string();
          break;
        case 9:
          message.min_delegate_bond_denom = reader.string();
          break;
        case 10:
          message.min_delegate_commission_power = reader.string();
          break;
        case 11:
          message.clear_period_blocks = longToNumber(reader.int64() as Long);
          break;
        case 12:
          message.historical_entries = reader.uint32();
          break;
        case 13:
          message.unbonding_time = longToNumber(reader.int64() as Long);
          break;
        case 14:
          message.max_validators = reader.uint32();
          break;
        case 15:
          message.virtualRegion = default_virtual_region.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    const message = { ...baseParams } as Params;
    if (
      object.region_delegators_limit !== undefined &&
      object.region_delegators_limit !== null
    ) {
      message.region_delegators_limit = Number(object.region_delegators_limit);
    } else {
      message.region_delegators_limit = 0;
    }
    if (
      object.commission_power_denom !== undefined &&
      object.commission_power_denom !== null
    ) {
      message.commission_power_denom = String(object.commission_power_denom);
    } else {
      message.commission_power_denom = "";
    }
    if (object.bond_denom !== undefined && object.bond_denom !== null) {
      message.bond_denom = String(object.bond_denom);
    } else {
      message.bond_denom = "";
    }
    if (
      object.gov_power_denom !== undefined &&
      object.gov_power_denom !== null
    ) {
      message.gov_power_denom = String(object.gov_power_denom);
    } else {
      message.gov_power_denom = "";
    }
    if (
      object.max_commission_power !== undefined &&
      object.max_commission_power !== null
    ) {
      message.max_commission_power = String(object.max_commission_power);
    } else {
      message.max_commission_power = "";
    }
    if (
      object.denom2_commission_power_rate !== undefined &&
      object.denom2_commission_power_rate !== null
    ) {
      message.denom2_commission_power_rate = String(
        object.denom2_commission_power_rate
      );
    } else {
      message.denom2_commission_power_rate = "";
    }
    if (
      object.gov_power2_denom_rate !== undefined &&
      object.gov_power2_denom_rate !== null
    ) {
      message.gov_power2_denom_rate = String(object.gov_power2_denom_rate);
    } else {
      message.gov_power2_denom_rate = "";
    }
    if (
      object.gov_power2_commission_power_rate !== undefined &&
      object.gov_power2_commission_power_rate !== null
    ) {
      message.gov_power2_commission_power_rate = String(
        object.gov_power2_commission_power_rate
      );
    } else {
      message.gov_power2_commission_power_rate = "";
    }
    if (
      object.min_delegate_bond_denom !== undefined &&
      object.min_delegate_bond_denom !== null
    ) {
      message.min_delegate_bond_denom = String(object.min_delegate_bond_denom);
    } else {
      message.min_delegate_bond_denom = "";
    }
    if (
      object.min_delegate_commission_power !== undefined &&
      object.min_delegate_commission_power !== null
    ) {
      message.min_delegate_commission_power = String(
        object.min_delegate_commission_power
      );
    } else {
      message.min_delegate_commission_power = "";
    }
    if (
      object.clear_period_blocks !== undefined &&
      object.clear_period_blocks !== null
    ) {
      message.clear_period_blocks = Number(object.clear_period_blocks);
    } else {
      message.clear_period_blocks = 0;
    }
    if (
      object.historical_entries !== undefined &&
      object.historical_entries !== null
    ) {
      message.historical_entries = Number(object.historical_entries);
    } else {
      message.historical_entries = 0;
    }
    if (object.unbonding_time !== undefined && object.unbonding_time !== null) {
      message.unbonding_time = Number(object.unbonding_time);
    } else {
      message.unbonding_time = 0;
    }
    if (object.max_validators !== undefined && object.max_validators !== null) {
      message.max_validators = Number(object.max_validators);
    } else {
      message.max_validators = 0;
    }
    if (object.virtualRegion !== undefined && object.virtualRegion !== null) {
      message.virtualRegion = default_virtual_region.fromJSON(
        object.virtualRegion
      );
    } else {
      message.virtualRegion = undefined;
    }
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.region_delegators_limit !== undefined &&
      (obj.region_delegators_limit = message.region_delegators_limit);
    message.commission_power_denom !== undefined &&
      (obj.commission_power_denom = message.commission_power_denom);
    message.bond_denom !== undefined && (obj.bond_denom = message.bond_denom);
    message.gov_power_denom !== undefined &&
      (obj.gov_power_denom = message.gov_power_denom);
    message.max_commission_power !== undefined &&
      (obj.max_commission_power = message.max_commission_power);
    message.denom2_commission_power_rate !== undefined &&
      (obj.denom2_commission_power_rate = message.denom2_commission_power_rate);
    message.gov_power2_denom_rate !== undefined &&
      (obj.gov_power2_denom_rate = message.gov_power2_denom_rate);
    message.gov_power2_commission_power_rate !== undefined &&
      (obj.gov_power2_commission_power_rate =
        message.gov_power2_commission_power_rate);
    message.min_delegate_bond_denom !== undefined &&
      (obj.min_delegate_bond_denom = message.min_delegate_bond_denom);
    message.min_delegate_commission_power !== undefined &&
      (obj.min_delegate_commission_power =
        message.min_delegate_commission_power);
    message.clear_period_blocks !== undefined &&
      (obj.clear_period_blocks = message.clear_period_blocks);
    message.historical_entries !== undefined &&
      (obj.historical_entries = message.historical_entries);
    message.unbonding_time !== undefined &&
      (obj.unbonding_time = message.unbonding_time);
    message.max_validators !== undefined &&
      (obj.max_validators = message.max_validators);
    message.virtualRegion !== undefined &&
      (obj.virtualRegion = message.virtualRegion
        ? default_virtual_region.toJSON(message.virtualRegion)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    if (
      object.region_delegators_limit !== undefined &&
      object.region_delegators_limit !== null
    ) {
      message.region_delegators_limit = object.region_delegators_limit;
    } else {
      message.region_delegators_limit = 0;
    }
    if (
      object.commission_power_denom !== undefined &&
      object.commission_power_denom !== null
    ) {
      message.commission_power_denom = object.commission_power_denom;
    } else {
      message.commission_power_denom = "";
    }
    if (object.bond_denom !== undefined && object.bond_denom !== null) {
      message.bond_denom = object.bond_denom;
    } else {
      message.bond_denom = "";
    }
    if (
      object.gov_power_denom !== undefined &&
      object.gov_power_denom !== null
    ) {
      message.gov_power_denom = object.gov_power_denom;
    } else {
      message.gov_power_denom = "";
    }
    if (
      object.max_commission_power !== undefined &&
      object.max_commission_power !== null
    ) {
      message.max_commission_power = object.max_commission_power;
    } else {
      message.max_commission_power = "";
    }
    if (
      object.denom2_commission_power_rate !== undefined &&
      object.denom2_commission_power_rate !== null
    ) {
      message.denom2_commission_power_rate =
        object.denom2_commission_power_rate;
    } else {
      message.denom2_commission_power_rate = "";
    }
    if (
      object.gov_power2_denom_rate !== undefined &&
      object.gov_power2_denom_rate !== null
    ) {
      message.gov_power2_denom_rate = object.gov_power2_denom_rate;
    } else {
      message.gov_power2_denom_rate = "";
    }
    if (
      object.gov_power2_commission_power_rate !== undefined &&
      object.gov_power2_commission_power_rate !== null
    ) {
      message.gov_power2_commission_power_rate =
        object.gov_power2_commission_power_rate;
    } else {
      message.gov_power2_commission_power_rate = "";
    }
    if (
      object.min_delegate_bond_denom !== undefined &&
      object.min_delegate_bond_denom !== null
    ) {
      message.min_delegate_bond_denom = object.min_delegate_bond_denom;
    } else {
      message.min_delegate_bond_denom = "";
    }
    if (
      object.min_delegate_commission_power !== undefined &&
      object.min_delegate_commission_power !== null
    ) {
      message.min_delegate_commission_power =
        object.min_delegate_commission_power;
    } else {
      message.min_delegate_commission_power = "";
    }
    if (
      object.clear_period_blocks !== undefined &&
      object.clear_period_blocks !== null
    ) {
      message.clear_period_blocks = object.clear_period_blocks;
    } else {
      message.clear_period_blocks = 0;
    }
    if (
      object.historical_entries !== undefined &&
      object.historical_entries !== null
    ) {
      message.historical_entries = object.historical_entries;
    } else {
      message.historical_entries = 0;
    }
    if (object.unbonding_time !== undefined && object.unbonding_time !== null) {
      message.unbonding_time = object.unbonding_time;
    } else {
      message.unbonding_time = 0;
    }
    if (object.max_validators !== undefined && object.max_validators !== null) {
      message.max_validators = object.max_validators;
    } else {
      message.max_validators = 0;
    }
    if (object.virtualRegion !== undefined && object.virtualRegion !== null) {
      message.virtualRegion = default_virtual_region.fromPartial(
        object.virtualRegion
      );
    } else {
      message.virtualRegion = undefined;
    }
    return message;
  },
};

const basedefault_virtual_region: object = {
  regionId: "",
  regionName: "",
  regionTotalAS: "",
  regionTotalStakeAllow: "",
  delegatorsLimit: 0,
  regionFeeRate: "",
  userMinDelegateAC: "",
  userMaxDelegateAC: "",
  regionAdmin: "",
};

export const default_virtual_region = {
  encode(
    message: default_virtual_region,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.regionId !== "") {
      writer.uint32(10).string(message.regionId);
    }
    if (message.regionName !== "") {
      writer.uint32(18).string(message.regionName);
    }
    if (message.regionTotalAS !== "") {
      writer.uint32(26).string(message.regionTotalAS);
    }
    if (message.regionTotalStakeAllow !== "") {
      writer.uint32(34).string(message.regionTotalStakeAllow);
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
    if (message.regionAdmin !== "") {
      writer.uint32(74).string(message.regionAdmin);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): default_virtual_region {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basedefault_virtual_region } as default_virtual_region;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.regionId = reader.string();
          break;
        case 2:
          message.regionName = reader.string();
          break;
        case 3:
          message.regionTotalAS = reader.string();
          break;
        case 4:
          message.regionTotalStakeAllow = reader.string();
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
          message.regionAdmin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): default_virtual_region {
    const message = { ...basedefault_virtual_region } as default_virtual_region;
    if (object.regionId !== undefined && object.regionId !== null) {
      message.regionId = String(object.regionId);
    } else {
      message.regionId = "";
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
      object.regionTotalStakeAllow !== undefined &&
      object.regionTotalStakeAllow !== null
    ) {
      message.regionTotalStakeAllow = String(object.regionTotalStakeAllow);
    } else {
      message.regionTotalStakeAllow = "";
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
    if (object.regionAdmin !== undefined && object.regionAdmin !== null) {
      message.regionAdmin = String(object.regionAdmin);
    } else {
      message.regionAdmin = "";
    }
    return message;
  },

  toJSON(message: default_virtual_region): unknown {
    const obj: any = {};
    message.regionId !== undefined && (obj.regionId = message.regionId);
    message.regionName !== undefined && (obj.regionName = message.regionName);
    message.regionTotalAS !== undefined &&
      (obj.regionTotalAS = message.regionTotalAS);
    message.regionTotalStakeAllow !== undefined &&
      (obj.regionTotalStakeAllow = message.regionTotalStakeAllow);
    message.delegatorsLimit !== undefined &&
      (obj.delegatorsLimit = message.delegatorsLimit);
    message.regionFeeRate !== undefined &&
      (obj.regionFeeRate = message.regionFeeRate);
    message.userMinDelegateAC !== undefined &&
      (obj.userMinDelegateAC = message.userMinDelegateAC);
    message.userMaxDelegateAC !== undefined &&
      (obj.userMaxDelegateAC = message.userMaxDelegateAC);
    message.regionAdmin !== undefined &&
      (obj.regionAdmin = message.regionAdmin);
    return obj;
  },

  fromPartial(
    object: DeepPartial<default_virtual_region>
  ): default_virtual_region {
    const message = { ...basedefault_virtual_region } as default_virtual_region;
    if (object.regionId !== undefined && object.regionId !== null) {
      message.regionId = object.regionId;
    } else {
      message.regionId = "";
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
      object.regionTotalStakeAllow !== undefined &&
      object.regionTotalStakeAllow !== null
    ) {
      message.regionTotalStakeAllow = object.regionTotalStakeAllow;
    } else {
      message.regionTotalStakeAllow = "";
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
    if (object.regionAdmin !== undefined && object.regionAdmin !== null) {
      message.regionAdmin = object.regionAdmin;
    } else {
      message.regionAdmin = "";
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
