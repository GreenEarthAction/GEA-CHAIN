/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/**
* `Any` contains an arbitrary serialized protocol buffer message along with a
URL that describes the type of the serialized message.

Protobuf library provides support to pack/unpack Any values in the form
of utility functions or additional generated methods of the Any type.

Example 1: Pack and unpack a message in C++.

    Foo foo = ...;
    Any any;
    any.PackFrom(foo);
    ...
    if (any.UnpackTo(&foo)) {
      ...
    }

Example 2: Pack and unpack a message in Java.

    Foo foo = ...;
    Any any = Any.pack(foo);
    ...
    if (any.is(Foo.class)) {
      foo = any.unpack(Foo.class);
    }

 Example 3: Pack and unpack a message in Python.

    foo = Foo(...)
    any = Any()
    any.Pack(foo)
    ...
    if any.Is(Foo.DESCRIPTOR):
      any.Unpack(foo)
      ...

 Example 4: Pack and unpack a message in Go

     foo := &pb.Foo{...}
     any, err := anypb.New(foo)
     if err != nil {
       ...
     }
     ...
     foo := &pb.Foo{}
     if err := any.UnmarshalTo(foo); err != nil {
       ...
     }

The pack methods provided by protobuf library will by default use
'type.googleapis.com/full.type.name' as the type URL and the unpack
methods only use the fully qualified type name after the last '/'
in the type URL, for example "foo.bar.com/x/y.z" will yield type
name "y.z".


JSON
====
The JSON representation of an `Any` value uses the regular
representation of the deserialized, embedded message, with an
additional field `@type` which contains the type URL. Example:

    package google.profile;
    message Person {
      string first_name = 1;
      string last_name = 2;
    }

    {
      "@type": "type.googleapis.com/google.profile.Person",
      "firstName": <string>,
      "lastName": <string>
    }

If the embedded message type is well-known and has a custom JSON
representation, that representation will be embedded adding a field
`value` which holds the custom JSON in addition to the `@type`
field. Example (for message [google.protobuf.Duration][]):

    {
      "@type": "type.googleapis.com/google.protobuf.Duration",
      "value": "1.212s"
    }
*/
export interface ProtobufAny {
  /**
   * A URL/resource name that uniquely identifies the type of the serialized
   * protocol buffer message. This string must contain at least
   * one "/" character. The last segment of the URL's path must represent
   * the fully qualified name of the type (as in
   * `path/google.protobuf.Duration`). The name should be in a canonical form
   * (e.g., leading "." is not accepted).
   *
   * In practice, teams usually precompile into the binary all types that they
   * expect it to use in the context of Any. However, for URLs which use the
   * scheme `http`, `https`, or no scheme, one can optionally set up a type
   * server that maps type URLs to message definitions as follows:
   *
   * * If no scheme is provided, `https` is assumed.
   * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
   *   value in binary format, or produce an error.
   * * Applications are allowed to cache lookup results based on the
   *   URL, or have them precompiled into a binary to avoid any
   *   lookup. Therefore, binary compatibility needs to be preserved
   *   on changes to types. (Use versioned type names to manage
   *   breaking changes.)
   *
   * Note: this functionality is not currently available in the official
   * protobuf release, and it is not used for type URLs beginning with
   * type.googleapis.com.
   *
   * Schemes other than `http`, `https` (or the empty scheme) might be
   * used with implementation specific semantics.
   */
  "@type"?: string;
}

export interface RpcStatus {
  /** @format int32 */
  code?: number;
  message?: string;
  details?: ProtobufAny[];
}

export interface Srstakingv1Beta1Delegation {
  delegatorAddress?: string;
  RegionID?: string;
  amountAC?: string;
  amountAS?: string;
  ASRate?: string;

  /** @format int64 */
  startHeight?: string;
  interestAmount?: string;
  unmovableAmount?: string;
  unmovableASRate?: string;

  /** ValidatorStatus is the status of a validator. */
  status?: V1Beta1DelegationStatus;
  fixedAmount?: string;
  fixedASRate?: string;
  kycAmount?: string;
  unmovableInterest?: string;
}

export interface Srstakingv1Beta1FixedDelegation {
  delegatorAddress?: string;
  fixed_delegation_ids?: string[];
}

export interface Srstakingv1Beta1Kyc {
  account?: string;
  regionId?: string;
  role?: V1Beta1KYCROLE;
}

/**
 * Params defines the parameters for the module.
 */
export interface Srstakingv1Beta1Params {
  /** @format int64 */
  region_delegators_limit?: string;
  commission_power_denom?: string;
  bond_denom?: string;
  gov_power_denom?: string;
  max_commission_power?: string;
  denom2_commission_power_rate?: string;
  gov_power2_denom_rate?: string;
  gov_power2_commission_power_rate?: string;
  min_delegate_bond_denom?: string;
  min_delegate_commission_power?: string;

  /** @format int64 */
  clear_period_blocks?: string;

  /** @format int64 */
  historical_entries?: number;

  /** @format int64 */
  unbonding_time?: string;

  /** @format int64 */
  max_validators?: number;
  virtualRegion?: V1Beta1DefaultVirtualRegion;
}

export interface Srstakingv1Beta1Region {
  regionName?: string;
  regionId?: string;
  regionTotalAS?: string;
  regionTotalUAC?: string;
  regionAsRate?: string;

  /** @format int64 */
  delegatorsLimit?: string;
  userMinDelegateAC?: string;
  userMaxDelegateAC?: string;
  regionFeeRate?: string;
  regionAdminAddress?: string;
  regionTotalStakeAllow?: string;
  delegationAddress?: string;
  baseAccountAddr?: string;
  fixedDelegationAccountAddr?: string;
  fixedDelegationAnnualRate?: V1Beta1RegionFixedDelegationAnnualRate;
  permanentRate?: string;
  isUndelegate?: boolean;
}

export interface Srstakingv1Beta1Validator {
  /**
   * operator_address defines the address of the validator's operator; bech
   * encoded in JSON.
   */
  operator_address?: string;

  /**
   * consensus_pubkey is the consensus public key of the validator, as a
   * Protobuf Any.
   */
  consensus_pubkey?: string;

  /** description defines the description terms for the validator. */
  description?: V1Beta1Description;

  /** status is the validator status (bonded/unbonding/unbonded). */
  status?: V1Beta1ValidatorStatus;
  RegionName?: string;

  /** @format int64 */
  Sort?: string;
}

export enum V1Beta1ApplyAction {
  APPLY_ACTION_CREATE_REGION = "APPLY_ACTION_CREATE_REGION",
  APPLY_ACTION_DELETE_REGION = "APPLY_ACTION_DELETE_REGION",
  APPLY_ACTION_UPDATE_REGION = "APPLY_ACTION_UPDATE_REGION",
  APPLY_ACTION_CREATE_DELEGATE = "APPLY_ACTION_CREATE_DELEGATE",
  APPLY_ACTION_DELEGATE = "APPLY_ACTION_DELEGATE",
  APPLY_ACTION_UNDELEGATE = "APPLY_ACTION_UNDELEGATE",
  APPLY_ACTION_EXIT_DELEGATE = "APPLY_ACTION_EXIT_DELEGATE",
  APPLY_ACTION_CREATE_VALIDATOR = "APPLY_ACTION_CREATE_VALIDATOR",
  APPLY_ACTION_KICK_VALIDATOR = "APPLY_ACTION_KICK_VALIDATOR",
}

export enum V1Beta1ApplyEvent {
  APPLY_EVENT_REGION = "APPLY_EVENT_REGION",
  APPLY_EVENT_DELEGATION = "APPLY_EVENT_DELEGATION",
  APPLY_EVENT_VALIDATOR = "APPLY_EVENT_VALIDATOR",
}

export interface V1Beta1ApplyPeriod {
  /** @format int64 */
  periodBlocks?: string;

  /** @format int64 */
  prevPeriodNonce?: string;

  /** @format int64 */
  nextPeriodNonce?: string;

  /** @format int64 */
  prevPeriodBlockHeight?: string;

  /** @format int64 */
  nextPeriodBlockHeight?: string;
  ignoreNotify?: V1Beta1Notify[];
}

/**
* Coin defines a token with a denomination and an amount.

NOTE: The amount field is an Int which implements the custom method
signatures required by gogoproto.
*/
export interface V1Beta1Coin {
  denom?: string;
  amount?: string;
}

/**
 * ValidatorStatus is the status of a validator.
 */
export enum V1Beta1DelegationStatus {
  STATUS_DELEGATE_NOCHANGE = "STATUS_DELEGATE_NOCHANGE",
  STATUS_CREATE_DELEGATE = "STATUS_CREATE_DELEGATE",
  STATUS_ADDDELEGATE = "STATUS_ADDDELEGATE",
  STATUS_REDUCEDELEGATE = "STATUS_REDUCEDELEGATE",
  STATUS_UNDELEGATE = "STATUS_UNDELEGATE",
}

/**
 * Description defines a validator description.
 */
export interface V1Beta1Description {
  /** moniker defines a human-readable name for the validator. */
  moniker?: string;

  /** identity defines an optional identity signature (ex. UPort or Keybase). */
  identity?: string;

  /** website defines an optional website link. */
  website?: string;

  /** security_contact defines an optional email for security contact. */
  security_contact?: string;

  /** details define other optional details. */
  details?: string;
}

export interface V1Beta1FixedDelegationItem {
  /** @format uint64 */
  id?: string;
  account?: string;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  amount?: V1Beta1Coin;
  interests?: V1Beta1Coin[];

  /** @format date-time */
  start_time?: string;

  /** @format date-time */
  end_time?: string;
  term?: V1Beta1FixedDelegationTerm;
}

export enum V1Beta1FixedDelegationTerm {
  TERM1MONTHS = "TERM_1_MONTHS",
  TERM2MONTHS = "TERM_2_MONTHS",
  TERM3MONTHS = "TERM_3_MONTHS",
  TERM4MONTHS = "TERM_4_MONTHS",
  TERM5MONTHS = "TERM_5_MONTHS",
  TERM6MONTHS = "TERM_6_MONTHS",
  TERM7MONTHS = "TERM_7_MONTHS",
  TERM8MONTHS = "TERM_8_MONTHS",
  TERM9MONTHS = "TERM_9_MONTHS",
  TERM10MONTHS = "TERM_10_MONTHS",
  TERM11MONTHS = "TERM_11_MONTHS",
  TERM12MONTHS = "TERM_12_MONTHS",
  TERM24MONTHS = "TERM_24_MONTHS",
  TERM36MONTHS = "TERM_36_MONTHS",
  TERM48MONTHS = "TERM_48_MONTHS",
  TERM60MONTHS = "TERM_60_MONTHS",
  TERM_DEMAND = "TERM_DEMAND",
  TERM_INFINITE = "TERM_INFINITE",
}

export enum V1Beta1KYCROLE {
  KYC_ROLE_USER = "KYC_ROLE_USER",
  KYC_ROLE_ADMIN = "KYC_ROLE_ADMIN",
}

export interface V1Beta1MsgAgToAcResponse {
  retcode?: string;
}

export type V1Beta1MsgCreateDelegateResponse = object;

export interface V1Beta1MsgCreateFixedDelegationResponse {
  /** @format uint64 */
  id?: string;
}

export type V1Beta1MsgCreateRegionResponse = object;

export type V1Beta1MsgCreateValidatorResponse = object;

export type V1Beta1MsgExitDelegateResponse = object;

export type V1Beta1MsgKickValidatorByAddressResponse = object;

export type V1Beta1MsgKickValidatorByPubkeyResponse = object;

export interface V1Beta1MsgNewKycResponse {
  retcode?: string;
}

export interface V1Beta1MsgSetFixedDelegationInterestRateResponse {
  retcode?: string;
}

export type V1Beta1MsgTransferKYCResponse = object;

export type V1Beta1MsgUnDelegateResponse = object;

export type V1Beta1MsgUpdateRegionResponse = object;

export type V1Beta1MsgUpdateValidatorResponse = object;

export interface V1Beta1MsgWithdrawFixedDelegationResponse {
  receive_address?: string;
  region_id?: string;

  /** @format int64 */
  from_height?: string;

  /** @format int64 */
  to_height?: string;
  amount?: string;
}

export interface V1Beta1MsgWithdrawResponse {
  receive_address?: string;
  region_id?: string;

  /** @format int64 */
  from_height?: string;

  /** @format int64 */
  to_height?: string;
  amount?: string;
}

export interface V1Beta1MsgWithdrawUnmovableInterestResponse {
  receive_address?: string;
  region_id?: string;

  /** @format int64 */
  from_height?: string;

  /** @format int64 */
  to_height?: string;
  amount?: string;
}

export interface V1Beta1Notifies {
  notifies?: V1Beta1Notify[];
}

export interface V1Beta1Notify {
  event?: V1Beta1ApplyEvent;
  action?: V1Beta1ApplyAction;

  /** @format int64 */
  blockHeight?: string;

  /** @format date-time */
  createdAt?: string;
  dataCtx?: string[];
}

/**
* message SomeRequest {
         Foo some_parameter = 1;
         PageRequest pagination = 2;
 }
*/
export interface V1Beta1PageRequest {
  /**
   * key is a value returned in PageResponse.next_key to begin
   * querying the next page most efficiently. Only one of offset or key
   * should be set.
   * @format byte
   */
  key?: string;

  /**
   * offset is a numeric offset that can be used when key is unavailable.
   * It is less efficient than using key. Only one of offset or key should
   * be set.
   * @format uint64
   */
  offset?: string;

  /**
   * limit is the total number of results to be returned in the result page.
   * If left empty it will default to a value to be set by each app.
   * @format uint64
   */
  limit?: string;

  /**
   * count_total is set to true  to indicate that the result set should include
   * a count of the total number of items available for pagination in UIs.
   * count_total is only respected when offset is used. It is ignored when key
   * is set.
   */
  count_total?: boolean;

  /**
   * reverse is set to true if results are to be returned in the descending
   * order.
   *
   * Since: cosmos-sdk 0.43
   */
  reverse?: boolean;
}

/**
* PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
*/
export interface V1Beta1PageResponse {
  /** @format byte */
  next_key?: string;

  /** @format uint64 */
  total?: string;
}

export interface V1Beta1QueryAllDelegationResponse {
  delegation?: Srstakingv1Beta1Delegation[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface V1Beta1QueryAllFixedDelegationResponse {
  fixedDelegation?: Srstakingv1Beta1FixedDelegation[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface V1Beta1QueryAllKycResponse {
  kyc?: Srstakingv1Beta1Kyc[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface V1Beta1QueryAllRegionResponse {
  region?: Srstakingv1Beta1Region[];
  region_commission?: V1Beta1RegionCommission[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface V1Beta1QueryAllValidatorResponse {
  validator?: Srstakingv1Beta1Validator[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface V1Beta1QueryGetDelegationResponse {
  delegation?: Srstakingv1Beta1Delegation;
}

export interface V1Beta1QueryGetFixedDelegationResponse {
  fixedDelegation?: Srstakingv1Beta1FixedDelegation;
  items?: V1Beta1FixedDelegationItem[];
}

export interface V1Beta1QueryGetKycResponse {
  kyc?: Srstakingv1Beta1Kyc;
}

export interface V1Beta1QueryGetRegionByNameResponse {
  region?: Srstakingv1Beta1Region;
  region_commission?: V1Beta1RegionCommission;
  delegators?: V1Beta1RegionDelegators;
}

export interface V1Beta1QueryGetRegionResponse {
  region?: Srstakingv1Beta1Region;
  region_commission?: V1Beta1RegionCommission;
  delegators?: V1Beta1RegionDelegators;
}

export interface V1Beta1QueryGetValidatorResponse {
  validator?: Srstakingv1Beta1Validator;
}

export interface V1Beta1QueryKycByRegionResponse {
  kyc?: Srstakingv1Beta1Kyc[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface V1Beta1QueryNotifyApplyResponse {
  apply_period?: V1Beta1ApplyPeriod;
  notifies?: V1Beta1Notifies;
}

/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 */
export interface V1Beta1QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Srstakingv1Beta1Params;
}

export interface V1Beta1RegionCommission {
  regionId?: string;
  regionTotalAS?: string;
  regionTotalUAC?: string;
  regionAsRate?: string;
  currentOccupyAS?: string;
  currentOccupyASRate?: string;
  currentDemandTotalUAC?: string;
  permanentRate?: string;
  jailed?: boolean;
}

export interface V1Beta1RegionDelegators {
  regionId?: string;
  delegators?: string[];
}

export interface V1Beta1RegionFixedDelegationAnnualRate {
  annualRate_1_months?: string;
  annualRate_2_months?: string;
  annualRate_3_months?: string;
  annualRate_4_months?: string;
  annualRate_5_months?: string;
  annualRate_6_months?: string;
  annualRate_7_months?: string;
  annualRate_8_months?: string;
  annualRate_9_months?: string;
  annualRate_10_months?: string;
  annualRate_11_months?: string;
  annualRate_12_months?: string;
  annualRate_24_months?: string;
  annualRate_36_months?: string;
  annualRate_48_months?: string;
  annualRate_60_months?: string;
}

/**
* ValidatorStatus is the status of a validator.

 - STATUS_ON_WORKING: ON_WORKING defines an invalid validator status.
 - STATUS_JAILED: JAILED defines a validator that is jailed.
 - STATUS_OFF_WORK: OFF_WORKING defines a validator that is off_working.
*/
export enum V1Beta1ValidatorStatus {
  STATUS_ON_WORKING = "STATUS_ON_WORKING",
  STATUS_JAILED = "STATUS_JAILED",
  STATUS_OFF_WORK = "STATUS_OFF_WORK",
}

export interface V1Beta1DefaultVirtualRegion {
  regionId?: string;
  regionName?: string;
  regionTotalAS?: string;
  regionTotalStakeAllow?: string;

  /** @format int64 */
  delegatorsLimit?: string;
  regionFeeRate?: string;
  userMinDelegateAC?: string;
  userMaxDelegateAC?: string;
  regionAdmin?: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: keyof Omit<Body, "body" | "bodyUsed">;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType) => RequestParams | void;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType = null as any;
  private securityWorker: null | ApiConfig<SecurityDataType>["securityWorker"] = null;
  private abortControllers = new Map<CancelToken, AbortController>();

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType) => {
    this.securityData = data;
  };

  private addQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];

    return (
      encodeURIComponent(key) +
      "=" +
      encodeURIComponent(Array.isArray(value) ? value.join(",") : typeof value === "number" ? value : `${value}`)
    );
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) =>
        typeof query[key] === "object" && !Array.isArray(query[key])
          ? this.toQueryString(query[key] as QueryParamsType)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((data, key) => {
        data.append(key, input[key]);
        return data;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  private mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format = "json",
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams = (secure && this.securityWorker && this.securityWorker(this.securityData)) || {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];

    return fetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = (null as unknown) as T;
      r.error = (null as unknown) as E;

      const data = await response[format]()
        .then((data) => {
          if (r.ok) {
            r.data = data;
          } else {
            r.error = data;
          }
          return r;
        })
        .catch((e) => {
          r.error = e;
          return r;
        });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title cosmos/srstaking/v1beta1/bonus.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryDelegation
   * @summary Queries a Delegation by index.
   * @request GET:/cosmos/srstaking/v1beta1/delegation/{addr}
   */
  queryDelegation = (addr: string, params: RequestParams = {}) =>
    this.request<V1Beta1QueryGetDelegationResponse, RpcStatus>({
      path: `/cosmos/srstaking/v1beta1/delegation/${addr}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryKyc
   * @summary Queries a Kyc by index.
   * @request GET:/cosmos/srstaking/v1beta1/kyc/{account}
   */
  queryKyc = (account: string, params: RequestParams = {}) =>
    this.request<V1Beta1QueryGetKycResponse, RpcStatus>({
      path: `/cosmos/srstaking/v1beta1/kyc/${account}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryKycByRegion
   * @summary Queries a list of KycByRegion items.
   * @request GET:/cosmos/srstaking/v1beta1/kyc_by_region/{regionid}
   */
  queryKycByRegion = (
    regionid: string,
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1Beta1QueryKycByRegionResponse, RpcStatus>({
      path: `/cosmos/srstaking/v1beta1/kyc_by_region/${regionid}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryDelegationAll
   * @summary Queries a list of Delegation items.
   * @request GET:/cosmos/srstaking/v1beta1/list-delegation
   */
  queryDelegationAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1Beta1QueryAllDelegationResponse, RpcStatus>({
      path: `/cosmos/srstaking/v1beta1/list-delegation`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryKycAll
   * @summary Queries a list of Kyc items.
   * @request GET:/cosmos/srstaking/v1beta1/list-kyc
   */
  queryKycAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1Beta1QueryAllKycResponse, RpcStatus>({
      path: `/cosmos/srstaking/v1beta1/list-kyc`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryRegionAll
   * @summary Queries a list of Region items.
   * @request GET:/cosmos/srstaking/v1beta1/list-region
   */
  queryRegionAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1Beta1QueryAllRegionResponse, RpcStatus>({
      path: `/cosmos/srstaking/v1beta1/list-region`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryValidatorAll
   * @summary Queries a list of Validator items.
   * @request GET:/cosmos/srstaking/v1beta1/list-validator
   */
  queryValidatorAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1Beta1QueryAllValidatorResponse, RpcStatus>({
      path: `/cosmos/srstaking/v1beta1/list-validator`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryNotifyApply
   * @request GET:/cosmos/srstaking/v1beta1/notify_apply
   */
  queryNotifyApply = (params: RequestParams = {}) =>
    this.request<V1Beta1QueryNotifyApplyResponse, RpcStatus>({
      path: `/cosmos/srstaking/v1beta1/notify_apply`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryParams
   * @summary Parameters queries the parameters of the module.
   * @request GET:/cosmos/srstaking/v1beta1/params
   */
  queryParams = (params: RequestParams = {}) =>
    this.request<V1Beta1QueryParamsResponse, RpcStatus>({
      path: `/cosmos/srstaking/v1beta1/params`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryRegion
   * @summary Queries a Region by id.
   * @request GET:/cosmos/srstaking/v1beta1/region/{id}
   */
  queryRegion = (id: string, params: RequestParams = {}) =>
    this.request<V1Beta1QueryGetRegionResponse, RpcStatus>({
      path: `/cosmos/srstaking/v1beta1/region/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryRegionByName
   * @summary Queries a Region by name.
   * @request GET:/cosmos/srstaking/v1beta1/region_by_name/{name}
   */
  queryRegionByName = (name: string, params: RequestParams = {}) =>
    this.request<V1Beta1QueryGetRegionByNameResponse, RpcStatus>({
      path: `/cosmos/srstaking/v1beta1/region_by_name/${name}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryValidator
   * @summary Queries a Validator by index.
   * @request GET:/cosmos/srstaking/v1beta1/validator/{address}
   */
  queryValidator = (address: string, params: RequestParams = {}) =>
    this.request<V1Beta1QueryGetValidatorResponse, RpcStatus>({
      path: `/cosmos/srstaking/v1beta1/validator/${address}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryFixedDelegationAll
   * @summary Queries a list of FixedDelegation items.
   * @request GET:/gea-poa/srstaking/fixed_delegation
   */
  queryFixedDelegationAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1Beta1QueryAllFixedDelegationResponse, RpcStatus>({
      path: `/gea-poa/srstaking/fixed_delegation`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
 * No description
 * 
 * @tags Query
 * @name QueryFixedDelegation
 * @summary Queries a list of FixedDepositByRegion items.
 rpc FixedDepositByRegion(QueryFixedDepositByRegionRequest)
     returns (QueryFixedDepositByRegionResponse) {
   option (google.api.http).get =
       "/cosmos/srstaking/v1beta1/fixed_deposit_by_region/{regionid}";
 }
Queries a FixedDelegation by index.
 * @request GET:/gea-poa/srstaking/fixed_delegation/{delegatorAddress}
 */
  queryFixedDelegation = (delegatorAddress: string, params: RequestParams = {}) =>
    this.request<V1Beta1QueryGetFixedDelegationResponse, RpcStatus>({
      path: `/gea-poa/srstaking/fixed_delegation/${delegatorAddress}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
