import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ConsumerFeatureUserUiProps {}

const StyledConsumerFeatureUserUi = styled.div`
  color: pink;
`;

export const ConsumerFeatureUserUi = (props: ConsumerFeatureUserUiProps) => {
  return (
    <StyledConsumerFeatureUserUi>
      <h1>Welcome to consumer-feature-user-ui!</h1>
    </StyledConsumerFeatureUserUi>
  );
};

export default ConsumerFeatureUserUi;
