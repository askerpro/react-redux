import styled from 'styled-components';
import { Container } from 'layout/section-content';
import ResponsiveImage, { Props as ResponsiveImageProps } from 'utils/responsive-image';

export const CustomContainer = styled(Container)`
  ${({ theme }) => `${theme.breakpoints.up('sm')} {
    display: flex;
  }`}
`;

interface ImageProps extends ResponsiveImageProps {
  fillMode?: 'contain' | 'cover';
}

export const Image = styled(ResponsiveImage)<ImageProps>`
  display: block;
  height: auto;
  width: 100%;
  object-fit: ${({ fillMode }) => fillMode || 'cover'};
  margin: 0 auto;
  ${({ theme }) => `${theme.breakpoints.up('sm')} {
    max-width: 50%;
  }`}
`;

interface ContentWrapperProps {
  reversed?: boolean;
}

export const ContentWrapper = styled.div<ContentWrapperProps>`
  ${({ theme, reversed }) => `${theme.breakpoints.up('sm')} {
    padding-left: 30px;
    display: ${reversed ? 'flex-reversed' : 'flex'};
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    min-height: 350px;
  }`}
  ${({ theme }) => `${theme.breakpoints.down('sm')} {
    padding-top: 24px;
  }`}
`;
