import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ScreenUiProps {}

const StyledScreenUi = styled.div`
  color: pink;
`;

export const ScreenUi = (props: ScreenUiProps) => {
  return (
    <StyledScreenUi>
      <h1>Welcome to screen-ui component!</h1>
    </StyledScreenUi>
  );
};

export default ScreenUi;
