import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  max-width: 100%;
  width: auto;
  height: auto;
  max-height: 100%;
`;

export const FramesWrapper = styled.div`
  overflow: hidden;
  backface-visibility: hidden;
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Frames = styled.div``;

export const Frame = styled.img`
  display: block;
  backface-visibility: hidden;
  max-height: 100%;
  max-width: 100%;
  transform: translateZ(0);
  image-rendering: -moz-crisp-edges, -webkit-optimize-contrast;
`;

interface SizeHelper {
  dataLoaded: boolean;
}

export const SizeHelper = styled.img<SizeHelper>`
  opacity: ${({ dataLoaded }) => (dataLoaded ? 0 : 1)};
  max-height: 100%;
  max-width: 100%;
  display: block;
  object-fit: contain;
  height: auto;
  width: auto;
`;
