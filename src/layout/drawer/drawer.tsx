import React, { useState } from 'react';
import { List, Collapse, Hidden, Divider, Link } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import LinkAdapter from 'utils/link';
import RouterLink from 'next/link';
import { Route } from 'nav-routes/routesSchema';
import { Theme } from 'layout/logo';
import * as E from './elements';

const getPadding = (depth: number) => 8 * (3 + 2 * Math.max(depth - 1, 0));

interface MenuLeafItem {
  href: string;
  title: string;
  path: string[];
  closeDrawer(): void;
}

const MenuLeafItem: React.FC<MenuLeafItem> = ({ href, title, path, closeDrawer }) => {
  return (
    <E.ListItem disableGutters>
      <RouterLink href={href} passHref>
        <E.Button
          style={{
            paddingLeft: getPadding(path.length),
          }}
          onClick={closeDrawer}
          fullWidth
        >
          {title}
        </E.Button>
      </RouterLink>
    </E.ListItem>
  );
};

interface MenuCategoryItem {
  title: string;
  path: string[];
}

const MenuCategoryItem: React.FC<MenuCategoryItem> = ({ children, title, path }) => {
  const [isCategoryOpen, setCategoryOpen] = useState(false);

  const handleClick = () => {
    setCategoryOpen((currentCategoryOpenState) => !currentCategoryOpenState);
  };

  return (
    <E.ListItem disableGutters>
      <E.Button
        style={{
          paddingLeft: getPadding(path.length),
          fontWeight: 400,
        }}
        fullWidth
        disableTouchRipple
        onClick={handleClick}
        endIcon={<ExpandMore />}
      >
        {title}
      </E.Button>
      <Collapse in={isCategoryOpen} timeout="auto" unmountOnExit>
        {children}
      </Collapse>
    </E.ListItem>
  );
};

interface MainCategory {
  title: string;
  path: string[];
}

const MainCategory: React.FC<MainCategory> = ({ children, title, path }) => {
  return (
    <>
      <E.MainCategoryTitle
        variant="h6"
        style={{
          paddingLeft: getPadding(path.length),
        }}
      >
        {title}
      </E.MainCategoryTitle>
      {children}
      <Divider style={{ marginBottom: '24px' }} />
    </>
  );
};

interface MenuItems {
  routes: Route[];
  path: string[];
  closeDrawer(): void;
}

const MenuItems: React.FC<MenuItems> = ({ routes, path, closeDrawer }) => {
  return (
    <List disablePadding style={{ marginBottom: '24px' }}>
      {routes.reduce<React.ReactElement[]>((childRoutes, route) => {
        const href = `${path.length ? '/' : ''}${path.join('/')}/${route.path}`;
        if (path.length === 0 && route.children) {
          childRoutes.push(
            <MainCategory title={route.title} path={path} key={route.title}>
              <MenuItems
                routes={route.children}
                path={[...path, route.path]}
                closeDrawer={closeDrawer}
              />
            </MainCategory>,
          );
        } else {
          childRoutes.push(
            <MenuLeafItem
              closeDrawer={closeDrawer}
              href={href}
              title={route.title}
              path={path}
              key={route.title}
            />,
          );
        }
        return childRoutes;
      }, [])}
    </List>
  );
};

export interface Props {
  routes: Route[];
  isDrawerOpen: boolean;
  open(): void;
  close(): void;
  swipeable?: boolean;
}

const DrawerComponent: React.FC<Props> = ({ routes, isDrawerOpen, open, close, swipeable }) => {
  return (
    <nav>
      <Hidden lgUp={!swipeable} implementation="css">
        <E.MySwipeableDrawer anchor="left" open={isDrawerOpen} onClose={close} onOpen={open}>
          <E.LogoWrapper>
            <Link href="/" component={LinkAdapter} onClick={close}>
              <E.Logo theme={Theme.LIGHT} />
            </Link>
          </E.LogoWrapper>
          <Divider />
          <MenuItems routes={routes[0].children || []} closeDrawer={close} path={[]} />
        </E.MySwipeableDrawer>
      </Hidden>
      {!swipeable && (
        <Hidden mdDown implementation="css">
          <E.FixedDrawer anchor="left" open variant="permanent">
            <E.LogoWrapper>
              <Link href="/" component={LinkAdapter} onClick={close}>
                <E.Logo theme={Theme.LIGHT} />
              </Link>
            </E.LogoWrapper>
            <Divider />
            <MenuItems routes={routes[0].children || []} closeDrawer={close} path={[]} />
          </E.FixedDrawer>
        </Hidden>
      )}
    </nav>
  );
};

export default DrawerComponent;
