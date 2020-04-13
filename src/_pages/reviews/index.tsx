import React from 'react';
import Page from 'layout/page';
import { Section, Container, Header, Title, Subtitle, Body } from 'layout/section-content';
import { Review, getReviews, createReview } from 'data/reviews';

import { Grid } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ReviewCard from './review-card';
import * as E from './elements';

const date = new Date();

const pageTitle = 'Отзывы';
const desc = 'Настоящие отзывы от наших клиентов.';

const yesterday = `${date.getDate() - 1}.${date.getMonth() + 1}.${date.getFullYear()}г.`;

interface State {
  reviews: Review[];
  regions: string[];
  region: string;
}

class Reviews extends React.Component<{}, State> {
  constructor(props: React.PropsWithChildren<any>) {
    super(props);
    this.state = {
      reviews: Array.from(Array(10), () => createReview()),
      regions: [],
      region: '',
    };
  }

  componentDidMount() {
    getReviews().then((reviews) => {
      const regions: string[] = [];
      reviews.forEach((review) => {
        if (regions.indexOf(review.region) === -1) {
          regions.push(review.region);
        }
      });
      this.setState({
        regions,
        reviews,
      });
    });
  }

  render() {
    const { reviews, regions, region } = this.state;
    return (
      <>
        <Page title={pageTitle} description={desc}>
          <Section>
            <Container>
              <Header>
                <Title>{pageTitle}</Title>
                <Subtitle>{`Обновлено ${yesterday}`}</Subtitle>
              </Header>
              <Body>
                <E.SelectWrapper>
                  <Grid container spacing={2}>
                    <Grid item md={6} xs={12}>
                      <FormControl fullWidth>
                        <Select
                          value={region}
                          onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
                            this.setState({
                              region: event.target.value as string,
                            });
                          }}
                          displayEmpty
                        >
                          <MenuItem value="">Все регионы</MenuItem>
                          {regions.map((cregion) => (
                            <MenuItem value={cregion} key={cregion}>
                              {cregion}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                </E.SelectWrapper>
                <Grid container spacing={2}>
                  {reviews
                    .filter((review) => {
                      return region === review.region || region === '';
                    })
                    .map((review) => (
                      <Grid item md={3} xs={6} key={review.url}>
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
              </Body>
            </Container>
          </Section>
        </Page>
      </>
    );
  }
}

export default Reviews;
