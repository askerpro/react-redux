import styled from 'styled-components';

import { CardContent, CardMedia } from '@material-ui/core';
import ResponsiveImage, { Props as ResponsiveImageProps } from 'utils/responsive-image';

export const MyCardMedia = styled(CardMedia)`
  padding-top: 62%;
  width: 100%;
  position: relative;
`;

export const CardMediaHelper = styled.div`
  position: absolute;
  top: 0;
  right: 0%;
  bottom: 0;
  left: 0%;
`;
interface ImageProps extends ResponsiveImageProps {
  fillMode?: 'contain' | 'cover';
}

export const Image = styled(ResponsiveImage)<ImageProps>`
  display: block;
  max-width: 100%;
  max-height: 100%;
  height: 100%;
  width: 100%;
  object-fit: ${({ fillMode }) => fillMode || 'cover'};
  margin: 0 auto;
`;

export const MyCardContent = styled(CardContent)``;
