import PropTypes from 'prop-types';
// material
import { useMediaQuery } from '@mui/material';

// ----------------------------------------------------------------------

MHidden.propTypes = {
  children: PropTypes.node,
  width: PropTypes.oneOf([
    'xsDown',
    'smDown',
    'mdDown',
    'lgDown',
    'xlDown',
    'xsUp',
    'smUp',
    'mdUp',
    'lgUp',
    'xlUp'
  ]).isRequired
};
/**
 * @class
 * @param {object} prop - Input object
 * @param {string} prop.width - Options: 'xsDown', 'smDown', 'mdDown', 'lgDown', 'xlDown', 'xsUp', 'smUp', 'mdUp', 'lgUp', 'xlUp'
 * @param {React.ReactElement} prop.children - ReactElement
 * @return {React.ReactElement} - React component
 */
function MHidden({ width, children }) {
  /**
   * Type of props.width
   * @type {string}
   */
  const breakpoint = width.substring(0, 2);
  /**
   * @type {boolean}
   */
  const hiddenUp = useMediaQuery((theme) => theme.breakpoints.up(breakpoint));
  /**
   * @type {boolean}
   */
  const hiddenDown = useMediaQuery((theme) => theme.breakpoints.down(breakpoint));

  if (width.includes('Down')) {
    return hiddenDown ? null : children;
  }

  if (width.includes('Up')) {
    return hiddenUp ? null : children;
  }

  return null;
}
export default MHidden;
