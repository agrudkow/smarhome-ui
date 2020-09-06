import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ConsumerFeatureResultsetsLogicProps {}

const StyledConsumerFeatureResultsetsLogic = styled.div`
  color: pink;
`;

export const ConsumerFeatureResultsetsLogic = (
  props: ConsumerFeatureResultsetsLogicProps
) => {
  return (
    <StyledConsumerFeatureResultsetsLogic>
      <h1>Welcome to consumer-feature-resultsets-logic!</h1>
    </StyledConsumerFeatureResultsetsLogic>
  );
};

export default ConsumerFeatureResultsetsLogic;
