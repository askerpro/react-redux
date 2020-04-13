import React from 'react';
import { Container, Header, Title, Section, Subtitle, HeaderImage } from 'layout/section-content';
import Page from 'layout/page';

import Section1 from './section1';
import Section2 from './section2';
import Section3 from './section3';
import img1 from './img/outside.jpg';
import { title, description } from './data';

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
            <Subtitle>{description}</Subtitle>
          </Header>
        </Container>
      </Section>
    }
  >
    {Section1}
    {Section2}
    {Section3}
  </Page>
);

export default pageContent;
