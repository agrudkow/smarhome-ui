import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SupplierFeatureDashboardLogicProps {}

const StyledSupplierFeatureDashboardLogic = styled.div`
  color: pink;
`;

export const SupplierFeatureDashboardLogic = (
  props: SupplierFeatureDashboardLogicProps
) => {
  return (
    <StyledSupplierFeatureDashboardLogic>
      <h1>Welcome to supplier-feature-dashboard-logic!</h1>
    </StyledSupplierFeatureDashboardLogic>
  );
};

export default SupplierFeatureDashboardLogic;
