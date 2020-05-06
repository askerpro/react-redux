import React from 'react';
import {
  Container,
  Header,
  Title,
  Body,
  Section,
  Overline,
  HeaderImage,
  SectionImage,
} from 'layout/section-content';
import NavSection from 'layout/nav-section';
import Page from 'layout/page';
import { Typography, Box } from '@material-ui/core';
import pageData from './data';
import headerImg from './img/main.jpg';

const pageContent = () => (
  <Page
    title={pageData.title}
    description={pageData.description}
    headerImg={<HeaderImage {...headerImg} />}
    header={
      <Section noBorder>
        <Container>
          <Header>
            <Overline>{pageData.overline}</Overline>
            <Title>{pageData.title}</Title>
          </Header>
          <Body>
            <Typography color="textSecondary">{pageData.description}</Typography>
          </Body>
        </Container>
      </Section>
    }
  >
    {pageData.sections.map((section) => {
      return (
        <NavSection title={section.title} key={section.title}>
          <Container>
            <Header>
              <Title>{section.title}</Title>
            </Header>
            <Body>
              <SectionImage images={section.images} />
              <Box mt="20px" />
              <Typography color="textSecondary">{section.description}</Typography>
            </Body>
          </Container>
        </NavSection>
      );
    })}
  </Page>
);

export default pageContent;
