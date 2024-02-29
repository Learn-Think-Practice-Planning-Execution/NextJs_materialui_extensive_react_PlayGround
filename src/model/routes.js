import { useEffect, useState } from 'react';
import { Navigate, useRoutes, useNavigate } from 'react-router-dom';
// layouts
import DashboardLayout from './components/layouts/dashboard/DashboardLayout';
//
import Login from './components/pages/Login';
import NotFound from './components/pages/Page404';
import DashboardApp from './components/pages/DashboardApp';
import Scenario from './components/pages/Scenario/Scenario';
import ScenarioDetails from './components/pages/Scenario/ScenarioDetails';
import Setting from './components/pages/Setting';
import DataQuality from './components/pages/DataQuality/DataQuality';
import DataQualityDetailed from './components/pages/DataQuality/DataQualityDetailed';
import DataQualityDataset from './components/pages/DataQuality/DataQualityDataset';
import Profile from './components/pages/Profile';
import Unify from './components/pages/Unify/Unify';
import Enrichment from './components/pages/Enrichment/Enrichment';
import AlertsInvestigation from './components/pages/Alerts/AlertsInvestigation/AlertsInvestigation';
import Overview from './components/pages/Alerts/OverviewAlerts/Overview';
import FCRReport from './components/pages/Alerts/FCRReportAlerts/FCRReport';
import Segment from './components/pages/Alerts/Segment/Segment';
import PastTransactions from './components/pages/Alerts/PastTransactionsAlerts/PastTransactions';
import Network from './components/pages/Alerts/NetworkAlerts/Network';
import TradeAlerts from './components/pages/Alerts/TradeAlerts/TradeAlerts';
import Task from './components/pages/Alerts/Task/Task';
import ViewTask from './components/pages/Alerts/Task/ViewTask';
import { userDataFromLocal } from './utils/getUserDetails';
import { getGlobals } from './utils/Globals';
import FileBrowser from './components/pages/FileBrowser';
// Rule pages
import Cases from './components/pages/Cases/Cases';
import Reports from './components/pages/Reports/Reports';
import Threshold from './components/pages/Threshold/Threshold';
import AddReports from './components/pages/Reports/AddReports';
import AddThreshold from './components/pages/Threshold/AddThreshold';
import SearchCases from './components/pages/Cases/SearchCases';
import NewCases from './components/pages/Cases/NewCases';
// ----------------------------------------------------------------------
/**
 * return routing paths
 * @return  {array}  routing object
 */
function Router() {
  const { GLOBAL_PATH } = getGlobals();
  // console.log('GLOBAL_PATH', GLOBAL_PATH);

  const navigate = useNavigate();
  const [userDeatils, setUserDetails] = useState({});
  // const rootElement = (userDeatilsData) => {
  //   // console.log(userDeatilsData.isLogedIn);
  //   if (userDeatilsData.isLogedIn) {
  //     return <DashboardApp />;
  //   }
  //   return <Navigate to={`/${GLOBAL_PATH}/login`} />;
  // };
  // useEffect(() => {
  //   const fetchUserDetailsLocalStorage = userDataFromLocal();
  //   console.log('login Condition0', fetchUserDetailsLocalStorage);

  //   console.log('login Condition0', Object.keys(fetchUserDetailsLocalStorage).length > 0);
  //   // console.log(fetchUserDetailsLocalStorage);
  //   if (Object.keys(fetchUserDetailsLocalStorage).length > 0) {
  //     if (Object.keys(fetchUserDetailsLocalStorage?.allTokens).length === 0) {
  //       navigate(`/${GLOBAL_PATH}/login`, { replace: true });
  //     }
  //     // fetchUserDetailsLocalStorage = '{"isLogedIn":false}';
  //   } else {
  //     console.log('login Condition2');
  //   }
  //   setUserDetails(fetchUserDetailsLocalStorage);
  // }, []);

  return useRoutes([
    {
      path: ``,
      element: <Login />,
      children: [
        { path: `${GLOBAL_PATH}`, element: <Login /> },
        { path: '404', element: <NotFound /> }
        // { path: 'dashboard', element: <DashboardApp /> },
        // { path: '*', element: <Navigate to="/404" /> }
        // { path: '', element: <Login /> },
        //     { path: '404', element: <NotFound /> },
        //     { path: 'dashboard', element: <DashboardApp /> },
        //     { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    {
      path: `${GLOBAL_PATH}/login`,
      element: <Login />
    },
    {
      path: `${GLOBAL_PATH}/dashboard`,
      element: <DashboardLayout />,
      children: [
        {
          path: '',
          element: <DashboardApp />,
          children: [{ path: '', element: <DashboardApp /> }]
        }
      ]
    },
    {
      path: '/scenario',
      element: <DashboardLayout />,
      children: [
        { path: '', element: <Scenario /> },
        { path: 'scenario-details', element: <ScenarioDetails /> }
      ]
    },
    {
      path: `${GLOBAL_PATH}/setting`,
      element: <DashboardLayout />,
      children: [{ path: '', element: <Setting /> }]
    },
    {
      path: `${GLOBAL_PATH}/profile`,
      element: <DashboardLayout />,
      children: [{ path: '', element: <Profile /> }]
    },

    {
      path: `${GLOBAL_PATH}/data-quality`,
      element: <DashboardLayout />,
      children: [
        { path: '', element: <DataQuality /> },
        { path: 'data-quality-detailed', element: <DataQualityDetailed /> },
        { path: 'data-quality-dataset', element: <DataQualityDataset /> }
      ]
    },

    {
      path: '/alerts',
      element: <DashboardLayout />,
      children: [{ path: '', element: <AlertsInvestigation /> }]
    },
    {
      path: '/cases',
      element: <DashboardLayout />,
      children: [
        { path: '', element: <Cases /> },

        { path: 'new-cases', element: <NewCases /> },
        { path: 'search-cases', element: <SearchCases /> }
      ]
    },
    {
      path: '/reports',
      element: <DashboardLayout />,
      children: [
        { path: '', element: <Reports /> },
        { path: 'add-reports', element: <AddReports /> }
      ]
    },
    {
      path: '/threshold',
      element: <DashboardLayout />,
      children: [
        { path: '', element: <Threshold /> },
        { path: 'add-threshold', element: <AddThreshold /> }
      ]
    },
    {
      path: '/overview',
      element: <DashboardLayout />,
      children: [{ path: '', element: <Overview /> }]
    },
    {
      path: '/fcr-report',
      element: <DashboardLayout />,
      children: [{ path: '', element: <FCRReport /> }]
    },
    {
      path: '/segment',
      element: <DashboardLayout />,
      children: [{ path: '', element: <Segment /> }]
    },
    {
      path: '/past-transactions',
      element: <DashboardLayout />,
      children: [{ path: '', element: <PastTransactions /> }]
    },
    {
      path: '/network',
      element: <DashboardLayout />,
      children: [{ path: '', element: <Network /> }]
    },
    {
      path: '/trade-alerts',
      element: <DashboardLayout />,
      children: [{ path: '', element: <TradeAlerts /> }]
    },
    {
      path: '/task',
      element: <DashboardLayout />,
      children: [
        { path: '', element: <Task /> },
        { path: 'view-task', element: <ViewTask /> }
      ]
    },
    {
      path: `${GLOBAL_PATH}/unify`,
      element: <DashboardLayout />,
      children: [{ path: '', element: <Unify /> }]
    },
    {
      path: `${GLOBAL_PATH}/enrichment`,
      element: <DashboardLayout />,
      children: [{ path: '', element: <Enrichment /> }]
    },
    { path: '*', element: <DashboardLayout />, children: [{ path: '*', element: <NotFound /> }] },
    { path: `${GLOBAL_PATH}/file`, element: <FileBrowser /> }
  ]);
}
export default Router;
