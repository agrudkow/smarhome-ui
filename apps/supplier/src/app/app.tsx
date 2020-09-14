import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { SupplierScreenUi } from '@smarthome/supplier/screen/ui';
import { BaseTheme } from './base-theme';
import { StylesProvider } from '@material-ui/core/styles';

const GlobalStyle = createGlobalStyle`
html, body {
  font-size: 14px;
  background-color: ${({ theme }) => theme.palette.primaryBackground};
  margin: 0;
  height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  ${({ theme }) => theme.breakpoints.tablet} {
    font-size: 16px;
  }
  ${({ theme }) => theme.breakpoints.desktop} {
    font-size: 16px;
  }
}

::-webkit-scrollbar {
    z-index: 1;
    width: 10px;
    background-color: ${() => BaseTheme.palette.secondaryBackground};
}
 
::-webkit-scrollbar-track {
  margin-top: ${() => BaseTheme.layout.headerHeight}px;
  background-color: ${() => BaseTheme.palette.primaryBackground};
}
 
::-webkit-scrollbar-thumb {
  margin-top: ${() => BaseTheme.layout.headerHeight}px;
  -webkit-border-radius: 10px;
  border-radius: 10px;
  background-color: ${() =>
    `rgba(${BaseTheme.palette.rgb.secondarySidebarContrastBackground},.3)`}; 
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3); 
  box-shadow: inset 0 0 6px rgba(0,0,0,.3); 
}

::-webkit-scrollbar-thumb:window-inactive {
  background-color: ${() =>
    `rgba(${BaseTheme.palette.rgb.secondarySidebarContrastBackground},.3)`}; 
}
`;

const StyledApp = styled.div`
  font-family: 'Quicksand', sans-serif;
`;

export const App = () => {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={BaseTheme}>
        <GlobalStyle />
        <StyledApp>
          <SupplierScreenUi />
        </StyledApp>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default App;
