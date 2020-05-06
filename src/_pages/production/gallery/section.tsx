import { Container, Title, Header, Subtitle, Body } from 'layout/section-content';
import NavSection from 'layout/nav-section';
import GalleryItems from 'data/gallery';
import { KeyboardArrowDown } from '@material-ui/icons';
import React from 'react';
import { Grid, Button, Box } from '@material-ui/core';

import GalleryCard from './gallery-card';

const date = new Date();
const GallerySection = () => {
  const [count, setCount] = React.useState(9);

  return (
    <NavSection title="Галерея работ">
      <Container>
        <Header>
          <Title variant="h2">Галерея работ</Title>
          <Subtitle>
            {`Обновлено ${date.getDate() - 1}.${date.getMonth() + 1}.${date.getFullYear()}г.`}
          </Subtitle>
        </Header>
        <Body>
          <Grid container spacing={1}>
            {GalleryItems.slice(0, count).map((itemData) => (
              <Grid item xs={6} md={4} key={itemData.src}>
                <GalleryCard imgData={itemData} />
              </Grid>
            ))}
          </Grid>
          <Box mt="16px" />
          <Button
            onClick={() => {
              setCount((_currentCount) => _currentCount + 9);
            }}
            size="large"
            endIcon={<KeyboardArrowDown />}
            fullWidth
          >
            Загрузить еще
          </Button>
        </Body>
      </Container>
    </NavSection>
  );
};

export default GallerySection;
