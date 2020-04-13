import styled from 'styled-components';
import ResponsiveImage from 'utils/responsive-image';
import { CardActionArea } from '@material-ui/core';

export const Image = styled(ResponsiveImage)`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

export const CardMediaHelper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
`;

export const StyledCardActionArea = styled(CardActionArea)`
  &.Mui-disabled .MuiCardActionArea-focusHighlight {
    opacity: 0.06;
  }
`;

export default {};
