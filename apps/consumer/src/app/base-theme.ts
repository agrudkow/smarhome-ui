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
    paragraph: '#555',
    heading: '#444',
    containerBackgorund: '#fff',
    error: '#ff0000',
    success: '#00c400',
    plot: '#1BBDCE',
    rgb: {
      primary: '27, 189, 206',
      primaryBackground: '227, 226, 225',
      primarySidebarBackground: '223, 227, 213',
      secondaryBackground: '16, 33, 40',
      secondarySidebarBackground: '46, 44, 45',
      secondarySidebarContrastBackground: '78, 78, 78',
      paragraph: '0, 0, 0',
      heading: '0, 0, 0',
      containerBackgorund: '255, 255, 255',
      error: '255, 0, 0',
      success: '0, 224, 0',
      plot: '27, 189, 206',
    },
  },
  breakpoints: {
    mobile: '@media (min-width: 480px)',
    tablet: '@media (min-width: 769px)',
    desktop: '@media (min-width: 1024px)',
    mobileDF: '@media (max-width: 480px)',
    tabletDF: '@media (max-width: 769px)',
    desktopDF: '@media (max-width: 10000000px)',
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
    borderRadius: 6,
  },
};
