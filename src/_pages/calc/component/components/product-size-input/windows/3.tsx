import React from 'react';
import styled from 'styled-components';
import { Variants, productTypeVariants } from 'data/products/windows';
import * as E from '../elements';

const Width = styled(({ className }) => <E.WidthT className={className} />)`
  width: 87.3%;
  top: -6%;
  left: 6%;
`;

const Height = styled(({ className }) => <E.HeightT className={className} />)`
  top: 4.6%;
  height: 64.9%;
  left: -6%;
`;

export default () => {
  return (
    <E.Wrapper>
      <Width />
      <Height />
      <E.Img src={productTypeVariants[Variants.THREE_SASH].img.src} />
    </E.Wrapper>
  );
};
