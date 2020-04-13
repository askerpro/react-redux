import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import commonThemeProps from './commonThemeProps';

const themeOptions: ThemeOptions = {
  ...commonThemeProps,
  palette: {
    primary: {
      main: '#ff0000',
      contrastText: '#fff',
    },
    secondary: {
      main: '#b52929',
      contrastText: '#fff',
    },
    type: 'dark',
  },
};

const theme = responsiveFontSizes(createMuiTheme(themeOptions));

export default theme;
