// material
import { styled } from '@mui/material/styles';
import { Box, List, ListItemText, ListItemIcon, ListItemButton } from '@mui/material';

// ----------------------------------------------------------------------

const ListItemStyle = styled((props) => <Box sx={{ padding: '0' }} disableGutters {...props} />)(
  ({ theme }) => ({
    ...theme.typography.body2,
    // height: 20,
    position: 'relative',
    textTransform: 'capitalize',
    // paddingLeft: theme.spacing(1),
    // paddingRight: theme.spacing(1),
    color: theme.palette.secondary.black,
    fontSize: 16,
    display: 'flex',
    justifyContent: 'center',
    fontWeight: 'bold'
  })
);

const ListItemIconStyle = styled(ListItemIcon)({
  width: 22,
  height: 22,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: 9,
  paddingTop: 6
});
/**
 * Component for rendering Title of the page
 * @class
 * @param {object} prop - Input object
 * @param {React.ReactElement} prop.icon - ReactElement
 * @param {string} prop.info - ReactElement
 * @param {string} other - ReactElement
 * @return {React.ReactElement} - React component
 */
function PageTitle({ icon, info, ...other }) {
  return (
    <Box {...other}>
      <List disablePadding>
        <ListItemStyle>
          {icon && <ListItemIconStyle>{icon && icon}</ListItemIconStyle>}
          <ListItemText disableTypography primary={info} />
        </ListItemStyle>
      </List>
    </Box>
  );
}
export default PageTitle;
