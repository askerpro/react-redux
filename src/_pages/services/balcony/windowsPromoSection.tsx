import React from 'react';
import PromoSection from 'components/promo-section';
import Img from './img/warm4.jpg';
import { url } from './data';
export default () => (
  <PromoSection
    img={Img}
    title="Пластиковые окна на балкон"
    description="Теплое и холодное остекление балкона. Балконные блоки."
    url={url}
  />
);
