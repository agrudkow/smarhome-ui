import React, { PropsWithChildren } from 'react';
import { TableBody as MUITableBody, TableCell } from '@material-ui/core';
import TableRow from '@material-ui/core/TableRow';

export interface TableBodyProps<Data extends object> {
  rows: Data[];
  rowsAlignment: Record<keyof Data, 'left' | 'right'>;
  page: number;
  rowsPerPage: number;
  headCellIds: Array<keyof Data>;
}

export type TableBodyFunctionComponentType = <T extends object>(
  props: PropsWithChildren<TableBodyProps<T>>
) => JSX.Element;

export const TableBody: TableBodyFunctionComponentType = ({
  rows,
  page,
  rowsPerPage,
  rowsAlignment,
  headCellIds,
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
              {headCellIds.map((property, idx) => (
                <TableCell
                  key={`table-cell-${idx}`}
                  align={rowsAlignment[property]}
                >
                  {row[property]}
                </TableCell>
              ))}
            </TableRow>
          );
        })}
      {emptyRows > 0 && (
        <TableRow key="empty-row" style={{ height: 53 * emptyRows }}>
          <TableCell colSpan={Object.keys(rowsAlignment).length} />
        </TableRow>
      )}
    </MUITableBody>
  );
};

export default TableBody;
