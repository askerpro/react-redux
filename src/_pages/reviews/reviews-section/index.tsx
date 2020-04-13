import { Container, Title, Header, Subtitle, Body } from 'layout/section-content';
import NavSection from 'layout/nav-section';
import { Review, getReviews, createReview } from 'data/reviews';

import React from 'react';
import { Hidden, Link, Box, Grid } from '@material-ui/core';
import LinkAdapter from 'utils/link';

import ReviewCard from '../review-card';
const date = new Date();
const ReviewsSection = () => {
  const [reviews, setReviews] = React.useState<Array<Review>>(
    Array.from(Array(8), () => createReview()),
  );
  React.useEffect(() => {
    getReviews().then((_reviews) => {
      setReviews(_reviews.slice(0, 8));
      console.log(_reviews.slice(0, 8));
    });
  }, []);
  return (
    <NavSection title="Видео отзывы наших клиентов">
      <Container>
        <Header>
          <Title variant="h2">Видео отзывы о нашей продукции</Title>
          <Subtitle>
            {`Обновлено ${date.getDate() - 1}.${date.getMonth() + 1}.${date.getFullYear()}г.`}
          </Subtitle>
        </Header>
        <Body>
          <Hidden smUp implementation="css">
            <Grid container spacing={1}>
              {reviews.slice(0, 4).map((review) => (
                <Grid item xs={6} md={3} key={review.url}>
                  <ReviewCard
                    mediaSrc={review.url}
                    region={review.region}
                    location={review.location}
                    date={review.date}
                    preview={review.preview}
                  />
                </Grid>
              ))}
            </Grid>
          </Hidden>
          <Hidden mdDown implementation="css">
            <Grid container spacing={1}>
              {reviews.map((review) => (
                <Grid item xs={6} md={3} key={review.url}>
                  <ReviewCard
                    mediaSrc={review.url}
                    region={review.region}
                    location={review.location}
                    date={review.date}
                    preview={review.preview}
                  />
                </Grid>
              ))}
            </Grid>
          </Hidden>

          <Box mt="20px" />

          <Link variant="button" component={LinkAdapter} color="secondary" href="/reviews">
            Открыть страницу с отзывами
          </Link>
        </Body>
      </Container>
    </NavSection>
  );
};

export default ReviewsSection;
