import React from 'react';
import { ProductTypeVariant } from 'data/products/interfaces';

import { Grid, Typography, Card, CardContent, CardMedia } from '@material-ui/core';
import { Image, CardMediaHelper, StyledCardActionArea } from './elements';

export interface Props {
  active: number;
  onChange(active: number): void;
  items: ProductTypeVariant[];
}

export default ({ active, onChange, items }: Props) => {
  return (
    <Grid container spacing={1}>
      {items.map((item, i) => {
        return (
          <Grid item xs={6} md={4} key={item.name}>
            <StyledCardActionArea
              disabled={i === active}
              onClick={() => {
                onChange(i);
              }}
            >
              <Card>
                <CardMedia style={{ paddingTop: '100%', position: 'relative' }}>
                  <CardMediaHelper>
                    <Image {...item.img} noPlaceHolder />
                  </CardMediaHelper>
                </CardMedia>
                <CardContent>
                  <Typography align="center" variant="body2" color="textSecondary">
                    {item.name}
                  </Typography>
                </CardContent>
              </Card>
            </StyledCardActionArea>
          </Grid>
        );
      })}
    </Grid>
  );
};
