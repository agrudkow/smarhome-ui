import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      primary: string;
      primaryBackground: string;
      primarySidebarBackground: string;
      secondaryBackground: string;
      secondarySidebarBackground: string;
      secondarySidebarContrastBackground: string;
      paragraph: string;
      heading: string;
      containerBackgorund: string;
      rgb: {
        primary: string;
        primaryBackground: string;
        primarySidebarBackground: string;
        secondaryBackground: string;
        secondarySidebarBackground: string;
        secondarySidebarContrastBackground: string;
        paragraph: string;
        heading: string;
        containerBackgorund: string;
      };
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
      mobileDF: string;
      tabletDF: string;
      desktopDF: string;
      inPixels: {
        mobile: number;
        tablet: number;
        desktop: number;
      };
    };
    layout: {
      sidebarWidth: {
        mobile: number;
        desktop: number;
      };
      headerHeight: number;
    };
  }
}
