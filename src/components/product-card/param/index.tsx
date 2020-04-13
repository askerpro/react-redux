import React from 'react';

import { Grid, Divider } from '@material-ui/core';
import * as E from './elements';

export interface Props {
  title: string;
  label: string;
  desc: string;
  icon: string;
  divider?: boolean;
}

export default ({ label, title, desc, icon, divider }: Props) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <E.ItemIcon src={icon} />
      </Grid>
      <Grid item container spacing={2} xs={12}>
        <E.ItemContent>
          <E.ItemLabel>{label}</E.ItemLabel>
          <E.ItemTitle>{title}</E.ItemTitle>
          <E.ItemDesc>{desc}</E.ItemDesc>
        </E.ItemContent>
        {divider && (
          <Grid item xs={12}>
            <Divider />
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};
