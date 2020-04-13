import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import * as E from './elements';
import colorsData from './data';

interface State {
  activeColor: number;
}

class ColorPicker extends React.Component<{}, State> {
  constructor(props: typeof Object) {
    super(props);
    this.state = {
      activeColor: 0,
    };
  }

  activateColor = (i: number) => {
    this.setState({
      activeColor: i,
    });
  };

  render() {
    const { activeColor } = this.state;
    return (
      <Grid container spacing={5} wrap="wrap">
        <Grid item md={6} xs={12}>
          <E.ColorPickerImageWrapper>
            {colorsData.map((data, i) => (
              <E.ColorPickerImage
                active={activeColor === i}
                srcSet={data.img.srcSet}
                key={data.name}
              />
            ))}
          </E.ColorPickerImageWrapper>
        </Grid>
        <Grid item md={6} xs={12}>
          <Grid container spacing={2}>
            {colorsData.map((data, i) => (
              <Grid item xs={4} key={data.name}>
                <E.PickerItem
                  title={data.alias}
                  active={activeColor === i}
                  onClick={() => {
                    this.activateColor(i);
                  }}
                  src={data.icon.src}
                />
                <Typography variant="body2" color="textSecondary">
                  {data.alias}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default ColorPicker;
