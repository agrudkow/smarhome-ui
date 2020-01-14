import 'styled-components';
import { DefaultTheme } from 'styled-components';

export const BaseTheme: DefaultTheme = {
  palette: {
    primary: '#1BBDCE',
    primaryBackground: '#E3E2E1',
    primarySidebarBackground: '#DFE3D5',
    secondaryBackground: '#102128',
    secondarySidebarBackground: '#2E2C2D',
    secondarySidebarContrastBackground: '#4E4E4E',
    paragraph: '#000',
    heading: '#000'
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
  },
  layout: {
    sidebarWidth: {
      desktop: 220,
      mobile: 50
    }
  }
};
