import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ConsumerFeatureUserLogicProps {}

const StyledConsumerFeatureUserLogic = styled.div`
  color: pink;
`;

export const ConsumerFeatureUserLogic = (
  props: ConsumerFeatureUserLogicProps
) => {
  return (
    <StyledConsumerFeatureUserLogic>
      <h1>Welcome to consumer-feature-user-logic!</h1>
    </StyledConsumerFeatureUserLogic>
  );
};

export default ConsumerFeatureUserLogic;
