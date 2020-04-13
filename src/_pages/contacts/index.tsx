import React from 'react';
import { Section, Container, Header, Title, Subtitle, Body } from 'layout/section-content';
import NavSection from 'layout/nav-section';
import Page from 'layout/page';

import data from 'data/contacts';

import { Grid, Typography } from '@material-ui/core';
import ContactCard from './contact-card';
import { title, desc } from './data';

export default () => (
  <Page
    title={title}
    contentTitle="Регионы"
    description={desc}
    header={
      <Section noBorder>
        <Container>
          <Header>
            <Title component="h1">{title}</Title>
            <Subtitle>{desc}</Subtitle>
          </Header>
        </Container>
      </Section>
    }
  >
    <>
      {data.map((region) => (
        <NavSection title={region.name} key={region.name}>
          <Container>
            <Header>
              <Typography variant="h4">{region.name}</Typography>
            </Header>
            <Body>
              <Grid container spacing={2}>
                {region.offices.map((office) => (
                  <Grid item xs={6} md={3} key={office.address}>
                    <ContactCard {...office} />
                  </Grid>
                ))}
              </Grid>
            </Body>
          </Container>
        </NavSection>
      ))}
    </>
  </Page>
);
