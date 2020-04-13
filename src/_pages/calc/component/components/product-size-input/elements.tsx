/* eslint-disable global-require */
import styled from 'styled-components';
import React from 'react';

export const Helper = styled.div`
  position: relative;
`;
export const Wrapper = styled.div`
  margin: 30px;
  width: fit-content;
  display: flex;
  box-sizing: border-box;
  position: relative;
  align-items: flex-start;
`;
export const Img = styled.img`
  max-height: 300px;
  max-width: 100%;
`;

export const SizeWrapperT = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  justify-content: center;
`;

export const SizeVisualT = styled.div`
  background: ${({ theme }) => theme.palette.divider};
  position: absolute;
`;

export const SizeHeightWrapper = styled(SizeWrapperT)`
  height: 97%;
  width: 21px;
  border-top: 1px solid ${({ theme }) => theme.palette.divider};
  border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
  top: 0;
`;

export const SizeHeightVisual = styled(SizeVisualT)`
  width: 1px;
  height: 100%;
  left: 50%;
`;

export const SizeWidthWrapper = styled(SizeWrapperT)`
  width: 100%;
  top: -30px;
  border-left: 1px solid ${({ theme }) => theme.palette.divider};
  border-right: 1px solid ${({ theme }) => theme.palette.divider};
`;

export const SizeWidthVisual = styled(SizeVisualT)`
  height: 1px;
  width: 100%;
`;

export const Input = styled.input`
  max-width: 40px;
  z-index: 1;
  background-color: ${({ theme }) => theme.palette.background.default};
`;

interface SizeTProps {
  className: string;
}

export const WidthT: React.FC<SizeTProps> = ({ className }) => (
  <SizeWidthWrapper className={className}>
    <Input defaultValue="1200" />
    <SizeWidthVisual />
  </SizeWidthWrapper>
);

export const HeightT: React.FC<SizeTProps> = ({ className }) => (
  <SizeHeightWrapper className={className}>
    <Input defaultValue="1300" style={{ transform: 'rotateZ(-90deg)' }} />
    <SizeHeightVisual />
  </SizeHeightWrapper>
);
