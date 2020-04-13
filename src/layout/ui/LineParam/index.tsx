import React from 'react';
import { LinearProgress, Typography } from '@material-ui/core';
import * as E from './elements';

interface LineParam {
  label: string;
  value: number;
  icon: JSX.Element;
  showValue?: boolean;
  units?: string;
}

const Component: React.FC<LineParam> = ({ label, value, icon, showValue }) => (
  <E.ProgressParam>
    <E.Content>
      <E.LabelContainer>
        <E.IconWrapper>{icon}</E.IconWrapper>

        <Typography variant="body2">{label}</Typography>
      </E.LabelContainer>
      {showValue && <Typography variant="subtitle2">{`${value}%`}</Typography>}
    </E.Content>
    <LinearProgress color="secondary" variant="determinate" value={value || 0} />
  </E.ProgressParam>
);

export default Component;
