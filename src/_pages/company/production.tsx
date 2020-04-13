import React from 'react';

import { Section, Container, Title, Body, Header, SectionImage } from 'layout/section-content';
import { Typography, List, ListItem, ListItemIcon } from '@material-ui/core';
import NavSection from 'layout/nav-section';
import img1 from './img/production1.jpg';
import img2 from './img/production2.jpg';
import img3 from './img/zavod.jpg';
import img4 from './img/zavod3.jpg';
import img5 from './img/zavod5.jpg';

const title = 'Используем самое современное оборудование';
const description =
  'Мы производим пластиковые окна на собственном заводе, где все конструкции изготавливаются на современном высокотехнологичном европейском оборудовании, что обеспечивает точное соблюдение норм и технологии изготовления.';

export default (
  <Section>
    <Container>
      <Header>
        <Title>{title}</Title>
      </Header>
      <Body>
        <SectionImage images={[img1, img3, img2, img4, img5]} />
        <Typography>{description}</Typography>
      </Body>
    </Container>
  </Section>
);
