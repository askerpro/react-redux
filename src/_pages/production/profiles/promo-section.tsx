import React from 'react';
import PromoSection from 'components/promo-section';
import Img from './img/promo2.jpg';
import * as data from './data';

export default () => (
  <PromoSection
    img={Img}
    title={data.title}
    description={data.description}
    url={data.url}
    fillMode="contain"
  />
);
