import React, { FC } from 'react';
import { TablePagination } from '@material-ui/core';

export interface TableFooterProps {
  page: number;
  rowsPerPage: number;
  rowsPerPageOptions: number[];
  totalNumberOfRows: number;
  handleChangePage: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    page: number
  ) => void;
  handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TableFooter: FC<TableFooterProps> = ({
  page,
  rowsPerPage,
  rowsPerPageOptions,
  totalNumberOfRows,
  handleChangePage,
  handleChangeRowsPerPage,
}) => {
  return (
    <TablePagination
      rowsPerPageOptions={rowsPerPageOptions}
      component="div"
      count={totalNumberOfRows}
      rowsPerPage={rowsPerPage}
      page={page}
      onChangePage={handleChangePage}
      onChangeRowsPerPage={handleChangeRowsPerPage}
    />
  );
};

export default TableFooter;
