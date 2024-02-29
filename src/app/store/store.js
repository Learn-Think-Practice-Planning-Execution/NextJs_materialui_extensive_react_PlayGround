import { configureStore } from '@reduxjs/toolkit';
import alertSliceReducer from '../components/pages/Alerts/AlertsSlice/alertSlice';
import dashboardSliceReducer from '../components/pages/dashboardSlice';
import caseSliceReducers from '../components/pages/Cases/CasesSlice/caseSlice';
import thresholdSliceReducers from '../components/pages/Threshold/ThresholdSlice/thresholdSlice';

// const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    dashboard: dashboardSliceReducer,
    alerts: alertSliceReducer,
    cases: caseSliceReducers,
    threshold: thresholdSliceReducers
  }
});

export default store;
