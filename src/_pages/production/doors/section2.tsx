import React from 'react';
import { Container, Header, Title, Body } from 'layout/section-content';
import NavSection from 'layout/nav-section';
import { Typography, Box } from '@material-ui/core';
import SectionImage from 'layout/section-image';
import img1 from './img/inside.jpg';
import img2 from './img/inside2.jpg';
import img3 from './img/inside3.jpg';

const title = 'Межкомнатные пластиковые двери';
const description =
  'Межкомнатные двери нашего производства просты в уходе: поверхность гладкая и устойчивая к загрязнениям. Не деформируются, не впитывают влагу, можно устанавливать в ванную. Дополнительно можно ламинировать и гармонично вписать в интерьер.';

export default (
  <NavSection title={title} key={title}>
    <Container>
      <Header>
        <Title>{title}</Title>
      </Header>
      <Body>
        <SectionImage images={[img1, img2, img3]} />
        <Box mt="20px" />
        <Typography color="textSecondary">{description}</Typography>
      </Body>
    </Container>
  </NavSection>
);
