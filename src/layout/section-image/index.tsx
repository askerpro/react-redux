import React from 'react';
import { Props as ResponsiveImageProps } from 'utils/responsive-image';
import Carousel from 'layout/ui/carousel';

import { Image } from './elements';

interface SectionImageProps {
  images: ResponsiveImageProps[];
  className?: string;
}

const SectionImage: React.FC<SectionImageProps> = ({ images, className }) =>
  images.length > 1 ? (
    <Carousel heightMode="current" className={className}>
      {images.map((imageData) => (
        <Image {...imageData} key={imageData.src} />
      ))}
    </Carousel>
  ) : (
    <Image {...images[0]} />
  );

export default SectionImage;
