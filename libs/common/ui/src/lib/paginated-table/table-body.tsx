import React, { PropsWithChildren } from 'react';
import { TableBody as MUITableBody, TableCell } from '@material-ui/core';
import TableRow from '@material-ui/core/TableRow';
import { Cell } from './table-header';

export interface TableBodyProps<Data extends object> {
  rows: Data[];
  page: number;
  rowsPerPage: number;
  cells: Cell<keyof Data>[];
}

export type TableBodyFunctionComponentType = <T extends object>(
  props: PropsWithChildren<TableBodyProps<T>>
) => JSX.Element;

export const TableBody: TableBodyFunctionComponentType = ({
  rows,
  page,
  rowsPerPage,
  cells,
}) => {
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <MUITableBody>
      {rows
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row, index) => {
          return (
            <TableRow key={`table-row-${index}`}>
              {cells.map((cell, idx) => (
                <TableCell
                  key={`table-cell-${idx}`}
                  align={cell.align}
                  style={cell.style}
                >
                  {row[cell.id]}
                </TableCell>
              ))}
            </TableRow>
          );
        })}
      {emptyRows > 0 && (
        <TableRow key="empty-row" style={{ height: 58 * emptyRows }}>
          <TableCell colSpan={Object.keys(cells).length} />
        </TableRow>
      )}
    </MUITableBody>
  );
};

export default TableBody;
