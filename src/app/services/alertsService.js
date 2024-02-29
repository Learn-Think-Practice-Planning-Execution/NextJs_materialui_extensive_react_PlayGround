import useApiServices from './useApiServices';
import { scantricGlobelUrl } from './globalApi';

const AlertService = {
  TbmlAlertList: (user, authToken) =>
    useApiServices().getApi(`${scantricGlobelUrl}/tbml_alert_list?${user}`, authToken),
  AlertOverviewList: (id, authToken) =>
    useApiServices().getApi(
      `${scantricGlobelUrl}/alert_overview_identity?alert_id=${id}`,
      authToken
    ),
  AlertOverviewDocs: (id, authToken) =>
    useApiServices().getApi(`${scantricGlobelUrl}/alert_overview_docs?alert_id=${id}`, authToken),
  AlertOverviewVessel: (id, authToken) =>
    useApiServices().getApi(`${scantricGlobelUrl}/alert_overview_vessel?alert_id=${id}`, authToken),
  AlertVesselFlag: (countryCode, authToken) =>
    useApiServices().getApi(
      `${scantricGlobelUrl}/vessel_flag?country_code=${countryCode}`,
      authToken
    ),
  AlertOverviewSanction: (id, authToken) =>
    useApiServices().getApi(
      `${scantricGlobelUrl}/alert_overview_sanction?alert_id=${id}`,
      authToken
    ),
  AlertSanctionStatus: (QueryString, authtoken) =>
    useApiServices().putApiToken(
      `${scantricGlobelUrl}/sanction_screening_status?${QueryString}`,
      authtoken
    ),
  AlertOverviewTransaction: (id, authToken) =>
    useApiServices().getApi(
      `${scantricGlobelUrl}/alert_overview_trans_kpi?alert_id=${id}`,
      authToken
    ),
  AlertOverviewPriceBench: (idDeviation, authToken) =>
    useApiServices().getApi(
      `${scantricGlobelUrl}/alert_overview_price_bench?${idDeviation}`,
      authToken
    ),
  AlertOverviewPriceForecast: (idDeviation, authToken) =>
    useApiServices().getApi(
      `${scantricGlobelUrl}/alert_overview_price_forecast?${idDeviation}`,
      authToken
    ),
  TbmlAlertUpdate: (updateData, authToken) =>
    useApiServices().putApiToken(
      `${scantricGlobelUrl}/tbml_update_status?${updateData}`,
      authToken
    ),
  PriceTagChartData: (id) =>
    useApiServices().getApi(`${scantricGlobelUrl}/tbml_chart_data?transaction_id=${id}`),
  GetLiveCords: (credential) =>
    useApiServices().postApi(`${scantricGlobelUrl}/vessel_tracking_combine`, credential),
  // Alert report API
  FcrReport: (id, authToken) =>
    useApiServices().getApi(`${scantricGlobelUrl}/tbml_fcr_report?alert_id=${id}`, authToken),
  PastDataList: (id) =>
    useApiServices().getApi(`${scantricGlobelUrl}/tbml_past_data?alert_id=${id}`),
  TbmlAlertEdit: (data) => useApiServices().postApi(`${scantricGlobelUrl}/tbml_alert_edit`, data),
  AlertTradeList: (id, authtoken) =>
    useApiServices().getApi(
      `${scantricGlobelUrl}/trade_customer_list_data?alert_id=${id}`,
      authtoken
    ),
  AlertTradeCustomerGraph: (id, authtoken) =>
    useApiServices().getApi(
      `${scantricGlobelUrl}/trade_customer_graph_data?alert_id=${id}`,
      authtoken
    ),

  AlertTradeCntrPartyList: (id, authtoken) =>
    useApiServices().getApi(
      `${scantricGlobelUrl}/trade_counterparty_list_data?alert_id=${id}`,
      authtoken
    ),
  AlertTradeCounterPartyGraph: (id, authtoken) =>
    useApiServices().getApi(
      `${scantricGlobelUrl}/trade_counterparty_graph_data?alert_id=${id}`,
      authtoken
    ),
  AlertHsCodeList: (hsCode, authtoken) =>
    useApiServices().getApi(
      `${scantricGlobelUrl}/details_from_hscode?hs_code=${hsCode}`,
      authtoken
    ),
  AlertTradeListFilter: (QueryString, authtoken) =>
    useApiServices().getApi(`${scantricGlobelUrl}/trade_customer_filter?${QueryString}`, authtoken),
  AlertTradeCntrPartyListFilter: (QueryString, authtoken) =>
    useApiServices().getApi(
      `${scantricGlobelUrl}/trade_counterparty_filter?${QueryString}`,
      authtoken
    ),
  PriceBenchMark: (id) =>
    useApiServices().getApi(`${scantricGlobelUrl}/tbml_price_benchmarking?alert_id=${id}`),

  TbmlAlertSearch: (QueryString, authtoken) =>
    useApiServices().getApi(`${scantricGlobelUrl}/tbml_alert_search?${QueryString}`, authtoken),

  TbmlAlertFilter: (QueryString, authtoken) =>
    useApiServices().getApi(`${scantricGlobelUrl}/tbml_alert_filter?${QueryString}`, authtoken),

  PastAlertTransactions: (id, authToken) =>
    useApiServices().getApi(`${scantricGlobelUrl}/past_tranx?alert_id=${id}`, authToken),
  PastAlertHScodeList: (id, authToken) =>
    useApiServices().getApi(`${scantricGlobelUrl}/hs_code_list?alert_id=${id}`, authToken),
  PastAlertPricingTrends: (credential, authToken) =>
    useApiServices().postQueryApi(
      `${scantricGlobelUrl}/past_tranx_pricing_trends?${credential}`,
      authToken
    ),
  PastAlertOriginCountry: (id, authToken) =>
    useApiServices().getApi(
      `${scantricGlobelUrl}/past_trans_origin_country?alert_id=${id}`,
      authToken
    ),
  PastAlertDestinationCountry: (id, authToken) =>
    useApiServices().getApi(
      `${scantricGlobelUrl}/past_trans_destination_country?alert_id=${id}`,
      authToken
    ),
  AlertOverviewShipment: (id, authToken) =>
    useApiServices().getApi(
      `${scantricGlobelUrl}/alert_overview_shipment?alert_id=${id}`,
      authToken
    ),
  AlertCases: (id, authtoken) =>
    useApiServices().getApi(`${scantricGlobelUrl}/alert_and_cases?alert_id=${id}`, authtoken),
  AlertOverviewLatLong: (QueryString, authtoken) =>
    useApiServices().getApi(
      `${scantricGlobelUrl}/find_lat_long?address_sample=${QueryString}`,
      authtoken
    ),
  AlertCasesTransactionDeatils: (id, authtoken) =>
    useApiServices().getApi(
      `${scantricGlobelUrl}/alert_and_cases_transaction_deatils?alert_id=${id}`,
      authtoken
    )
  // PriceBenchMark: (id) =>
  //   useApiServices().getApi(`${scantricGlobelUrl}/tbml_price_benchmarking?alert_id=${id}`)

  // TbmlAlertEdit: (data) => useApiServices().postApi(`${scantricGlobelUrl}/tbml_alert_edit`, data)
};

export default AlertService;
