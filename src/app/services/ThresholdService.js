// loadDataFromDataSet

import useApiServices from './useApiServices';
import { scantricGlobelUrl } from './globalApi';

const ThresholdService = {
  LoadDataFromDataSet: (credential) =>
    useApiServices().postApiNoToken(`${scantricGlobelUrl}/project/loadDataFromDataSet`, credential)
};

export default ThresholdService;
