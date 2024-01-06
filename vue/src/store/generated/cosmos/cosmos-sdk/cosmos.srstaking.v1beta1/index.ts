import { txClient, queryClient, MissingWalletError , registry} from './module'

import { Bonus } from "./module/types/cosmos/srstaking/v1beta1/bonus"
import { Delegation } from "./module/types/cosmos/srstaking/v1beta1/delegation"
import { FixedDelegationItem } from "./module/types/cosmos/srstaking/v1beta1/delegation"
import { FixedDelegation } from "./module/types/cosmos/srstaking/v1beta1/delegation"
import { FixedDeposit } from "./module/types/cosmos/srstaking/v1beta1/fixed_deposit"
import { Kyc } from "./module/types/cosmos/srstaking/v1beta1/kyc"
import { google.protobuf.MessageOptions } from "./module/types/cosmos/srstaking/v1beta1/msg"
import { Notify } from "./module/types/cosmos/srstaking/v1beta1/notify"
import { Notifies } from "./module/types/cosmos/srstaking/v1beta1/notify"
import { ApplyPeriod } from "./module/types/cosmos/srstaking/v1beta1/notify"
import { Params } from "./module/types/cosmos/srstaking/v1beta1/params"
import { default_virtual_region } from "./module/types/cosmos/srstaking/v1beta1/params"
import { QueryKycBonusRequest } from "./module/types/cosmos/srstaking/v1beta1/query"
import { QueryKycBonusResponse } from "./module/types/cosmos/srstaking/v1beta1/query"
import { QueryGetDepositRequest } from "./module/types/cosmos/srstaking/v1beta1/query"
import { QueryGetFixedDepositRequest } from "./module/types/cosmos/srstaking/v1beta1/query"
import { QueryGetFixedDepositResponse } from "./module/types/cosmos/srstaking/v1beta1/query"
import { QueryAllFixedDepositRequest } from "./module/types/cosmos/srstaking/v1beta1/query"
import { QueryAllFixedDepositResponse } from "./module/types/cosmos/srstaking/v1beta1/query"
import { QueryFixedDepositByAcctRequest } from "./module/types/cosmos/srstaking/v1beta1/query"
import { QueryFixedDepositByAcctResponse } from "./module/types/cosmos/srstaking/v1beta1/query"
import { QueryFixedDepositByRegionRequest } from "./module/types/cosmos/srstaking/v1beta1/query"
import { QueryFixedDepositByRegionResponse } from "./module/types/cosmos/srstaking/v1beta1/query"
import { RegionFixedDepositAnnualRate } from "./module/types/cosmos/srstaking/v1beta1/region"
import { RegionFixedDelegationAnnualRate } from "./module/types/cosmos/srstaking/v1beta1/region"
import { Region } from "./module/types/cosmos/srstaking/v1beta1/region"
import { RegionDelegators } from "./module/types/cosmos/srstaking/v1beta1/region"
import { RegionsDelegators } from "./module/types/cosmos/srstaking/v1beta1/region"
import { RegionCommission } from "./module/types/cosmos/srstaking/v1beta1/region_commission"
import { MsgDeleteRegionResponse } from "./module/types/cosmos/srstaking/v1beta1/tx"
import { MsgDelegateResponse } from "./module/types/cosmos/srstaking/v1beta1/tx"
import { MsgCreateFixedDepositResponse } from "./module/types/cosmos/srstaking/v1beta1/tx"
import { MsgWithdrawFixedDepositResponse } from "./module/types/cosmos/srstaking/v1beta1/tx"
import { MsgRemoveKycResponse } from "./module/types/cosmos/srstaking/v1beta1/tx"
import { MsgSetFixedDepositInterestRateResponse } from "./module/types/cosmos/srstaking/v1beta1/tx"
import { Validator } from "./module/types/cosmos/srstaking/v1beta1/validator"
import { Description } from "./module/types/cosmos/srstaking/v1beta1/validator"
import { VaultParams } from "./module/types/cosmos/srstaking/v1beta1/vault_params"


export { Bonus, Delegation, FixedDelegationItem, FixedDelegation, FixedDeposit, Kyc, google.protobuf.MessageOptions, Notify, Notifies, ApplyPeriod, Params, default_virtual_region, QueryKycBonusRequest, QueryKycBonusResponse, QueryGetDepositRequest, QueryGetFixedDepositRequest, QueryGetFixedDepositResponse, QueryAllFixedDepositRequest, QueryAllFixedDepositResponse, QueryFixedDepositByAcctRequest, QueryFixedDepositByAcctResponse, QueryFixedDepositByRegionRequest, QueryFixedDepositByRegionResponse, RegionFixedDepositAnnualRate, RegionFixedDelegationAnnualRate, Region, RegionDelegators, RegionsDelegators, RegionCommission, MsgDeleteRegionResponse, MsgDelegateResponse, MsgCreateFixedDepositResponse, MsgWithdrawFixedDepositResponse, MsgRemoveKycResponse, MsgSetFixedDepositInterestRateResponse, Validator, Description, VaultParams };

async function initTxClient(vuexGetters) {
	return await txClient(vuexGetters['common/wallet/signer'], {
		addr: vuexGetters['common/env/apiTendermint']
	})
}

async function initQueryClient(vuexGetters) {
	return await queryClient({
		addr: vuexGetters['common/env/apiCosmos']
	})
}

function mergeResults(value, next_values) {
	for (let prop of Object.keys(next_values)) {
		if (Array.isArray(next_values[prop])) {
			value[prop]=[...value[prop], ...next_values[prop]]
		}else{
			value[prop]=next_values[prop]
		}
	}
	return value
}

function getStructure(template) {
	let structure = { fields: [] }
	for (const [key, value] of Object.entries(template)) {
		let field: any = {}
		field.name = key
		field.type = typeof value
		structure.fields.push(field)
	}
	return structure
}

const getDefaultState = () => {
	return {
				Params: {},
				Region: {},
				RegionByName: {},
				RegionAll: {},
				Validator: {},
				ValidatorAll: {},
				Delegation: {},
				DelegationAll: {},
				NotifyApply: {},
				Kyc: {},
				KycAll: {},
				KycByRegion: {},
				FixedDelegation: {},
				FixedDelegationAll: {},
				
				_Structure: {
						Bonus: getStructure(Bonus.fromPartial({})),
						Delegation: getStructure(Delegation.fromPartial({})),
						FixedDelegationItem: getStructure(FixedDelegationItem.fromPartial({})),
						FixedDelegation: getStructure(FixedDelegation.fromPartial({})),
						FixedDeposit: getStructure(FixedDeposit.fromPartial({})),
						Kyc: getStructure(Kyc.fromPartial({})),
						google.protobuf.MessageOptions: getStructure(google.protobuf.MessageOptions.fromPartial({})),
						Notify: getStructure(Notify.fromPartial({})),
						Notifies: getStructure(Notifies.fromPartial({})),
						ApplyPeriod: getStructure(ApplyPeriod.fromPartial({})),
						Params: getStructure(Params.fromPartial({})),
						default_virtual_region: getStructure(default_virtual_region.fromPartial({})),
						QueryKycBonusRequest: getStructure(QueryKycBonusRequest.fromPartial({})),
						QueryKycBonusResponse: getStructure(QueryKycBonusResponse.fromPartial({})),
						QueryGetDepositRequest: getStructure(QueryGetDepositRequest.fromPartial({})),
						QueryGetFixedDepositRequest: getStructure(QueryGetFixedDepositRequest.fromPartial({})),
						QueryGetFixedDepositResponse: getStructure(QueryGetFixedDepositResponse.fromPartial({})),
						QueryAllFixedDepositRequest: getStructure(QueryAllFixedDepositRequest.fromPartial({})),
						QueryAllFixedDepositResponse: getStructure(QueryAllFixedDepositResponse.fromPartial({})),
						QueryFixedDepositByAcctRequest: getStructure(QueryFixedDepositByAcctRequest.fromPartial({})),
						QueryFixedDepositByAcctResponse: getStructure(QueryFixedDepositByAcctResponse.fromPartial({})),
						QueryFixedDepositByRegionRequest: getStructure(QueryFixedDepositByRegionRequest.fromPartial({})),
						QueryFixedDepositByRegionResponse: getStructure(QueryFixedDepositByRegionResponse.fromPartial({})),
						RegionFixedDepositAnnualRate: getStructure(RegionFixedDepositAnnualRate.fromPartial({})),
						RegionFixedDelegationAnnualRate: getStructure(RegionFixedDelegationAnnualRate.fromPartial({})),
						Region: getStructure(Region.fromPartial({})),
						RegionDelegators: getStructure(RegionDelegators.fromPartial({})),
						RegionsDelegators: getStructure(RegionsDelegators.fromPartial({})),
						RegionCommission: getStructure(RegionCommission.fromPartial({})),
						MsgDeleteRegionResponse: getStructure(MsgDeleteRegionResponse.fromPartial({})),
						MsgDelegateResponse: getStructure(MsgDelegateResponse.fromPartial({})),
						MsgCreateFixedDepositResponse: getStructure(MsgCreateFixedDepositResponse.fromPartial({})),
						MsgWithdrawFixedDepositResponse: getStructure(MsgWithdrawFixedDepositResponse.fromPartial({})),
						MsgRemoveKycResponse: getStructure(MsgRemoveKycResponse.fromPartial({})),
						MsgSetFixedDepositInterestRateResponse: getStructure(MsgSetFixedDepositInterestRateResponse.fromPartial({})),
						Validator: getStructure(Validator.fromPartial({})),
						Description: getStructure(Description.fromPartial({})),
						VaultParams: getStructure(VaultParams.fromPartial({})),
						
		},
		_Registry: registry,
		_Subscriptions: new Set(),
	}
}

// initial state
const state = getDefaultState()

export default {
	namespaced: true,
	state,
	mutations: {
		RESET_STATE(state) {
			Object.assign(state, getDefaultState())
		},
		QUERY(state, { query, key, value }) {
			state[query][JSON.stringify(key)] = value
		},
		SUBSCRIBE(state, subscription) {
			state._Subscriptions.add(JSON.stringify(subscription))
		},
		UNSUBSCRIBE(state, subscription) {
			state._Subscriptions.delete(JSON.stringify(subscription))
		}
	},
	getters: {
				getParams: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Params[JSON.stringify(params)] ?? {}
		},
				getRegion: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Region[JSON.stringify(params)] ?? {}
		},
				getRegionByName: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.RegionByName[JSON.stringify(params)] ?? {}
		},
				getRegionAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.RegionAll[JSON.stringify(params)] ?? {}
		},
				getValidator: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Validator[JSON.stringify(params)] ?? {}
		},
				getValidatorAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ValidatorAll[JSON.stringify(params)] ?? {}
		},
				getDelegation: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Delegation[JSON.stringify(params)] ?? {}
		},
				getDelegationAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.DelegationAll[JSON.stringify(params)] ?? {}
		},
				getNotifyApply: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.NotifyApply[JSON.stringify(params)] ?? {}
		},
				getKyc: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Kyc[JSON.stringify(params)] ?? {}
		},
				getKycAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.KycAll[JSON.stringify(params)] ?? {}
		},
				getKycByRegion: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.KycByRegion[JSON.stringify(params)] ?? {}
		},
				getFixedDelegation: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.FixedDelegation[JSON.stringify(params)] ?? {}
		},
				getFixedDelegationAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.FixedDelegationAll[JSON.stringify(params)] ?? {}
		},
				
		getTypeStructure: (state) => (type) => {
			return state._Structure[type].fields
		},
		getRegistry: (state) => {
			return state._Registry
		}
	},
	actions: {
		init({ dispatch, rootGetters }) {
			console.log('Vuex module: cosmos.srstaking.v1beta1 initialized!')
			if (rootGetters['common/env/client']) {
				rootGetters['common/env/client'].on('newblock', () => {
					dispatch('StoreUpdate')
				})
			}
		},
		resetState({ commit }) {
			commit('RESET_STATE')
		},
		unsubscribe({ commit }, subscription) {
			commit('UNSUBSCRIBE', subscription)
		},
		async StoreUpdate({ state, dispatch }) {
			state._Subscriptions.forEach(async (subscription) => {
				try {
					const sub=JSON.parse(subscription)
					await dispatch(sub.action, sub.payload)
				}catch(e) {
					throw new Error('Subscriptions: ' + e.message)
				}
			})
		},
		
		
		
		 		
		
		
		async QueryParams({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryParams()).data
				
					
				commit('QUERY', { query: 'Params', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryParams', payload: { options: { all }, params: {...key},query }})
				return getters['getParams']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryParams API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryRegion({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryRegion( key.id)).data
				
					
				commit('QUERY', { query: 'Region', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryRegion', payload: { options: { all }, params: {...key},query }})
				return getters['getRegion']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryRegion API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryRegionByName({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryRegionByName( key.name)).data
				
					
				commit('QUERY', { query: 'RegionByName', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryRegionByName', payload: { options: { all }, params: {...key},query }})
				return getters['getRegionByName']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryRegionByName API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryRegionAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryRegionAll(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryRegionAll({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'RegionAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryRegionAll', payload: { options: { all }, params: {...key},query }})
				return getters['getRegionAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryRegionAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryValidator({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryValidator( key.address)).data
				
					
				commit('QUERY', { query: 'Validator', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryValidator', payload: { options: { all }, params: {...key},query }})
				return getters['getValidator']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryValidator API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryValidatorAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryValidatorAll(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryValidatorAll({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'ValidatorAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryValidatorAll', payload: { options: { all }, params: {...key},query }})
				return getters['getValidatorAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryValidatorAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryDelegation({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryDelegation( key.addr)).data
				
					
				commit('QUERY', { query: 'Delegation', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryDelegation', payload: { options: { all }, params: {...key},query }})
				return getters['getDelegation']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryDelegation API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryDelegationAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryDelegationAll(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryDelegationAll({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'DelegationAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryDelegationAll', payload: { options: { all }, params: {...key},query }})
				return getters['getDelegationAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryDelegationAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryNotifyApply({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryNotifyApply()).data
				
					
				commit('QUERY', { query: 'NotifyApply', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryNotifyApply', payload: { options: { all }, params: {...key},query }})
				return getters['getNotifyApply']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryNotifyApply API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryKyc({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryKyc( key.account)).data
				
					
				commit('QUERY', { query: 'Kyc', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryKyc', payload: { options: { all }, params: {...key},query }})
				return getters['getKyc']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryKyc API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryKycAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryKycAll(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryKycAll({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'KycAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryKycAll', payload: { options: { all }, params: {...key},query }})
				return getters['getKycAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryKycAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryKycByRegion({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryKycByRegion( key.regionid, query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryKycByRegion( key.regionid, {...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'KycByRegion', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryKycByRegion', payload: { options: { all }, params: {...key},query }})
				return getters['getKycByRegion']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryKycByRegion API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryFixedDelegation({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryFixedDelegation( key.delegatorAddress)).data
				
					
				commit('QUERY', { query: 'FixedDelegation', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryFixedDelegation', payload: { options: { all }, params: {...key},query }})
				return getters['getFixedDelegation']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryFixedDelegation API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryFixedDelegationAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryFixedDelegationAll(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryFixedDelegationAll({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'FixedDelegationAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryFixedDelegationAll', payload: { options: { all }, params: {...key},query }})
				return getters['getFixedDelegationAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryFixedDelegationAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		async sendMsgRemoveKyc({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgRemoveKyc(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgRemoveKyc:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgRemoveKyc:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCreateFixedDelegation({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreateFixedDelegation(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateFixedDelegation:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreateFixedDelegation:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgWithdraw({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgWithdraw(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgWithdraw:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgWithdraw:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCreateValidator({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreateValidator(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateValidator:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreateValidator:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCreateDelegate({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreateDelegate(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateDelegate:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreateDelegate:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgKickValidatorByAddress({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgKickValidatorByAddress(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgKickValidatorByAddress:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgKickValidatorByAddress:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgDeleteRegion({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDeleteRegion(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteRegion:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgDeleteRegion:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCreateRegion({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreateRegion(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateRegion:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreateRegion:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgKickValidatorByPubkey({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgKickValidatorByPubkey(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgKickValidatorByPubkey:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgKickValidatorByPubkey:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgSetFixedDelegationInterestRate({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgSetFixedDelegationInterestRate(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSetFixedDelegationInterestRate:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgSetFixedDelegationInterestRate:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgAgToAc({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgAgToAc(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgAgToAc:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgAgToAc:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgTransferKYC({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgTransferKYC(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgTransferKYC:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgTransferKYC:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgSetFixedDepositInterestRate({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgSetFixedDepositInterestRate(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSetFixedDepositInterestRate:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgSetFixedDepositInterestRate:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdateValidator({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateValidator(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateValidator:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateValidator:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCreateFixedDeposit({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreateFixedDeposit(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateFixedDeposit:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreateFixedDeposit:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgDelegate({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDelegate(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDelegate:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgDelegate:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgExitDelegate({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgExitDelegate(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgExitDelegate:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgExitDelegate:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUnDelegate({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUnDelegate(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUnDelegate:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUnDelegate:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgWithdrawFixedDelegation({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgWithdrawFixedDelegation(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgWithdrawFixedDelegation:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgWithdrawFixedDelegation:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgNewKyc({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgNewKyc(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgNewKyc:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgNewKyc:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgWithdrawUnmovableInterest({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgWithdrawUnmovableInterest(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgWithdrawUnmovableInterest:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgWithdrawUnmovableInterest:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdateRegion({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateRegion(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateRegion:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateRegion:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgWithdrawFixedDeposit({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgWithdrawFixedDeposit(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgWithdrawFixedDeposit:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgWithdrawFixedDeposit:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		
		async MsgRemoveKyc({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgRemoveKyc(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgRemoveKyc:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgRemoveKyc:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgCreateFixedDelegation({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreateFixedDelegation(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateFixedDelegation:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCreateFixedDelegation:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgWithdraw({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgWithdraw(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgWithdraw:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgWithdraw:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgCreateValidator({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreateValidator(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateValidator:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCreateValidator:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgCreateDelegate({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreateDelegate(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateDelegate:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCreateDelegate:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgKickValidatorByAddress({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgKickValidatorByAddress(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgKickValidatorByAddress:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgKickValidatorByAddress:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgDeleteRegion({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDeleteRegion(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteRegion:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgDeleteRegion:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgCreateRegion({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreateRegion(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateRegion:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCreateRegion:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgKickValidatorByPubkey({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgKickValidatorByPubkey(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgKickValidatorByPubkey:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgKickValidatorByPubkey:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgSetFixedDelegationInterestRate({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgSetFixedDelegationInterestRate(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSetFixedDelegationInterestRate:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgSetFixedDelegationInterestRate:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgAgToAc({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgAgToAc(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgAgToAc:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgAgToAc:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgTransferKYC({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgTransferKYC(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgTransferKYC:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgTransferKYC:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgSetFixedDepositInterestRate({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgSetFixedDepositInterestRate(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSetFixedDepositInterestRate:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgSetFixedDepositInterestRate:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdateValidator({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateValidator(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateValidator:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdateValidator:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgCreateFixedDeposit({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreateFixedDeposit(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateFixedDeposit:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCreateFixedDeposit:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgDelegate({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDelegate(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDelegate:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgDelegate:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgExitDelegate({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgExitDelegate(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgExitDelegate:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgExitDelegate:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUnDelegate({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUnDelegate(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUnDelegate:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUnDelegate:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgWithdrawFixedDelegation({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgWithdrawFixedDelegation(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgWithdrawFixedDelegation:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgWithdrawFixedDelegation:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgNewKyc({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgNewKyc(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgNewKyc:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgNewKyc:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgWithdrawUnmovableInterest({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgWithdrawUnmovableInterest(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgWithdrawUnmovableInterest:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgWithdrawUnmovableInterest:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdateRegion({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateRegion(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateRegion:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdateRegion:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgWithdrawFixedDeposit({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgWithdrawFixedDeposit(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgWithdrawFixedDeposit:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgWithdrawFixedDeposit:Create Could not create message: ' + e.message)
				}
			}
		},
		
	}
}
