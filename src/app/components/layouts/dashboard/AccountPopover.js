import { Icon } from '@iconify/react';
import { useRef, useState, useEffect } from 'react';
import homeFill from '@iconify/icons-eva/home-fill';
import personFill from '@iconify/icons-eva/person-fill';
import settings2Fill from '@iconify/icons-eva/settings-2-fill';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
// material
import { alpha } from '@mui/material/styles';
import { Button, Box, Divider, MenuItem, Typography, Avatar, IconButton } from '@mui/material';
import { MdAccountCircle } from 'react-icons/md';
// components
import MenuPopover from '../../global/MenuPopover';
//
import account from '../../../_mocks_/account';
import { userDataFromLocal } from '../../../utils/getUserDetails';
import { getGlobals } from '../../../utils/Globals';

// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  {
    label: 'Profile',
    icon: personFill,
    linkTo: '/alerts'
  }
];

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const { GLOBAL_PATH } = getGlobals();
  console.log('GLOBAL_PATH', GLOBAL_PATH);

  const navigate = useNavigate();
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  // const [userLocalStorage, setUserLocalStorage] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  // useEffect(() => {
  //   const userLocalStorage = JSON.parse(localStorage.getItem('userDeatils'));
  //   if (userLocalStorage) {
  //     setUserLocalStorage(userLocalStorage);
  //   }
  // }, []);

  // const userLocalStorage = JSON.parse(localStorage.getItem('userDeatils'));
  // console.log('userLocalStorage', userLocalStorage);
  const handleLogout = () => {
    localStorage.removeItem('userDeatils');
    navigate(`${GLOBAL_PATH}/login`);
  };

  return (
    <>
      {/* <IconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72)
            }
          })
        }}
      >
        <Avatar src={account.photoURL} alt="photoURL" />
      </IconButton> */}
      <IconButton
        ref={anchorRef}
        size="large"
        color={open ? 'primary' : 'default'}
        onClick={handleOpen}
        sx={{
          ...(open && {
            bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.focusOpacity)
          })
        }}
      >
        {/* <Icon icon={bellFill} width={20} height={20} /> */}
        <MdAccountCircle size={24} />
      </IconButton>

      <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{ width: 220 }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle1" noWrap>
            {/* {account.displayName} */}
            {/* {userLocalStorage.userName} */}
            {userDataFromLocal().userName !== null ? userDataFromLocal().userName : ''}
          </Typography>
          {/* <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {account.email}
          </Typography> */}
        </Box>

        <Divider sx={{ my: 1 }} />

        {MENU_OPTIONS.map((option) => (
          <MenuItem
            key={option.label}
            to={option.linkTo}
            component={RouterLink}
            onClick={handleClose}
            sx={{ typography: 'body2', py: 1, px: 2.5 }}
          >
            <Box
              component={Icon}
              icon={option.icon}
              sx={{
                mr: 2,
                width: 24,
                height: 24
              }}
            />

            {option.label}
          </MenuItem>
        ))}

        <Box sx={{ p: 2, pt: 1.5 }}>
          <Button
            fullWidth
            color="inherit"
            variant="outlined"
            onClick={(e) => {
              handleLogout(e);
            }}
          >
            Logout
          </Button>
        </Box>
      </MenuPopover>
    </>
  );
}
