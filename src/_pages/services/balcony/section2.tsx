import React from 'react';
import { Container, Header, Title, Body } from 'layout/section-content';
import NavSection from 'layout/nav-section';
import { Typography, Box } from '@material-ui/core';
import SectionImage from 'layout/section-image';
import img1 from './img/warm4.jpg';
import img2 from './img/block.jpg';

const title = 'Балконный блок';
const description =
  'Это конструкция, отделяющая комнату от балкона состоит из балконной двери и окон, в зависимости от типа и серии дома. Чаще всего балконные двери устанавливаются вместе с окном в едином балконном блоке.';

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
