import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ConsumerFeatureAlgorithmsUiProps {}

const StyledConsumerFeatureAlgorithmsUi = styled.div`
  color: pink;
`;

export const ConsumerFeatureAlgorithmsUi = (
  props: ConsumerFeatureAlgorithmsUiProps
) => {
  return (
    <StyledConsumerFeatureAlgorithmsUi>
      <h1>Welcome to consumer-feature-algorithms-ui!</h1>
    </StyledConsumerFeatureAlgorithmsUi>
  );
};

export default ConsumerFeatureAlgorithmsUi;
