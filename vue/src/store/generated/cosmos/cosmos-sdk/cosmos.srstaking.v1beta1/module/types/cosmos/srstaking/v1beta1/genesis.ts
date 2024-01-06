/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Params } from "../../../cosmos/srstaking/v1beta1/params";
import { Region } from "../../../cosmos/srstaking/v1beta1/region";
import { Validator } from "../../../cosmos/srstaking/v1beta1/validator";
import {
  Delegation,
  FixedDelegation,
  FixedDelegationItem,
} from "../../../cosmos/srstaking/v1beta1/delegation";
import { Bonus } from "../../../cosmos/srstaking/v1beta1/bonus";
import { Kyc } from "../../../cosmos/srstaking/v1beta1/kyc";
import { VaultParams } from "../../../cosmos/srstaking/v1beta1/vault_params";

export const protobufPackage = "cosmos.srstaking.v1beta1";

/** GenesisState defines the srstaking module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  regionList: Region[];
  validatorList: Validator[];
  delegationList: Delegation[];
  exported: boolean;
  /**
   * repeated FixedDeposit fixedDepositList = 7 [ (gogoproto.nullable) = false ];
   *  uint64 fixedDepositCount = 8;
   */
  bonusList: Bonus[];
  /** repeated RegionVault regionVaultList = 10 [(gogoproto.nullable) = false]; */
  kycList: Kyc[];
  vaultParams: VaultParams | undefined;
  fixedDelegationList: FixedDelegation[];
  fixedDelegationItemList: FixedDelegationItem[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  fixedDelegationItemCount: number;
}

const baseGenesisState: object = {
  exported: false,
  fixedDelegationItemCount: 0,
};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.regionList) {
      Region.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.validatorList) {
      Validator.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.delegationList) {
      Delegation.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.exported === true) {
      writer.uint32(40).bool(message.exported);
    }
    for (const v of message.bonusList) {
      Bonus.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.kycList) {
      Kyc.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.vaultParams !== undefined) {
      VaultParams.encode(
        message.vaultParams,
        writer.uint32(74).fork()
      ).ldelim();
    }
    for (const v of message.fixedDelegationList) {
      FixedDelegation.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.fixedDelegationItemList) {
      FixedDelegationItem.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    if (message.fixedDelegationItemCount !== 0) {
      writer.uint32(96).uint64(message.fixedDelegationItemCount);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.regionList = [];
    message.validatorList = [];
    message.delegationList = [];
    message.bonusList = [];
    message.kycList = [];
    message.fixedDelegationList = [];
    message.fixedDelegationItemList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.regionList.push(Region.decode(reader, reader.uint32()));
          break;
        case 3:
          message.validatorList.push(Validator.decode(reader, reader.uint32()));
          break;
        case 4:
          message.delegationList.push(
            Delegation.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.exported = reader.bool();
          break;
        case 7:
          message.bonusList.push(Bonus.decode(reader, reader.uint32()));
          break;
        case 8:
          message.kycList.push(Kyc.decode(reader, reader.uint32()));
          break;
        case 9:
          message.vaultParams = VaultParams.decode(reader, reader.uint32());
          break;
        case 10:
          message.fixedDelegationList.push(
            FixedDelegation.decode(reader, reader.uint32())
          );
          break;
        case 11:
          message.fixedDelegationItemList.push(
            FixedDelegationItem.decode(reader, reader.uint32())
          );
          break;
        case 12:
          message.fixedDelegationItemCount = longToNumber(
            reader.uint64() as Long
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.regionList = [];
    message.validatorList = [];
    message.delegationList = [];
    message.bonusList = [];
    message.kycList = [];
    message.fixedDelegationList = [];
    message.fixedDelegationItemList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.regionList !== undefined && object.regionList !== null) {
      for (const e of object.regionList) {
        message.regionList.push(Region.fromJSON(e));
      }
    }
    if (object.validatorList !== undefined && object.validatorList !== null) {
      for (const e of object.validatorList) {
        message.validatorList.push(Validator.fromJSON(e));
      }
    }
    if (object.delegationList !== undefined && object.delegationList !== null) {
      for (const e of object.delegationList) {
        message.delegationList.push(Delegation.fromJSON(e));
      }
    }
    if (object.exported !== undefined && object.exported !== null) {
      message.exported = Boolean(object.exported);
    } else {
      message.exported = false;
    }
    if (object.bonusList !== undefined && object.bonusList !== null) {
      for (const e of object.bonusList) {
        message.bonusList.push(Bonus.fromJSON(e));
      }
    }
    if (object.kycList !== undefined && object.kycList !== null) {
      for (const e of object.kycList) {
        message.kycList.push(Kyc.fromJSON(e));
      }
    }
    if (object.vaultParams !== undefined && object.vaultParams !== null) {
      message.vaultParams = VaultParams.fromJSON(object.vaultParams);
    } else {
      message.vaultParams = undefined;
    }
    if (
      object.fixedDelegationList !== undefined &&
      object.fixedDelegationList !== null
    ) {
      for (const e of object.fixedDelegationList) {
        message.fixedDelegationList.push(FixedDelegation.fromJSON(e));
      }
    }
    if (
      object.fixedDelegationItemList !== undefined &&
      object.fixedDelegationItemList !== null
    ) {
      for (const e of object.fixedDelegationItemList) {
        message.fixedDelegationItemList.push(FixedDelegationItem.fromJSON(e));
      }
    }
    if (
      object.fixedDelegationItemCount !== undefined &&
      object.fixedDelegationItemCount !== null
    ) {
      message.fixedDelegationItemCount = Number(
        object.fixedDelegationItemCount
      );
    } else {
      message.fixedDelegationItemCount = 0;
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.regionList) {
      obj.regionList = message.regionList.map((e) =>
        e ? Region.toJSON(e) : undefined
      );
    } else {
      obj.regionList = [];
    }
    if (message.validatorList) {
      obj.validatorList = message.validatorList.map((e) =>
        e ? Validator.toJSON(e) : undefined
      );
    } else {
      obj.validatorList = [];
    }
    if (message.delegationList) {
      obj.delegationList = message.delegationList.map((e) =>
        e ? Delegation.toJSON(e) : undefined
      );
    } else {
      obj.delegationList = [];
    }
    message.exported !== undefined && (obj.exported = message.exported);
    if (message.bonusList) {
      obj.bonusList = message.bonusList.map((e) =>
        e ? Bonus.toJSON(e) : undefined
      );
    } else {
      obj.bonusList = [];
    }
    if (message.kycList) {
      obj.kycList = message.kycList.map((e) => (e ? Kyc.toJSON(e) : undefined));
    } else {
      obj.kycList = [];
    }
    message.vaultParams !== undefined &&
      (obj.vaultParams = message.vaultParams
        ? VaultParams.toJSON(message.vaultParams)
        : undefined);
    if (message.fixedDelegationList) {
      obj.fixedDelegationList = message.fixedDelegationList.map((e) =>
        e ? FixedDelegation.toJSON(e) : undefined
      );
    } else {
      obj.fixedDelegationList = [];
    }
    if (message.fixedDelegationItemList) {
      obj.fixedDelegationItemList = message.fixedDelegationItemList.map((e) =>
        e ? FixedDelegationItem.toJSON(e) : undefined
      );
    } else {
      obj.fixedDelegationItemList = [];
    }
    message.fixedDelegationItemCount !== undefined &&
      (obj.fixedDelegationItemCount = message.fixedDelegationItemCount);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.regionList = [];
    message.validatorList = [];
    message.delegationList = [];
    message.bonusList = [];
    message.kycList = [];
    message.fixedDelegationList = [];
    message.fixedDelegationItemList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.regionList !== undefined && object.regionList !== null) {
      for (const e of object.regionList) {
        message.regionList.push(Region.fromPartial(e));
      }
    }
    if (object.validatorList !== undefined && object.validatorList !== null) {
      for (const e of object.validatorList) {
        message.validatorList.push(Validator.fromPartial(e));
      }
    }
    if (object.delegationList !== undefined && object.delegationList !== null) {
      for (const e of object.delegationList) {
        message.delegationList.push(Delegation.fromPartial(e));
      }
    }
    if (object.exported !== undefined && object.exported !== null) {
      message.exported = object.exported;
    } else {
      message.exported = false;
    }
    if (object.bonusList !== undefined && object.bonusList !== null) {
      for (const e of object.bonusList) {
        message.bonusList.push(Bonus.fromPartial(e));
      }
    }
    if (object.kycList !== undefined && object.kycList !== null) {
      for (const e of object.kycList) {
        message.kycList.push(Kyc.fromPartial(e));
      }
    }
    if (object.vaultParams !== undefined && object.vaultParams !== null) {
      message.vaultParams = VaultParams.fromPartial(object.vaultParams);
    } else {
      message.vaultParams = undefined;
    }
    if (
      object.fixedDelegationList !== undefined &&
      object.fixedDelegationList !== null
    ) {
      for (const e of object.fixedDelegationList) {
        message.fixedDelegationList.push(FixedDelegation.fromPartial(e));
      }
    }
    if (
      object.fixedDelegationItemList !== undefined &&
      object.fixedDelegationItemList !== null
    ) {
      for (const e of object.fixedDelegationItemList) {
        message.fixedDelegationItemList.push(
          FixedDelegationItem.fromPartial(e)
        );
      }
    }
    if (
      object.fixedDelegationItemCount !== undefined &&
      object.fixedDelegationItemCount !== null
    ) {
      message.fixedDelegationItemCount = object.fixedDelegationItemCount;
    } else {
      message.fixedDelegationItemCount = 0;
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
