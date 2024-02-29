// material
import { styled } from '@mui/material/styles';
import { Box, List, ListItemIcon, ListItemButton } from '@mui/material';

// ----------------------------------------------------------------------

const ListItemStyle = styled((props) => <ListItemButton disableGutters {...props} />)(
  ({ theme }, ...props) => ({
    ...theme.typography.body2,
    // height: props.height ? props.height : 20,
    // width: props.width ? props.width : 20,
    position: 'relative',
    textTransform: 'capitalize',
    // paddingLeft: theme.spacing(1),
    // paddingRight: theme.spacing(1),
    color: theme.palette.primary.main,
    // fontSize: 20,
    display: 'flex',
    padding: 0,
    justifyContent: 'center'
  })
);

const ListItemIconStyle = styled(ListItemIcon, {
  // Configure which props should be forwarded on DOM
  shouldForwardProp: (prop) => prop !== 'color' && prop !== 'sx',
  name: 'ListItemIconStyle',
  slot: 'Root',
  // We are specifying here how the styleOverrides are being applied based on props
  overridesResolver: (props, styles) => {
    const prop = prop;
    return [
      styles.root,
      props.color === 'primary' && styles.primary,
      props.color === 'secondary' && styles.secondary
    ];
  }
})(({ theme, props }) => {
  const errorVar = '';
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 9,
    paddingTop: 6
  };
});
/**
 * Component for rendering Title of the page
 * @class
 * @param {object} prop - Input object
 * @param {React.ReactElement} prop.icon - ReactElement
 * @param {string} other - ReactElement
 * @return {React.ReactElement} - React component
 */
function RenderIcons({ icon, color, width, height, ...other }) {
  return (
    <Box {...other}>
      <List disablePadding>
        <ListItemStyle color={color} width={width} height={height} className="customItemIconBg">
          <ListItemIconStyle
            color="#ddd"
            sx={{ paddingTop: 0, display: 'flex', alignItems: 'center' }}
            // sx={{ width: '50px', height: '50px', marginRight: '0' }}
            // className="customItemIcon"
          >
            {icon && icon}
          </ListItemIconStyle>
        </ListItemStyle>
      </List>
    </Box>
  );
}
export default RenderIcons;
