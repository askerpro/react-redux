import React from 'react';
import styled from 'styled-components';
import { Variants, productTypeVariants } from 'data/products/balconies';
import * as E from '../elements';

const WWidth = styled(({ className }) => <E.WidthT className={className} />)`
  width: 59%;
  top: 64%;
  left: 7%;
`;

const SWidth = styled(({ className }) => <E.WidthT className={className} />)`
  width: 91%;
  top: -5%;
  left: 6%;
`;

const DHeight = styled(({ className }) => <E.HeightT className={className} />)`
  top: 4%;
  height: 92%;
  right: -5%;
`;

const WHeight = styled(({ className }) => <E.HeightT className={className} />)`
  top: 4%;
  height: 55%;
  left: -3%;
`;

export default () => {
  return (
    <E.Wrapper>
      <SWidth />
      <DHeight />
      <WWidth />
      <WHeight />
      <E.Img src={productTypeVariants[Variants.TWO_SASH].img.src} />
    </E.Wrapper>
  );
};
