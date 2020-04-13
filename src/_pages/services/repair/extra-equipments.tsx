import React from 'react';
import { Container, Header, Title, Body } from 'layout/section-content';
import NavSection from 'layout/nav-section';
import { Typography, Box, List, ListItemIcon, ListItem } from '@material-ui/core';
import SectionImage from 'layout/section-image';
import { Done } from '@material-ui/icons';
import img1 from './img/equipments.jpg';

const title = 'Установка дополнительных комплектующих.';
const description = '';

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
            <Typography>Ручки</Typography>
          </ListItem>
          <ListItem disableGutters>
            <ListItemIcon>
              <Done color="primary" />
            </ListItemIcon>
            <Typography>Москитные сетки</Typography>
          </ListItem>
          <ListItem disableGutters>
            <ListItemIcon>
              <Done color="primary" />
            </ListItemIcon>
            <Typography>Подоконники, отливы, откосы</Typography>
          </ListItem>
        </List>
      </Body>
    </Container>
  </NavSection>
);
