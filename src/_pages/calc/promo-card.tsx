import React from 'react';
import PromoCard from 'components/promo-card';
import Img from './img/promo.jpg';
import { title, url } from './data';

export default () => <PromoCard img={Img} title={title} url={url} />;
