import React from 'react';
import styled from 'styled-components';
import { Variants, productTypeVariants } from 'data/products/doors';
import * as E from '../elements';

const Width = styled(({ className }) => <E.WidthT className={className} />)`
  width: 84%;
  top: -5%;
  left: 9%;
`;

const Height = styled(({ className }) => <E.HeightT className={className} />)`
  top: 3%;
  height: 94%;
  left: -26%;
`;

export default () => {
  return (
    <E.Wrapper>
      <Width />
      <Height />
      <E.Img src={productTypeVariants[Variants.ONE_SASH].img.src} />
    </E.Wrapper>
  );
};
