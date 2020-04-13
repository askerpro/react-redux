import React from 'react';

import { Section, Container, Title, Body, Header, Image, Video } from 'layout/section-content';
import { Typography, List, ListItem, ListItemIcon } from '@material-ui/core';
import { Done } from '@material-ui/icons';
import Carousel from 'layout/ui/carousel';
import img1 from './img/privolnov_end.jpg';

const title = 'Эксперт по качеству Антон Привольнов рекомендует Окна Берта';
const description =
  'Обращаясь в нашу компанию, клиенты могут быть уверены в том, что заказанные окна и двери будут в точности соответствовать их представлениям о качественных окнах.';

export default (
  <Section>
    <Container>
      <Header>
        <Title>{title}</Title>
      </Header>
      <Body>
        <Image {...img1} />
      </Body>
      <Body>
        <Typography>{description}</Typography>
      </Body>
    </Container>
  </Section>
);
