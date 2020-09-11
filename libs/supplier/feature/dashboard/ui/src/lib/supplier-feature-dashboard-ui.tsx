import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SupplierFeatureDashboardUiProps {}

const StyledSupplierFeatureDashboardUi = styled.div`
  color: pink;
`;

export const SupplierFeatureDashboardUi = (
  props: SupplierFeatureDashboardUiProps
) => {
  return (
    <StyledSupplierFeatureDashboardUi>
      <h1>Welcome to supplier-feature-dashboard-ui!</h1>
    </StyledSupplierFeatureDashboardUi>
  );
};

export default SupplierFeatureDashboardUi;
