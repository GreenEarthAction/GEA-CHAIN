/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "cosmos.srstaking.v1beta1";

export interface RegionCommission {
  regionId: string;
  regionTotalAS: string;
  regionTotalUAC: string;
  regionAsRate: string;
  currentOccupyAS: string;
  currentOccupyASRate: string;
  currentDemandTotalUAC: string;
  permanentRate: string;
  jailed: boolean;
}

const baseRegionCommission: object = {
  regionId: "",
  regionTotalAS: "",
  regionTotalUAC: "",
  regionAsRate: "",
  currentOccupyAS: "",
  currentOccupyASRate: "",
  currentDemandTotalUAC: "",
  permanentRate: "",
  jailed: false,
};

export const RegionCommission = {
  encode(message: RegionCommission, writer: Writer = Writer.create()): Writer {
    if (message.regionId !== "") {
      writer.uint32(10).string(message.regionId);
    }
    if (message.regionTotalAS !== "") {
      writer.uint32(18).string(message.regionTotalAS);
    }
    if (message.regionTotalUAC !== "") {
      writer.uint32(26).string(message.regionTotalUAC);
    }
    if (message.regionAsRate !== "") {
      writer.uint32(34).string(message.regionAsRate);
    }
    if (message.currentOccupyAS !== "") {
      writer.uint32(42).string(message.currentOccupyAS);
    }
    if (message.currentOccupyASRate !== "") {
      writer.uint32(50).string(message.currentOccupyASRate);
    }
    if (message.currentDemandTotalUAC !== "") {
      writer.uint32(58).string(message.currentDemandTotalUAC);
    }
    if (message.permanentRate !== "") {
      writer.uint32(66).string(message.permanentRate);
    }
    if (message.jailed === true) {
      writer.uint32(72).bool(message.jailed);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): RegionCommission {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRegionCommission } as RegionCommission;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.regionId = reader.string();
          break;
        case 2:
          message.regionTotalAS = reader.string();
          break;
        case 3:
          message.regionTotalUAC = reader.string();
          break;
        case 4:
          message.regionAsRate = reader.string();
          break;
        case 5:
          message.currentOccupyAS = reader.string();
          break;
        case 6:
          message.currentOccupyASRate = reader.string();
          break;
        case 7:
          message.currentDemandTotalUAC = reader.string();
          break;
        case 8:
          message.permanentRate = reader.string();
          break;
        case 9:
          message.jailed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegionCommission {
    const message = { ...baseRegionCommission } as RegionCommission;
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
      object.currentOccupyAS !== undefined &&
      object.currentOccupyAS !== null
    ) {
      message.currentOccupyAS = String(object.currentOccupyAS);
    } else {
      message.currentOccupyAS = "";
    }
    if (
      object.currentOccupyASRate !== undefined &&
      object.currentOccupyASRate !== null
    ) {
      message.currentOccupyASRate = String(object.currentOccupyASRate);
    } else {
      message.currentOccupyASRate = "";
    }
    if (
      object.currentDemandTotalUAC !== undefined &&
      object.currentDemandTotalUAC !== null
    ) {
      message.currentDemandTotalUAC = String(object.currentDemandTotalUAC);
    } else {
      message.currentDemandTotalUAC = "";
    }
    if (object.permanentRate !== undefined && object.permanentRate !== null) {
      message.permanentRate = String(object.permanentRate);
    } else {
      message.permanentRate = "";
    }
    if (object.jailed !== undefined && object.jailed !== null) {
      message.jailed = Boolean(object.jailed);
    } else {
      message.jailed = false;
    }
    return message;
  },

  toJSON(message: RegionCommission): unknown {
    const obj: any = {};
    message.regionId !== undefined && (obj.regionId = message.regionId);
    message.regionTotalAS !== undefined &&
      (obj.regionTotalAS = message.regionTotalAS);
    message.regionTotalUAC !== undefined &&
      (obj.regionTotalUAC = message.regionTotalUAC);
    message.regionAsRate !== undefined &&
      (obj.regionAsRate = message.regionAsRate);
    message.currentOccupyAS !== undefined &&
      (obj.currentOccupyAS = message.currentOccupyAS);
    message.currentOccupyASRate !== undefined &&
      (obj.currentOccupyASRate = message.currentOccupyASRate);
    message.currentDemandTotalUAC !== undefined &&
      (obj.currentDemandTotalUAC = message.currentDemandTotalUAC);
    message.permanentRate !== undefined &&
      (obj.permanentRate = message.permanentRate);
    message.jailed !== undefined && (obj.jailed = message.jailed);
    return obj;
  },

  fromPartial(object: DeepPartial<RegionCommission>): RegionCommission {
    const message = { ...baseRegionCommission } as RegionCommission;
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
      object.currentOccupyAS !== undefined &&
      object.currentOccupyAS !== null
    ) {
      message.currentOccupyAS = object.currentOccupyAS;
    } else {
      message.currentOccupyAS = "";
    }
    if (
      object.currentOccupyASRate !== undefined &&
      object.currentOccupyASRate !== null
    ) {
      message.currentOccupyASRate = object.currentOccupyASRate;
    } else {
      message.currentOccupyASRate = "";
    }
    if (
      object.currentDemandTotalUAC !== undefined &&
      object.currentDemandTotalUAC !== null
    ) {
      message.currentDemandTotalUAC = object.currentDemandTotalUAC;
    } else {
      message.currentDemandTotalUAC = "";
    }
    if (object.permanentRate !== undefined && object.permanentRate !== null) {
      message.permanentRate = object.permanentRate;
    } else {
      message.permanentRate = "";
    }
    if (object.jailed !== undefined && object.jailed !== null) {
      message.jailed = object.jailed;
    } else {
      message.jailed = false;
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
