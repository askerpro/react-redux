import React from 'react';
import ProfileCard from '_pages/production/profiles/profile-card';
import ProfilesData from 'data/profiles';
import { Container, Header, Title, Body } from 'layout/section-content';
import { Grid } from '@material-ui/core';
import NavSection from 'layout/nav-section';

import * as pageData from './data';

const ProfilesSection: React.FC = () => {
  return (
    <NavSection title={pageData.title}>
      <Container>
        <Header>
          <Title component="h2">{pageData.title}</Title>
        </Header>
        <Body>
          <Grid container spacing={1}>
            {ProfilesData.map((ProfileData) => {
              return (
                <Grid item xs={6} md={4} key={ProfileData.name}>
                  <ProfileCard data={ProfileData} />
                </Grid>
              );
            })}
          </Grid>
        </Body>
      </Container>
    </NavSection>
  );
};

export default ProfilesSection;
