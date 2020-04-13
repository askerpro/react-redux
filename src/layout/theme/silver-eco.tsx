import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import commonThemeProps from './commonThemeProps';

const lightThemeOptions: ThemeOptions = {
  ...commonThemeProps,
  palette: {
    primary: {
      main: '#303030',
    },
    secondary: {
      main: '#7dba00',
      contrastText: '#fff',
    },
    background: {
      default: '#dfe6b9',
    },
  },
};

const theme = responsiveFontSizes(createMuiTheme(lightThemeOptions));

export default theme;
