// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import CosmosCosmosSdkCosmosAuthV1Beta1 from './cosmos/cosmos-sdk/cosmos.auth.v1beta1'
import CosmosCosmosSdkCosmosAuthzV1Beta1 from './cosmos/cosmos-sdk/cosmos.authz.v1beta1'
import CosmosCosmosSdkCosmosBankV1Beta1 from './cosmos/cosmos-sdk/cosmos.bank.v1beta1'
import CosmosCosmosSdkCosmosBaseTendermintV1Beta1 from './cosmos/cosmos-sdk/cosmos.base.tendermint.v1beta1'
import CosmosCosmosSdkCosmosFeegrantV1Beta1 from './cosmos/cosmos-sdk/cosmos.feegrant.v1beta1'
import CosmosCosmosSdkCosmosGovV1Beta1 from './cosmos/cosmos-sdk/cosmos.gov.v1beta1'
import CosmosCosmosSdkCosmosMintV1Beta1 from './cosmos/cosmos-sdk/cosmos.mint.v1beta1'
import CosmosCosmosSdkCosmosParamsV1Beta1 from './cosmos/cosmos-sdk/cosmos.params.v1beta1'
import CosmosCosmosSdkCosmosSlashingV1Beta1 from './cosmos/cosmos-sdk/cosmos.slashing.v1beta1'
import CosmosCosmosSdkCosmosSrstakingV1Beta1 from './cosmos/cosmos-sdk/cosmos.srstaking.v1beta1'
import CosmosCosmosSdkCosmosTxV1Beta1 from './cosmos/cosmos-sdk/cosmos.tx.v1beta1'
import CosmosCosmosSdkCosmosUpgradeV1Beta1 from './cosmos/cosmos-sdk/cosmos.upgrade.v1beta1'
import CosmosCosmosSdkCosmosVestingV1Beta1 from './cosmos/cosmos-sdk/cosmos.vesting.v1beta1'
import GeaPoaGeapoaCrisis from './gea-poa/geapoa.crisis'
import GeaPoaGeapoaEvidence from './gea-poa/geapoa.evidence'
import GeaPoaGeapoaSlashing from './gea-poa/geapoa.slashing'
import IbcGoV3IbcApplicationsInterchainAccountsControllerV1 from './ibc-go/v3/ibc.applications.interchain_accounts.controller.v1'
import IbcGoV3IbcApplicationsInterchainAccountsHostV1 from './ibc-go/v3/ibc.applications.interchain_accounts.host.v1'
import IbcGoV3IbcApplicationsTransferV1 from './ibc-go/v3/ibc.applications.transfer.v1'
import IbcGoV3IbcCoreChannelV1 from './ibc-go/v3/ibc.core.channel.v1'
import IbcGoV3IbcCoreClientV1 from './ibc-go/v3/ibc.core.client.v1'
import IbcGoV3IbcCoreConnectionV1 from './ibc-go/v3/ibc.core.connection.v1'


export default { 
  CosmosCosmosSdkCosmosAuthV1Beta1: load(CosmosCosmosSdkCosmosAuthV1Beta1, 'cosmos.auth.v1beta1'),
  CosmosCosmosSdkCosmosAuthzV1Beta1: load(CosmosCosmosSdkCosmosAuthzV1Beta1, 'cosmos.authz.v1beta1'),
  CosmosCosmosSdkCosmosBankV1Beta1: load(CosmosCosmosSdkCosmosBankV1Beta1, 'cosmos.bank.v1beta1'),
  CosmosCosmosSdkCosmosBaseTendermintV1Beta1: load(CosmosCosmosSdkCosmosBaseTendermintV1Beta1, 'cosmos.base.tendermint.v1beta1'),
  CosmosCosmosSdkCosmosFeegrantV1Beta1: load(CosmosCosmosSdkCosmosFeegrantV1Beta1, 'cosmos.feegrant.v1beta1'),
  CosmosCosmosSdkCosmosGovV1Beta1: load(CosmosCosmosSdkCosmosGovV1Beta1, 'cosmos.gov.v1beta1'),
  CosmosCosmosSdkCosmosMintV1Beta1: load(CosmosCosmosSdkCosmosMintV1Beta1, 'cosmos.mint.v1beta1'),
  CosmosCosmosSdkCosmosParamsV1Beta1: load(CosmosCosmosSdkCosmosParamsV1Beta1, 'cosmos.params.v1beta1'),
  CosmosCosmosSdkCosmosSlashingV1Beta1: load(CosmosCosmosSdkCosmosSlashingV1Beta1, 'cosmos.slashing.v1beta1'),
  CosmosCosmosSdkCosmosSrstakingV1Beta1: load(CosmosCosmosSdkCosmosSrstakingV1Beta1, 'cosmos.srstaking.v1beta1'),
  CosmosCosmosSdkCosmosTxV1Beta1: load(CosmosCosmosSdkCosmosTxV1Beta1, 'cosmos.tx.v1beta1'),
  CosmosCosmosSdkCosmosUpgradeV1Beta1: load(CosmosCosmosSdkCosmosUpgradeV1Beta1, 'cosmos.upgrade.v1beta1'),
  CosmosCosmosSdkCosmosVestingV1Beta1: load(CosmosCosmosSdkCosmosVestingV1Beta1, 'cosmos.vesting.v1beta1'),
  GeaPoaGeapoaCrisis: load(GeaPoaGeapoaCrisis, 'geapoa.crisis'),
  GeaPoaGeapoaEvidence: load(GeaPoaGeapoaEvidence, 'geapoa.evidence'),
  GeaPoaGeapoaSlashing: load(GeaPoaGeapoaSlashing, 'geapoa.slashing'),
  IbcGoV3IbcApplicationsInterchainAccountsControllerV1: load(IbcGoV3IbcApplicationsInterchainAccountsControllerV1, 'ibc.applications.interchain_accounts.controller.v1'),
  IbcGoV3IbcApplicationsInterchainAccountsHostV1: load(IbcGoV3IbcApplicationsInterchainAccountsHostV1, 'ibc.applications.interchain_accounts.host.v1'),
  IbcGoV3IbcApplicationsTransferV1: load(IbcGoV3IbcApplicationsTransferV1, 'ibc.applications.transfer.v1'),
  IbcGoV3IbcCoreChannelV1: load(IbcGoV3IbcCoreChannelV1, 'ibc.core.channel.v1'),
  IbcGoV3IbcCoreClientV1: load(IbcGoV3IbcCoreClientV1, 'ibc.core.client.v1'),
  IbcGoV3IbcCoreConnectionV1: load(IbcGoV3IbcCoreConnectionV1, 'ibc.core.connection.v1'),
  
}


function load(mod, fullns) {
    return function init(store) {        
        if (store.hasModule([fullns])) {
            throw new Error('Duplicate module name detected: '+ fullns)
        }else{
            store.registerModule([fullns], mod)
            store.subscribe((mutation) => {
                if (mutation.type == 'common/env/INITIALIZE_WS_COMPLETE') {
                    store.dispatch(fullns+ '/init', null, {
                        root: true
                    })
                }
            })
        }
    }
}
