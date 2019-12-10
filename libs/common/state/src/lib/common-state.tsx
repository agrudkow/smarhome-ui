import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface CommonStateProps {}

const StyledCommonState = styled.div`
  color: pink;
`;

export const CommonState = (props: CommonStateProps) => {
  return (
    <StyledCommonState>
      <h1>Welcome to common-state component!</h1>
    </StyledCommonState>
  );
};

export default CommonState;
