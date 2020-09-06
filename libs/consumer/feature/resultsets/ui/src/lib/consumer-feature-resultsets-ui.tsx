import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ConsumerFeatureResultsetsUiProps {}

const StyledConsumerFeatureResultsetsUi = styled.div`
  color: pink;
`;

export const ConsumerFeatureResultsetsUi = (
  props: ConsumerFeatureResultsetsUiProps
) => {
  return (
    <StyledConsumerFeatureResultsetsUi>
      <h1>Welcome to consumer-feature-resultsets-ui!</h1>
    </StyledConsumerFeatureResultsetsUi>
  );
};

export default ConsumerFeatureResultsetsUi;
