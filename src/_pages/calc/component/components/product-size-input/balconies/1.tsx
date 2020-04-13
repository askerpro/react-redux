import React from 'react';
import styled from 'styled-components';
import { Variants, productTypeVariants } from 'data/products/balconies';
import * as E from '../elements';

const WWidth = styled(({ className }) => <E.WidthT className={className} />)`
  width: 41%;
  top: 63%;
  left: 8%;
`;

const SWidth = styled(({ className }) => <E.WidthT className={className} />)`
  width: 84%;
  top: -5%;
  left: 9%;
`;

const DHeight = styled(({ className }) => <E.HeightT className={className} />)`
  top: 4%;
  height: 91%;
  right: -10%;
`;

const WHeight = styled(({ className }) => <E.HeightT className={className} />)`
  top: 4%;
  height: 54%;
  left: -10%;
`;

export default () => {
  return (
    <E.Wrapper>
      <SWidth />
      <DHeight />
      <WWidth />
      <WHeight />
      <E.Img src={productTypeVariants[Variants.ONE_SASH].img.src} />
    </E.Wrapper>
  );
};
