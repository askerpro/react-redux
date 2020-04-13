import styled from 'styled-components';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogActions from '@material-ui/core/DialogActions';
import MuiCard from '@material-ui/core/Card';
import { PlayCircleFilled } from '@material-ui/icons';
import MuiCardMedia from '@material-ui/core/CardMedia';
import {
  IconButton,
  CardActionArea as CardActionAreaT,
  CardContent as CardContentT,
} from '@material-ui/core';

export const CardMedia = styled(MuiCardMedia)`
  position: relative;
  width: 100%;
  padding-top: 100%;
`;

export const CardMediaHelper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00000091;
`;

export const PreviewImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 100%;
  max-width: 100%;
  object-fit: cover;
`;

export const PlayButton = styled(PlayCircleFilled)`
  font-size: 50px;
  color: #fff;
  position: absolute;
`;

export const Wrapper = styled(MuiCard)`
  position: relative;
  width: 100%;
  margin-bottom: 4px;
`;

export const DialogTitle = styled(MuiDialogTitle)`
  margin: 0;
  padding: ${({ theme }) => theme.spacing(2)}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DialogFooter = styled(MuiDialogActions)`
  margin: 0;
  padding: ${({ theme }) => theme.spacing(2)}px;
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
  display: block;
`;

export const CardActionArea = styled(CardActionAreaT)``;

export const CardContent = styled(CardContentT)`
  position: absolute;
  z-index: 1;
  bottom: 0;
  background: #fff;
  width: 100%;
`;

export const DialogCloseButton = styled(IconButton)`
  position: absolute;
  right: ${({ theme }) => theme.spacing(1)}px;
  top: ${({ theme }) => theme.spacing(1)}px;
`;

export default {};
