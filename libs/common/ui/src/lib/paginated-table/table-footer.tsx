import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface TableFooterProps {}

const StyledTableFooter = styled.div`
  color: pink;
`;

export const TableFooter = (props: TableFooterProps) => {
  return (
    <StyledTableFooter>
      <h1>Welcome to table-footer!</h1>
    </StyledTableFooter>
  );
};

export default TableFooter;
