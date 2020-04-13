import React from 'react';

import { Section, Container, Title, Body, Header, SectionImage } from 'layout/section-content';
import { Typography, List, ListItem, ListItemIcon } from '@material-ui/core';
import NavSection from 'layout/nav-section';
import img1 from './img/partners1.jpg';
import img2 from './img/partners2.jpg';
import img3 from './img/zavod2.jpg';

const title = 'Работаем с крупнейшими производителями.';
const description =
  'Мы тщательно выбираем партнеров и работаем только с проверенными производителями из Германии, Словении и России. VEKA – крупнейший в мире производитель пластикового профиля для изготовления оконных и дверных конструкций, с совокупным оборотом около 1 миллиарда Евро в год.';

export default () => (
  <Section>
    <Container>
      <Header>
        <Title>{title}</Title>
      </Header>
      <Body>
        <SectionImage images={[img3, img1, img2]} />
        <Typography>{description}</Typography>
      </Body>
    </Container>
  </Section>
);
