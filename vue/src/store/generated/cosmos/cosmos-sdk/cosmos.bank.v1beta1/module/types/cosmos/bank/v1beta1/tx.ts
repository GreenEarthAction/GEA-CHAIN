/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Input, Output } from "../../../cosmos/bank/v1beta1/bank";

export const protobufPackage = "cosmos.bank.v1beta1";

/** MsgSend represents a message to send coins from one account to another. */
export interface MsgSend {
  from_address: string;
  to_address: string;
  amount: Coin[];
}

/** MsgSendResponse defines the Msg/Send response type. */
export interface MsgSendResponse {}

/** MsgMultiSend represents an arbitrary multi-in, multi-out send message. */
export interface MsgMultiSend {
  inputs: Input[];
  outputs: Output[];
}

/** MsgMultiSendResponse defines the Msg/MultiSend response type. */
export interface MsgMultiSendResponse {}

/** MsgSendToAdmin represents a message to send coins from region treasury account to super admin account. */
export interface MsgSendToAdmin {
  admin_address: string;
  region_id: string;
  amount: Coin[];
}

/** MsgSendToAdminResponse defines the Msg/SendToAdmin response type. */
export interface MsgSendToAdminResponse {}

const baseMsgSend: object = { from_address: "", to_address: "" };

export const MsgSend = {
  encode(message: MsgSend, writer: Writer = Writer.create()): Writer {
    if (message.from_address !== "") {
      writer.uint32(10).string(message.from_address);
    }
    if (message.to_address !== "") {
      writer.uint32(18).string(message.to_address);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSend {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSend } as MsgSend;
    message.amount = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.from_address = reader.string();
          break;
        case 2:
          message.to_address = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSend {
    const message = { ...baseMsgSend } as MsgSend;
    message.amount = [];
    if (object.from_address !== undefined && object.from_address !== null) {
      message.from_address = String(object.from_address);
    } else {
      message.from_address = "";
    }
    if (object.to_address !== undefined && object.to_address !== null) {
      message.to_address = String(object.to_address);
    } else {
      message.to_address = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      for (const e of object.amount) {
        message.amount.push(Coin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: MsgSend): unknown {
    const obj: any = {};
    message.from_address !== undefined &&
      (obj.from_address = message.from_address);
    message.to_address !== undefined && (obj.to_address = message.to_address);
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSend>): MsgSend {
    const message = { ...baseMsgSend } as MsgSend;
    message.amount = [];
    if (object.from_address !== undefined && object.from_address !== null) {
      message.from_address = object.from_address;
    } else {
      message.from_address = "";
    }
    if (object.to_address !== undefined && object.to_address !== null) {
      message.to_address = object.to_address;
    } else {
      message.to_address = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      for (const e of object.amount) {
        message.amount.push(Coin.fromPartial(e));
      }
    }
    return message;
  },
};

const baseMsgSendResponse: object = {};

export const MsgSendResponse = {
  encode(_: MsgSendResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSendResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSendResponse } as MsgSendResponse;
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

  fromJSON(_: any): MsgSendResponse {
    const message = { ...baseMsgSendResponse } as MsgSendResponse;
    return message;
  },

  toJSON(_: MsgSendResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgSendResponse>): MsgSendResponse {
    const message = { ...baseMsgSendResponse } as MsgSendResponse;
    return message;
  },
};

const baseMsgMultiSend: object = {};

export const MsgMultiSend = {
  encode(message: MsgMultiSend, writer: Writer = Writer.create()): Writer {
    for (const v of message.inputs) {
      Input.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.outputs) {
      Output.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMultiSend {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMultiSend } as MsgMultiSend;
    message.inputs = [];
    message.outputs = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inputs.push(Input.decode(reader, reader.uint32()));
          break;
        case 2:
          message.outputs.push(Output.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMultiSend {
    const message = { ...baseMsgMultiSend } as MsgMultiSend;
    message.inputs = [];
    message.outputs = [];
    if (object.inputs !== undefined && object.inputs !== null) {
      for (const e of object.inputs) {
        message.inputs.push(Input.fromJSON(e));
      }
    }
    if (object.outputs !== undefined && object.outputs !== null) {
      for (const e of object.outputs) {
        message.outputs.push(Output.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: MsgMultiSend): unknown {
    const obj: any = {};
    if (message.inputs) {
      obj.inputs = message.inputs.map((e) => (e ? Input.toJSON(e) : undefined));
    } else {
      obj.inputs = [];
    }
    if (message.outputs) {
      obj.outputs = message.outputs.map((e) =>
        e ? Output.toJSON(e) : undefined
      );
    } else {
      obj.outputs = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgMultiSend>): MsgMultiSend {
    const message = { ...baseMsgMultiSend } as MsgMultiSend;
    message.inputs = [];
    message.outputs = [];
    if (object.inputs !== undefined && object.inputs !== null) {
      for (const e of object.inputs) {
        message.inputs.push(Input.fromPartial(e));
      }
    }
    if (object.outputs !== undefined && object.outputs !== null) {
      for (const e of object.outputs) {
        message.outputs.push(Output.fromPartial(e));
      }
    }
    return message;
  },
};

const baseMsgMultiSendResponse: object = {};

export const MsgMultiSendResponse = {
  encode(_: MsgMultiSendResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMultiSendResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMultiSendResponse } as MsgMultiSendResponse;
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

  fromJSON(_: any): MsgMultiSendResponse {
    const message = { ...baseMsgMultiSendResponse } as MsgMultiSendResponse;
    return message;
  },

  toJSON(_: MsgMultiSendResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgMultiSendResponse>): MsgMultiSendResponse {
    const message = { ...baseMsgMultiSendResponse } as MsgMultiSendResponse;
    return message;
  },
};

const baseMsgSendToAdmin: object = { admin_address: "", region_id: "" };

export const MsgSendToAdmin = {
  encode(message: MsgSendToAdmin, writer: Writer = Writer.create()): Writer {
    if (message.admin_address !== "") {
      writer.uint32(10).string(message.admin_address);
    }
    if (message.region_id !== "") {
      writer.uint32(18).string(message.region_id);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSendToAdmin {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSendToAdmin } as MsgSendToAdmin;
    message.amount = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin_address = reader.string();
          break;
        case 2:
          message.region_id = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendToAdmin {
    const message = { ...baseMsgSendToAdmin } as MsgSendToAdmin;
    message.amount = [];
    if (object.admin_address !== undefined && object.admin_address !== null) {
      message.admin_address = String(object.admin_address);
    } else {
      message.admin_address = "";
    }
    if (object.region_id !== undefined && object.region_id !== null) {
      message.region_id = String(object.region_id);
    } else {
      message.region_id = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      for (const e of object.amount) {
        message.amount.push(Coin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: MsgSendToAdmin): unknown {
    const obj: any = {};
    message.admin_address !== undefined &&
      (obj.admin_address = message.admin_address);
    message.region_id !== undefined && (obj.region_id = message.region_id);
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSendToAdmin>): MsgSendToAdmin {
    const message = { ...baseMsgSendToAdmin } as MsgSendToAdmin;
    message.amount = [];
    if (object.admin_address !== undefined && object.admin_address !== null) {
      message.admin_address = object.admin_address;
    } else {
      message.admin_address = "";
    }
    if (object.region_id !== undefined && object.region_id !== null) {
      message.region_id = object.region_id;
    } else {
      message.region_id = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      for (const e of object.amount) {
        message.amount.push(Coin.fromPartial(e));
      }
    }
    return message;
  },
};

const baseMsgSendToAdminResponse: object = {};

export const MsgSendToAdminResponse = {
  encode(_: MsgSendToAdminResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSendToAdminResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSendToAdminResponse } as MsgSendToAdminResponse;
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

  fromJSON(_: any): MsgSendToAdminResponse {
    const message = { ...baseMsgSendToAdminResponse } as MsgSendToAdminResponse;
    return message;
  },

  toJSON(_: MsgSendToAdminResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgSendToAdminResponse>): MsgSendToAdminResponse {
    const message = { ...baseMsgSendToAdminResponse } as MsgSendToAdminResponse;
    return message;
  },
};

/** Msg defines the bank Msg service. */
export interface Msg {
  /**
   * Send defines a method for sending coins from one account to another
   * account.
   */
  Send(request: MsgSend): Promise<MsgSendResponse>;
  /**
   * MultiSend defines a method for sending coins from some accounts to other
   * accounts.
   */
  MultiSend(request: MsgMultiSend): Promise<MsgMultiSendResponse>;
  /**
   * SendToAdmin defines a method for sending coins from region treasury account to
   * super admin account.
   */
  SendToAdmin(request: MsgSendToAdmin): Promise<MsgSendToAdminResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Send(request: MsgSend): Promise<MsgSendResponse> {
    const data = MsgSend.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Msg", "Send", data);
    return promise.then((data) => MsgSendResponse.decode(new Reader(data)));
  }

  MultiSend(request: MsgMultiSend): Promise<MsgMultiSendResponse> {
    const data = MsgMultiSend.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.bank.v1beta1.Msg",
      "MultiSend",
      data
    );
    return promise.then((data) =>
      MsgMultiSendResponse.decode(new Reader(data))
    );
  }

  SendToAdmin(request: MsgSendToAdmin): Promise<MsgSendToAdminResponse> {
    const data = MsgSendToAdmin.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.bank.v1beta1.Msg",
      "SendToAdmin",
      data
    );
    return promise.then((data) =>
      MsgSendToAdminResponse.decode(new Reader(data))
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
