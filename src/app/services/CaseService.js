import useApiServices from './useApiServices';
import { scantricGlobelUrl } from './globalApi';

// globalUrlDS using for datasource mostly

const CaseService = {
  Createexperiment: (credential, authToken) =>
    useApiServices().postApi(`${scantricGlobelUrl}/createexperiment`, credential, authToken)
};

export default CaseService;
