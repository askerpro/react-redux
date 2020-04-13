import React from 'react';
import PromoSection from 'components/promo-section';
import Img from './img/apartment3.jpg';
import data from './data';

export default () => (
  <PromoSection
    img={Img}
    title={data.title}
    description="Французские окна от пола до потолка для квартир и коттеджей."
    url={data.url}
  />
);
