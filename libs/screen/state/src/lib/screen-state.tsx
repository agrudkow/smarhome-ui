import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ScreenStateProps {}

const StyledScreenState = styled.div`
  color: pink;
`;

export const ScreenState = (props: ScreenStateProps) => {
  return (
    <StyledScreenState>
      <h1>Welcome to screen-state component!</h1>
    </StyledScreenState>
  );
};

export default ScreenState;
