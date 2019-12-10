import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface CommonLogicProps {}

const StyledCommonLogic = styled.div`
  color: pink;
`;

export const CommonLogic = (props: CommonLogicProps) => {
  return (
    <StyledCommonLogic>
      <h1>Welcome to common-logic component!</h1>
    </StyledCommonLogic>
  );
};

export default CommonLogic;
