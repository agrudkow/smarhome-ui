import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface TablesProps {}

const StyledTables = styled.div`
  color: pink;
`;

export const Tables = (props: TablesProps) => {
  return (
    <StyledTables>
      <h1>Welcome to tables!</h1>
    </StyledTables>
  );
};

export default Tables;
