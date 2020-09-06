import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ConsumerFeatureDatasetsLogicProps {}

const StyledConsumerFeatureDatasetsLogic = styled.div`
  color: pink;
`;

export const ConsumerFeatureDatasetsLogic = (
  props: ConsumerFeatureDatasetsLogicProps
) => {
  return (
    <StyledConsumerFeatureDatasetsLogic>
      <h1>Welcome to consumer-feature-datasets-logic!</h1>
    </StyledConsumerFeatureDatasetsLogic>
  );
};

export default ConsumerFeatureDatasetsLogic;
