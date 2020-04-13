import React from 'react';

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import LinkAdapter from 'utils/link';
import { useRouter } from 'next/router';
import { getRouteTitle } from 'nav-routes';

export default function () {
  const router = useRouter();
  const pathArray = router.pathname.split('/');
  pathArray[0] = 'home';

  return (
    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
      {pathArray.map((_, i) => {
        const currentRoute = pathArray.slice(0, i + 1);
        if (i === pathArray.length - 1) {
          return (
            <Typography color="textPrimary" key={getRouteTitle(currentRoute)}>
              {getRouteTitle(currentRoute)}
            </Typography>
          );
        }
        return (
          <Link
            component={LinkAdapter}
            color="secondary"
            href={`/${currentRoute.slice(1).join('/')}`}
            key={`/${currentRoute.slice(1).join('/')}`}
          >
            {getRouteTitle(currentRoute)}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}
