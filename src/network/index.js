/*
 * @Author: your name
 * @Date: 2021-12-03 11:39:59
 * @LastEditTime: 2022-01-06 16:39:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \udesk-mobile-template\src\network\index.js
 */
export { getAllRiskAttributes } from './riskAttribute'
export { getPaggingClientAdmin, getPaggingAssistantUser, searchClientAdmin, searchgAssistantUser, custominfoInsert } from './clientAdmin'
export { getSuggestion } from './configurationScheme'
export { getReportInfo, getReportInfoshare, getTopFiveAssets, getPieData, getBarData, getBarDatashare, getPieDatashare, getTopFiveAssetsshare } from './treasureDiagnoseReport'
export { getLogListByClientId, LogsInsert, LogsCustLogsList } from './logList'
export { getLogDetailByLogId } from './logDetail'
export { getConfigurationSuggestion, getCardDescription, getConfigurationSuggestionBarData } from './configurationSuggestion'
export { getSuggestionPercentage, updatePercentage } from './customPropotion'
export { getImportantProductDatas, getPreciousMetalList, getsearch, getPreciousMetalById, getpersonalDetail } from './importantProduction'
export { ValidateUserByIdentity } from './validate'
export { sendValidateCode, validate, msgPhone } from './messageValidate'
export { getBaseInfoByClientId, getBaseInfoByReportId, getTreasureManager, getThankDescriptionInfo, getShareUrl, getHealthyDescriptionshare } from './reportView'
export { lastTimeuserAccount, getMsgNumber, EventListUserAccount } from './eventMarketing'

