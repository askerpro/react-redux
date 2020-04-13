import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';

import { Typography } from '@material-ui/core';

import * as E from './elements';

interface Props {
  label: string;
  name: string;
  icon: string;
  editIcon: React.ReactNode;
}

const Component: React.FC<Props> = ({ label, name, icon, editIcon }) => {
  return (
    <ListItem disableGutters>
      <ListItemAvatar>
        <E.icon src={icon} />
      </ListItemAvatar>
      <ListItemText
        primary={
          <Typography variant="body2" color="textSecondary">
            {label}
          </Typography>
        }
        secondary={<Typography>{name}</Typography>}
      />
      <ListItemSecondaryAction>{editIcon}</ListItemSecondaryAction>
    </ListItem>
  );
};

export default Component;
