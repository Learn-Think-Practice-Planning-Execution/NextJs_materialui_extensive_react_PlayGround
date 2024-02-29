import { useState, useEffect } from 'react';
import { NavLink as RouterLink, matchPath, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { AiFillPieChart } from 'react-icons/ai';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LayersIcon from '@mui/icons-material/Layers';
import SimCardAlertIcon from '@mui/icons-material/SimCardAlert';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import DataThresholdingIcon from '@mui/icons-material/DataThresholding';
import SummarizeIcon from '@mui/icons-material/Summarize';
import arrowIosForwardFill from '@iconify/icons-eva/arrow-ios-forward-fill';
import arrowIosDownwardFill from '@iconify/icons-eva/arrow-ios-downward-fill';
// material
import { alpha, useTheme, styled } from '@mui/material/styles';
import {
  Box,
  List,
  Collapse,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  Tooltip,
  Typography
} from '@mui/material';
import sidebarConfig from '../layouts/dashboard/SidebarConfig';
import { userDataFromLocal } from '../../utils/getUserDetails';

// import { IoMdUnlock } from 'react-icons/io';
// import { BiBookContent } from 'react-icons/bi';
// import { RiDatabaseLine } from 'react-icons/ri';
// import { TiFlowMerge } from 'react-icons/ti';
// import {
//   MdOutlineBookmarkAdded,
//   MdOutlinePolicy,
//   MdSupervisedUserCircle,
//   MdFlare
// } from 'react-icons/md';
// import { HubOutlined } from '@mui/icons-material/';
// import { BsGraphUp } from 'react-icons/bs';

// ----------------------------------------------------------------------

const ListItemStyle = styled((props) => <ListItemButton disableGutters {...props} />)(
  ({ theme }) => ({
    ...theme.typography.body2,
    height: 48,
    position: 'relative',
    textTransform: 'capitalize',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2.5),
    color: 'rgba(255, 255, 255, 0.6)',
    '&:before': {
      top: 0,
      right: 0,
      width: 5,
      bottom: 0,
      content: "''",
      display: 'none',
      position: 'absolute',
      borderTopLeftRadius: 4,
      borderBottomLeftRadius: 4,
      backgroundColor: theme.palette.seeserpent.main
    }
  })
);

const ListItemIconStyle = styled(ListItemIcon)({
  width: 22,
  height: 22,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  className: 'customItemIcon'
});

// ----------------------------------------------------------------------

NavItem.propTypes = {
  item: PropTypes.object,
  active: PropTypes.func
};

function NavItem({ item, active }) {
  const theme = useTheme();
  const isActiveRoot = active(item.path);
  const { title, path, icon, info, children } = item;
  const [open, setOpen] = useState(isActiveRoot);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const activeRootStyle = {
    color: 'common.white',
    bgcolor: alpha(theme.palette.seeserpent.main, theme.palette.action.selectedOpacity),
    '&:before': { display: 'block' }
  };

  const activeSubStyle = {
    color: 'common.white',
    fontWeight: 'fontWeightMedium'
  };

  if (children) {
    return (
      <>
        <ListItemStyle
          onClick={handleOpen}
          sx={{
            ...(isActiveRoot && activeRootStyle)
          }}
        >
          <ListItemIconStyle>{icon && icon}</ListItemIconStyle>
          <ListItemText disableTypography primary={title} />
          {info && info}
          <Box
            component={Icon}
            icon={open ? arrowIosDownwardFill : arrowIosForwardFill}
            sx={{ width: 16, height: 16, ml: 1 }}
          />
        </ListItemStyle>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {children.map((item) => {
              const { title, path } = item;
              const isActiveSub = active(path);

              return (
                <ListItemStyle
                  key={title}
                  component={RouterLink}
                  to={path}
                  sx={{
                    ...(isActiveSub && activeSubStyle)
                  }}
                >
                  <ListItemIconStyle>
                    <Box
                      component="span"
                      className="customItemIcon"
                      sx={{
                        width: 4,
                        height: 4,
                        display: 'flex',
                        borderRadius: '50%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: 'text.disabled',
                        transition: (theme) => theme.transitions.create('transform'),
                        ...(isActiveSub && {
                          transform: 'scale(2)',
                          bgcolor: 'primary.main'
                        })
                      }}
                    />
                  </ListItemIconStyle>
                  <ListItemText disableTypography primary={title} />
                </ListItemStyle>
              );
            })}
          </List>
        </Collapse>
      </>
    );
  }

  return (
    <ListItemStyle
      component={RouterLink}
      to={path}
      sx={{
        ...(isActiveRoot && activeRootStyle)
      }}
    >
      <ListItemIconStyle>{icon && icon}</ListItemIconStyle>
      <ListItemText disableTypography primary={title} />
      {info && info}
    </ListItemStyle>
  );
}

NavSection.propTypes = {
  navConfig: PropTypes.array
};

export default function NavSection({ navConfig, ...other }) {
  const { pathname } = useLocation();
  const match = (path) => (path ? !!matchPath({ path, end: false }, pathname) : false);
  const [navFlter, setNavFlter] = useState([]);
  let flterNav = [];
  // menu print using api after filtering, if not from API you can remove
  // // Dashboard will come at first line
  // const menuDashboard = {
  //   title: 'Dashboard',
  //   path: '/dashboard',
  //   icon: (
  //     <Tooltip title="Dashboard" placement="right" arrow>
  //       <Typography>
  //         <AiFillPieChart size={22} />
  //       </Typography>
  //     </Tooltip>
  //   )
  // };
  // Dashboard will come at first line just nothing else

  useEffect(() => {
    const tokenKeys = userDataFromLocal()?.allTokens;
    console.log('logindata', userDataFromLocal()?.allTokens);
    console.log('logindata', userDataFromLocal());
    if (tokenKeys !== undefined) {
      console.log('flterNav', userDataFromLocal());
      console.log('flterNav', tokenKeys);

      if (tokenKeys?.authentication !== undefined) {
        console.log('authentication');
        tokenKeys.users = tokenKeys?.authentication;
      }
      // flterNav = sidebarConfig.filter((nav) => {
      //   return Object.keys(tokenKeys).includes(nav?.matchKey?.toLowerCase());
      // });
      flterNav = sidebarConfig();

      console.log('flterNav', flterNav);
      // if (tokenKeys?.authentication !== undefined) {
      //   const extraaMenu = [
      //     {
      //       title: 'Data Flow',
      //       matchKey: 'Dataflow',
      //       path: '/dataflow',
      //       // icon: <TiFlowMerge size={20} />
      //       icon: (
      //         <Tooltip title="Data Flow" placement="right" arrow>
      //           <Typography>
      //             <TiFlowMerge size={20} />
      //           </Typography>
      //         </Tooltip>
      //       )
      //     },
      //     {
      //       title: 'Catalog',
      //       path: '/data-catalog',
      //       // icon: <BiBookContent size={20} />
      //       icon: (
      //         <Tooltip title="Catalog" placement="right" arrow>
      //           <Typography>
      //             <BiBookContent size={20} />
      //           </Typography>
      //         </Tooltip>
      //       )
      //     },
      //     {
      //       title: 'Quality',
      //       path: '/data-quality',
      //       // icon: <MdOutlineBookmarkAdded size={20} />
      //       icon: (
      //         <Tooltip title="Quality" placement="right" arrow>
      //           <Typography>
      //             <MdOutlineBookmarkAdded size={20} />
      //           </Typography>
      //         </Tooltip>
      //       )
      //     },
      //     {
      //       title: 'Policy',
      //       path: '/policy',
      //       // icon: <MdOutlinePolicy size={20} />
      //       icon: (
      //         <Tooltip title="Policy" placement="right" arrow>
      //           <Typography>
      //             <MdOutlinePolicy size={20} />
      //           </Typography>
      //         </Tooltip>
      //       )
      //     },
      //     {
      //       title: 'Steward',
      //       path: '/steward',
      //       // icon: <MdSupervisedUserCircle size={20} />
      //       icon: (
      //         <Tooltip title="Steward" placement="right" arrow>
      //           <Typography>
      //             <MdSupervisedUserCircle size={20} />
      //           </Typography>
      //         </Tooltip>
      //       )
      //     },
      //     {
      //       title: 'Unify',
      //       path: '/unify',
      //       icon: (
      //         <Tooltip title="Unify" placement="right" arrow>
      //           <HubOutlined size={20} />
      //         </Tooltip>
      //       )
      //     },
      //     {
      //       title: 'Enrichment',
      //       path: '/enrichment',
      //       icon: (
      //         <Tooltip title="Enrichment" placement="right" arrow>
      //           <Typography>
      //             <MdFlare size={20} />
      //           </Typography>
      //         </Tooltip>
      //       )
      //     }
      //   ];
      //   flterNav.push(...extraaMenu);
      // }
    }
    if (tokenKeys?.authentication === undefined) {
      const extraaMenu = [
        {
          title: 'Dashboard',
          matchKey: 'dashboard',
          path: '/dashboard',
          // icon: <TiFlowMerge size={20} />
          icon: (
            <Tooltip title="Dashboard" placement="right" arrow>
              <Typography>
                <DashboardIcon size={20} />
              </Typography>
            </Tooltip>
          )
        },
        // {
        //   title: 'Scenario',
        //   matchKey: 'scenario',
        //   path: '/scenario',
        //   // icon: <TiFlowMerge size={20} />
        //   icon: (
        //     <Tooltip title="Scenario" placement="right" arrow>
        //       <Typography>
        //         <LayersIcon size={20} />
        //       </Typography>
        //     </Tooltip>
        //   )
        // },
        {
          title: 'Alerts',
          matchKey: 'Alerts',
          path: '/alerts',
          // icon: <TiFlowMerge size={20} />
          icon: (
            <Tooltip title="Alerts" placement="right" arrow>
              <Typography>
                <SimCardAlertIcon size={20} />
              </Typography>
            </Tooltip>
          )
        },
        {
          title: 'Cases',
          path: '/cases',
          // icon: <BiBookContent size={20} />
          icon: (
            <Tooltip title="Cases" placement="right" arrow>
              <Typography>
                <BusinessCenterIcon size={20} />
              </Typography>
            </Tooltip>
          )
        },
        {
          title: 'Reports',
          path: '/reports',
          // icon: <MdOutlineBookmarkAdded size={20} />
          icon: (
            <Tooltip title="Reports" placement="right" arrow>
              <Typography>
                <SummarizeIcon size={20} />
              </Typography>
            </Tooltip>
          )
        },
        {
          title: 'Threshold',
          path: '/threshold',
          // icon: <MdOutlinePolicy size={20} />
          icon: (
            <Tooltip title="Threshold" placement="right" arrow>
              <Typography>
                <DataThresholdingIcon size={20} />
              </Typography>
            </Tooltip>
          )
        }
      ];
      flterNav.push(...extraaMenu);
    }
    setNavFlter(flterNav);
    // flterNav.unshift(menuDashboard); // Dashboard will come at first line
  }, []);
  // menu print using api after filtering

  return (
    <Box {...other}>
      <List disablePadding>
        {/* {navConfig.map((item) => (
          <NavItem key={item.title} item={item} active={match} />
        ))} before it was so */}
        {navFlter.length > 0 &&
          navFlter.map((item) => <NavItem key={item.title} item={item} active={match} />)}
      </List>
    </Box>
  );
}
