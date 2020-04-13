import React from 'react';
import { Section, Container, Title, Body, Header, Image, Video } from 'layout/section-content';
import { Typography, List, ListItem, ListItemIcon } from '@material-ui/core';
import Carousel from 'layout/ui/carousel';
import { Done } from '@material-ui/icons';
import img1 from './img/assembly_test.mp4';

const title = 'Многоуровневый контроль качества';
const description =
  'Тщательная проверка каждого изделя на всех этапах производства практически исключает возможность брака.';

export default (
  <Section>
    <Container>
      <Header>
        <Title>{title}</Title>
      </Header>
      <Body>
        <Video src={img1} />
      </Body>
      <Body>
        <Typography>{description}</Typography>
      </Body>
    </Container>
  </Section>
);
