/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "cosmos.srstaking.v1beta1";

export enum KYC_ROLE {
  KYC_ROLE_USER = 0,
  KYC_ROLE_ADMIN = 1,
  UNRECOGNIZED = -1,
}

export function kYC_ROLEFromJSON(object: any): KYC_ROLE {
  switch (object) {
    case 0:
    case "KYC_ROLE_USER":
      return KYC_ROLE.KYC_ROLE_USER;
    case 1:
    case "KYC_ROLE_ADMIN":
      return KYC_ROLE.KYC_ROLE_ADMIN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return KYC_ROLE.UNRECOGNIZED;
  }
}

export function kYC_ROLEToJSON(object: KYC_ROLE): string {
  switch (object) {
    case KYC_ROLE.KYC_ROLE_USER:
      return "KYC_ROLE_USER";
    case KYC_ROLE.KYC_ROLE_ADMIN:
      return "KYC_ROLE_ADMIN";
    default:
      return "UNKNOWN";
  }
}

export interface Kyc {
  account: string;
  regionId: string;
  role: KYC_ROLE;
}

const baseKyc: object = { account: "", regionId: "", role: 0 };

export const Kyc = {
  encode(message: Kyc, writer: Writer = Writer.create()): Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.regionId !== "") {
      writer.uint32(18).string(message.regionId);
    }
    if (message.role !== 0) {
      writer.uint32(24).int32(message.role);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Kyc {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseKyc } as Kyc;
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
          message.role = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Kyc {
    const message = { ...baseKyc } as Kyc;
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

  toJSON(message: Kyc): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.regionId !== undefined && (obj.regionId = message.regionId);
    message.role !== undefined && (obj.role = kYC_ROLEToJSON(message.role));
    return obj;
  },

  fromPartial(object: DeepPartial<Kyc>): Kyc {
    const message = { ...baseKyc } as Kyc;
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
