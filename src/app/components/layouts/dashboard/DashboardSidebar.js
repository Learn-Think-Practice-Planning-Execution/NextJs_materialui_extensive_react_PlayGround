import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Link, Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Box, Button, Drawer, IconButton, Stack, Tooltip, Typography } from '@mui/material';
import { LogoutOutlined, ManageAccountsOutlined } from '@mui/icons-material';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
// components
import Logo from '../../global/Logo';
import Scrollbar from '../../global/Scrollbar';
import NavSection from '../../global/NavSection';
import { MHidden } from '../../@material-extend';
//
import sidebarConfig from './SidebarConfig';
import { getIcon, SidebarSettingIcon, ArrowRightIcon, ArrowLeftIcon } from '../../../vector/index';
import RenderIcons from '../../global/RenderIcons';
import knowledgegraphSideBarConfig from './KnowledgeGraphsidebarConfig';
import visualizationsidebarConfig from './VisualizationSidebarConfig';
import { getGlobals } from '../../../utils/Globals';
// import account from '../../_mocks_/account';

// import AccountPopover from './AccountPopover';
// import NotificationsPopover from './NotificationsPopover';

const DRAWER_WIDTH = 200;
const DRAWER_WIDTH_CLOSE = 50;

const RootStyle = styled('div')(({ theme, isopensidebar }) => ({
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    width: isopensidebar ? DRAWER_WIDTH : DRAWER_WIDTH_CLOSE
  }
}));

// ----------------------------------------------------------------------

DashboardSidebar.propTypes = {
  isopensidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func
};
/**
 * @class
 * @param {object} prop - Input object
 * @param {boolean} prop.isopensidebar - true: sidebar will be visible, false: sidebar close
 * @param {function} prop.onCloseSidebar - toggle sidebar
 * @return {React.ReactElement} - React component
 */
export default function DashboardSidebar({ isopensidebar, onCloseSidebar }) {
  const { GLOBAL_PATH } = getGlobals();
  console.log('GLOBAL_PATH', GLOBAL_PATH);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  // console.log('pathnamepathname', pathname);
  useEffect(() => {
    if (isopensidebar) {
      onCloseSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Logout function from dashboardSidebar
  const handleLogout = () => {
    navigate(`${GLOBAL_PATH}/login`);
    localStorage.removeItem('userDeatils');
  };
  // Logout function from dashboardSidebar end

  const renderContent = (
    <Scrollbar
      className="leftbarNav"
      sx={{
        height: '100%',
        background: '#0d4689',
        '& .simplebar-content': {
          background: '#0d4689',
          height: '100%',
          display: 'flex',
          flexDirection: 'column'
        }
      }}
    >
      <Box
        sx={{
          px: 2,
          py: 1,
          display: 'flex',
          alignItems: 'center',
          background: 'rgb(255 255 255 / 100%)',
          paddingTop: '9px'
        }}
      >
        <Box component={RouterLink} to="/users" sx={{ display: 'inline-flex' }}>
          <Logo isopensidebar={isopensidebar} />
        </Box>
      </Box>

      <NavSection
        navConfig={
          pathname.split('/')[1] === 'knowledgegraph'
            ? knowledgegraphSideBarConfig
            : pathname.split('/')[1] === 'visualizations' ||
              pathname.split('/')[1] === 'visualanalytics'
            ? visualizationsidebarConfig
            : sidebarConfig
        }
      />

      <Box sx={{ flexGrow: 1 }} />

      {/* <Link
        to="/profile"
        display="flex"
        style={{
          alignItems: 'center',
          display: 'flex',
          textDecoration: 'none',
          color: '#fff',
          marginTop: '0px',
          opacity: 0.6
        }}
      >
        <Tooltip title="Profile" placement="right" arrow>
          <IconButton style={{ marginLeft: '6px', color: '#fff', marginRight: '7px' }}>
            <ManageAccountsOutlined />
          </IconButton>
        </Tooltip>
        <Typography
          className="meneuCaptionText"
          variant="caption"
          sx={{ fontSize: '.85rem', fontWeight: 'normal' }}
        >
          Profile
        </Typography>
      </Link> */}

      {/* <Link to="/"> */}
      {/* <RiLogoutCircleRLine
        style={{ marginLeft: '15px', color: 'white', fontSize: '19px', cursor: 'pointer' }}
        onClick={(e) => {
          handleLogout(e);
        }}
      /> */}
      {/* </Link> */}
      {/* <Stack>
        <Box
          display="flex"
          sx={{
            alignItems: 'center',
            display: 'flex',
            textDecoration: 'none',
            marginTop: '0px',
            cursor: 'pointer',
            color: 'white',
            opacity: 0.6
          }}
          onClick={(e) => {
            handleLogout(e);
          }}
        >
          <Tooltip title="Logout" placement="right" arrow>
            <IconButton
              style={{ color: '#fff', fontSize: '17px', marginLeft: '6px', marginRight: '12px' }}
            >
              <RiLogoutCircleRLine />
            </IconButton>
          </Tooltip>
          <Typography
            className="menuCaptionText"
            variant="caption"
            sx={{ fontSize: '.85rem', fontWeight: 'normal' }}
          >
            Logout
          </Typography>
        </Box>
      </Stack> */}
      <Box
        onClick={() => {
          onCloseSidebar();
          if (!isopensidebar) {
            document.body.classList.add('sidebarOpen');
          } else {
            document.body.classList.remove('sidebarOpen');
          }
        }}
        target="_blank"
        className="slideBarArrow"
      >
        <IconButton size="small" className="sideBarArrowIcon">
          {isopensidebar ? <FaAngleLeft size={14} /> : <FaAngleRight size={14} />}
        </IconButton>
      </Box>
    </Scrollbar>
  );

  return (
    <RootStyle isopensidebar={isopensidebar}>
      <MHidden width="lgUp">
        <Drawer
          open={isopensidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: { width: isopensidebar ? DRAWER_WIDTH : DRAWER_WIDTH_CLOSE }
          }}
        >
          {renderContent}
        </Drawer>
      </MHidden>

      <MHidden width="lgDown">
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: isopensidebar ? DRAWER_WIDTH : DRAWER_WIDTH_CLOSE,
              bgcolor: 'background.default'
            },
            className: 'sliderPaperB'
          }}
        >
          {renderContent}
        </Drawer>
      </MHidden>
    </RootStyle>
  );
}
