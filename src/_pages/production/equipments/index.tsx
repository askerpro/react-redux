import React from 'react';
import { Container, Header, Title, Section, Subtitle, HeaderImage } from 'layout/section-content';
import Page from 'layout/page';

import Section1 from './section1';
import Section2 from './section2';
import HandlesSection from './handles';
import GlassesSection from './glasses';
import SealantsSection from './sealants';
import img1 from './img/header2.jpg';
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
    {HandlesSection}
    {GlassesSection}
    {SealantsSection}
  </Page>
);

export default pageContent;
