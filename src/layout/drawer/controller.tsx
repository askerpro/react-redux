import React from 'react';
import { IconButton } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import { useSelector, useDispatch } from 'react-redux';
import { getDrawerState } from './selectors';
import * as actions from './actions';

const Controller: React.FC = () => {
  const dispatch = useDispatch();

  const isDrawerOpen = useSelector(getDrawerState);
  return (
    <IconButton
      onClick={() => {
        if (isDrawerOpen) {
          dispatch(actions.close());
        } else {
          dispatch(actions.open());
        }
      }}
    >
      <MenuIcon />
    </IconButton>
  );
};

export default Controller;
