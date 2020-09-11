import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SupplierFeatureAlgorithmsUiProps {}

const StyledSupplierFeatureAlgorithmsUi = styled.div`
  color: pink;
`;

export const SupplierFeatureAlgorithmsUi = (
  props: SupplierFeatureAlgorithmsUiProps
) => {
  return (
    <StyledSupplierFeatureAlgorithmsUi>
      <h1>Welcome to supplier-feature-algorithms-ui!</h1>
    </StyledSupplierFeatureAlgorithmsUi>
  );
};

export default SupplierFeatureAlgorithmsUi;
