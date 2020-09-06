import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ScreenLogicProps {}

const StyledScreenLogic = styled.div`
  color: pink;
`;

export const ScreenLogic = (props: ScreenLogicProps) => {
  return (
    <StyledScreenLogic>
      <h1>Welcome to screen-logic component!</h1>
    </StyledScreenLogic>
  );
};

export default ScreenLogic;
