/* eslint-disable */
import {
  FixedDepositState,
  FixedDeposit,
  fixedDepositStateFromJSON,
  fixedDepositStateToJSON,
} from "../../../cosmos/srstaking/v1beta1/fixed_deposit";
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Params } from "../../../cosmos/srstaking/v1beta1/params";
import {
  Region,
  RegionDelegators,
} from "../../../cosmos/srstaking/v1beta1/region";
import { RegionCommission } from "../../../cosmos/srstaking/v1beta1/region_commission";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import { Validator } from "../../../cosmos/srstaking/v1beta1/validator";
import {
  Delegation,
  FixedDelegation,
  FixedDelegationItem,
} from "../../../cosmos/srstaking/v1beta1/delegation";
import {
  ApplyPeriod,
  Notifies,
} from "../../../cosmos/srstaking/v1beta1/notify";
import { Kyc } from "../../../cosmos/srstaking/v1beta1/kyc";

export const protobufPackage = "cosmos.srstaking.v1beta1";

/** QueryParamsRequest is request type for the Query/Params RPC method.e */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetRegionRequest {
  id: string;
}

export interface QueryGetRegionResponse {
  region: Region | undefined;
  region_commission: RegionCommission | undefined;
  delegators: RegionDelegators | undefined;
}

export interface QueryGetRegionByNameRequest {
  name: string;
}

export interface QueryGetRegionByNameResponse {
  region: Region | undefined;
  region_commission: RegionCommission | undefined;
  delegators: RegionDelegators | undefined;
}

export interface QueryAllRegionRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllRegionResponse {
  region: Region[];
  region_commission: RegionCommission[];
  pagination: PageResponse | undefined;
}

export interface QueryGetValidatorRequest {
  address: string;
}

export interface QueryGetValidatorResponse {
  validator: Validator | undefined;
}

export interface QueryAllValidatorRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllValidatorResponse {
  validator: Validator[];
  pagination: PageResponse | undefined;
}

export interface QueryGetDelegationRequest {
  addr: string;
}

export interface QueryGetDelegationResponse {
  delegation: Delegation | undefined;
}

export interface QueryAllDelegationRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllDelegationResponse {
  delegation: Delegation[];
  pagination: PageResponse | undefined;
}

export interface QueryNotifyApplyRequest {}

export interface QueryNotifyApplyResponse {
  apply_period: ApplyPeriod | undefined;
  notifies: Notifies | undefined;
}

export interface QueryKycBonusRequest {
  address: string;
}

export interface QueryKycBonusResponse {
  kyc_address: string;
  region_id: string;
  from_height: number;
  to_height: number;
  srs: string;
  src: string;
  srg: string;
}

export interface QueryGetDepositRequest {
  account: string;
  denom: string;
}

export interface QueryGetFixedDepositRequest {
  address: string;
  depositID: number;
}

export interface QueryGetFixedDepositResponse {
  FixedDeposit: FixedDeposit | undefined;
}

/** cosmos.base.query.v1beta1.PageRequest pagination = 1; */
export interface QueryAllFixedDepositRequest {}

export interface QueryAllFixedDepositResponse {
  /** cosmos.base.query.v1beta1.PageResponse pagination = 2; */
  FixedDeposit: FixedDeposit[];
}

export interface QueryFixedDepositByAcctRequest {
  /** cosmos.base.query.v1beta1.PageRequest pagination = 1; */
  account: string;
  query_type: FixedDepositState;
}

export interface QueryFixedDepositByAcctResponse {
  /** cosmos.base.query.v1beta1.PageResponse pagination = 2; */
  FixedDeposit: FixedDeposit[];
}

export interface QueryFixedDepositByRegionRequest {
  regionid: string;
  /** cosmos.base.query.v1beta1.PageRequest pagination = 2; */
  query_type: FixedDepositState;
}

export interface QueryFixedDepositByRegionResponse {
  /** cosmos.base.query.v1beta1.PageResponse pagination = 2; */
  FixedDeposit: FixedDeposit[];
}

export interface QueryGetKycRequest {
  account: string;
}

export interface QueryGetKycResponse {
  kyc: Kyc | undefined;
}

export interface QueryAllKycRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllKycResponse {
  kyc: Kyc[];
  pagination: PageResponse | undefined;
}

export interface QueryKycByRegionRequest {
  regionid: string;
  pagination: PageRequest | undefined;
}

export interface QueryKycByRegionResponse {
  kyc: Kyc[];
  pagination: PageResponse | undefined;
}

export interface QueryGetFixedDelegationRequest {
  delegatorAddress: string;
}

export interface QueryGetFixedDelegationResponse {
  fixedDelegation: FixedDelegation | undefined;
  items: FixedDelegationItem[];
}

export interface QueryAllFixedDelegationRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllFixedDelegationResponse {
  fixedDelegation: FixedDelegation[];
  pagination: PageResponse | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetRegionRequest: object = { id: "" };

export const QueryGetRegionRequest = {
  encode(
    message: QueryGetRegionRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetRegionRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetRegionRequest } as QueryGetRegionRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetRegionRequest {
    const message = { ...baseQueryGetRegionRequest } as QueryGetRegionRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    return message;
  },

  toJSON(message: QueryGetRegionRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetRegionRequest>
  ): QueryGetRegionRequest {
    const message = { ...baseQueryGetRegionRequest } as QueryGetRegionRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    return message;
  },
};

const baseQueryGetRegionResponse: object = {};

export const QueryGetRegionResponse = {
  encode(
    message: QueryGetRegionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.region !== undefined) {
      Region.encode(message.region, writer.uint32(10).fork()).ldelim();
    }
    if (message.region_commission !== undefined) {
      RegionCommission.encode(
        message.region_commission,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.delegators !== undefined) {
      RegionDelegators.encode(
        message.delegators,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetRegionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetRegionResponse } as QueryGetRegionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.region = Region.decode(reader, reader.uint32());
          break;
        case 2:
          message.region_commission = RegionCommission.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.delegators = RegionDelegators.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetRegionResponse {
    const message = { ...baseQueryGetRegionResponse } as QueryGetRegionResponse;
    if (object.region !== undefined && object.region !== null) {
      message.region = Region.fromJSON(object.region);
    } else {
      message.region = undefined;
    }
    if (
      object.region_commission !== undefined &&
      object.region_commission !== null
    ) {
      message.region_commission = RegionCommission.fromJSON(
        object.region_commission
      );
    } else {
      message.region_commission = undefined;
    }
    if (object.delegators !== undefined && object.delegators !== null) {
      message.delegators = RegionDelegators.fromJSON(object.delegators);
    } else {
      message.delegators = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetRegionResponse): unknown {
    const obj: any = {};
    message.region !== undefined &&
      (obj.region = message.region ? Region.toJSON(message.region) : undefined);
    message.region_commission !== undefined &&
      (obj.region_commission = message.region_commission
        ? RegionCommission.toJSON(message.region_commission)
        : undefined);
    message.delegators !== undefined &&
      (obj.delegators = message.delegators
        ? RegionDelegators.toJSON(message.delegators)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetRegionResponse>
  ): QueryGetRegionResponse {
    const message = { ...baseQueryGetRegionResponse } as QueryGetRegionResponse;
    if (object.region !== undefined && object.region !== null) {
      message.region = Region.fromPartial(object.region);
    } else {
      message.region = undefined;
    }
    if (
      object.region_commission !== undefined &&
      object.region_commission !== null
    ) {
      message.region_commission = RegionCommission.fromPartial(
        object.region_commission
      );
    } else {
      message.region_commission = undefined;
    }
    if (object.delegators !== undefined && object.delegators !== null) {
      message.delegators = RegionDelegators.fromPartial(object.delegators);
    } else {
      message.delegators = undefined;
    }
    return message;
  },
};

const baseQueryGetRegionByNameRequest: object = { name: "" };

export const QueryGetRegionByNameRequest = {
  encode(
    message: QueryGetRegionByNameRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetRegionByNameRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetRegionByNameRequest,
    } as QueryGetRegionByNameRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetRegionByNameRequest {
    const message = {
      ...baseQueryGetRegionByNameRequest,
    } as QueryGetRegionByNameRequest;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    return message;
  },

  toJSON(message: QueryGetRegionByNameRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetRegionByNameRequest>
  ): QueryGetRegionByNameRequest {
    const message = {
      ...baseQueryGetRegionByNameRequest,
    } as QueryGetRegionByNameRequest;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    return message;
  },
};

const baseQueryGetRegionByNameResponse: object = {};

export const QueryGetRegionByNameResponse = {
  encode(
    message: QueryGetRegionByNameResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.region !== undefined) {
      Region.encode(message.region, writer.uint32(10).fork()).ldelim();
    }
    if (message.region_commission !== undefined) {
      RegionCommission.encode(
        message.region_commission,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.delegators !== undefined) {
      RegionDelegators.encode(
        message.delegators,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetRegionByNameResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetRegionByNameResponse,
    } as QueryGetRegionByNameResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.region = Region.decode(reader, reader.uint32());
          break;
        case 2:
          message.region_commission = RegionCommission.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.delegators = RegionDelegators.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetRegionByNameResponse {
    const message = {
      ...baseQueryGetRegionByNameResponse,
    } as QueryGetRegionByNameResponse;
    if (object.region !== undefined && object.region !== null) {
      message.region = Region.fromJSON(object.region);
    } else {
      message.region = undefined;
    }
    if (
      object.region_commission !== undefined &&
      object.region_commission !== null
    ) {
      message.region_commission = RegionCommission.fromJSON(
        object.region_commission
      );
    } else {
      message.region_commission = undefined;
    }
    if (object.delegators !== undefined && object.delegators !== null) {
      message.delegators = RegionDelegators.fromJSON(object.delegators);
    } else {
      message.delegators = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetRegionByNameResponse): unknown {
    const obj: any = {};
    message.region !== undefined &&
      (obj.region = message.region ? Region.toJSON(message.region) : undefined);
    message.region_commission !== undefined &&
      (obj.region_commission = message.region_commission
        ? RegionCommission.toJSON(message.region_commission)
        : undefined);
    message.delegators !== undefined &&
      (obj.delegators = message.delegators
        ? RegionDelegators.toJSON(message.delegators)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetRegionByNameResponse>
  ): QueryGetRegionByNameResponse {
    const message = {
      ...baseQueryGetRegionByNameResponse,
    } as QueryGetRegionByNameResponse;
    if (object.region !== undefined && object.region !== null) {
      message.region = Region.fromPartial(object.region);
    } else {
      message.region = undefined;
    }
    if (
      object.region_commission !== undefined &&
      object.region_commission !== null
    ) {
      message.region_commission = RegionCommission.fromPartial(
        object.region_commission
      );
    } else {
      message.region_commission = undefined;
    }
    if (object.delegators !== undefined && object.delegators !== null) {
      message.delegators = RegionDelegators.fromPartial(object.delegators);
    } else {
      message.delegators = undefined;
    }
    return message;
  },
};

const baseQueryAllRegionRequest: object = {};

export const QueryAllRegionRequest = {
  encode(
    message: QueryAllRegionRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllRegionRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllRegionRequest } as QueryAllRegionRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllRegionRequest {
    const message = { ...baseQueryAllRegionRequest } as QueryAllRegionRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllRegionRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllRegionRequest>
  ): QueryAllRegionRequest {
    const message = { ...baseQueryAllRegionRequest } as QueryAllRegionRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllRegionResponse: object = {};

export const QueryAllRegionResponse = {
  encode(
    message: QueryAllRegionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.region) {
      Region.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.region_commission) {
      RegionCommission.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllRegionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllRegionResponse } as QueryAllRegionResponse;
    message.region = [];
    message.region_commission = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.region.push(Region.decode(reader, reader.uint32()));
          break;
        case 2:
          message.region_commission.push(
            RegionCommission.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllRegionResponse {
    const message = { ...baseQueryAllRegionResponse } as QueryAllRegionResponse;
    message.region = [];
    message.region_commission = [];
    if (object.region !== undefined && object.region !== null) {
      for (const e of object.region) {
        message.region.push(Region.fromJSON(e));
      }
    }
    if (
      object.region_commission !== undefined &&
      object.region_commission !== null
    ) {
      for (const e of object.region_commission) {
        message.region_commission.push(RegionCommission.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllRegionResponse): unknown {
    const obj: any = {};
    if (message.region) {
      obj.region = message.region.map((e) =>
        e ? Region.toJSON(e) : undefined
      );
    } else {
      obj.region = [];
    }
    if (message.region_commission) {
      obj.region_commission = message.region_commission.map((e) =>
        e ? RegionCommission.toJSON(e) : undefined
      );
    } else {
      obj.region_commission = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllRegionResponse>
  ): QueryAllRegionResponse {
    const message = { ...baseQueryAllRegionResponse } as QueryAllRegionResponse;
    message.region = [];
    message.region_commission = [];
    if (object.region !== undefined && object.region !== null) {
      for (const e of object.region) {
        message.region.push(Region.fromPartial(e));
      }
    }
    if (
      object.region_commission !== undefined &&
      object.region_commission !== null
    ) {
      for (const e of object.region_commission) {
        message.region_commission.push(RegionCommission.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetValidatorRequest: object = { address: "" };

export const QueryGetValidatorRequest = {
  encode(
    message: QueryGetValidatorRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetValidatorRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetValidatorRequest,
    } as QueryGetValidatorRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetValidatorRequest {
    const message = {
      ...baseQueryGetValidatorRequest,
    } as QueryGetValidatorRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: QueryGetValidatorRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetValidatorRequest>
  ): QueryGetValidatorRequest {
    const message = {
      ...baseQueryGetValidatorRequest,
    } as QueryGetValidatorRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseQueryGetValidatorResponse: object = {};

export const QueryGetValidatorResponse = {
  encode(
    message: QueryGetValidatorResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetValidatorResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetValidatorResponse,
    } as QueryGetValidatorResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = Validator.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetValidatorResponse {
    const message = {
      ...baseQueryGetValidatorResponse,
    } as QueryGetValidatorResponse;
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = Validator.fromJSON(object.validator);
    } else {
      message.validator = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetValidatorResponse): unknown {
    const obj: any = {};
    message.validator !== undefined &&
      (obj.validator = message.validator
        ? Validator.toJSON(message.validator)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetValidatorResponse>
  ): QueryGetValidatorResponse {
    const message = {
      ...baseQueryGetValidatorResponse,
    } as QueryGetValidatorResponse;
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = Validator.fromPartial(object.validator);
    } else {
      message.validator = undefined;
    }
    return message;
  },
};

const baseQueryAllValidatorRequest: object = {};

export const QueryAllValidatorRequest = {
  encode(
    message: QueryAllValidatorRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllValidatorRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllValidatorRequest,
    } as QueryAllValidatorRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllValidatorRequest {
    const message = {
      ...baseQueryAllValidatorRequest,
    } as QueryAllValidatorRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllValidatorRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllValidatorRequest>
  ): QueryAllValidatorRequest {
    const message = {
      ...baseQueryAllValidatorRequest,
    } as QueryAllValidatorRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllValidatorResponse: object = {};

export const QueryAllValidatorResponse = {
  encode(
    message: QueryAllValidatorResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.validator) {
      Validator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllValidatorResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllValidatorResponse,
    } as QueryAllValidatorResponse;
    message.validator = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator.push(Validator.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllValidatorResponse {
    const message = {
      ...baseQueryAllValidatorResponse,
    } as QueryAllValidatorResponse;
    message.validator = [];
    if (object.validator !== undefined && object.validator !== null) {
      for (const e of object.validator) {
        message.validator.push(Validator.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllValidatorResponse): unknown {
    const obj: any = {};
    if (message.validator) {
      obj.validator = message.validator.map((e) =>
        e ? Validator.toJSON(e) : undefined
      );
    } else {
      obj.validator = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllValidatorResponse>
  ): QueryAllValidatorResponse {
    const message = {
      ...baseQueryAllValidatorResponse,
    } as QueryAllValidatorResponse;
    message.validator = [];
    if (object.validator !== undefined && object.validator !== null) {
      for (const e of object.validator) {
        message.validator.push(Validator.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetDelegationRequest: object = { addr: "" };

export const QueryGetDelegationRequest = {
  encode(
    message: QueryGetDelegationRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.addr !== "") {
      writer.uint32(10).string(message.addr);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetDelegationRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetDelegationRequest,
    } as QueryGetDelegationRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetDelegationRequest {
    const message = {
      ...baseQueryGetDelegationRequest,
    } as QueryGetDelegationRequest;
    if (object.addr !== undefined && object.addr !== null) {
      message.addr = String(object.addr);
    } else {
      message.addr = "";
    }
    return message;
  },

  toJSON(message: QueryGetDelegationRequest): unknown {
    const obj: any = {};
    message.addr !== undefined && (obj.addr = message.addr);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetDelegationRequest>
  ): QueryGetDelegationRequest {
    const message = {
      ...baseQueryGetDelegationRequest,
    } as QueryGetDelegationRequest;
    if (object.addr !== undefined && object.addr !== null) {
      message.addr = object.addr;
    } else {
      message.addr = "";
    }
    return message;
  },
};

const baseQueryGetDelegationResponse: object = {};

export const QueryGetDelegationResponse = {
  encode(
    message: QueryGetDelegationResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.delegation !== undefined) {
      Delegation.encode(message.delegation, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetDelegationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetDelegationResponse,
    } as QueryGetDelegationResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegation = Delegation.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetDelegationResponse {
    const message = {
      ...baseQueryGetDelegationResponse,
    } as QueryGetDelegationResponse;
    if (object.delegation !== undefined && object.delegation !== null) {
      message.delegation = Delegation.fromJSON(object.delegation);
    } else {
      message.delegation = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetDelegationResponse): unknown {
    const obj: any = {};
    message.delegation !== undefined &&
      (obj.delegation = message.delegation
        ? Delegation.toJSON(message.delegation)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetDelegationResponse>
  ): QueryGetDelegationResponse {
    const message = {
      ...baseQueryGetDelegationResponse,
    } as QueryGetDelegationResponse;
    if (object.delegation !== undefined && object.delegation !== null) {
      message.delegation = Delegation.fromPartial(object.delegation);
    } else {
      message.delegation = undefined;
    }
    return message;
  },
};

const baseQueryAllDelegationRequest: object = {};

export const QueryAllDelegationRequest = {
  encode(
    message: QueryAllDelegationRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllDelegationRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllDelegationRequest,
    } as QueryAllDelegationRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllDelegationRequest {
    const message = {
      ...baseQueryAllDelegationRequest,
    } as QueryAllDelegationRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllDelegationRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllDelegationRequest>
  ): QueryAllDelegationRequest {
    const message = {
      ...baseQueryAllDelegationRequest,
    } as QueryAllDelegationRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllDelegationResponse: object = {};

export const QueryAllDelegationResponse = {
  encode(
    message: QueryAllDelegationResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.delegation) {
      Delegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllDelegationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllDelegationResponse,
    } as QueryAllDelegationResponse;
    message.delegation = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegation.push(Delegation.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllDelegationResponse {
    const message = {
      ...baseQueryAllDelegationResponse,
    } as QueryAllDelegationResponse;
    message.delegation = [];
    if (object.delegation !== undefined && object.delegation !== null) {
      for (const e of object.delegation) {
        message.delegation.push(Delegation.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllDelegationResponse): unknown {
    const obj: any = {};
    if (message.delegation) {
      obj.delegation = message.delegation.map((e) =>
        e ? Delegation.toJSON(e) : undefined
      );
    } else {
      obj.delegation = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllDelegationResponse>
  ): QueryAllDelegationResponse {
    const message = {
      ...baseQueryAllDelegationResponse,
    } as QueryAllDelegationResponse;
    message.delegation = [];
    if (object.delegation !== undefined && object.delegation !== null) {
      for (const e of object.delegation) {
        message.delegation.push(Delegation.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryNotifyApplyRequest: object = {};

export const QueryNotifyApplyRequest = {
  encode(_: QueryNotifyApplyRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryNotifyApplyRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryNotifyApplyRequest,
    } as QueryNotifyApplyRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryNotifyApplyRequest {
    const message = {
      ...baseQueryNotifyApplyRequest,
    } as QueryNotifyApplyRequest;
    return message;
  },

  toJSON(_: QueryNotifyApplyRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryNotifyApplyRequest>
  ): QueryNotifyApplyRequest {
    const message = {
      ...baseQueryNotifyApplyRequest,
    } as QueryNotifyApplyRequest;
    return message;
  },
};

const baseQueryNotifyApplyResponse: object = {};

export const QueryNotifyApplyResponse = {
  encode(
    message: QueryNotifyApplyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.apply_period !== undefined) {
      ApplyPeriod.encode(
        message.apply_period,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.notifies !== undefined) {
      Notifies.encode(message.notifies, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryNotifyApplyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryNotifyApplyResponse,
    } as QueryNotifyApplyResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.apply_period = ApplyPeriod.decode(reader, reader.uint32());
          break;
        case 2:
          message.notifies = Notifies.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryNotifyApplyResponse {
    const message = {
      ...baseQueryNotifyApplyResponse,
    } as QueryNotifyApplyResponse;
    if (object.apply_period !== undefined && object.apply_period !== null) {
      message.apply_period = ApplyPeriod.fromJSON(object.apply_period);
    } else {
      message.apply_period = undefined;
    }
    if (object.notifies !== undefined && object.notifies !== null) {
      message.notifies = Notifies.fromJSON(object.notifies);
    } else {
      message.notifies = undefined;
    }
    return message;
  },

  toJSON(message: QueryNotifyApplyResponse): unknown {
    const obj: any = {};
    message.apply_period !== undefined &&
      (obj.apply_period = message.apply_period
        ? ApplyPeriod.toJSON(message.apply_period)
        : undefined);
    message.notifies !== undefined &&
      (obj.notifies = message.notifies
        ? Notifies.toJSON(message.notifies)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryNotifyApplyResponse>
  ): QueryNotifyApplyResponse {
    const message = {
      ...baseQueryNotifyApplyResponse,
    } as QueryNotifyApplyResponse;
    if (object.apply_period !== undefined && object.apply_period !== null) {
      message.apply_period = ApplyPeriod.fromPartial(object.apply_period);
    } else {
      message.apply_period = undefined;
    }
    if (object.notifies !== undefined && object.notifies !== null) {
      message.notifies = Notifies.fromPartial(object.notifies);
    } else {
      message.notifies = undefined;
    }
    return message;
  },
};

const baseQueryKycBonusRequest: object = { address: "" };

export const QueryKycBonusRequest = {
  encode(
    message: QueryKycBonusRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryKycBonusRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryKycBonusRequest } as QueryKycBonusRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryKycBonusRequest {
    const message = { ...baseQueryKycBonusRequest } as QueryKycBonusRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: QueryKycBonusRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryKycBonusRequest>): QueryKycBonusRequest {
    const message = { ...baseQueryKycBonusRequest } as QueryKycBonusRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseQueryKycBonusResponse: object = {
  kyc_address: "",
  region_id: "",
  from_height: 0,
  to_height: 0,
  srs: "",
  src: "",
  srg: "",
};

export const QueryKycBonusResponse = {
  encode(
    message: QueryKycBonusResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.kyc_address !== "") {
      writer.uint32(10).string(message.kyc_address);
    }
    if (message.region_id !== "") {
      writer.uint32(18).string(message.region_id);
    }
    if (message.from_height !== 0) {
      writer.uint32(24).int64(message.from_height);
    }
    if (message.to_height !== 0) {
      writer.uint32(32).int64(message.to_height);
    }
    if (message.srs !== "") {
      writer.uint32(42).string(message.srs);
    }
    if (message.src !== "") {
      writer.uint32(50).string(message.src);
    }
    if (message.srg !== "") {
      writer.uint32(58).string(message.srg);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryKycBonusResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryKycBonusResponse } as QueryKycBonusResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.kyc_address = reader.string();
          break;
        case 2:
          message.region_id = reader.string();
          break;
        case 3:
          message.from_height = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.to_height = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.srs = reader.string();
          break;
        case 6:
          message.src = reader.string();
          break;
        case 7:
          message.srg = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryKycBonusResponse {
    const message = { ...baseQueryKycBonusResponse } as QueryKycBonusResponse;
    if (object.kyc_address !== undefined && object.kyc_address !== null) {
      message.kyc_address = String(object.kyc_address);
    } else {
      message.kyc_address = "";
    }
    if (object.region_id !== undefined && object.region_id !== null) {
      message.region_id = String(object.region_id);
    } else {
      message.region_id = "";
    }
    if (object.from_height !== undefined && object.from_height !== null) {
      message.from_height = Number(object.from_height);
    } else {
      message.from_height = 0;
    }
    if (object.to_height !== undefined && object.to_height !== null) {
      message.to_height = Number(object.to_height);
    } else {
      message.to_height = 0;
    }
    if (object.srs !== undefined && object.srs !== null) {
      message.srs = String(object.srs);
    } else {
      message.srs = "";
    }
    if (object.src !== undefined && object.src !== null) {
      message.src = String(object.src);
    } else {
      message.src = "";
    }
    if (object.srg !== undefined && object.srg !== null) {
      message.srg = String(object.srg);
    } else {
      message.srg = "";
    }
    return message;
  },

  toJSON(message: QueryKycBonusResponse): unknown {
    const obj: any = {};
    message.kyc_address !== undefined &&
      (obj.kyc_address = message.kyc_address);
    message.region_id !== undefined && (obj.region_id = message.region_id);
    message.from_height !== undefined &&
      (obj.from_height = message.from_height);
    message.to_height !== undefined && (obj.to_height = message.to_height);
    message.srs !== undefined && (obj.srs = message.srs);
    message.src !== undefined && (obj.src = message.src);
    message.srg !== undefined && (obj.srg = message.srg);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryKycBonusResponse>
  ): QueryKycBonusResponse {
    const message = { ...baseQueryKycBonusResponse } as QueryKycBonusResponse;
    if (object.kyc_address !== undefined && object.kyc_address !== null) {
      message.kyc_address = object.kyc_address;
    } else {
      message.kyc_address = "";
    }
    if (object.region_id !== undefined && object.region_id !== null) {
      message.region_id = object.region_id;
    } else {
      message.region_id = "";
    }
    if (object.from_height !== undefined && object.from_height !== null) {
      message.from_height = object.from_height;
    } else {
      message.from_height = 0;
    }
    if (object.to_height !== undefined && object.to_height !== null) {
      message.to_height = object.to_height;
    } else {
      message.to_height = 0;
    }
    if (object.srs !== undefined && object.srs !== null) {
      message.srs = object.srs;
    } else {
      message.srs = "";
    }
    if (object.src !== undefined && object.src !== null) {
      message.src = object.src;
    } else {
      message.src = "";
    }
    if (object.srg !== undefined && object.srg !== null) {
      message.srg = object.srg;
    } else {
      message.srg = "";
    }
    return message;
  },
};

const baseQueryGetDepositRequest: object = { account: "", denom: "" };

export const QueryGetDepositRequest = {
  encode(
    message: QueryGetDepositRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetDepositRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetDepositRequest } as QueryGetDepositRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetDepositRequest {
    const message = { ...baseQueryGetDepositRequest } as QueryGetDepositRequest;
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
    return message;
  },

  toJSON(message: QueryGetDepositRequest): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetDepositRequest>
  ): QueryGetDepositRequest {
    const message = { ...baseQueryGetDepositRequest } as QueryGetDepositRequest;
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
    return message;
  },
};

const baseQueryGetFixedDepositRequest: object = { address: "", depositID: 0 };

export const QueryGetFixedDepositRequest = {
  encode(
    message: QueryGetFixedDepositRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.depositID !== 0) {
      writer.uint32(16).uint64(message.depositID);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetFixedDepositRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetFixedDepositRequest,
    } as QueryGetFixedDepositRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.depositID = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetFixedDepositRequest {
    const message = {
      ...baseQueryGetFixedDepositRequest,
    } as QueryGetFixedDepositRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.depositID !== undefined && object.depositID !== null) {
      message.depositID = Number(object.depositID);
    } else {
      message.depositID = 0;
    }
    return message;
  },

  toJSON(message: QueryGetFixedDepositRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.depositID !== undefined && (obj.depositID = message.depositID);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetFixedDepositRequest>
  ): QueryGetFixedDepositRequest {
    const message = {
      ...baseQueryGetFixedDepositRequest,
    } as QueryGetFixedDepositRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.depositID !== undefined && object.depositID !== null) {
      message.depositID = object.depositID;
    } else {
      message.depositID = 0;
    }
    return message;
  },
};

const baseQueryGetFixedDepositResponse: object = {};

export const QueryGetFixedDepositResponse = {
  encode(
    message: QueryGetFixedDepositResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.FixedDeposit !== undefined) {
      FixedDeposit.encode(
        message.FixedDeposit,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetFixedDepositResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetFixedDepositResponse,
    } as QueryGetFixedDepositResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.FixedDeposit = FixedDeposit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetFixedDepositResponse {
    const message = {
      ...baseQueryGetFixedDepositResponse,
    } as QueryGetFixedDepositResponse;
    if (object.FixedDeposit !== undefined && object.FixedDeposit !== null) {
      message.FixedDeposit = FixedDeposit.fromJSON(object.FixedDeposit);
    } else {
      message.FixedDeposit = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetFixedDepositResponse): unknown {
    const obj: any = {};
    message.FixedDeposit !== undefined &&
      (obj.FixedDeposit = message.FixedDeposit
        ? FixedDeposit.toJSON(message.FixedDeposit)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetFixedDepositResponse>
  ): QueryGetFixedDepositResponse {
    const message = {
      ...baseQueryGetFixedDepositResponse,
    } as QueryGetFixedDepositResponse;
    if (object.FixedDeposit !== undefined && object.FixedDeposit !== null) {
      message.FixedDeposit = FixedDeposit.fromPartial(object.FixedDeposit);
    } else {
      message.FixedDeposit = undefined;
    }
    return message;
  },
};

const baseQueryAllFixedDepositRequest: object = {};

export const QueryAllFixedDepositRequest = {
  encode(
    _: QueryAllFixedDepositRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllFixedDepositRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllFixedDepositRequest,
    } as QueryAllFixedDepositRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryAllFixedDepositRequest {
    const message = {
      ...baseQueryAllFixedDepositRequest,
    } as QueryAllFixedDepositRequest;
    return message;
  },

  toJSON(_: QueryAllFixedDepositRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryAllFixedDepositRequest>
  ): QueryAllFixedDepositRequest {
    const message = {
      ...baseQueryAllFixedDepositRequest,
    } as QueryAllFixedDepositRequest;
    return message;
  },
};

const baseQueryAllFixedDepositResponse: object = {};

export const QueryAllFixedDepositResponse = {
  encode(
    message: QueryAllFixedDepositResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.FixedDeposit) {
      FixedDeposit.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllFixedDepositResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllFixedDepositResponse,
    } as QueryAllFixedDepositResponse;
    message.FixedDeposit = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.FixedDeposit.push(
            FixedDeposit.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllFixedDepositResponse {
    const message = {
      ...baseQueryAllFixedDepositResponse,
    } as QueryAllFixedDepositResponse;
    message.FixedDeposit = [];
    if (object.FixedDeposit !== undefined && object.FixedDeposit !== null) {
      for (const e of object.FixedDeposit) {
        message.FixedDeposit.push(FixedDeposit.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryAllFixedDepositResponse): unknown {
    const obj: any = {};
    if (message.FixedDeposit) {
      obj.FixedDeposit = message.FixedDeposit.map((e) =>
        e ? FixedDeposit.toJSON(e) : undefined
      );
    } else {
      obj.FixedDeposit = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllFixedDepositResponse>
  ): QueryAllFixedDepositResponse {
    const message = {
      ...baseQueryAllFixedDepositResponse,
    } as QueryAllFixedDepositResponse;
    message.FixedDeposit = [];
    if (object.FixedDeposit !== undefined && object.FixedDeposit !== null) {
      for (const e of object.FixedDeposit) {
        message.FixedDeposit.push(FixedDeposit.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryFixedDepositByAcctRequest: object = {
  account: "",
  query_type: 0,
};

export const QueryFixedDepositByAcctRequest = {
  encode(
    message: QueryFixedDepositByAcctRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.account !== "") {
      writer.uint32(18).string(message.account);
    }
    if (message.query_type !== 0) {
      writer.uint32(24).int32(message.query_type);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryFixedDepositByAcctRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryFixedDepositByAcctRequest,
    } as QueryFixedDepositByAcctRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.account = reader.string();
          break;
        case 3:
          message.query_type = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFixedDepositByAcctRequest {
    const message = {
      ...baseQueryFixedDepositByAcctRequest,
    } as QueryFixedDepositByAcctRequest;
    if (object.account !== undefined && object.account !== null) {
      message.account = String(object.account);
    } else {
      message.account = "";
    }
    if (object.query_type !== undefined && object.query_type !== null) {
      message.query_type = fixedDepositStateFromJSON(object.query_type);
    } else {
      message.query_type = 0;
    }
    return message;
  },

  toJSON(message: QueryFixedDepositByAcctRequest): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.query_type !== undefined &&
      (obj.query_type = fixedDepositStateToJSON(message.query_type));
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryFixedDepositByAcctRequest>
  ): QueryFixedDepositByAcctRequest {
    const message = {
      ...baseQueryFixedDepositByAcctRequest,
    } as QueryFixedDepositByAcctRequest;
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    } else {
      message.account = "";
    }
    if (object.query_type !== undefined && object.query_type !== null) {
      message.query_type = object.query_type;
    } else {
      message.query_type = 0;
    }
    return message;
  },
};

const baseQueryFixedDepositByAcctResponse: object = {};

export const QueryFixedDepositByAcctResponse = {
  encode(
    message: QueryFixedDepositByAcctResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.FixedDeposit) {
      FixedDeposit.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryFixedDepositByAcctResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryFixedDepositByAcctResponse,
    } as QueryFixedDepositByAcctResponse;
    message.FixedDeposit = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.FixedDeposit.push(
            FixedDeposit.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFixedDepositByAcctResponse {
    const message = {
      ...baseQueryFixedDepositByAcctResponse,
    } as QueryFixedDepositByAcctResponse;
    message.FixedDeposit = [];
    if (object.FixedDeposit !== undefined && object.FixedDeposit !== null) {
      for (const e of object.FixedDeposit) {
        message.FixedDeposit.push(FixedDeposit.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryFixedDepositByAcctResponse): unknown {
    const obj: any = {};
    if (message.FixedDeposit) {
      obj.FixedDeposit = message.FixedDeposit.map((e) =>
        e ? FixedDeposit.toJSON(e) : undefined
      );
    } else {
      obj.FixedDeposit = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryFixedDepositByAcctResponse>
  ): QueryFixedDepositByAcctResponse {
    const message = {
      ...baseQueryFixedDepositByAcctResponse,
    } as QueryFixedDepositByAcctResponse;
    message.FixedDeposit = [];
    if (object.FixedDeposit !== undefined && object.FixedDeposit !== null) {
      for (const e of object.FixedDeposit) {
        message.FixedDeposit.push(FixedDeposit.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryFixedDepositByRegionRequest: object = {
  regionid: "",
  query_type: 0,
};

export const QueryFixedDepositByRegionRequest = {
  encode(
    message: QueryFixedDepositByRegionRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.regionid !== "") {
      writer.uint32(10).string(message.regionid);
    }
    if (message.query_type !== 0) {
      writer.uint32(24).int32(message.query_type);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryFixedDepositByRegionRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryFixedDepositByRegionRequest,
    } as QueryFixedDepositByRegionRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.regionid = reader.string();
          break;
        case 3:
          message.query_type = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFixedDepositByRegionRequest {
    const message = {
      ...baseQueryFixedDepositByRegionRequest,
    } as QueryFixedDepositByRegionRequest;
    if (object.regionid !== undefined && object.regionid !== null) {
      message.regionid = String(object.regionid);
    } else {
      message.regionid = "";
    }
    if (object.query_type !== undefined && object.query_type !== null) {
      message.query_type = fixedDepositStateFromJSON(object.query_type);
    } else {
      message.query_type = 0;
    }
    return message;
  },

  toJSON(message: QueryFixedDepositByRegionRequest): unknown {
    const obj: any = {};
    message.regionid !== undefined && (obj.regionid = message.regionid);
    message.query_type !== undefined &&
      (obj.query_type = fixedDepositStateToJSON(message.query_type));
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryFixedDepositByRegionRequest>
  ): QueryFixedDepositByRegionRequest {
    const message = {
      ...baseQueryFixedDepositByRegionRequest,
    } as QueryFixedDepositByRegionRequest;
    if (object.regionid !== undefined && object.regionid !== null) {
      message.regionid = object.regionid;
    } else {
      message.regionid = "";
    }
    if (object.query_type !== undefined && object.query_type !== null) {
      message.query_type = object.query_type;
    } else {
      message.query_type = 0;
    }
    return message;
  },
};

const baseQueryFixedDepositByRegionResponse: object = {};

export const QueryFixedDepositByRegionResponse = {
  encode(
    message: QueryFixedDepositByRegionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.FixedDeposit) {
      FixedDeposit.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryFixedDepositByRegionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryFixedDepositByRegionResponse,
    } as QueryFixedDepositByRegionResponse;
    message.FixedDeposit = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.FixedDeposit.push(
            FixedDeposit.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFixedDepositByRegionResponse {
    const message = {
      ...baseQueryFixedDepositByRegionResponse,
    } as QueryFixedDepositByRegionResponse;
    message.FixedDeposit = [];
    if (object.FixedDeposit !== undefined && object.FixedDeposit !== null) {
      for (const e of object.FixedDeposit) {
        message.FixedDeposit.push(FixedDeposit.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryFixedDepositByRegionResponse): unknown {
    const obj: any = {};
    if (message.FixedDeposit) {
      obj.FixedDeposit = message.FixedDeposit.map((e) =>
        e ? FixedDeposit.toJSON(e) : undefined
      );
    } else {
      obj.FixedDeposit = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryFixedDepositByRegionResponse>
  ): QueryFixedDepositByRegionResponse {
    const message = {
      ...baseQueryFixedDepositByRegionResponse,
    } as QueryFixedDepositByRegionResponse;
    message.FixedDeposit = [];
    if (object.FixedDeposit !== undefined && object.FixedDeposit !== null) {
      for (const e of object.FixedDeposit) {
        message.FixedDeposit.push(FixedDeposit.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryGetKycRequest: object = { account: "" };

export const QueryGetKycRequest = {
  encode(
    message: QueryGetKycRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetKycRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetKycRequest } as QueryGetKycRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetKycRequest {
    const message = { ...baseQueryGetKycRequest } as QueryGetKycRequest;
    if (object.account !== undefined && object.account !== null) {
      message.account = String(object.account);
    } else {
      message.account = "";
    }
    return message;
  },

  toJSON(message: QueryGetKycRequest): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetKycRequest>): QueryGetKycRequest {
    const message = { ...baseQueryGetKycRequest } as QueryGetKycRequest;
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    } else {
      message.account = "";
    }
    return message;
  },
};

const baseQueryGetKycResponse: object = {};

export const QueryGetKycResponse = {
  encode(
    message: QueryGetKycResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.kyc !== undefined) {
      Kyc.encode(message.kyc, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetKycResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetKycResponse } as QueryGetKycResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.kyc = Kyc.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetKycResponse {
    const message = { ...baseQueryGetKycResponse } as QueryGetKycResponse;
    if (object.kyc !== undefined && object.kyc !== null) {
      message.kyc = Kyc.fromJSON(object.kyc);
    } else {
      message.kyc = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetKycResponse): unknown {
    const obj: any = {};
    message.kyc !== undefined &&
      (obj.kyc = message.kyc ? Kyc.toJSON(message.kyc) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetKycResponse>): QueryGetKycResponse {
    const message = { ...baseQueryGetKycResponse } as QueryGetKycResponse;
    if (object.kyc !== undefined && object.kyc !== null) {
      message.kyc = Kyc.fromPartial(object.kyc);
    } else {
      message.kyc = undefined;
    }
    return message;
  },
};

const baseQueryAllKycRequest: object = {};

export const QueryAllKycRequest = {
  encode(
    message: QueryAllKycRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllKycRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllKycRequest } as QueryAllKycRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllKycRequest {
    const message = { ...baseQueryAllKycRequest } as QueryAllKycRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllKycRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllKycRequest>): QueryAllKycRequest {
    const message = { ...baseQueryAllKycRequest } as QueryAllKycRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllKycResponse: object = {};

export const QueryAllKycResponse = {
  encode(
    message: QueryAllKycResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.kyc) {
      Kyc.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllKycResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllKycResponse } as QueryAllKycResponse;
    message.kyc = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.kyc.push(Kyc.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllKycResponse {
    const message = { ...baseQueryAllKycResponse } as QueryAllKycResponse;
    message.kyc = [];
    if (object.kyc !== undefined && object.kyc !== null) {
      for (const e of object.kyc) {
        message.kyc.push(Kyc.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllKycResponse): unknown {
    const obj: any = {};
    if (message.kyc) {
      obj.kyc = message.kyc.map((e) => (e ? Kyc.toJSON(e) : undefined));
    } else {
      obj.kyc = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllKycResponse>): QueryAllKycResponse {
    const message = { ...baseQueryAllKycResponse } as QueryAllKycResponse;
    message.kyc = [];
    if (object.kyc !== undefined && object.kyc !== null) {
      for (const e of object.kyc) {
        message.kyc.push(Kyc.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryKycByRegionRequest: object = { regionid: "" };

export const QueryKycByRegionRequest = {
  encode(
    message: QueryKycByRegionRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.regionid !== "") {
      writer.uint32(10).string(message.regionid);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryKycByRegionRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryKycByRegionRequest,
    } as QueryKycByRegionRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.regionid = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryKycByRegionRequest {
    const message = {
      ...baseQueryKycByRegionRequest,
    } as QueryKycByRegionRequest;
    if (object.regionid !== undefined && object.regionid !== null) {
      message.regionid = String(object.regionid);
    } else {
      message.regionid = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryKycByRegionRequest): unknown {
    const obj: any = {};
    message.regionid !== undefined && (obj.regionid = message.regionid);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryKycByRegionRequest>
  ): QueryKycByRegionRequest {
    const message = {
      ...baseQueryKycByRegionRequest,
    } as QueryKycByRegionRequest;
    if (object.regionid !== undefined && object.regionid !== null) {
      message.regionid = object.regionid;
    } else {
      message.regionid = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryKycByRegionResponse: object = {};

export const QueryKycByRegionResponse = {
  encode(
    message: QueryKycByRegionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.kyc) {
      Kyc.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryKycByRegionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryKycByRegionResponse,
    } as QueryKycByRegionResponse;
    message.kyc = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.kyc.push(Kyc.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryKycByRegionResponse {
    const message = {
      ...baseQueryKycByRegionResponse,
    } as QueryKycByRegionResponse;
    message.kyc = [];
    if (object.kyc !== undefined && object.kyc !== null) {
      for (const e of object.kyc) {
        message.kyc.push(Kyc.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryKycByRegionResponse): unknown {
    const obj: any = {};
    if (message.kyc) {
      obj.kyc = message.kyc.map((e) => (e ? Kyc.toJSON(e) : undefined));
    } else {
      obj.kyc = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryKycByRegionResponse>
  ): QueryKycByRegionResponse {
    const message = {
      ...baseQueryKycByRegionResponse,
    } as QueryKycByRegionResponse;
    message.kyc = [];
    if (object.kyc !== undefined && object.kyc !== null) {
      for (const e of object.kyc) {
        message.kyc.push(Kyc.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetFixedDelegationRequest: object = { delegatorAddress: "" };

export const QueryGetFixedDelegationRequest = {
  encode(
    message: QueryGetFixedDelegationRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetFixedDelegationRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetFixedDelegationRequest,
    } as QueryGetFixedDelegationRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetFixedDelegationRequest {
    const message = {
      ...baseQueryGetFixedDelegationRequest,
    } as QueryGetFixedDelegationRequest;
    if (
      object.delegatorAddress !== undefined &&
      object.delegatorAddress !== null
    ) {
      message.delegatorAddress = String(object.delegatorAddress);
    } else {
      message.delegatorAddress = "";
    }
    return message;
  },

  toJSON(message: QueryGetFixedDelegationRequest): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined &&
      (obj.delegatorAddress = message.delegatorAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetFixedDelegationRequest>
  ): QueryGetFixedDelegationRequest {
    const message = {
      ...baseQueryGetFixedDelegationRequest,
    } as QueryGetFixedDelegationRequest;
    if (
      object.delegatorAddress !== undefined &&
      object.delegatorAddress !== null
    ) {
      message.delegatorAddress = object.delegatorAddress;
    } else {
      message.delegatorAddress = "";
    }
    return message;
  },
};

const baseQueryGetFixedDelegationResponse: object = {};

export const QueryGetFixedDelegationResponse = {
  encode(
    message: QueryGetFixedDelegationResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.fixedDelegation !== undefined) {
      FixedDelegation.encode(
        message.fixedDelegation,
        writer.uint32(10).fork()
      ).ldelim();
    }
    for (const v of message.items) {
      FixedDelegationItem.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetFixedDelegationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetFixedDelegationResponse,
    } as QueryGetFixedDelegationResponse;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fixedDelegation = FixedDelegation.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.items.push(
            FixedDelegationItem.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetFixedDelegationResponse {
    const message = {
      ...baseQueryGetFixedDelegationResponse,
    } as QueryGetFixedDelegationResponse;
    message.items = [];
    if (
      object.fixedDelegation !== undefined &&
      object.fixedDelegation !== null
    ) {
      message.fixedDelegation = FixedDelegation.fromJSON(
        object.fixedDelegation
      );
    } else {
      message.fixedDelegation = undefined;
    }
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(FixedDelegationItem.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryGetFixedDelegationResponse): unknown {
    const obj: any = {};
    message.fixedDelegation !== undefined &&
      (obj.fixedDelegation = message.fixedDelegation
        ? FixedDelegation.toJSON(message.fixedDelegation)
        : undefined);
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? FixedDelegationItem.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetFixedDelegationResponse>
  ): QueryGetFixedDelegationResponse {
    const message = {
      ...baseQueryGetFixedDelegationResponse,
    } as QueryGetFixedDelegationResponse;
    message.items = [];
    if (
      object.fixedDelegation !== undefined &&
      object.fixedDelegation !== null
    ) {
      message.fixedDelegation = FixedDelegation.fromPartial(
        object.fixedDelegation
      );
    } else {
      message.fixedDelegation = undefined;
    }
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(FixedDelegationItem.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryAllFixedDelegationRequest: object = {};

export const QueryAllFixedDelegationRequest = {
  encode(
    message: QueryAllFixedDelegationRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllFixedDelegationRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllFixedDelegationRequest,
    } as QueryAllFixedDelegationRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllFixedDelegationRequest {
    const message = {
      ...baseQueryAllFixedDelegationRequest,
    } as QueryAllFixedDelegationRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllFixedDelegationRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllFixedDelegationRequest>
  ): QueryAllFixedDelegationRequest {
    const message = {
      ...baseQueryAllFixedDelegationRequest,
    } as QueryAllFixedDelegationRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllFixedDelegationResponse: object = {};

export const QueryAllFixedDelegationResponse = {
  encode(
    message: QueryAllFixedDelegationResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.fixedDelegation) {
      FixedDelegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllFixedDelegationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllFixedDelegationResponse,
    } as QueryAllFixedDelegationResponse;
    message.fixedDelegation = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fixedDelegation.push(
            FixedDelegation.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllFixedDelegationResponse {
    const message = {
      ...baseQueryAllFixedDelegationResponse,
    } as QueryAllFixedDelegationResponse;
    message.fixedDelegation = [];
    if (
      object.fixedDelegation !== undefined &&
      object.fixedDelegation !== null
    ) {
      for (const e of object.fixedDelegation) {
        message.fixedDelegation.push(FixedDelegation.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllFixedDelegationResponse): unknown {
    const obj: any = {};
    if (message.fixedDelegation) {
      obj.fixedDelegation = message.fixedDelegation.map((e) =>
        e ? FixedDelegation.toJSON(e) : undefined
      );
    } else {
      obj.fixedDelegation = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllFixedDelegationResponse>
  ): QueryAllFixedDelegationResponse {
    const message = {
      ...baseQueryAllFixedDelegationResponse,
    } as QueryAllFixedDelegationResponse;
    message.fixedDelegation = [];
    if (
      object.fixedDelegation !== undefined &&
      object.fixedDelegation !== null
    ) {
      for (const e of object.fixedDelegation) {
        message.fixedDelegation.push(FixedDelegation.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Region by id. */
  Region(request: QueryGetRegionRequest): Promise<QueryGetRegionResponse>;
  /** Queries a Region by name. */
  RegionByName(
    request: QueryGetRegionByNameRequest
  ): Promise<QueryGetRegionByNameResponse>;
  /** Queries a list of Region items. */
  RegionAll(request: QueryAllRegionRequest): Promise<QueryAllRegionResponse>;
  /** Queries a Validator by index. */
  Validator(
    request: QueryGetValidatorRequest
  ): Promise<QueryGetValidatorResponse>;
  /** Queries a list of Validator items. */
  ValidatorAll(
    request: QueryAllValidatorRequest
  ): Promise<QueryAllValidatorResponse>;
  /** Queries a Delegation by index. */
  Delegation(
    request: QueryGetDelegationRequest
  ): Promise<QueryGetDelegationResponse>;
  /** Queries a list of Delegation items. */
  DelegationAll(
    request: QueryAllDelegationRequest
  ): Promise<QueryAllDelegationResponse>;
  NotifyApply(
    request: QueryNotifyApplyRequest
  ): Promise<QueryNotifyApplyResponse>;
  /** Queries a Kyc by index. */
  Kyc(request: QueryGetKycRequest): Promise<QueryGetKycResponse>;
  /** Queries a list of Kyc items. */
  KycAll(request: QueryAllKycRequest): Promise<QueryAllKycResponse>;
  /** Queries a list of KycByRegion items. */
  KycByRegion(
    request: QueryKycByRegionRequest
  ): Promise<QueryKycByRegionResponse>;
  /**
   * Queries a list of FixedDepositByRegion items.
   *  rpc FixedDepositByRegion(QueryFixedDepositByRegionRequest)
   *      returns (QueryFixedDepositByRegionResponse) {
   *    option (google.api.http).get =
   *        "/cosmos/srstaking/v1beta1/fixed_deposit_by_region/{regionid}";
   *  }
   * Queries a FixedDelegation by index.
   */
  FixedDelegation(
    request: QueryGetFixedDelegationRequest
  ): Promise<QueryGetFixedDelegationResponse>;
  /** Queries a list of FixedDelegation items. */
  FixedDelegationAll(
    request: QueryAllFixedDelegationRequest
  ): Promise<QueryAllFixedDelegationResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.srstaking.v1beta1.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  Region(request: QueryGetRegionRequest): Promise<QueryGetRegionResponse> {
    const data = QueryGetRegionRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.srstaking.v1beta1.Query",
      "Region",
      data
    );
    return promise.then((data) =>
      QueryGetRegionResponse.decode(new Reader(data))
    );
  }

  RegionByName(
    request: QueryGetRegionByNameRequest
  ): Promise<QueryGetRegionByNameResponse> {
    const data = QueryGetRegionByNameRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.srstaking.v1beta1.Query",
      "RegionByName",
      data
    );
    return promise.then((data) =>
      QueryGetRegionByNameResponse.decode(new Reader(data))
    );
  }

  RegionAll(request: QueryAllRegionRequest): Promise<QueryAllRegionResponse> {
    const data = QueryAllRegionRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.srstaking.v1beta1.Query",
      "RegionAll",
      data
    );
    return promise.then((data) =>
      QueryAllRegionResponse.decode(new Reader(data))
    );
  }

  Validator(
    request: QueryGetValidatorRequest
  ): Promise<QueryGetValidatorResponse> {
    const data = QueryGetValidatorRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.srstaking.v1beta1.Query",
      "Validator",
      data
    );
    return promise.then((data) =>
      QueryGetValidatorResponse.decode(new Reader(data))
    );
  }

  ValidatorAll(
    request: QueryAllValidatorRequest
  ): Promise<QueryAllValidatorResponse> {
    const data = QueryAllValidatorRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.srstaking.v1beta1.Query",
      "ValidatorAll",
      data
    );
    return promise.then((data) =>
      QueryAllValidatorResponse.decode(new Reader(data))
    );
  }

  Delegation(
    request: QueryGetDelegationRequest
  ): Promise<QueryGetDelegationResponse> {
    const data = QueryGetDelegationRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.srstaking.v1beta1.Query",
      "Delegation",
      data
    );
    return promise.then((data) =>
      QueryGetDelegationResponse.decode(new Reader(data))
    );
  }

  DelegationAll(
    request: QueryAllDelegationRequest
  ): Promise<QueryAllDelegationResponse> {
    const data = QueryAllDelegationRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.srstaking.v1beta1.Query",
      "DelegationAll",
      data
    );
    return promise.then((data) =>
      QueryAllDelegationResponse.decode(new Reader(data))
    );
  }

  NotifyApply(
    request: QueryNotifyApplyRequest
  ): Promise<QueryNotifyApplyResponse> {
    const data = QueryNotifyApplyRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.srstaking.v1beta1.Query",
      "NotifyApply",
      data
    );
    return promise.then((data) =>
      QueryNotifyApplyResponse.decode(new Reader(data))
    );
  }

  Kyc(request: QueryGetKycRequest): Promise<QueryGetKycResponse> {
    const data = QueryGetKycRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.srstaking.v1beta1.Query",
      "Kyc",
      data
    );
    return promise.then((data) => QueryGetKycResponse.decode(new Reader(data)));
  }

  KycAll(request: QueryAllKycRequest): Promise<QueryAllKycResponse> {
    const data = QueryAllKycRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.srstaking.v1beta1.Query",
      "KycAll",
      data
    );
    return promise.then((data) => QueryAllKycResponse.decode(new Reader(data)));
  }

  KycByRegion(
    request: QueryKycByRegionRequest
  ): Promise<QueryKycByRegionResponse> {
    const data = QueryKycByRegionRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.srstaking.v1beta1.Query",
      "KycByRegion",
      data
    );
    return promise.then((data) =>
      QueryKycByRegionResponse.decode(new Reader(data))
    );
  }

  FixedDelegation(
    request: QueryGetFixedDelegationRequest
  ): Promise<QueryGetFixedDelegationResponse> {
    const data = QueryGetFixedDelegationRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.srstaking.v1beta1.Query",
      "FixedDelegation",
      data
    );
    return promise.then((data) =>
      QueryGetFixedDelegationResponse.decode(new Reader(data))
    );
  }

  FixedDelegationAll(
    request: QueryAllFixedDelegationRequest
  ): Promise<QueryAllFixedDelegationResponse> {
    const data = QueryAllFixedDelegationRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.srstaking.v1beta1.Query",
      "FixedDelegationAll",
      data
    );
    return promise.then((data) =>
      QueryAllFixedDelegationResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
