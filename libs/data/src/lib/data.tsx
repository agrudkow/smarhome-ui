import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface DataProps {}

const StyledData = styled.div`
  color: pink;
`;

export const Data = (props: DataProps) => {
  return (
    <StyledData>
      <h1>Welcome to data component!</h1>
    </StyledData>
  );
};

export default Data;
