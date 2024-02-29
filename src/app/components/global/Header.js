import { Icon } from '@iconify/react';
import { Box } from '@mui/system';
import menuFill from '@iconify/icons-eva/menu-fill';
import { IconButton, Stack } from '@mui/material';
// import NotificationsPopover from '../layouts/dashboard/NotificationsPopover';
import AccountPopover from '../layouts/dashboard/AccountPopover';

function Header({ isopensidebar, setOpen }) {
  return (
    <Box className="headerHolder">
      <Box>
        <IconButton
          sx={{ marginLeft: '-0.75rem' }}
          onClick={(e) => {
            if (isopensidebar === 'true') {
              setOpen(false);
            } else {
              setOpen(true);
            }
          }}
        >
          <Icon icon={menuFill} width={30} height={30} />
        </IconButton>
      </Box>
      <Box>
        <Stack direction="row" alignItems="center" spacing={{ xs: 2, sm: 3 }}>
          {/* <NotificationsPopover /> */}
          <AccountPopover />
        </Stack>
      </Box>
    </Box>
  );
}
export default Header;
