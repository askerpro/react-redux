import React from 'react';
import PromoSection from 'components/promo-section';
import Img from './img/header.jpg';
import { title, url } from './data';

export default () => <PromoSection img={Img} title={title} url={url} />;
