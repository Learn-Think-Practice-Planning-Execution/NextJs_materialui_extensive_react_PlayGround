import PropTypes from 'prop-types';
import { useMemo } from 'react';
// material
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';
//
import shape from './shape';
import palette from './palette';
import typography from './typography';
import componentsOverride from './overrides';
import shadows, { customShadows } from './shadows';

// ----------------------------------------------------------------------

ThemeConfig.propTypes = {
  children: PropTypes.node
};
/**
 * @class
 * @param {object} prop - Input object
 * @param {React.ReactElement} prop.children - ReactElement
 * @return {React.ReactElement} - React component
 */
function ThemeConfig({ children }) {
  /**
   * Get object from React.useMemo()
   * @type {object}
   */
  const themeOptions = useMemo(
    () => ({
      palette,
      shape,
      typography,
      shadows,
      customShadows
    }),
    []
  );
  /**
   * Get object from @mui/material/styles.createTheme()
   * @type {object}
   */
  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
export default ThemeConfig;
