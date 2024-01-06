/* eslint-disable */
import { Timestamp } from "../../../google/protobuf/timestamp";
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "cosmos.srstaking.v1beta1";

/** ValidatorStatus is the status of a validator. */
export enum DelegationStatus {
  STATUS_DELEGATE_NOCHANGE = 0,
  STATUS_CREATE_DELEGATE = 1,
  STATUS_ADDDELEGATE = 2,
  STATUS_REDUCEDELEGATE = 3,
  STATUS_UNDELEGATE = 4,
  UNRECOGNIZED = -1,
}

export function delegationStatusFromJSON(object: any): DelegationStatus {
  switch (object) {
    case 0:
    case "STATUS_DELEGATE_NOCHANGE":
      return DelegationStatus.STATUS_DELEGATE_NOCHANGE;
    case 1:
    case "STATUS_CREATE_DELEGATE":
      return DelegationStatus.STATUS_CREATE_DELEGATE;
    case 2:
    case "STATUS_ADDDELEGATE":
      return DelegationStatus.STATUS_ADDDELEGATE;
    case 3:
    case "STATUS_REDUCEDELEGATE":
      return DelegationStatus.STATUS_REDUCEDELEGATE;
    case 4:
    case "STATUS_UNDELEGATE":
      return DelegationStatus.STATUS_UNDELEGATE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DelegationStatus.UNRECOGNIZED;
  }
}

export function delegationStatusToJSON(object: DelegationStatus): string {
  switch (object) {
    case DelegationStatus.STATUS_DELEGATE_NOCHANGE:
      return "STATUS_DELEGATE_NOCHANGE";
    case DelegationStatus.STATUS_CREATE_DELEGATE:
      return "STATUS_CREATE_DELEGATE";
    case DelegationStatus.STATUS_ADDDELEGATE:
      return "STATUS_ADDDELEGATE";
    case DelegationStatus.STATUS_REDUCEDELEGATE:
      return "STATUS_REDUCEDELEGATE";
    case DelegationStatus.STATUS_UNDELEGATE:
      return "STATUS_UNDELEGATE";
    default:
      return "UNKNOWN";
  }
}

export enum FixedDelegationTerm {
  TERM_1_MONTHS = 0,
  TERM_2_MONTHS = 1,
  TERM_3_MONTHS = 2,
  TERM_4_MONTHS = 3,
  TERM_5_MONTHS = 4,
  TERM_6_MONTHS = 5,
  TERM_7_MONTHS = 6,
  TERM_8_MONTHS = 7,
  TERM_9_MONTHS = 8,
  TERM_10_MONTHS = 9,
  TERM_11_MONTHS = 10,
  TERM_12_MONTHS = 11,
  TERM_24_MONTHS = 12,
  TERM_36_MONTHS = 13,
  TERM_48_MONTHS = 14,
  TERM_60_MONTHS = 15,
  TERM_DEMAND = 16,
  TERM_INFINITE = 17,
  UNRECOGNIZED = -1,
}

export function fixedDelegationTermFromJSON(object: any): FixedDelegationTerm {
  switch (object) {
    case 0:
    case "TERM_1_MONTHS":
      return FixedDelegationTerm.TERM_1_MONTHS;
    case 1:
    case "TERM_2_MONTHS":
      return FixedDelegationTerm.TERM_2_MONTHS;
    case 2:
    case "TERM_3_MONTHS":
      return FixedDelegationTerm.TERM_3_MONTHS;
    case 3:
    case "TERM_4_MONTHS":
      return FixedDelegationTerm.TERM_4_MONTHS;
    case 4:
    case "TERM_5_MONTHS":
      return FixedDelegationTerm.TERM_5_MONTHS;
    case 5:
    case "TERM_6_MONTHS":
      return FixedDelegationTerm.TERM_6_MONTHS;
    case 6:
    case "TERM_7_MONTHS":
      return FixedDelegationTerm.TERM_7_MONTHS;
    case 7:
    case "TERM_8_MONTHS":
      return FixedDelegationTerm.TERM_8_MONTHS;
    case 8:
    case "TERM_9_MONTHS":
      return FixedDelegationTerm.TERM_9_MONTHS;
    case 9:
    case "TERM_10_MONTHS":
      return FixedDelegationTerm.TERM_10_MONTHS;
    case 10:
    case "TERM_11_MONTHS":
      return FixedDelegationTerm.TERM_11_MONTHS;
    case 11:
    case "TERM_12_MONTHS":
      return FixedDelegationTerm.TERM_12_MONTHS;
    case 12:
    case "TERM_24_MONTHS":
      return FixedDelegationTerm.TERM_24_MONTHS;
    case 13:
    case "TERM_36_MONTHS":
      return FixedDelegationTerm.TERM_36_MONTHS;
    case 14:
    case "TERM_48_MONTHS":
      return FixedDelegationTerm.TERM_48_MONTHS;
    case 15:
    case "TERM_60_MONTHS":
      return FixedDelegationTerm.TERM_60_MONTHS;
    case 16:
    case "TERM_DEMAND":
      return FixedDelegationTerm.TERM_DEMAND;
    case 17:
    case "TERM_INFINITE":
      return FixedDelegationTerm.TERM_INFINITE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FixedDelegationTerm.UNRECOGNIZED;
  }
}

export function fixedDelegationTermToJSON(object: FixedDelegationTerm): string {
  switch (object) {
    case FixedDelegationTerm.TERM_1_MONTHS:
      return "TERM_1_MONTHS";
    case FixedDelegationTerm.TERM_2_MONTHS:
      return "TERM_2_MONTHS";
    case FixedDelegationTerm.TERM_3_MONTHS:
      return "TERM_3_MONTHS";
    case FixedDelegationTerm.TERM_4_MONTHS:
      return "TERM_4_MONTHS";
    case FixedDelegationTerm.TERM_5_MONTHS:
      return "TERM_5_MONTHS";
    case FixedDelegationTerm.TERM_6_MONTHS:
      return "TERM_6_MONTHS";
    case FixedDelegationTerm.TERM_7_MONTHS:
      return "TERM_7_MONTHS";
    case FixedDelegationTerm.TERM_8_MONTHS:
      return "TERM_8_MONTHS";
    case FixedDelegationTerm.TERM_9_MONTHS:
      return "TERM_9_MONTHS";
    case FixedDelegationTerm.TERM_10_MONTHS:
      return "TERM_10_MONTHS";
    case FixedDelegationTerm.TERM_11_MONTHS:
      return "TERM_11_MONTHS";
    case FixedDelegationTerm.TERM_12_MONTHS:
      return "TERM_12_MONTHS";
    case FixedDelegationTerm.TERM_24_MONTHS:
      return "TERM_24_MONTHS";
    case FixedDelegationTerm.TERM_36_MONTHS:
      return "TERM_36_MONTHS";
    case FixedDelegationTerm.TERM_48_MONTHS:
      return "TERM_48_MONTHS";
    case FixedDelegationTerm.TERM_60_MONTHS:
      return "TERM_60_MONTHS";
    case FixedDelegationTerm.TERM_DEMAND:
      return "TERM_DEMAND";
    case FixedDelegationTerm.TERM_INFINITE:
      return "TERM_INFINITE";
    default:
      return "UNKNOWN";
  }
}

export interface Delegation {
  delegatorAddress: string;
  RegionID: string;
  amountAC: string;
  amountAS: string;
  ASRate: string;
  startHeight: number;
  interestAmount: string;
  unmovableAmount: string;
  unmovableASRate: string;
  status: DelegationStatus;
  /** fixed delegation */
  fixedAmount: string;
  fixedASRate: string;
  kycAmount: string;
  unmovableInterest: string;
}

export interface FixedDelegationItem {
  id: number;
  account: string;
  amount: Coin | undefined;
  interests: Coin[];
  start_time: Date | undefined;
  end_time: Date | undefined;
  term: FixedDelegationTerm;
}

export interface FixedDelegation {
  delegatorAddress: string;
  fixed_delegation_ids: number[];
}

const baseDelegation: object = {
  delegatorAddress: "",
  RegionID: "",
  amountAC: "",
  amountAS: "",
  ASRate: "",
  startHeight: 0,
  interestAmount: "",
  unmovableAmount: "",
  unmovableASRate: "",
  status: 0,
  fixedAmount: "",
  fixedASRate: "",
  kycAmount: "",
  unmovableInterest: "",
};

export const Delegation = {
  encode(message: Delegation, writer: Writer = Writer.create()): Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.RegionID !== "") {
      writer.uint32(18).string(message.RegionID);
    }
    if (message.amountAC !== "") {
      writer.uint32(26).string(message.amountAC);
    }
    if (message.amountAS !== "") {
      writer.uint32(34).string(message.amountAS);
    }
    if (message.ASRate !== "") {
      writer.uint32(42).string(message.ASRate);
    }
    if (message.startHeight !== 0) {
      writer.uint32(48).int64(message.startHeight);
    }
    if (message.interestAmount !== "") {
      writer.uint32(58).string(message.interestAmount);
    }
    if (message.unmovableAmount !== "") {
      writer.uint32(66).string(message.unmovableAmount);
    }
    if (message.unmovableASRate !== "") {
      writer.uint32(74).string(message.unmovableASRate);
    }
    if (message.status !== 0) {
      writer.uint32(80).int32(message.status);
    }
    if (message.fixedAmount !== "") {
      writer.uint32(90).string(message.fixedAmount);
    }
    if (message.fixedASRate !== "") {
      writer.uint32(98).string(message.fixedASRate);
    }
    if (message.kycAmount !== "") {
      writer.uint32(106).string(message.kycAmount);
    }
    if (message.unmovableInterest !== "") {
      writer.uint32(114).string(message.unmovableInterest);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Delegation {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDelegation } as Delegation;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.RegionID = reader.string();
          break;
        case 3:
          message.amountAC = reader.string();
          break;
        case 4:
          message.amountAS = reader.string();
          break;
        case 5:
          message.ASRate = reader.string();
          break;
        case 6:
          message.startHeight = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.interestAmount = reader.string();
          break;
        case 8:
          message.unmovableAmount = reader.string();
          break;
        case 9:
          message.unmovableASRate = reader.string();
          break;
        case 10:
          message.status = reader.int32() as any;
          break;
        case 11:
          message.fixedAmount = reader.string();
          break;
        case 12:
          message.fixedASRate = reader.string();
          break;
        case 13:
          message.kycAmount = reader.string();
          break;
        case 14:
          message.unmovableInterest = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Delegation {
    const message = { ...baseDelegation } as Delegation;
    if (
      object.delegatorAddress !== undefined &&
      object.delegatorAddress !== null
    ) {
      message.delegatorAddress = String(object.delegatorAddress);
    } else {
      message.delegatorAddress = "";
    }
    if (object.RegionID !== undefined && object.RegionID !== null) {
      message.RegionID = String(object.RegionID);
    } else {
      message.RegionID = "";
    }
    if (object.amountAC !== undefined && object.amountAC !== null) {
      message.amountAC = String(object.amountAC);
    } else {
      message.amountAC = "";
    }
    if (object.amountAS !== undefined && object.amountAS !== null) {
      message.amountAS = String(object.amountAS);
    } else {
      message.amountAS = "";
    }
    if (object.ASRate !== undefined && object.ASRate !== null) {
      message.ASRate = String(object.ASRate);
    } else {
      message.ASRate = "";
    }
    if (object.startHeight !== undefined && object.startHeight !== null) {
      message.startHeight = Number(object.startHeight);
    } else {
      message.startHeight = 0;
    }
    if (object.interestAmount !== undefined && object.interestAmount !== null) {
      message.interestAmount = String(object.interestAmount);
    } else {
      message.interestAmount = "";
    }
    if (
      object.unmovableAmount !== undefined &&
      object.unmovableAmount !== null
    ) {
      message.unmovableAmount = String(object.unmovableAmount);
    } else {
      message.unmovableAmount = "";
    }
    if (
      object.unmovableASRate !== undefined &&
      object.unmovableASRate !== null
    ) {
      message.unmovableASRate = String(object.unmovableASRate);
    } else {
      message.unmovableASRate = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = delegationStatusFromJSON(object.status);
    } else {
      message.status = 0;
    }
    if (object.fixedAmount !== undefined && object.fixedAmount !== null) {
      message.fixedAmount = String(object.fixedAmount);
    } else {
      message.fixedAmount = "";
    }
    if (object.fixedASRate !== undefined && object.fixedASRate !== null) {
      message.fixedASRate = String(object.fixedASRate);
    } else {
      message.fixedASRate = "";
    }
    if (object.kycAmount !== undefined && object.kycAmount !== null) {
      message.kycAmount = String(object.kycAmount);
    } else {
      message.kycAmount = "";
    }
    if (
      object.unmovableInterest !== undefined &&
      object.unmovableInterest !== null
    ) {
      message.unmovableInterest = String(object.unmovableInterest);
    } else {
      message.unmovableInterest = "";
    }
    return message;
  },

  toJSON(message: Delegation): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined &&
      (obj.delegatorAddress = message.delegatorAddress);
    message.RegionID !== undefined && (obj.RegionID = message.RegionID);
    message.amountAC !== undefined && (obj.amountAC = message.amountAC);
    message.amountAS !== undefined && (obj.amountAS = message.amountAS);
    message.ASRate !== undefined && (obj.ASRate = message.ASRate);
    message.startHeight !== undefined &&
      (obj.startHeight = message.startHeight);
    message.interestAmount !== undefined &&
      (obj.interestAmount = message.interestAmount);
    message.unmovableAmount !== undefined &&
      (obj.unmovableAmount = message.unmovableAmount);
    message.unmovableASRate !== undefined &&
      (obj.unmovableASRate = message.unmovableASRate);
    message.status !== undefined &&
      (obj.status = delegationStatusToJSON(message.status));
    message.fixedAmount !== undefined &&
      (obj.fixedAmount = message.fixedAmount);
    message.fixedASRate !== undefined &&
      (obj.fixedASRate = message.fixedASRate);
    message.kycAmount !== undefined && (obj.kycAmount = message.kycAmount);
    message.unmovableInterest !== undefined &&
      (obj.unmovableInterest = message.unmovableInterest);
    return obj;
  },

  fromPartial(object: DeepPartial<Delegation>): Delegation {
    const message = { ...baseDelegation } as Delegation;
    if (
      object.delegatorAddress !== undefined &&
      object.delegatorAddress !== null
    ) {
      message.delegatorAddress = object.delegatorAddress;
    } else {
      message.delegatorAddress = "";
    }
    if (object.RegionID !== undefined && object.RegionID !== null) {
      message.RegionID = object.RegionID;
    } else {
      message.RegionID = "";
    }
    if (object.amountAC !== undefined && object.amountAC !== null) {
      message.amountAC = object.amountAC;
    } else {
      message.amountAC = "";
    }
    if (object.amountAS !== undefined && object.amountAS !== null) {
      message.amountAS = object.amountAS;
    } else {
      message.amountAS = "";
    }
    if (object.ASRate !== undefined && object.ASRate !== null) {
      message.ASRate = object.ASRate;
    } else {
      message.ASRate = "";
    }
    if (object.startHeight !== undefined && object.startHeight !== null) {
      message.startHeight = object.startHeight;
    } else {
      message.startHeight = 0;
    }
    if (object.interestAmount !== undefined && object.interestAmount !== null) {
      message.interestAmount = object.interestAmount;
    } else {
      message.interestAmount = "";
    }
    if (
      object.unmovableAmount !== undefined &&
      object.unmovableAmount !== null
    ) {
      message.unmovableAmount = object.unmovableAmount;
    } else {
      message.unmovableAmount = "";
    }
    if (
      object.unmovableASRate !== undefined &&
      object.unmovableASRate !== null
    ) {
      message.unmovableASRate = object.unmovableASRate;
    } else {
      message.unmovableASRate = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = 0;
    }
    if (object.fixedAmount !== undefined && object.fixedAmount !== null) {
      message.fixedAmount = object.fixedAmount;
    } else {
      message.fixedAmount = "";
    }
    if (object.fixedASRate !== undefined && object.fixedASRate !== null) {
      message.fixedASRate = object.fixedASRate;
    } else {
      message.fixedASRate = "";
    }
    if (object.kycAmount !== undefined && object.kycAmount !== null) {
      message.kycAmount = object.kycAmount;
    } else {
      message.kycAmount = "";
    }
    if (
      object.unmovableInterest !== undefined &&
      object.unmovableInterest !== null
    ) {
      message.unmovableInterest = object.unmovableInterest;
    } else {
      message.unmovableInterest = "";
    }
    return message;
  },
};

const baseFixedDelegationItem: object = { id: 0, account: "", term: 0 };

export const FixedDelegationItem = {
  encode(
    message: FixedDelegationItem,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.account !== "") {
      writer.uint32(18).string(message.account);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.interests) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.start_time !== undefined) {
      Timestamp.encode(
        toTimestamp(message.start_time),
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.end_time !== undefined) {
      Timestamp.encode(
        toTimestamp(message.end_time),
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.term !== 0) {
      writer.uint32(56).int32(message.term);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): FixedDelegationItem {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFixedDelegationItem } as FixedDelegationItem;
    message.interests = [];
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
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.interests.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.start_time = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.end_time = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.term = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FixedDelegationItem {
    const message = { ...baseFixedDelegationItem } as FixedDelegationItem;
    message.interests = [];
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
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromJSON(object.amount);
    } else {
      message.amount = undefined;
    }
    if (object.interests !== undefined && object.interests !== null) {
      for (const e of object.interests) {
        message.interests.push(Coin.fromJSON(e));
      }
    }
    if (object.start_time !== undefined && object.start_time !== null) {
      message.start_time = fromJsonTimestamp(object.start_time);
    } else {
      message.start_time = undefined;
    }
    if (object.end_time !== undefined && object.end_time !== null) {
      message.end_time = fromJsonTimestamp(object.end_time);
    } else {
      message.end_time = undefined;
    }
    if (object.term !== undefined && object.term !== null) {
      message.term = fixedDelegationTermFromJSON(object.term);
    } else {
      message.term = 0;
    }
    return message;
  },

  toJSON(message: FixedDelegationItem): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.account !== undefined && (obj.account = message.account);
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    if (message.interests) {
      obj.interests = message.interests.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.interests = [];
    }
    message.start_time !== undefined &&
      (obj.start_time =
        message.start_time !== undefined
          ? message.start_time.toISOString()
          : null);
    message.end_time !== undefined &&
      (obj.end_time =
        message.end_time !== undefined ? message.end_time.toISOString() : null);
    message.term !== undefined &&
      (obj.term = fixedDelegationTermToJSON(message.term));
    return obj;
  },

  fromPartial(object: DeepPartial<FixedDelegationItem>): FixedDelegationItem {
    const message = { ...baseFixedDelegationItem } as FixedDelegationItem;
    message.interests = [];
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
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    } else {
      message.amount = undefined;
    }
    if (object.interests !== undefined && object.interests !== null) {
      for (const e of object.interests) {
        message.interests.push(Coin.fromPartial(e));
      }
    }
    if (object.start_time !== undefined && object.start_time !== null) {
      message.start_time = object.start_time;
    } else {
      message.start_time = undefined;
    }
    if (object.end_time !== undefined && object.end_time !== null) {
      message.end_time = object.end_time;
    } else {
      message.end_time = undefined;
    }
    if (object.term !== undefined && object.term !== null) {
      message.term = object.term;
    } else {
      message.term = 0;
    }
    return message;
  },
};

const baseFixedDelegation: object = {
  delegatorAddress: "",
  fixed_delegation_ids: 0,
};

export const FixedDelegation = {
  encode(message: FixedDelegation, writer: Writer = Writer.create()): Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    writer.uint32(18).fork();
    for (const v of message.fixed_delegation_ids) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): FixedDelegation {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFixedDelegation } as FixedDelegation;
    message.fixed_delegation_ids = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.fixed_delegation_ids.push(
                longToNumber(reader.uint64() as Long)
              );
            }
          } else {
            message.fixed_delegation_ids.push(
              longToNumber(reader.uint64() as Long)
            );
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FixedDelegation {
    const message = { ...baseFixedDelegation } as FixedDelegation;
    message.fixed_delegation_ids = [];
    if (
      object.delegatorAddress !== undefined &&
      object.delegatorAddress !== null
    ) {
      message.delegatorAddress = String(object.delegatorAddress);
    } else {
      message.delegatorAddress = "";
    }
    if (
      object.fixed_delegation_ids !== undefined &&
      object.fixed_delegation_ids !== null
    ) {
      for (const e of object.fixed_delegation_ids) {
        message.fixed_delegation_ids.push(Number(e));
      }
    }
    return message;
  },

  toJSON(message: FixedDelegation): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined &&
      (obj.delegatorAddress = message.delegatorAddress);
    if (message.fixed_delegation_ids) {
      obj.fixed_delegation_ids = message.fixed_delegation_ids.map((e) => e);
    } else {
      obj.fixed_delegation_ids = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<FixedDelegation>): FixedDelegation {
    const message = { ...baseFixedDelegation } as FixedDelegation;
    message.fixed_delegation_ids = [];
    if (
      object.delegatorAddress !== undefined &&
      object.delegatorAddress !== null
    ) {
      message.delegatorAddress = object.delegatorAddress;
    } else {
      message.delegatorAddress = "";
    }
    if (
      object.fixed_delegation_ids !== undefined &&
      object.fixed_delegation_ids !== null
    ) {
      for (const e of object.fixed_delegation_ids) {
        message.fixed_delegation_ids.push(e);
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
