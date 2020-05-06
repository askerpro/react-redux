import React from 'react';
import ProfileCard from '_pages/production/profiles/profile-card';
import ProfilesData from 'data/profiles';
import { Section, Container, Header, Title, Subtitle, Body } from 'layout/section-content';
import { Grid } from '@material-ui/core';
import Page from 'layout/page';
import * as pageData from './data';

const pageContent: React.FC = () => (
  <Page title={pageData.title} description={pageData.description}>
    <Section>
      <Container>
        <Header>
          <Title component="h1">{pageData.title}</Title>
          <Subtitle>{pageData.description}</Subtitle>
        </Header>
        <Body>
          <Grid container spacing={2}>
            {ProfilesData.map((ProfileData) => {
              return (
                <Grid item md={4} sm={6} key={ProfileData.name}>
                  <ProfileCard data={ProfileData} />
                </Grid>
              );
            })}
          </Grid>
        </Body>
      </Container>
    </Section>
  </Page>
);

export default pageContent;
