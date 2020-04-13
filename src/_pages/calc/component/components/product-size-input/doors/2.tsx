import React from 'react';
import styled from 'styled-components';
import { Variants, productTypeVariants } from 'data/products/doors';
import * as E from '../elements';

const Width = styled(({ className }) => <E.WidthT className={className} />)`
  width: 92.3%;
  top: -6%;
  left: 4%;
`;

const Height = styled(({ className }) => <E.HeightT className={className} />)`
  top: 2.6%;
  height: 93.9%;
  left: -16%;
`;

export default () => {
  return (
    <E.Wrapper>
      <Width />
      <Height />
      <E.Img src={productTypeVariants[Variants.TWO_SASH].img.src} />
    </E.Wrapper>
  );
};
