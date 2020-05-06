import React from 'react';
import { Container, Header, Title, Body, SectionImage } from 'layout/section-content';
import NavSection from 'layout/nav-section';
import { Typography, Box, List, ListItemIcon, ListItem } from '@material-ui/core';
import { Done } from '@material-ui/icons';
import img1 from './img/handles.jpg';
import img2 from './img/handles2.jpg';
import img3 from './img/handles3.jpg';

const title = 'Ручки, ограничители';
const description = 'Многофункциональные ручки разных цветов:';

export default (
  <NavSection title={title} key={title}>
    <Container>
      <Header>
        <Title>{title}</Title>
      </Header>
      <Body>
        <SectionImage images={[img1, img2, img3]} />
        <Box mt="20px" />
        <Typography color="textSecondary">{description}</Typography>
        <List>
          <ListItem disableGutters>
            <ListItemIcon>
              <Done color="primary" />
            </ListItemIcon>
            <Typography>Стандартные ручки</Typography>
          </ListItem>
          <ListItem disableGutters>
            <ListItemIcon>
              <Done color="primary" />
            </ListItemIcon>
            <Typography>Акустические ручки</Typography>
          </ListItem>
          <ListItem disableGutters>
            <ListItemIcon>
              <Done color="primary" />
            </ListItemIcon>
            <Typography>Антибактериальные ручки</Typography>
          </ListItem>
          <ListItem disableGutters>
            <ListItemIcon>
              <Done color="primary" />
            </ListItemIcon>
            <Typography>Ручки с замком</Typography>
          </ListItem>
        </List>
      </Body>
    </Container>
  </NavSection>
);
