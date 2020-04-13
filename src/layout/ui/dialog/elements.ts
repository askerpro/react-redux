import styled, { css } from 'styled-components';
import { IconButton, DialogActions, DialogTitle, Dialog, DialogContent } from '@material-ui/core';

export const Title = styled(DialogTitle)`
  margin: 0;
  padding: ${({ theme }) => theme.spacing(2)}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Footer = styled(DialogActions)`
  margin: 0;
  padding: ${({ theme }) => theme.spacing(2)}px;
`;

export const CloseButton = styled(IconButton)`
  position: absolute;
  right: ${({ theme }) => theme.spacing(1)}px;
  top: ${({ theme }) => theme.spacing(1)}px;
`;

interface WrapperProps {
  fullHeight?: boolean;
  fullWidth?: boolean;
}

export const Wrapper = styled(Dialog)<WrapperProps>`
  ${({ fullHeight }) =>
    fullHeight &&
    css`
      & .MuiDialog-paper {
        height: 100%;
      }
    `}
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      & .MuiDialog-paper {
        width: 100%;
      }
    `}
`;

interface ContentProps {
  noPadding?: boolean;
}

export const CustomDialogContent = styled(DialogContent)<ContentProps>`
  overflow-x: hidden;
  ${({ noPadding }) =>
    noPadding &&
    css`
      padding: 0;
    `}
`;
