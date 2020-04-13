import React from 'react';
import PromoSection from 'components/promo-section';
import Img from './img/promo.jpg';
import { title, subtitle, url } from './data';

export default () => <PromoSection img={Img} title={title} description={subtitle} url={url} />;
