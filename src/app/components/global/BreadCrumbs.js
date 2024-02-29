import { Link as RouterLink } from 'react-router-dom';
// material
import { Link, Box, Typography } from '@mui/material';
import useBreadcrumbs from 'use-react-router-breadcrumbs';

export default function BrudCrumbs() {
  const breadcrumbs = useBreadcrumbs();
  return breadcrumbs.map(({ match, breadcrumb }, index) => {
    return (
      <span key={match.pathname}>
        {index < breadcrumbs.length - 1 && !match.pathname.includes('edit') ? (
          <Link underline="none" variant="subtitle2" component={RouterLink} to={match.pathname}>
            {index === 0 ? ' ' : breadcrumb}
          </Link>
        ) : (
          <Typography variant="body2" component="span">
            {breadcrumb}
          </Typography>
        )}

        {index > 0 && index < breadcrumbs.length - 1 ? <>&nbsp; / &nbsp;</> : ''}
      </span>
    );
  });
}
