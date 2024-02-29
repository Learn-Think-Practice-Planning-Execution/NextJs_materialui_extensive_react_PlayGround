import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

function Footer() {
  // Dynamic copyright year
  const year = new Date();
  const getYear = year.getFullYear();
  return (
    <Box className="footerBox">
      <Typography variant="body2" className="footerContent">
        Copyright © {getYear} &nbsp;
        <a href="http://kalolytic.com/" target="_blank" rel="noreferrer">
          Kalolytic
        </a>
        . All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
