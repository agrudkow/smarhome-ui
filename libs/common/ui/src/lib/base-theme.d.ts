import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      primary: string;
      primaryBackground: string;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
      inPixels: {
        mobile: number;
        tablet: number;
        desktop: number;
      };
    };
  }
}
