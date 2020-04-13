import React from 'react';

import { Section, Container, Title, Body, Header, Image, Video } from 'layout/section-content';
import { Typography, List, ListItem, ListItemIcon } from '@material-ui/core';
import { Done } from '@material-ui/icons';
import Carousel from 'layout/ui/carousel';
import img2 from './img/quality2.jpg';
import img3 from './img/quality3.jpg';

const title = 'Гарантированное качество всей нашей продукции';
const description = '';

const advantages = [
  'Все материалы, используемые в производстве, – профиль, фурнитура, стеклопакет или комплектующие – сертифицированы.',
  'Вся наша продукция изготавливается и устанавливается с учетом технических требований, стандартов качества и соответствует ГОСТ.',
];

export default (
  <Section>
    <Container>
      <Header>
        <Title>{title}</Title>
      </Header>
      <Body>
        <Carousel>
          <Image {...img2} />
          <Image {...img3} />
        </Carousel>
        <Typography>{description}</Typography>
        <List disablePadding>
          {advantages.map((advantage) => (
            <ListItem key={advantage} disableGutters>
              <ListItemIcon style={{ minWidth: '36px' }}>
                <Done color="secondary" />
              </ListItemIcon>
              <Typography>{advantage}</Typography>
            </ListItem>
          ))}
        </List>
      </Body>
    </Container>
  </Section>
);
