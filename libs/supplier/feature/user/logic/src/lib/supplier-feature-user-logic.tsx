import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SupplierFeatureUserLogicProps {}

const StyledSupplierFeatureUserLogic = styled.div`
  color: pink;
`;

export const SupplierFeatureUserLogic = (
  props: SupplierFeatureUserLogicProps
) => {
  return (
    <StyledSupplierFeatureUserLogic>
      <h1>Welcome to supplier-feature-user-logic!</h1>
    </StyledSupplierFeatureUserLogic>
  );
};

export default SupplierFeatureUserLogic;
