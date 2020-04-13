import React from 'react';
import styled from 'styled-components';
import { Typography, Button, Grid } from '@material-ui/core/';
import { ButtonProps } from '@material-ui/core/Button';

export const ItemLabel: React.FC = styled((props) => (
  <Typography {...props} variant="body2" color="textSecondary" />
))``;

export const ItemTitle: React.FC = (props) => (
  <Typography variant="subtitle1" color="textPrimary" {...props} />
);

export const ItemDesc: React.FC = (props) => (
  <Typography variant="body2" color="textSecondary" {...props} />
);

export const ItemIcon = styled.img`
  width: 50px;
  height: auto;
  display: block;
`;

export const ItemContent: React.FC = styled((props) => <Grid item xs={12} {...props} />)``;

export const ItemActions = styled((props) => (
  <Grid container justify="space-between" item xs={12} {...props} />
))``;

export const ItemMore = styled((props) => (
  <Grid item>
    <Button {...props} size="small" />
  </Grid>
))<ButtonProps>``;

export const ItemSelect = styled((props: ButtonProps) => (
  <Grid item>
    <Button variant="contained" size="small" color="primary" {...props} />
  </Grid>
))``;
