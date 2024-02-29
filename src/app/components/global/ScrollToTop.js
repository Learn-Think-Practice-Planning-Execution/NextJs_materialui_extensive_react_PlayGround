import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// ----------------------------------------------------------------------
/**
 * Function to keep user to top of the screen whenever rout change
 * @return  {null}  it will return nothing or null value
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
export default ScrollToTop;
