import React from 'react';
import { Container, Header, Title, Body } from 'layout/section-content';
import NavSection from 'layout/nav-section';
import { Typography, Box, List, ListItemIcon, ListItem } from '@material-ui/core';
import SectionImage from 'layout/section-image';
import { Done } from '@material-ui/icons';
import img1 from './img/sealants.jpg';

const title = 'Уплотнители';
const description =
  'Обеспечивают герметичность изделия, и влияют на тепло и шумо-изоляцию, на защиту от пыли и влаги.';

export default (
  <NavSection title={title} key={title}>
    <Container>
      <Header>
        <Title>{title}</Title>
      </Header>
      <Body>
        <SectionImage images={[img1]} />
        <Box mt="20px" />
        <Typography color="textSecondary">{description}</Typography>
        <List>
          <ListItem disableGutters>
            <ListItemIcon>
              <Done color="primary" />
            </ListItemIcon>
            <Typography>EPDM черный</Typography>
          </ListItem>
          <ListItem disableGutters>
            <ListItemIcon>
              <Done color="primary" />
            </ListItemIcon>
            <Typography>EPDM серый</Typography>
          </ListItem>
        </List>
      </Body>
    </Container>
  </NavSection>
);
