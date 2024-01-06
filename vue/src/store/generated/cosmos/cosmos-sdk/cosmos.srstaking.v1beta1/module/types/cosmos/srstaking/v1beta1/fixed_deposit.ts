/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "cosmos.srstaking.v1beta1";

export enum FixedDepositPeriod {
  PERIOD_1_MONTHS = 0,
  PERIOD_3_MONTHS = 1,
  PERIOD_6_MONTHS = 2,
  PERIOD_12_MONTHS = 3,
  PERIOD_24_MONTHS = 4,
  PERIOD_48_MONTHS = 5,
  UNRECOGNIZED = -1,
}

export function fixedDepositPeriodFromJSON(object: any): FixedDepositPeriod {
  switch (object) {
    case 0:
    case "PERIOD_1_MONTHS":
      return FixedDepositPeriod.PERIOD_1_MONTHS;
    case 1:
    case "PERIOD_3_MONTHS":
      return FixedDepositPeriod.PERIOD_3_MONTHS;
    case 2:
    case "PERIOD_6_MONTHS":
      return FixedDepositPeriod.PERIOD_6_MONTHS;
    case 3:
    case "PERIOD_12_MONTHS":
      return FixedDepositPeriod.PERIOD_12_MONTHS;
    case 4:
    case "PERIOD_24_MONTHS":
      return FixedDepositPeriod.PERIOD_24_MONTHS;
    case 5:
    case "PERIOD_48_MONTHS":
      return FixedDepositPeriod.PERIOD_48_MONTHS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FixedDepositPeriod.UNRECOGNIZED;
  }
}

export function fixedDepositPeriodToJSON(object: FixedDepositPeriod): string {
  switch (object) {
    case FixedDepositPeriod.PERIOD_1_MONTHS:
      return "PERIOD_1_MONTHS";
    case FixedDepositPeriod.PERIOD_3_MONTHS:
      return "PERIOD_3_MONTHS";
    case FixedDepositPeriod.PERIOD_6_MONTHS:
      return "PERIOD_6_MONTHS";
    case FixedDepositPeriod.PERIOD_12_MONTHS:
      return "PERIOD_12_MONTHS";
    case FixedDepositPeriod.PERIOD_24_MONTHS:
      return "PERIOD_24_MONTHS";
    case FixedDepositPeriod.PERIOD_48_MONTHS:
      return "PERIOD_48_MONTHS";
    default:
      return "UNKNOWN";
  }
}

export enum FixedDepositState {
  ALL_STATE = 0,
  NOT_EXPIRED = 1,
  EXPIRED = 2,
  UNRECOGNIZED = -1,
}

export function fixedDepositStateFromJSON(object: any): FixedDepositState {
  switch (object) {
    case 0:
    case "ALL_STATE":
      return FixedDepositState.ALL_STATE;
    case 1:
    case "NOT_EXPIRED":
      return FixedDepositState.NOT_EXPIRED;
    case 2:
    case "EXPIRED":
      return FixedDepositState.EXPIRED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FixedDepositState.UNRECOGNIZED;
  }
}

export function fixedDepositStateToJSON(object: FixedDepositState): string {
  switch (object) {
    case FixedDepositState.ALL_STATE:
      return "ALL_STATE";
    case FixedDepositState.NOT_EXPIRED:
      return "NOT_EXPIRED";
    case FixedDepositState.EXPIRED:
      return "EXPIRED";
    default:
      return "UNKNOWN";
  }
}

export interface FixedDeposit {
  id: number;
  account: string;
  denom: string;
  amount: string;
  interest: string;
  start_height: number;
  end_height: number;
  period: FixedDepositPeriod;
  state: FixedDepositState;
}

const baseFixedDeposit: object = {
  id: 0,
  account: "",
  denom: "",
  amount: "",
  interest: "",
  start_height: 0,
  end_height: 0,
  period: 0,
  state: 0,
};

export const FixedDeposit = {
  encode(message: FixedDeposit, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.account !== "") {
      writer.uint32(18).string(message.account);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    if (message.interest !== "") {
      writer.uint32(42).string(message.interest);
    }
    if (message.start_height !== 0) {
      writer.uint32(48).int64(message.start_height);
    }
    if (message.end_height !== 0) {
      writer.uint32(56).int64(message.end_height);
    }
    if (message.period !== 0) {
      writer.uint32(64).int32(message.period);
    }
    if (message.state !== 0) {
      writer.uint32(72).int32(message.state);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): FixedDeposit {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFixedDeposit } as FixedDeposit;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.account = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        case 4:
          message.amount = reader.string();
          break;
        case 5:
          message.interest = reader.string();
          break;
        case 6:
          message.start_height = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.end_height = longToNumber(reader.int64() as Long);
          break;
        case 8:
          message.period = reader.int32() as any;
          break;
        case 9:
          message.state = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FixedDeposit {
    const message = { ...baseFixedDeposit } as FixedDeposit;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
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
    if (object.interest !== undefined && object.interest !== null) {
      message.interest = String(object.interest);
    } else {
      message.interest = "";
    }
    if (object.start_height !== undefined && object.start_height !== null) {
      message.start_height = Number(object.start_height);
    } else {
      message.start_height = 0;
    }
    if (object.end_height !== undefined && object.end_height !== null) {
      message.end_height = Number(object.end_height);
    } else {
      message.end_height = 0;
    }
    if (object.period !== undefined && object.period !== null) {
      message.period = fixedDepositPeriodFromJSON(object.period);
    } else {
      message.period = 0;
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = fixedDepositStateFromJSON(object.state);
    } else {
      message.state = 0;
    }
    return message;
  },

  toJSON(message: FixedDeposit): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.account !== undefined && (obj.account = message.account);
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    message.interest !== undefined && (obj.interest = message.interest);
    message.start_height !== undefined &&
      (obj.start_height = message.start_height);
    message.end_height !== undefined && (obj.end_height = message.end_height);
    message.period !== undefined &&
      (obj.period = fixedDepositPeriodToJSON(message.period));
    message.state !== undefined &&
      (obj.state = fixedDepositStateToJSON(message.state));
    return obj;
  },

  fromPartial(object: DeepPartial<FixedDeposit>): FixedDeposit {
    const message = { ...baseFixedDeposit } as FixedDeposit;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
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
    if (object.interest !== undefined && object.interest !== null) {
      message.interest = object.interest;
    } else {
      message.interest = "";
    }
    if (object.start_height !== undefined && object.start_height !== null) {
      message.start_height = object.start_height;
    } else {
      message.start_height = 0;
    }
    if (object.end_height !== undefined && object.end_height !== null) {
      message.end_height = object.end_height;
    } else {
      message.end_height = 0;
    }
    if (object.period !== undefined && object.period !== null) {
      message.period = object.period;
    } else {
      message.period = 0;
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    } else {
      message.state = 0;
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
