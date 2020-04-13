import React from 'react';
import routes from 'nav-routes';
import { Grid, Link, List, ListItem } from '@material-ui/core';
import LinkAdapter from 'utils/link';

const Menu: React.FC = () => {
  const withoutCategory: React.ReactNode[] = [];

  const categories: React.ReactNode[] = [];
  routes[0].children.map((category) => {
    if (category.children)
      categories.push(
        <>
          <List disablePadding>
            <ListItem disableGutters>
              <Link
                component={LinkAdapter}
                href={`/${category.path}`}
                variant="subtitle1"
                color="textPrimary"
                style={{ minHeight: '28px' }}
              >
                {category.title}
              </Link>
            </ListItem>
            {category.children.map((child) => {
              return (
                <ListItem disableGutters key={child.title}>
                  <Link
                    component={LinkAdapter}
                    href={`${category.path ? `/${category.path}` : ''}/${child.path}`}
                    color="textSecondary"
                  >
                    {child.title}
                  </Link>
                </ListItem>
              );
            })}
          </List>
        </>,
      );
    else {
      withoutCategory.push(
        <Link component={LinkAdapter} href={`/${category.path}`} color="textSecondary">
          {category.title}
        </Link>,
      );
    }
  });

  return (
    <Grid container spacing={4}>
      {categories.map((category, i) => (
        <Grid item key={i} xs={12} md={3}>
          {category}
        </Grid>
      ))}
      <Grid item xs={12} md={3}>
        <List>
          {withoutCategory.map((link, i) => (
            <ListItem disableGutters key={i}>
              {link}
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

export default Menu;
