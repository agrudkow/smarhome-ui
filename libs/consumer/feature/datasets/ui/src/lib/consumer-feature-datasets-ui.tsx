import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ConsumerFeatureDatasetsUiProps {}

const StyledConsumerFeatureDatasetsUi = styled.div`
  color: pink;
`;

export const ConsumerFeatureDatasetsUi = (
  props: ConsumerFeatureDatasetsUiProps
) => {
  return (
    <StyledConsumerFeatureDatasetsUi>
      <h1>Welcome to consumer-feature-datasets-ui!</h1>
    </StyledConsumerFeatureDatasetsUi>
  );
};

export default ConsumerFeatureDatasetsUi;
