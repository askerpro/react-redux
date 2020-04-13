import React from 'react';
import PromoCard from 'components/promo-card';
import Img from './img/promo.jpg';
import { title, desc, url } from './data';

export default () => (
  <PromoCard img={Img} title={title} subititle={desc} url={url} actionText="Открыть" />
);
