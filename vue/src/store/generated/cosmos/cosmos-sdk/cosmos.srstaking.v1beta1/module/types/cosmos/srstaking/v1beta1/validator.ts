/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "cosmos.srstaking.v1beta1";

/** ValidatorStatus is the status of a validator. */
export enum ValidatorStatus {
  /** STATUS_ON_WORKING - ON_WORKING defines an invalid validator status. */
  STATUS_ON_WORKING = 0,
  /** STATUS_JAILED - JAILED defines a validator that is jailed. */
  STATUS_JAILED = 1,
  /** STATUS_OFF_WORK - OFF_WORKING defines a validator that is off_working. */
  STATUS_OFF_WORK = 2,
  UNRECOGNIZED = -1,
}

export function validatorStatusFromJSON(object: any): ValidatorStatus {
  switch (object) {
    case 0:
    case "STATUS_ON_WORKING":
      return ValidatorStatus.STATUS_ON_WORKING;
    case 1:
    case "STATUS_JAILED":
      return ValidatorStatus.STATUS_JAILED;
    case 2:
    case "STATUS_OFF_WORK":
      return ValidatorStatus.STATUS_OFF_WORK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ValidatorStatus.UNRECOGNIZED;
  }
}

export function validatorStatusToJSON(object: ValidatorStatus): string {
  switch (object) {
    case ValidatorStatus.STATUS_ON_WORKING:
      return "STATUS_ON_WORKING";
    case ValidatorStatus.STATUS_JAILED:
      return "STATUS_JAILED";
    case ValidatorStatus.STATUS_OFF_WORK:
      return "STATUS_OFF_WORK";
    default:
      return "UNKNOWN";
  }
}

export interface Validator {
  /**
   * operator_address defines the address of the validator's operator; bech
   * encoded in JSON.
   */
  operator_address: string;
  /**
   * consensus_pubkey is the consensus public key of the validator, as a
   * Protobuf Any.
   */
  consensus_pubkey: string;
  /** description defines the description terms for the validator. */
  description: Description | undefined;
  /** status is the validator status (bonded/unbonding/unbonded). */
  status: ValidatorStatus;
  RegionName: string;
  Sort: number;
}

/** Description defines a validator description. */
export interface Description {
  /** moniker defines a human-readable name for the validator. */
  moniker: string;
  /** identity defines an optional identity signature (ex. UPort or Keybase). */
  identity: string;
  /** website defines an optional website link. */
  website: string;
  /** security_contact defines an optional email for security contact. */
  security_contact: string;
  /** details define other optional details. */
  details: string;
}

const baseValidator: object = {
  operator_address: "",
  consensus_pubkey: "",
  status: 0,
  RegionName: "",
  Sort: 0,
};

export const Validator = {
  encode(message: Validator, writer: Writer = Writer.create()): Writer {
    if (message.operator_address !== "") {
      writer.uint32(10).string(message.operator_address);
    }
    if (message.consensus_pubkey !== "") {
      writer.uint32(18).string(message.consensus_pubkey);
    }
    if (message.description !== undefined) {
      Description.encode(
        message.description,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    if (message.RegionName !== "") {
      writer.uint32(42).string(message.RegionName);
    }
    if (message.Sort !== 0) {
      writer.uint32(48).int64(message.Sort);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Validator {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseValidator } as Validator;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator_address = reader.string();
          break;
        case 2:
          message.consensus_pubkey = reader.string();
          break;
        case 3:
          message.description = Description.decode(reader, reader.uint32());
          break;
        case 4:
          message.status = reader.int32() as any;
          break;
        case 5:
          message.RegionName = reader.string();
          break;
        case 6:
          message.Sort = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Validator {
    const message = { ...baseValidator } as Validator;
    if (
      object.operator_address !== undefined &&
      object.operator_address !== null
    ) {
      message.operator_address = String(object.operator_address);
    } else {
      message.operator_address = "";
    }
    if (
      object.consensus_pubkey !== undefined &&
      object.consensus_pubkey !== null
    ) {
      message.consensus_pubkey = String(object.consensus_pubkey);
    } else {
      message.consensus_pubkey = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = Description.fromJSON(object.description);
    } else {
      message.description = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = validatorStatusFromJSON(object.status);
    } else {
      message.status = 0;
    }
    if (object.RegionName !== undefined && object.RegionName !== null) {
      message.RegionName = String(object.RegionName);
    } else {
      message.RegionName = "";
    }
    if (object.Sort !== undefined && object.Sort !== null) {
      message.Sort = Number(object.Sort);
    } else {
      message.Sort = 0;
    }
    return message;
  },

  toJSON(message: Validator): unknown {
    const obj: any = {};
    message.operator_address !== undefined &&
      (obj.operator_address = message.operator_address);
    message.consensus_pubkey !== undefined &&
      (obj.consensus_pubkey = message.consensus_pubkey);
    message.description !== undefined &&
      (obj.description = message.description
        ? Description.toJSON(message.description)
        : undefined);
    message.status !== undefined &&
      (obj.status = validatorStatusToJSON(message.status));
    message.RegionName !== undefined && (obj.RegionName = message.RegionName);
    message.Sort !== undefined && (obj.Sort = message.Sort);
    return obj;
  },

  fromPartial(object: DeepPartial<Validator>): Validator {
    const message = { ...baseValidator } as Validator;
    if (
      object.operator_address !== undefined &&
      object.operator_address !== null
    ) {
      message.operator_address = object.operator_address;
    } else {
      message.operator_address = "";
    }
    if (
      object.consensus_pubkey !== undefined &&
      object.consensus_pubkey !== null
    ) {
      message.consensus_pubkey = object.consensus_pubkey;
    } else {
      message.consensus_pubkey = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = Description.fromPartial(object.description);
    } else {
      message.description = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = 0;
    }
    if (object.RegionName !== undefined && object.RegionName !== null) {
      message.RegionName = object.RegionName;
    } else {
      message.RegionName = "";
    }
    if (object.Sort !== undefined && object.Sort !== null) {
      message.Sort = object.Sort;
    } else {
      message.Sort = 0;
    }
    return message;
  },
};

const baseDescription: object = {
  moniker: "",
  identity: "",
  website: "",
  security_contact: "",
  details: "",
};

export const Description = {
  encode(message: Description, writer: Writer = Writer.create()): Writer {
    if (message.moniker !== "") {
      writer.uint32(10).string(message.moniker);
    }
    if (message.identity !== "") {
      writer.uint32(18).string(message.identity);
    }
    if (message.website !== "") {
      writer.uint32(26).string(message.website);
    }
    if (message.security_contact !== "") {
      writer.uint32(34).string(message.security_contact);
    }
    if (message.details !== "") {
      writer.uint32(42).string(message.details);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Description {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDescription } as Description;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moniker = reader.string();
          break;
        case 2:
          message.identity = reader.string();
          break;
        case 3:
          message.website = reader.string();
          break;
        case 4:
          message.security_contact = reader.string();
          break;
        case 5:
          message.details = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Description {
    const message = { ...baseDescription } as Description;
    if (object.moniker !== undefined && object.moniker !== null) {
      message.moniker = String(object.moniker);
    } else {
      message.moniker = "";
    }
    if (object.identity !== undefined && object.identity !== null) {
      message.identity = String(object.identity);
    } else {
      message.identity = "";
    }
    if (object.website !== undefined && object.website !== null) {
      message.website = String(object.website);
    } else {
      message.website = "";
    }
    if (
      object.security_contact !== undefined &&
      object.security_contact !== null
    ) {
      message.security_contact = String(object.security_contact);
    } else {
      message.security_contact = "";
    }
    if (object.details !== undefined && object.details !== null) {
      message.details = String(object.details);
    } else {
      message.details = "";
    }
    return message;
  },

  toJSON(message: Description): unknown {
    const obj: any = {};
    message.moniker !== undefined && (obj.moniker = message.moniker);
    message.identity !== undefined && (obj.identity = message.identity);
    message.website !== undefined && (obj.website = message.website);
    message.security_contact !== undefined &&
      (obj.security_contact = message.security_contact);
    message.details !== undefined && (obj.details = message.details);
    return obj;
  },

  fromPartial(object: DeepPartial<Description>): Description {
    const message = { ...baseDescription } as Description;
    if (object.moniker !== undefined && object.moniker !== null) {
      message.moniker = object.moniker;
    } else {
      message.moniker = "";
    }
    if (object.identity !== undefined && object.identity !== null) {
      message.identity = object.identity;
    } else {
      message.identity = "";
    }
    if (object.website !== undefined && object.website !== null) {
      message.website = object.website;
    } else {
      message.website = "";
    }
    if (
      object.security_contact !== undefined &&
      object.security_contact !== null
    ) {
      message.security_contact = object.security_contact;
    } else {
      message.security_contact = "";
    }
    if (object.details !== undefined && object.details !== null) {
      message.details = object.details;
    } else {
      message.details = "";
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
