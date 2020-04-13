import React from 'react';

import IconButton from '@material-ui/core/IconButton';

import { Grid, Button, Box } from '@material-ui/core';

import { Settings } from '@material-ui/icons';
import Dialog from 'layout/ui/dialog';

import ExtraParam from '../extra-param-template';

interface Props {
  label: string;
  name: string;
  icon: string;
  items: JSX.Element[];
  onChange(selectedItem: number): void;
  activeItem: number;
}

const Component: React.FC<Props> = ({ label, name, icon, items, onChange, activeItem }) => {
  const [isListOpen, setListOpen] = React.useState(false);
  console.log(items);
  return (
    <>
      <Dialog
        title={label}
        isOpen={isListOpen}
        onClose={() => {
          setListOpen(false);
        }}
        fullWidth
        content={
          <Grid container spacing={10}>
            {items.map((item, i) => (
              <Grid item xs={12} key={i}>
                {item}
                <Box mt="16px" />
                {i === activeItem ? (
                  <Button disabled variant="outlined" fullWidth>
                    Выбрано
                  </Button>
                ) : (
                  <Button
                    onClick={() => {
                      onChange(i);
                      setListOpen(false);
                    }}
                    variant="outlined"
                    fullWidth
                  >
                    Выбрать
                  </Button>
                )}
              </Grid>
            ))}
          </Grid>
        }
      />
      <ExtraParam
        editIcon={
          <IconButton
            edge="end"
            onClick={() => {
              setListOpen(true);
            }}
          >
            <Settings />
          </IconButton>
        }
        label={label}
        name={name}
        icon={icon}
      />
    </>
  );
};

export default Component;
