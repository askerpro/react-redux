import React from 'react';
import PromoCard from 'components/promo-card';
import Img from './img/promo2.jpg';
import { title, description, url } from './data';
export default () => <PromoCard img={Img} title={title} subititle={description} url={url} />;
