import { Tooltip, Typography } from '@mui/material';
import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import { BiBookContent } from 'react-icons/bi';
import { AiFillPieChart } from 'react-icons/ai';
import { RiDatabaseLine } from 'react-icons/ri';
import { TiFlowMerge } from 'react-icons/ti';
import { TfiRulerAlt2 } from 'react-icons/tfi';
import peopleFill from '@iconify/icons-eva/people-fill';
import dashboard from '@iconify/icons-ic/dashboard';
import fileTextFill from '@iconify/icons-eva/file-text-fill';
import lockFill from '@iconify/icons-eva/lock-fill';
import personAddFill from '@iconify/icons-ic/card-membership';
import access from '@iconify/icons-ic/lock-open';
import fileExclamationFilled from '@iconify/icons-ant-design/file-exclamation-filled';
import { FaUserTie, FaFileInvoiceDollar } from 'react-icons/fa';
import { IoIosPeople, IoMdUnlock } from 'react-icons/io';
import { BsNewspaper, BsGraphUp } from 'react-icons/bs';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import ReceiptIcon from '@mui/icons-material/Receipt';
import GroupIcon from '@mui/icons-material/Group';
import DomainVerificationIcon from '@mui/icons-material/DomainVerification';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LoginIcon from '@mui/icons-material/Login';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import SnowboardingIcon from '@mui/icons-material/Snowboarding';
import HandshakeIcon from '@mui/icons-material/Handshake';
// import { IoNewspaperSharp } from 'react-icons/io';
import TaskIcon from '@mui/icons-material/Task';
import LayersIcon from '@mui/icons-material/Layers';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SummarizeIcon from '@mui/icons-material/Summarize';
import SimCardAlertIcon from '@mui/icons-material/SimCardAlert';
import AssignmentIcon from '@mui/icons-material/Assignment';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import GavelIcon from '@mui/icons-material/Gavel';
import ElevatorIcon from '@mui/icons-material/Elevator';
import DataThresholdingIcon from '@mui/icons-material/DataThresholding';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import {
  MdOutlineBookmarkAdded,
  MdOutlinePolicy,
  MdSupervisedUserCircle,
  MdFlare,
  MdOutlineMenuBook
} from 'react-icons/md';
// mui icons
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import PeopleIcon from '@mui/icons-material/People';

import AccountTreeIcon from '@mui/icons-material/AccountTree';

import { IoSpeedometerOutline } from 'react-icons/io5';
import { TbCurrentLocation } from 'react-icons/tb';
import ApiIcon from '@mui/icons-material/Api';
import {
  HiDocumentSearch,
  HiOutlineBookOpen,
  HiOutlineUserGroup,
  HiUsers,
  HiUserGroup
} from 'react-icons/hi';

import { GrHomeRounded } from 'react-icons/gr';
import {
  HomeOutlined,
  BarChartOutlined,
  DataThresholdingOutlined,
  HubOutlined,
  PolylineOutlined,
  WbIncandescentOutlined,
  SportsHandballOutlined,
  ShareOutlined,
  ShortcutOutlined,
  AssignmentIndOutlined,
  FlareOutlined
} from '@mui/icons-material/';

import {
  JourneyIcon,
  DataSourceIcon,
  ProcessIcon,
  RulesIcon,
  ScorecardIcon,
  DataflowIcon,
  AutoMLIcon,
  KnowledgegraphIcon,
  DataFlowQuality,
  DataQuality,
  Policy,
  Stepward,
  DataPrepIcon,
  DataFlowUnify,
  DataCatalog,
  ToolsIcon
} from '../../../vector';
import { userDataFromLocal } from '../../../utils/getUserDetails';
import { getGlobals } from '../../../utils/Globals';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={20} height={20} />;

function sidebarConfig() {
  const { GLOBAL_PATH } = getGlobals();
  console.log('GLOBAL_PATH', GLOBAL_PATH);
  const tokenKeys = userDataFromLocal()?.allTokens;
  if (tokenKeys !== undefined && Object.keys(tokenKeys).length > 0) {
    const sideBarData = Object.keys(tokenKeys).map((item, itemIndex) => {
      if (item !== 'errors') {
        return {
          title: item.split('-').map((item) => item.charAt(0).toUpperCase() + item.slice(1) + ' '),
          path: `${GLOBAL_PATH}/${item}`,
          icon: (
            <Tooltip title={item.charAt(0).toUpperCase() + item.slice(1)} placement="right" arrow>
              <Typography>
                {item === 'product' ? (
                  <TiFlowMerge size={22} />
                ) : item === 'allocation' ? (
                  <TbCurrentLocation size={22} />
                ) : item === 'policies' ? (
                  <MdOutlinePolicy size={22} />
                ) : item === 'scorecard' ? (
                  <IoSpeedometerOutline size={22} />
                ) : item === 'measures' ? (
                  <SquareFootIcon />
                ) : item === 'model' ? (
                  <MdSupervisedUserCircle size={22} />
                ) : item === 'datasource' ? (
                  <HiDocumentSearch size={22} />
                ) : item === 'library' ? (
                  <HiOutlineBookOpen size={22} />
                ) : item === 'users' ? (
                  <PeopleIcon />
                ) : item === 'manage-access' ? (
                  <TouchAppIcon />
                ) : item === 'api-master' ? (
                  <ApiIcon size={22} />
                ) : item === 'data-flow' ? (
                  <AccountTreeIcon />
                ) : item === 'data-catalog' ? (
                  <MdOutlineMenuBook size={22} />
                ) : (
                  ''
                )}
              </Typography>
            </Tooltip>
          )
        };
      }
    });
    console.log('sideBarData1', sideBarData);
    console.log(
      'sideBarData1',
      sideBarData.filter((item, index) => item !== undefined)
    );
    return sideBarData.filter((item, index) => item !== undefined);
  }
}

const sidebarConfig1 = [
  {
    title: 'Dashboard',
    matchKey: 'Dashboard', // api matching key
    path: '/dashboard',
    // icon: getIcon(pieChart2Fill, null, 20, 20)
    icon: (
      <Tooltip title="Dashboard" placement="right" arrow>
        <Typography>
          <AiFillPieChart size={22} />
        </Typography>
      </Tooltip>
    )
    // icon: <AiFillPieChart size={22} />
  },
  {
    title: 'Source',
    matchKey: 'Datasource',
    path: '/datasource',
    // icon: <RiDatabaseLine size={22} />
    icon: (
      <Tooltip title="Data Source" placement="right" arrow>
        <Typography>
          <HiDocumentSearch size={22} />
        </Typography>
      </Tooltip>
    )
  },
  {
    title: 'Data Flow',
    matchKey: 'Dataflow',
    path: '/dataflow',
    // icon: <TiFlowMerge size={22} />
    icon: (
      <Tooltip title="Data Flow" placement="right" arrow>
        <Typography>
          <TiFlowMerge size={22} />
        </Typography>
      </Tooltip>
    )
  },
  {
    title: 'Catalog',
    matchKey: 'Catalog',
    path: '/data-catalog',
    // icon: <BiBookContent size={22} />
    icon: (
      <Tooltip title="Catalog" placement="right" arrow>
        <Typography>
          <MdOutlineMenuBook size={22} />
        </Typography>
      </Tooltip>
    )
  },
  {
    title: 'Quality',
    matchKey: 'Quality',
    path: '/data-quality',
    // icon: <MdOutlineBookmarkAdded size={22} />
    icon: (
      <Tooltip title="Quality" placement="right" arrow>
        <Typography>
          <MdOutlineBookmarkAdded size={22} />
        </Typography>
      </Tooltip>
    )
  },
  {
    title: 'Policy',
    matchKey: 'Policy',
    path: '/policy',
    // icon: <MdOutlinePolicy size={22} />
    icon: (
      <Tooltip title="Policy" placement="right" arrow>
        <Typography>
          <MdOutlinePolicy size={22} />
        </Typography>
      </Tooltip>
    )
  },
  {
    title: 'Steward',
    matchKey: 'Steward',
    path: '/steward',
    // icon: <MdSupervisedUserCircle size={22} />
    icon: (
      <Tooltip title="Steward" placement="right" arrow>
        <Typography>
          <MdSupervisedUserCircle size={22} />
        </Typography>
      </Tooltip>
    )
  },
  {
    title: 'Measures',
    matchKey: 'Measures',
    path: '/measures',
    icon: (
      <Tooltip title="Measures" placement="right" arrow>
        <Typography>
          <TfiRulerAlt2 size={17} />
        </Typography>
      </Tooltip>
    )
  },
  {
    title: 'Unify',
    matchKey: 'Unify',
    path: '/unify',
    icon: (
      <Tooltip title="Unify" placement="right" arrow>
        <HubOutlined size={22} />
      </Tooltip>
    )
  },
  {
    title: 'Enrichment',
    matchKey: 'Enrichment',
    path: '/enrichment',
    icon: (
      <Tooltip title="Enrichment" placement="right" arrow>
        <Typography>
          <MdFlare size={22} />
        </Typography>
      </Tooltip>
    )
  },
  {
    title: 'Alerts',
    matchKey: 'Alerts',
    path: '/alerts',
    icon: (
      <Tooltip title="Alerts" placement="right" arrow>
        <Typography>
          <MdFlare size={22} />
        </Typography>
      </Tooltip>
    )
  }
];

export default sidebarConfig;

export const sidebarConfig12 = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <DashboardIcon />
  },
  // {
  //   title: 'Transaction',
  //   path: '/transaction',
  //   icon: <SupportAgentIcon />
  // },
  {
    title: 'Scenario',
    path: '/scenario',
    icon: <LayersIcon />
  },
  {
    title: 'Alerts',
    path: '/alerts',
    icon: <SimCardAlertIcon />
  },
  {
    title: 'Cases',
    path: '/cases',
    icon: <BusinessCenterIcon />
  },
  {
    title: 'STR/CTR',
    path: '/strctr',
    icon: <TaskIcon />
  },
  {
    title: 'Customer',
    path: '/customer',
    icon: <SupervisedUserCircleIcon />
  },
  {
    title: 'Sanction',
    path: '/sanction',
    icon: <GavelIcon />
  },
  {
    title: 'Threshold',
    path: '/threshold',
    icon: <DataThresholdingIcon />
  },
  {
    title: 'KYC',
    path: '/kyc',
    icon: <AddPhotoAlternateIcon />
  },
  {
    title: 'MIS Reports',
    path: '/mis-reports',
    icon: <SummarizeIcon />
  },
  {
    title: 'Users',
    path: '/users',
    icon: <GroupIcon />
  },
  {
    title: 'Access',
    path: '/access',
    icon: <TouchAppIcon />
  }
];

export const sidebarConfigAlert = [
  {
    title: 'Overview',
    path: '/overview',
    icon: <LayersIcon />
  },
  {
    title: 'FCR Report',
    path: '/fcr-report',
    icon: <TaskIcon />
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: <PermContactCalendarIcon />
  },
  // {
  //   title: 'KYC',
  //   path: '/kyc-alerts',
  //   icon: <AddPhotoAlternateIcon />
  // },
  {
    title: 'Transaction',
    path: '/transaction-alerts',
    icon: <ReceiptIcon />
  },
  {
    title: 'Network',
    path: '/network',
    icon: <IntegrationInstructionsIcon />
  },
  // {
  //   title: 'Segment',
  //   path: '/segment',
  //   icon: <HandshakeIcon />
  // },
  {
    title: 'Task',
    path: '/task',
    icon: <AssignmentIcon />
  }
];

export const sidebarConfigCustomer = [
  {
    title: 'FCR Report',
    path: '/customer-fcr-report',
    icon: <TaskIcon />
  },
  {
    title: 'Customer Profile',
    path: '/customer-profile',
    icon: <PermContactCalendarIcon />
  }
  // {
  //   title: 'Screening',
  //   path: '/customer-screening',
  //   icon: <ReceiptIcon />
  // },
  // {
  //   title: 'Relationship',
  //   path: '/relationship',
  //   icon: <IntegrationInstructionsIcon />
  // },
  // {
  //   title: 'Transaction',
  //   path: '/customer-transaction',
  //   icon: <AssignmentIcon />
  // }
];

export const sidebarConfigCases = [
  {
    title: 'Overview',
    path: '/overview-cases',
    icon: <LayersIcon />
  },
  {
    title: 'FCR Report',
    path: '/fcr-report',
    icon: <TaskIcon />
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: <PermContactCalendarIcon />
  },
  // {
  //   title: 'KYC',
  //   path: '/kyc-alerts',
  //   icon: <AddPhotoAlternateIcon />
  // },
  {
    title: 'Transaction',
    path: '/transaction-alerts',
    icon: <ReceiptIcon />
  },
  {
    title: 'Network',
    path: '/network',
    icon: <IntegrationInstructionsIcon />
  },
  {
    title: 'Task',
    path: '/task',
    icon: <AssignmentIcon />
  }
];
