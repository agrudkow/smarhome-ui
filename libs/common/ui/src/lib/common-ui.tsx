import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface CommonUiProps {}

const StyledCommonUi = styled.div`
  color: pink;
`;

export const CommonUi = (props: CommonUiProps) => {
  return (
    <StyledCommonUi>
      <h1>Welcome to common-ui component!</h1>
    </StyledCommonUi>
  );
};

export default CommonUi;
