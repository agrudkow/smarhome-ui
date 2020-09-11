import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SupplierFeatureUserUiProps {}

const StyledSupplierFeatureUserUi = styled.div`
  color: pink;
`;

export const SupplierFeatureUserUi = (props: SupplierFeatureUserUiProps) => {
  return (
    <StyledSupplierFeatureUserUi>
      <h1>Welcome to supplier-feature-user-ui!</h1>
    </StyledSupplierFeatureUserUi>
  );
};

export default SupplierFeatureUserUi;
