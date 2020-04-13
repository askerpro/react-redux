import React from 'react';
import { Container, Header, Title, Body, Section, Subtitle } from 'layout/section-content';
import Page from 'layout/page';
import { Typography } from '@material-ui/core';

import Calc from './component';
import { title, description, subtitle } from './data';

const pageContent = () => (
  <Page title={title} description={description}>
    <Section bgPaper>
      <Container>
        <Header>
          <Title component="h1" variant="h2">
            {title}
          </Title>
          <Subtitle>{subtitle}</Subtitle>
        </Header>
        <Body>
          <Calc />
        </Body>
        <Body>
          <Typography variant="body2" color="textSecondary">
            {description}
          </Typography>
        </Body>
      </Container>
    </Section>
  </Page>
);

export default pageContent;
