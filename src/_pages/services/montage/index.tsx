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

import img1 from './img/header.jpg';
import { title, description, description2, subtitle } from './data';

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
            <Typography variant="body1" gutterBottom>
              {description}
            </Typography>
            <Typography variant="body1">{description2}</Typography>
          </Body>
        </Container>
      </Section>
    }
  />
);

export default pageContent;
