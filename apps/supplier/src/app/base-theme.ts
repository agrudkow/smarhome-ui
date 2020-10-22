import 'styled-components';
import { DefaultTheme } from 'styled-components';

export const BaseTheme: DefaultTheme = {
  palette: {
    primary: '#EEBE47',
    primaryBackground: '#F0F6F8',
    primarySidebarBackground: '#FBFAFC',
    secondaryBackground: '#234367',
    secondarySidebarBackground: '#697B8A',
    secondarySidebarContrastBackground: '#6690A4',
    paragraph: '#555',
    heading: '#444',
    containerBackgorund: '#fff',
    error: '#ff0000',
    success: '#00c400',
    plot: '#EEBE47',
    rgb: {
      primary: '238, 190, 71',
      primaryBackground: '240, 246, 248',
      primarySidebarBackground: '251, 250, 252',
      secondaryBackground: '35, 67, 103',
      secondarySidebarBackground: '105, 123, 138',
      secondarySidebarContrastBackground: '102, 144, 164',
      paragraph: '0, 0, 0',
      heading: '0, 0, 0',
      containerBackgorund: '255, 255, 255',
      error: '255, 0, 0',
      success: '0, 224, 0',
      plot: '238, 190, 71',
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
