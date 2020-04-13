import React from 'react';
import {
  Container,
  Header,
  Title,
  Body,
  Section,
  Subtitle,
  HeaderImage,
} from 'layout/section-content';
import Page from 'layout/page';
import { Typography } from '@material-ui/core';

import Section1 from './furniture';
import Section2 from './zapotevanie';
import Section3 from './glass';
import Section4 from './sealants';
import Section5 from './extra-equipments';
import img1 from './img/header.jpg';
import { title, description, subtitle } from './data';

const pageContent = () => (
  <Page
    title={title}
    description={description}
    headerImg={<HeaderImage {...img1} />}
    header={
      <Section noBorder>
        <Container>
          <Header>
            <Title component="h1">{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
          </Header>
          <Body>
            <Typography>{description}</Typography>
          </Body>
        </Container>
      </Section>
    }
  >
    {Section1}
    {Section2}
    {Section3}
    {Section4}
    {Section5}
  </Page>
);

export default pageContent;
