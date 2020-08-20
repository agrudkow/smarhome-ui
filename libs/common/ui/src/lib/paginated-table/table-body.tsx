import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface TableBodyProps {}

const StyledTableBody = styled.div`
  color: pink;
`;

export const TableBody = (props: TableBodyProps) => {
  return (
    <StyledTableBody>
      <h1>Welcome to table-body!</h1>
    </StyledTableBody>
  );
};

export default TableBody;
