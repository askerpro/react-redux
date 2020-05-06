import styled from 'styled-components';
import MuiCard from '@material-ui/core/Card';
import { PlayCircleOutline } from '@material-ui/icons';
import MuiCardMedia from '@material-ui/core/CardMedia';
import { CardActionArea as CardActionAreaT } from '@material-ui/core';
import ResponsiveImage from 'utils/responsive-image';

export const CardMedia = styled(MuiCardMedia)`
  position: relative;
  width: 100%;
  padding-top: 70%;
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
`;

export const PlayButton = styled(PlayCircleOutline)`
  font-size: 50px;
`;

export const Wrapper = styled(MuiCard)`
  position: relative;
  width: 100%;
`;

export const CollectionImage = styled(ResponsiveImage)`
  width: 100%;
  height: auto;
  max-height: 100%;
  max-width: 100%;
  object-fit: cover;
`;

export const CardActionArea = styled(CardActionAreaT)``;

export default {};
