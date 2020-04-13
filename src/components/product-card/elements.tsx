import {
  Card as CardT,
  CardContent as CardContentT,
  CardMedia,
  Typography,
  DialogContent as DialogContentT,
} from '@material-ui/core';
import CardActionsT from '@material-ui/core/CardActions';
import ResponsiveImage from 'utils/responsive-image';

import { Calc } from 'layout/icons';
import styled from 'styled-components';

export const Card = styled(CardT)`
  position: relative;
  overflow: visible;
  margin: 0 auto;
`;
export const Image = styled(ResponsiveImage)`
  display: block;
  max-width: 100%;
  height: auto;
  object-fit: contain;
  margin: 0 auto;
  max-height: 300px;

  ${({ theme }) => `${theme.breakpoints.down('sm')} {
    width: 100%;
  }`}
`;

export const MyCardMedia = styled(CardMedia)`
  display: flex;
  align-items: center;
`;

export const CardContent = styled(CardContentT)`
  padding-bottom: 0;
`;

export const CardActions = styled(CardActionsT)``;

export const OldPrice = styled(Typography)`
  text-decoration: line-through;
  margin-bottom: -6px;
`;

export const BestSeller = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  background-color: #e8be1f;
  color: #fff;
  padding: 5px 15px;
`;

export const MoreWrapper = styled.div`
  margin: ${({ theme }) => theme.spacing(2)}px;
`;

export const DialogContent = styled(DialogContentT)``;

export const CalcIcon = styled(Calc)`
  filter: brightness(1);
  height: 18px;
  margin-right: 5px;
`;

export default {};
