import React from 'react';
import PromoCard from 'components/promo-card';
import Img from './img/header2.jpg';
import { title, subtitle, url } from './data';

export default () => <PromoCard img={Img} title={title} subititle={subtitle} url={url} />;
