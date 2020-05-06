import React from 'react';
import {
  Container,
  Header,
  Title,
  Section,
  Overline,
  Subtitle,
  HeaderImage,
} from 'layout/section-content';
import Page from 'layout/page';
import Section1 from './section1';
import Section2 from './section2';
import Section3 from './section3';
import headerImage from './img/inside2.jpg';
import { title, description, caption } from './data';

const pageContent = () => (
  <Page
    title={title}
    description={description}
    headerImg={<HeaderImage {...headerImage} />}
    header={
      <Section noBorder>
        <Container>
          <Header>
            <Overline>{caption}</Overline>
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
