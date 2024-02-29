import PropTypes from 'prop-types';
// material
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object
};
/**
 * Component for render Logo
 * @class
 * @param {object} prop - Input object
 * @param {object} prop.sx - MUI style
 * @param {boolean} prop.isopensidebar - true:render full logo, false:render logo icon
 * @return {React.ReactElement} - React component
 */
function Logo({ sx, isopensidebar }) {
  return (
    <Box
      component="img"
      src={isopensidebar ? '/static/logos/logo.svg' : '/static/logos/logo-icon.svg'}
      sx={{ width: isopensidebar ? 120 : 30, height: 30, ...sx }}
    />
  );
}
export default Logo;
