import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ConsumerFeatureDashboardUiProps {}

const StyledConsumerFeatureDashboardUi = styled.div`
  color: pink;
`;

export const ConsumerFeatureDashboardUi = (
  props: ConsumerFeatureDashboardUiProps
) => {
  return (
    <StyledConsumerFeatureDashboardUi>
      <h1>Welcome to consumer-feature-dashboard-ui!</h1>
    </StyledConsumerFeatureDashboardUi>
  );
};

export default ConsumerFeatureDashboardUi;
