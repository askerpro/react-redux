import styled, { keyframes } from 'styled-components';

interface Wrapper {
  isPlaying: boolean;
  display: boolean;
}

export const Wrapper = styled.div<Wrapper>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  background-color: ${({ theme }) => theme.palette.background.default};
  opacity: ${({ isPlaying }) => (isPlaying ? 1 : 0)};
  display: ${({ display }) => (display ? 'flex' : 'none')};
  transition: 0.7s opacity;
`;

export const LogoWrapper = styled.div`
  width: 275px;
  height: auto;
  padding: 15px 30px;
  z-index: 11;
`;

const BertaLogoAnimation = keyframes`
  0%{
    stroke-dashoffset: 265;
    stroke-width: 2px;
    stroke: #ffffff;
    fill: #fff0;
    stroke-dasharray: 265;
  }
  20%{
    fill: #fff0;
  }
  60%{
    stroke: #ffffff;
    stroke-width: 2px;
  }
  100%{
    stroke-dashoffset: 0;
    stroke-dasharray: 265;
    fill: #ffff;
    stroke: #ffffff00;
    stroke-width: 0px;
  }
`;

export const Logo = styled.svg`
  width: 100%;
  fill: #fff0;
  animation: 3s ${BertaLogoAnimation} 1s forwards;
`;
