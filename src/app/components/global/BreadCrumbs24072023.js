import { Link as RouterLink } from 'react-router-dom';
// material
import { Link, Box } from '@mui/material';

export default function BrudCrumbs() {
  const pathname = window.location.pathname.split('/');
  if (pathname.length > 0) {
    return (
      <Box className="breadCrumb">
        {pathname.map((item, index) => (
          <>
            <Link
              key={index}
              underline="none"
              variant="subtitle2"
              component={RouterLink}
              to={getLink(pathname, item)}
            >
              {item === '' ? 'Dashboard' : item}
            </Link>
            {index === pathname.length - 1 ? '' : <>&nbsp;/&nbsp;</>}
          </>
        ))}
      </Box>
    );
  }
  return '';
}

function getLink(pathname, currentitem) {
  let link = '/';
  const linkName = pathname.map((element) => {
    if (element !== '') {
      link += element;
    }
    if (currentitem === element) {
      return link;
    }
    return link;
  });
  return linkName;
}
