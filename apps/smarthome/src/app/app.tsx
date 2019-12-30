import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { ScreenUi } from '@smarthome/screen/ui';
import { BaseTheme } from './base-theme';

const GlobalStyle = createGlobalStyle`
html, body {
    font-size: 14px;
    background-color: ${({ theme }) => theme.palette.primaryBackground};
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    ${({ theme }) => theme.breakpoints.desktop} {
      font-size: 16px;
    }
  }
`;

const StyledApp = styled.div`
  font-family: 'Quicksand', sans-serif;
`;

export const App = () => {
  return (
    <ThemeProvider theme={BaseTheme}>
      <GlobalStyle />
      <StyledApp>
        <ScreenUi />
      </StyledApp>
    </ThemeProvider>
  );
};

export default App;
