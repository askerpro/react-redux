import React from 'react';
import { Container, Header, Title, Body } from 'layout/section-content';
import NavSection from 'layout/nav-section';
import { Typography, Box } from '@material-ui/core';
import SectionImage from 'layout/section-image';
import img1 from './img/balcony.jpg';
import img2 from './img/block.jpg';

const title = 'Балконные двери';
const description =
  'Если на Вашем балконе используется холодное остекление, балконная дверь должна быть более теплой. И, наоборот — при теплом остеклении балкона или лоджии, дверь может быть более «холодной». Можно сделать целиком стеклянной.';

export default (
  <NavSection title={title} key={title}>
    <Container>
      <Header>
        <Title>{title}</Title>
      </Header>
      <Body>
        <SectionImage images={[img1, img2]} />
        <Box mt="20px" />
        <Typography color="textSecondary">{description}</Typography>
      </Body>
    </Container>
  </NavSection>
);
