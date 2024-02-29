import { useState } from 'react';
import { Stack } from '@mui/material';
import { Outlet, useLocation } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
//
import DashboardSidebar from './DashboardSidebar';
import Footer from '../../global/Footer';
import Header from '../../global/Header';
import AccountPopover from './AccountPopover';

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 5;
const APP_BAR_DESKTOP = 16;

const RootStyle = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden'
  // background: '#eff1f5'
});

const MainStyle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  background: '#eff1f5'
  // paddingTop: APP_BAR_MOBILE,
  // paddingBottom: theme.spacing(4),
  // [theme.breakpoints.up('lg')]: {
  //   paddingTop: 0,
  //   paddingLeft: theme.spacing(2),
  //   paddingRight: theme.spacing(2)
  // }
}));

// ----------------------------------------------------------------------
/**
 * Common component with sidebar section
 * @class
 * @return {React.ReactElement} - React component
 */
function DashboardLayout() {
  const [open, setOpen] = useState(false);
  // console.log('routerDom', useLocation().pathname.split('/')[1]);
  /**
   * Set sidebar open or close
   * @type {boolean}
   */
  const toggle = Boolean(!open);

  return (
    <RootStyle>
      <DashboardSidebar isopensidebar={open} onCloseSidebar={() => setOpen(toggle)} />
      {/* <Stack className="usersProfile" sx={{ position: 'absolute', right: '10px', top: '10px' }}>
        <AccountPopover />
      </Stack> */}
      <MainStyle>
        <Header isopensidebar={open.toString()} setOpen={setOpen} />
        <Outlet />
        <Footer />
      </MainStyle>
    </RootStyle>
  );
}
export default DashboardLayout;
