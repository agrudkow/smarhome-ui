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
    heading: '#444',
    rgb: {
      primary: '27, 189, 206',
      primaryBackground: '227, 226, 225',
      primarySidebarBackground: '223, 227, 213',
      secondaryBackground: '16, 33, 40',
      secondarySidebarBackground: '46, 44, 45',
      secondarySidebarContrastBackground: '78, 78, 78',
      paragraph: '0, 0, 0',
      heading: '0, 0, 0',
    },
  },
  breakpoints: {
    mobile: '@media (min-width: 480px)',
    tablet: '@media (min-width: 769px)',
    desktop: '@media (min-width: 1024px)',
    inPixels: {
      mobile: 480,
      tablet: 769,
      desktop: 1024,
    },
  },
  layout: {
    sidebarWidth: {
      desktop: 220,
      mobile: 60,
    },
    headerHeight: 40,
  },
};
