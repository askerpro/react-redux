import styled from 'styled-components';

import ResponsiveImage from 'utils/responsive-image';
import NavSection from 'layout/nav-section';
import { Container, Subtitle } from 'layout/section-content';

export const StyledNavSection = styled(NavSection)`
  background: #fff;
  overflow: hidden;
  border-bottom: 20px solid #f7f7f7;
`;

export const CustomContainer = styled(Container)`
  overflow: visible;
`;

export const CustomCaption = styled(Subtitle)`
  max-width: 400px;
`;

export const WindowContainer = styled.div`
  position: relative;
  margin-left: -5%;
  flex-basis: 73%;
  flex-shrink: 0;
`;

export const abstractLineRight = styled(ResponsiveImage)`
  position: absolute;
  width: auto;
  height: 46%;
  left: 78.8%;
  top: -7%;
  object-fit: contain;
`;

export const abstractLineLeft = styled(ResponsiveImage)`
  position: absolute;
  width: auto;
  height: 108%;
  right: 78.8%;
  top: -18%;
  object-fit: contain;
`;

export const Window = styled(ResponsiveImage)`
  position: relative;
  z-index: 2;
  width: 100%;
  height: auto;
`;

export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  max-height: 550px;
`;

export const Privolnov = styled(ResponsiveImage)`
  z-index: 1;
  object-fit: contain;
  height: auto;
  width: 40%;
`;

export const vars = {
  transitionDuration: 0.7,
};

export const BackgroundWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
`;
