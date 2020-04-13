import styled, { css } from 'styled-components';
import { List, ListItem, Typography } from '@material-ui/core';
import { ListItemProps } from '@material-ui/core/ListItem';

export const Label = styled(Typography)`
  margin-bottom: 16px;
`;

export const MyList = styled(List)`
  border-left: 1px solid ${({ theme }) => theme.palette.divider};
`;

export const InlineElements = styled.div`
  margin-left: 16px;
`;

export const SideWrapper = styled.div`
  position: fixed;
  right: 0;
  width: 240px;
  top: 59px;
  overflow-y: auto;
  height: calc(100vh - 59px);
  z-index: 1099;
  ${Label} {
    padding-left: 16px;
    margin-top: 16px;
  }
  ${MyList} {
    border-left: none;
  }
`;

export const TopWrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 1100;
  width: 100%;
`;

export const ItemsWrapper = styled.div`
  margin-top: 32px;
`;

interface NavItemProps extends ListItemProps {
  active?: boolean;
}

export const NavItem = styled(ListItem)<NavItemProps>`
  ${({ selected, theme }) =>
    selected &&
    css`
      :after {
        content: '';
        position: absolute;
        left: -2px;
        width: 3px;
        height: 100%;
        background-color: ${theme.palette.primary.main};
      }
    `};
` as typeof ListItem;
