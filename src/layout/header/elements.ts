import styled from 'styled-components';

import { Container, Link, AppBar } from '@material-ui/core';
import LogoT from 'layout/logo';

export const vars = {
  height: 60,
};

export const Left = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  height: 58px;
  display: flex;
  align-items: center;
`;

export const Logo = styled(LogoT)`
  height: 24px;
` as typeof LogoT;

interface BackGroundProps {
  visible?: boolean;
}
export const Header = styled(AppBar)<BackGroundProps>`
  background-color: ${({ theme, visible }) => (visible ? theme.palette.primary.main : '#0000')};
  transition: 0.3s;
`;

export const NavWrapper = styled(Container)`
  height: 100%;
  width: 100%;
  max-width: unset;
  position: relative;
  z-index: 3;
`;

export const NavContainer = styled.div`
  height: ${vars.height - 1}px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  font-size: 17px;
`;

export const Right = styled.div`
  justify-content: flex-end;
  display: flex;
  line-height: 30px;
  height: 40px;
  align-items: center;
`;

export const NavLink = styled(Link)`
  margin-left: ${({ theme }) => theme.spacing(2)}px;
  :hover {
    color: ${({ theme }) => theme.palette.text.primary};
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Action = styled.div`
  ${({ theme }) => `${theme.breakpoints.up('sm')} {
    margin-left: 30px;
}`}
`;
