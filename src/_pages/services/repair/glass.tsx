import React from 'react';
import { Container, Header, Title, Body } from 'layout/section-content';
import NavSection from 'layout/nav-section';
import { Typography, Box } from '@material-ui/core';
import SectionImage from 'layout/section-image';

import img1 from './img/glass.jpg';

const title = 'Замена разбитого стеклопакета.';
const description =
  'Если это обычный стеклопакет, то самый дешёвый ремонт - замена стеклопакета целиком. Собственная линия производства стеклопакетов позволяет изготовить новое изделие по минимально возможным ценам. По желанию заказчика вместо стандартного может быть установлен зеркальный, тонированный, цветной или теплосберегающий стеклопакет.';

export default (
  <NavSection title={title} key={title}>
    <Container>
      <Header>
        <Title>{title}</Title>
      </Header>
      <Body>
        <SectionImage images={[img1]} />
        <Box mt="20px" />
        <Typography color="textSecondary">{description}</Typography>
      </Body>
    </Container>
  </NavSection>
);
