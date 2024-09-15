import { Breadcrumbs, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { constants } from '../../../constants';
import { BreadCrumbsProps } from './breadCrumbs.types';

const baseStyles = {
  textTransform: 'capitalize',
  color: constants.colors.primary,
} as const;

export const BreadCrumbs: BreadCrumbsProps = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <Breadcrumbs separator="›">
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        return index + 1 === pathnames.length ? (
          <Typography key={to} style={{ ...baseStyles, color: 'inherit' }}>
            {value}
          </Typography>
        ) : (
          <Link
            key={to}
            style={{ textDecoration: 'none', ...baseStyles }}
            to={to}
          >
            {value}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};
