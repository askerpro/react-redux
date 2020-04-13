import React from 'react';
import PromoSection from 'components/promo-section';
import Img from './img/header2.jpg';
import { title, description, url } from './data';

export default () => <PromoSection img={Img} title={title} description={description} url={url} />;
