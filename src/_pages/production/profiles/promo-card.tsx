import React from 'react';
import PromoCard from 'components/promo-card';
import Img from './img/promo2.jpg';
import * as data from './data';

export default () => (
  <PromoCard
    img={Img}
    title={data.title}
    subititle={data.description}
    url={data.url}
    fillMode="contain"
  />
);
