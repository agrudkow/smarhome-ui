import 'styled-components';
import { DefaultTheme } from 'styled-components';

export const BaseTheme: DefaultTheme = {
  palette: {
    primary: '#22aaff',
    primaryBackground: '#fff'
  },
  breakpoints: {
    mobile: '@media (min-width: 480px)',
    tablet: '@media (min-width: 769px)',
    desktop: '@media (min-width: 1024px)',
    inPixels: {
      mobile: 480,
      tablet: 769,
      desktop: 1024
    }
  }
};
