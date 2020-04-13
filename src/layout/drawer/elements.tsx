import styled from 'styled-components';
import { SwipeableDrawer, Drawer, Typography } from '@material-ui/core';
import ListItemT from '@material-ui/core/ListItem';
import ButtonT from '@material-ui/core/Button';
import LogoT from 'layout/logo';

const vars = {
  drawerWidth: 280,
};

export const MySwipeableDrawer = styled(SwipeableDrawer)`
  & .MuiDrawer-paper {
    width: ${vars.drawerWidth}px;
  }
`;

export const FixedDrawer = styled(Drawer)`
  & .MuiDrawer-paper {
    width: ${vars.drawerWidth}px;
    z-index: 1100;
  }
`;

export const LogoWrapper = styled.div`
  height: 58px;
  padding-left: 24px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

export const Logo = styled(LogoT)`
  width: 115px;
` as typeof LogoT;

export const MainCategoryTitle = styled(Typography)`
  margin-top: 32px;
  font-weight: 400;
`;

export const ListItem = styled(ListItemT)`
  padding-top: 0;
  padding-bottom: 0;
  display: block;
` as typeof ListItemT;

export const Button = styled(ButtonT)`
  justify-content: flex-start;
  text-transform: none;
  font-weight: 400;
  padding-right: 48px;
  padding-top: 8px;
  padding-bottom: 8px;
  color: ${({ theme }) => theme.palette.text.secondary};
` as typeof ButtonT;

export default {};
