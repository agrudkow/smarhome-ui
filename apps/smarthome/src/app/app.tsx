import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  font-family: 'Quicksand', sans-serif;
`;

export const StyledApp = styled.div``;

export const App = () => {
  return (
    <StyledApp>
      <GlobalStyle />
      Hello world
    </StyledApp>
  );
};

export default App;

// TODO: update nrwl to support ts 3.7
