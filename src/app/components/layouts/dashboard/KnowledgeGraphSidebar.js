import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Link, Link as RouterLink, useLocation } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Box, Button, Drawer, Stack } from '@mui/material';
// components
import Logo from '../../global/Logo';
import Scrollbar from '../../global/Scrollbar';
import NavSection from '../../global/NavSection';
import { MHidden } from '../../@material-extend';
//
import sidebarConfig from './SidebarConfig';
import { getIcon, SidebarSettingIcon, ArrowRightIcon, ArrowLeftIcon } from '../../../vector/index';
import RenderIcons from '../../global/RenderIcons';
// import account from '../../_mocks_/account';

// import AccountPopover from './AccountPopover';
// import NotificationsPopover from './NotificationsPopover';

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 180;
const DRAWER_WIDTH_CLOSE = 50;

const RootStyle = styled('div')(({ theme, isopensidebar }) => ({
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    width: isopensidebar ? DRAWER_WIDTH : DRAWER_WIDTH_CLOSE
  }
}));

// ----------------------------------------------------------------------

KnowledgeGraphSidebar.propTypes = {
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
export default function KnowledgeGraphSidebar({ isopensidebar, onCloseSidebar }) {
  const { pathname } = useLocation();
  useEffect(() => {
    if (isopensidebar) {
      onCloseSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      className="leftbarNav"
      sx={{
        height: '100%',
        '& .simplebar-content': {
          background: '#f4f8fd',
          height: '100%',
          display: 'flex',
          flexDirection: 'column'
        }
      }}
    >
      <Box sx={{ px: 1, py: 1 }}>
        <Box component={RouterLink} to="/dashboard" sx={{ display: 'inline-flex' }}>
          <Logo isopensidebar={isopensidebar} />{' '}
        </Box>{' '}
      </Box>
      <NavSection navConfig={sidebarConfig} />
      <Box sx={{ flexGrow: 1 }} />{' '}
      <Stack
        direction="column"
        alignItems="flex-start"
        spacing={{ xs: 0.5, sm: 1.5 }}
        className="setArrow"
      >
        {/* <NotificationsPopover /> */} {/* <AccountPopover /> */}{' '}
        <Link to="/setting">
          <RenderIcons
            icon={getIcon(SidebarSettingIcon, null, 20, 20)}
            className="leftBarsetIcon"
          />{' '}
          {/* <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="12" cy="12" r="3" />            
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                      </svg> */}{' '}
        </Link>{' '}
        <Button onClick={() => onCloseSidebar()} target="_blank">
          {' '}
          {isopensidebar ? (
            <RenderIcons icon={getIcon(ArrowRightIcon, null, 20, 20)} />
          ) : (
            <RenderIcons icon={getIcon(ArrowLeftIcon, null, 20, 20)} />
          )}{' '}
        </Button>{' '}
      </Stack>{' '}
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
          {renderContent}{' '}
        </Drawer>{' '}
      </MHidden>
      <MHidden width="lgDown">
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: isopensidebar ? DRAWER_WIDTH : DRAWER_WIDTH_CLOSE,
              bgcolor: 'background.default'
            }
          }}
        >
          {renderContent}{' '}
        </Drawer>{' '}
      </MHidden>{' '}
    </RootStyle>
  );
}
