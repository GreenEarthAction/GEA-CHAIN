/* eslint-disable */
import { Timestamp } from "../../../google/protobuf/timestamp";
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "cosmos.srstaking.v1beta1";

export enum ApplyEvent {
  APPLY_EVENT_REGION = 0,
  APPLY_EVENT_DELEGATION = 1,
  APPLY_EVENT_VALIDATOR = 2,
  UNRECOGNIZED = -1,
}

export function applyEventFromJSON(object: any): ApplyEvent {
  switch (object) {
    case 0:
    case "APPLY_EVENT_REGION":
      return ApplyEvent.APPLY_EVENT_REGION;
    case 1:
    case "APPLY_EVENT_DELEGATION":
      return ApplyEvent.APPLY_EVENT_DELEGATION;
    case 2:
    case "APPLY_EVENT_VALIDATOR":
      return ApplyEvent.APPLY_EVENT_VALIDATOR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ApplyEvent.UNRECOGNIZED;
  }
}

export function applyEventToJSON(object: ApplyEvent): string {
  switch (object) {
    case ApplyEvent.APPLY_EVENT_REGION:
      return "APPLY_EVENT_REGION";
    case ApplyEvent.APPLY_EVENT_DELEGATION:
      return "APPLY_EVENT_DELEGATION";
    case ApplyEvent.APPLY_EVENT_VALIDATOR:
      return "APPLY_EVENT_VALIDATOR";
    default:
      return "UNKNOWN";
  }
}

export enum ApplyAction {
  APPLY_ACTION_CREATE_REGION = 0,
  APPLY_ACTION_DELETE_REGION = 1,
  APPLY_ACTION_UPDATE_REGION = 2,
  APPLY_ACTION_CREATE_DELEGATE = 3,
  APPLY_ACTION_DELEGATE = 4,
  APPLY_ACTION_UNDELEGATE = 5,
  APPLY_ACTION_EXIT_DELEGATE = 6,
  APPLY_ACTION_CREATE_VALIDATOR = 7,
  APPLY_ACTION_KICK_VALIDATOR = 8,
  UNRECOGNIZED = -1,
}

export function applyActionFromJSON(object: any): ApplyAction {
  switch (object) {
    case 0:
    case "APPLY_ACTION_CREATE_REGION":
      return ApplyAction.APPLY_ACTION_CREATE_REGION;
    case 1:
    case "APPLY_ACTION_DELETE_REGION":
      return ApplyAction.APPLY_ACTION_DELETE_REGION;
    case 2:
    case "APPLY_ACTION_UPDATE_REGION":
      return ApplyAction.APPLY_ACTION_UPDATE_REGION;
    case 3:
    case "APPLY_ACTION_CREATE_DELEGATE":
      return ApplyAction.APPLY_ACTION_CREATE_DELEGATE;
    case 4:
    case "APPLY_ACTION_DELEGATE":
      return ApplyAction.APPLY_ACTION_DELEGATE;
    case 5:
    case "APPLY_ACTION_UNDELEGATE":
      return ApplyAction.APPLY_ACTION_UNDELEGATE;
    case 6:
    case "APPLY_ACTION_EXIT_DELEGATE":
      return ApplyAction.APPLY_ACTION_EXIT_DELEGATE;
    case 7:
    case "APPLY_ACTION_CREATE_VALIDATOR":
      return ApplyAction.APPLY_ACTION_CREATE_VALIDATOR;
    case 8:
    case "APPLY_ACTION_KICK_VALIDATOR":
      return ApplyAction.APPLY_ACTION_KICK_VALIDATOR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ApplyAction.UNRECOGNIZED;
  }
}

export function applyActionToJSON(object: ApplyAction): string {
  switch (object) {
    case ApplyAction.APPLY_ACTION_CREATE_REGION:
      return "APPLY_ACTION_CREATE_REGION";
    case ApplyAction.APPLY_ACTION_DELETE_REGION:
      return "APPLY_ACTION_DELETE_REGION";
    case ApplyAction.APPLY_ACTION_UPDATE_REGION:
      return "APPLY_ACTION_UPDATE_REGION";
    case ApplyAction.APPLY_ACTION_CREATE_DELEGATE:
      return "APPLY_ACTION_CREATE_DELEGATE";
    case ApplyAction.APPLY_ACTION_DELEGATE:
      return "APPLY_ACTION_DELEGATE";
    case ApplyAction.APPLY_ACTION_UNDELEGATE:
      return "APPLY_ACTION_UNDELEGATE";
    case ApplyAction.APPLY_ACTION_EXIT_DELEGATE:
      return "APPLY_ACTION_EXIT_DELEGATE";
    case ApplyAction.APPLY_ACTION_CREATE_VALIDATOR:
      return "APPLY_ACTION_CREATE_VALIDATOR";
    case ApplyAction.APPLY_ACTION_KICK_VALIDATOR:
      return "APPLY_ACTION_KICK_VALIDATOR";
    default:
      return "UNKNOWN";
  }
}

export interface Notify {
  event: ApplyEvent;
  action: ApplyAction;
  blockHeight: number;
  createdAt: Date | undefined;
  dataCtx: string[];
}

export interface Notifies {
  notifies: Notify[];
}

export interface ApplyPeriod {
  periodBlocks: number;
  prevPeriodNonce: number;
  nextPeriodNonce: number;
  prevPeriodBlockHeight: number;
  nextPeriodBlockHeight: number;
  ignoreNotify: Notify[];
}

const baseNotify: object = { event: 0, action: 0, blockHeight: 0, dataCtx: "" };

export const Notify = {
  encode(message: Notify, writer: Writer = Writer.create()): Writer {
    if (message.event !== 0) {
      writer.uint32(8).int32(message.event);
    }
    if (message.action !== 0) {
      writer.uint32(16).int32(message.action);
    }
    if (message.blockHeight !== 0) {
      writer.uint32(24).int64(message.blockHeight);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(34).fork()
      ).ldelim();
    }
    for (const v of message.dataCtx) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Notify {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNotify } as Notify;
    message.dataCtx = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.event = reader.int32() as any;
          break;
        case 2:
          message.action = reader.int32() as any;
          break;
        case 3:
          message.blockHeight = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.dataCtx.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Notify {
    const message = { ...baseNotify } as Notify;
    message.dataCtx = [];
    if (object.event !== undefined && object.event !== null) {
      message.event = applyEventFromJSON(object.event);
    } else {
      message.event = 0;
    }
    if (object.action !== undefined && object.action !== null) {
      message.action = applyActionFromJSON(object.action);
    } else {
      message.action = 0;
    }
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = Number(object.blockHeight);
    } else {
      message.blockHeight = 0;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = fromJsonTimestamp(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.dataCtx !== undefined && object.dataCtx !== null) {
      for (const e of object.dataCtx) {
        message.dataCtx.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: Notify): unknown {
    const obj: any = {};
    message.event !== undefined &&
      (obj.event = applyEventToJSON(message.event));
    message.action !== undefined &&
      (obj.action = applyActionToJSON(message.action));
    message.blockHeight !== undefined &&
      (obj.blockHeight = message.blockHeight);
    message.createdAt !== undefined &&
      (obj.createdAt =
        message.createdAt !== undefined
          ? message.createdAt.toISOString()
          : null);
    if (message.dataCtx) {
      obj.dataCtx = message.dataCtx.map((e) => e);
    } else {
      obj.dataCtx = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Notify>): Notify {
    const message = { ...baseNotify } as Notify;
    message.dataCtx = [];
    if (object.event !== undefined && object.event !== null) {
      message.event = object.event;
    } else {
      message.event = 0;
    }
    if (object.action !== undefined && object.action !== null) {
      message.action = object.action;
    } else {
      message.action = 0;
    }
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = object.blockHeight;
    } else {
      message.blockHeight = 0;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = undefined;
    }
    if (object.dataCtx !== undefined && object.dataCtx !== null) {
      for (const e of object.dataCtx) {
        message.dataCtx.push(e);
      }
    }
    return message;
  },
};

const baseNotifies: object = {};

export const Notifies = {
  encode(message: Notifies, writer: Writer = Writer.create()): Writer {
    for (const v of message.notifies) {
      Notify.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Notifies {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNotifies } as Notifies;
    message.notifies = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.notifies.push(Notify.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Notifies {
    const message = { ...baseNotifies } as Notifies;
    message.notifies = [];
    if (object.notifies !== undefined && object.notifies !== null) {
      for (const e of object.notifies) {
        message.notifies.push(Notify.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: Notifies): unknown {
    const obj: any = {};
    if (message.notifies) {
      obj.notifies = message.notifies.map((e) =>
        e ? Notify.toJSON(e) : undefined
      );
    } else {
      obj.notifies = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Notifies>): Notifies {
    const message = { ...baseNotifies } as Notifies;
    message.notifies = [];
    if (object.notifies !== undefined && object.notifies !== null) {
      for (const e of object.notifies) {
        message.notifies.push(Notify.fromPartial(e));
      }
    }
    return message;
  },
};

const baseApplyPeriod: object = {
  periodBlocks: 0,
  prevPeriodNonce: 0,
  nextPeriodNonce: 0,
  prevPeriodBlockHeight: 0,
  nextPeriodBlockHeight: 0,
};

export const ApplyPeriod = {
  encode(message: ApplyPeriod, writer: Writer = Writer.create()): Writer {
    if (message.periodBlocks !== 0) {
      writer.uint32(8).int64(message.periodBlocks);
    }
    if (message.prevPeriodNonce !== 0) {
      writer.uint32(16).int64(message.prevPeriodNonce);
    }
    if (message.nextPeriodNonce !== 0) {
      writer.uint32(24).int64(message.nextPeriodNonce);
    }
    if (message.prevPeriodBlockHeight !== 0) {
      writer.uint32(32).int64(message.prevPeriodBlockHeight);
    }
    if (message.nextPeriodBlockHeight !== 0) {
      writer.uint32(40).int64(message.nextPeriodBlockHeight);
    }
    for (const v of message.ignoreNotify) {
      Notify.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ApplyPeriod {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseApplyPeriod } as ApplyPeriod;
    message.ignoreNotify = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.periodBlocks = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.prevPeriodNonce = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.nextPeriodNonce = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.prevPeriodBlockHeight = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.nextPeriodBlockHeight = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.ignoreNotify.push(Notify.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ApplyPeriod {
    const message = { ...baseApplyPeriod } as ApplyPeriod;
    message.ignoreNotify = [];
    if (object.periodBlocks !== undefined && object.periodBlocks !== null) {
      message.periodBlocks = Number(object.periodBlocks);
    } else {
      message.periodBlocks = 0;
    }
    if (
      object.prevPeriodNonce !== undefined &&
      object.prevPeriodNonce !== null
    ) {
      message.prevPeriodNonce = Number(object.prevPeriodNonce);
    } else {
      message.prevPeriodNonce = 0;
    }
    if (
      object.nextPeriodNonce !== undefined &&
      object.nextPeriodNonce !== null
    ) {
      message.nextPeriodNonce = Number(object.nextPeriodNonce);
    } else {
      message.nextPeriodNonce = 0;
    }
    if (
      object.prevPeriodBlockHeight !== undefined &&
      object.prevPeriodBlockHeight !== null
    ) {
      message.prevPeriodBlockHeight = Number(object.prevPeriodBlockHeight);
    } else {
      message.prevPeriodBlockHeight = 0;
    }
    if (
      object.nextPeriodBlockHeight !== undefined &&
      object.nextPeriodBlockHeight !== null
    ) {
      message.nextPeriodBlockHeight = Number(object.nextPeriodBlockHeight);
    } else {
      message.nextPeriodBlockHeight = 0;
    }
    if (object.ignoreNotify !== undefined && object.ignoreNotify !== null) {
      for (const e of object.ignoreNotify) {
        message.ignoreNotify.push(Notify.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: ApplyPeriod): unknown {
    const obj: any = {};
    message.periodBlocks !== undefined &&
      (obj.periodBlocks = message.periodBlocks);
    message.prevPeriodNonce !== undefined &&
      (obj.prevPeriodNonce = message.prevPeriodNonce);
    message.nextPeriodNonce !== undefined &&
      (obj.nextPeriodNonce = message.nextPeriodNonce);
    message.prevPeriodBlockHeight !== undefined &&
      (obj.prevPeriodBlockHeight = message.prevPeriodBlockHeight);
    message.nextPeriodBlockHeight !== undefined &&
      (obj.nextPeriodBlockHeight = message.nextPeriodBlockHeight);
    if (message.ignoreNotify) {
      obj.ignoreNotify = message.ignoreNotify.map((e) =>
        e ? Notify.toJSON(e) : undefined
      );
    } else {
      obj.ignoreNotify = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ApplyPeriod>): ApplyPeriod {
    const message = { ...baseApplyPeriod } as ApplyPeriod;
    message.ignoreNotify = [];
    if (object.periodBlocks !== undefined && object.periodBlocks !== null) {
      message.periodBlocks = object.periodBlocks;
    } else {
      message.periodBlocks = 0;
    }
    if (
      object.prevPeriodNonce !== undefined &&
      object.prevPeriodNonce !== null
    ) {
      message.prevPeriodNonce = object.prevPeriodNonce;
    } else {
      message.prevPeriodNonce = 0;
    }
    if (
      object.nextPeriodNonce !== undefined &&
      object.nextPeriodNonce !== null
    ) {
      message.nextPeriodNonce = object.nextPeriodNonce;
    } else {
      message.nextPeriodNonce = 0;
    }
    if (
      object.prevPeriodBlockHeight !== undefined &&
      object.prevPeriodBlockHeight !== null
    ) {
      message.prevPeriodBlockHeight = object.prevPeriodBlockHeight;
    } else {
      message.prevPeriodBlockHeight = 0;
    }
    if (
      object.nextPeriodBlockHeight !== undefined &&
      object.nextPeriodBlockHeight !== null
    ) {
      message.nextPeriodBlockHeight = object.nextPeriodBlockHeight;
    } else {
      message.nextPeriodBlockHeight = 0;
    }
    if (object.ignoreNotify !== undefined && object.ignoreNotify !== null) {
      for (const e of object.ignoreNotify) {
        message.ignoreNotify.push(Notify.fromPartial(e));
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

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

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
