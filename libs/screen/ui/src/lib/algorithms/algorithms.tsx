import React, { FC } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { P, OvalBoxContainer } from '@smarthome/common/ui';
import TestTable from './test-table';

/* eslint-disable-next-line */
export interface AlgorithmsProps {}

const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.palette.primary};
  color: ${({ theme }) => theme.palette.primarySidebarBackground};
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 7px 14px;
  &:hover {
    background-color: #5469d4;
  }
`;

export const Algorithms: FC<AlgorithmsProps> = () => {
  return (
    <>
      <h1>Welcome to algorithms!</h1>
      <Button variant="contained" color="primary">
        <P>Button</P>
      </Button>
      <br />
      <br />
      <StyledButton>Styled Button</StyledButton>
      <br />
      {/* <OvalBoxContainer> */}
      <TestTable />
      {/* </OvalBoxContainer> */}
    </>
  );
};

export default Algorithms;
