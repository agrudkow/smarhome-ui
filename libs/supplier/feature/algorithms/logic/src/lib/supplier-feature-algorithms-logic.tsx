import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SupplierFeatureAlgorithmsLogicProps {}

const StyledSupplierFeatureAlgorithmsLogic = styled.div`
  color: pink;
`;

export const SupplierFeatureAlgorithmsLogic = (
  props: SupplierFeatureAlgorithmsLogicProps
) => {
  return (
    <StyledSupplierFeatureAlgorithmsLogic>
      <h1>Welcome to supplier-feature-algorithms-logic!</h1>
    </StyledSupplierFeatureAlgorithmsLogic>
  );
};

export default SupplierFeatureAlgorithmsLogic;
