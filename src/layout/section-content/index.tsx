import styled, { css } from 'styled-components';
import React from 'react';
import { Typography } from '@material-ui/core';
import ContainerT, { ContainerProps } from '@material-ui/core/Container';
import { TypographyProps } from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Carousel from 'layout/ui/carousel';
import ResponsiveImage, { Props as ResponsiveImageProps } from 'utils/responsive-image';

export const Container = styled((props: ContainerProps) => <ContainerT maxWidth="md" {...props} />)`
  padding-top: ${({ theme }) => theme.spacing(6)}px;
  padding-bottom: ${({ theme }) => theme.spacing(6)}px;
  overflow: hidden;
  position: relative;
`;

export interface SectionProps {
  noBorder?: boolean;
  noPadding?: boolean;
  bgPaper?: boolean;
}

export const Section = styled.section<SectionProps>`
  position: relative;
  overflow-x: hidden;
  border-top: 20px solid #f7f7f7;
  ${({ noBorder }) =>
    noBorder &&
    css`
      border-top: none;
    `};
  ${({ noPadding }) =>
    noPadding &&
    css`
      ${Container} {
        padding-bottom: 0;
      }
    `};

  ${({ bgPaper, theme }) =>
    bgPaper &&
    css`
      background-color: ${theme.palette.background.paper};
    `}
`;

export const HeaderImage = styled(ResponsiveImage)`
  width: 100%;
  height: 50vw;
  max-height: 350px;
  object-fit: cover;
`;

interface HeaderProps {
  center?: boolean;
}

export const Header = styled(Box)<HeaderProps>`
  ${({ center }) =>
    center &&
    css`
      text-align: center;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
    `}
`;

export const Caption = styled((Props: TypographyProps) => (
  <Typography variant="caption" color="textSecondary" {...Props} />
))`` as typeof Typography;

export const Overline = styled((Props: TypographyProps) => (
  <Typography variant="overline" color="textSecondary" {...Props} />
))`
  font-size: 1rem;
` as typeof Typography;

export const Title = styled((Props: TypographyProps) => (
  <Typography variant="h2" color="textPrimary" gutterBottom {...Props} />
))`` as typeof Typography;

export const Subtitle = styled((Props: TypographyProps) => (
  <Typography variant="h6" color="textSecondary" {...Props} />
))`
  font-weight: 400;
` as typeof Typography;

export const Body = styled.div`
  margin-top: ${({ theme }) => theme.spacing(4)}px;
`;

export const Image = styled((props) => (
  <ResponsiveImage {...props} sizes="(min-width: 760px) 760px" lazy />
))`
  display: block;
  width: 100%;
  height: auto;
  max-height: 350px;
  object-fit: cover;
`;

export const Video = styled(({ src, ...other }) => (
  <video src={src} muted loop autoPlay {...other} />
))`
  display: block;
  width: 100%;
  height: auto;
  max-height: 350px;
  object-fit: cover;
`;

interface SectionImageProps {
  images: ResponsiveImageProps[];
}

export const SectionImage: React.FC<SectionImageProps> = ({ images }) =>
  images.length > 1 ? (
    <Carousel heightMode="current">
      {images.map((imageData) => (
        <div key={imageData.src}>
          <Image {...imageData} />
        </div>
      ))}
    </Carousel>
  ) : (
    <Image {...images[0]} />
  );
