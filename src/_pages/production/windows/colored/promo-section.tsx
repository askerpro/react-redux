import React from 'react';
import PromoSection from 'components/promo-section';
import Img from './img/colors.jpg';
import * as data from './data';

export default () => (
  <PromoSection img={Img} title={data.caption} description={data.description} url={data.url} />
);
