import React from 'react';
import styled from 'styled-components';
import { Variants, productTypeVariants } from 'data/products/windows';
import * as E from '../elements';

const Width = styled(({ className }) => <E.WidthT className={className} />)`
  width: 76.3%;
  top: -3%;
  left: 11.6%;
`;

const Height = styled(({ className }) => <E.HeightT className={className} />)`
  top: 9.7%;
  height: 72.1%;
  left: -0.8%;
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
