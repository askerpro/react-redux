import React from 'react';
import styled from 'styled-components';
import { Variants, productTypeVariants } from 'data/products/windows';
import * as E from '../elements';

const Width = styled(({ className }) => <E.WidthT className={className} />)`
  width: 66%;
  top: -2%;
  left: 17%;
`;

const Height = styled(({ className }) => <E.HeightT className={className} />)`
  top: 6%;
  height: 73%;
  left: -3%;
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
