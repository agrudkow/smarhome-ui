import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ConsumerFeatureDashboardLogicProps {}

const StyledConsumerFeatureDashboardLogic = styled.div`
  color: pink;
`;

export const ConsumerFeatureDashboardLogic = (
  props: ConsumerFeatureDashboardLogicProps
) => {
  return (
    <StyledConsumerFeatureDashboardLogic>
      <h1>Welcome to consumer-feature-dashboard-logic!</h1>
    </StyledConsumerFeatureDashboardLogic>
  );
};

export default ConsumerFeatureDashboardLogic;
