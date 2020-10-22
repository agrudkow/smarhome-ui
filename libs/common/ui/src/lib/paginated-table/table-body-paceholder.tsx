import React, { FC } from 'react';
import styled from 'styled-components';
import { TableRow, TableCell } from '@material-ui/core';
import { H3 } from '../headings';

export interface TableDataPaceholderProps {
  text: string;
  height: number;
  colSpan: number;
}

const Placeholder = styled.div<{ height: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${({ height }) => height}px;
  opacity: 0.25;
  text-align: center;
`;

export const TableDataPaceholder: FC<TableDataPaceholderProps> = ({
  text,
  height,
  colSpan,
}) => {
  return (
    <TableRow key="table-body-placeholder" style={{ height }}>
      <TableCell colSpan={colSpan}>
        <Placeholder height={height}>
          <H3>{text}</H3>
        </Placeholder>
      </TableCell>
    </TableRow>
  );
};

export default TableDataPaceholder;
