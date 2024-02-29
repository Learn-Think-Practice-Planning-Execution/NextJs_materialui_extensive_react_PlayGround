import { scantricGlobelUrl } from './globalApi';
import dynamicApiServices from './dynamicApiServices';

const alertsService = {
  // search api
  searchSource: (credential, authToken) =>
    dynamicApiServices().postApi(`${scantricGlobelUrl}/pub/searchsource/`, credential, authToken)
};

export default alertsService;
