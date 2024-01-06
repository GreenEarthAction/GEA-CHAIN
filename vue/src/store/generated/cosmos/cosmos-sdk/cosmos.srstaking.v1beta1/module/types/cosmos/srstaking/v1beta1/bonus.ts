/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "cosmos.srstaking.v1beta1";

export interface Bonus {
  account: string;
  regionId: string;
  acAmount: string;
  startEpoch: number;
}

const baseBonus: object = {
  account: "",
  regionId: "",
  acAmount: "",
  startEpoch: 0,
};

export const Bonus = {
  encode(message: Bonus, writer: Writer = Writer.create()): Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.regionId !== "") {
      writer.uint32(18).string(message.regionId);
    }
    if (message.acAmount !== "") {
      writer.uint32(26).string(message.acAmount);
    }
    if (message.startEpoch !== 0) {
      writer.uint32(32).int64(message.startEpoch);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Bonus {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBonus } as Bonus;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.regionId = reader.string();
          break;
        case 3:
          message.acAmount = reader.string();
          break;
        case 4:
          message.startEpoch = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Bonus {
    const message = { ...baseBonus } as Bonus;
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
    if (object.acAmount !== undefined && object.acAmount !== null) {
      message.acAmount = String(object.acAmount);
    } else {
      message.acAmount = "";
    }
    if (object.startEpoch !== undefined && object.startEpoch !== null) {
      message.startEpoch = Number(object.startEpoch);
    } else {
      message.startEpoch = 0;
    }
    return message;
  },

  toJSON(message: Bonus): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.regionId !== undefined && (obj.regionId = message.regionId);
    message.acAmount !== undefined && (obj.acAmount = message.acAmount);
    message.startEpoch !== undefined && (obj.startEpoch = message.startEpoch);
    return obj;
  },

  fromPartial(object: DeepPartial<Bonus>): Bonus {
    const message = { ...baseBonus } as Bonus;
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
    if (object.acAmount !== undefined && object.acAmount !== null) {
      message.acAmount = object.acAmount;
    } else {
      message.acAmount = "";
    }
    if (object.startEpoch !== undefined && object.startEpoch !== null) {
      message.startEpoch = object.startEpoch;
    } else {
      message.startEpoch = 0;
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
