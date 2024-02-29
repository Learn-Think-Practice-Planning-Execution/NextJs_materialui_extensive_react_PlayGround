import useApiServices from './useApiServices';
import { scantricGlobelUrl } from './globalApi';

const DashboardServices = {
  TbmlAlertList: (user, authToken) =>
    useApiServices().getApi(`${scantricGlobelUrl}/tbml_alert_list?${user}`, authToken),
  AlertOverviewList: (id, authToken) =>
    useApiServices().getApi(
      `${scantricGlobelUrl}/alert_overview_identity?alert_id=${id}`,
      authToken
    ),
  AlertOverviewDocs: (id, authToken) =>
    useApiServices().getApi(`${scantricGlobelUrl}/alert_overview_docs?alert_id=${id}`, authToken)
};

export default DashboardServices;
