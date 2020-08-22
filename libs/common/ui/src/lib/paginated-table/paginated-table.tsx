import React, {
  PropsWithChildren,
  useState,
  ChangeEvent,
  Dispatch,
  SetStateAction,
  ReactNode,
  useMemo,
} from 'react';
import styled from 'styled-components';
import {
  Table,
  makeStyles,
  Theme,
  createStyles,
  Paper,
} from '@material-ui/core';
import TableHeader, { HeadCell, Order } from './table-header';
import TableBody from './table-body';
import TableFooter from './table-footer';

const StyledPaginatedTable = styled.div`
  & .MuiPaper-root {
    padding: 5px 0;
    background-color: ${({
      theme: {
        palette: {
          rgb: { containerBackgorund },
        },
      },
    }) => `rgba(${containerBackgorund}, 0.75)`};
  }

  & .MuiPaper-rounded {
    border-radius: 8px;
  }
`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      width: '100%',
      marginBottom: theme.spacing(2),
    },
    table: {
      minWidth: 750,
    },
  })
);

const rowsPerPageOptions = [10, 25, 50];

interface PaginatedTableProps<
  Data extends { [index in string]: string | number | ReactNode | undefined }
> {
  headCells: HeadCell<keyof Data>[];
  data: Data[];
  orderBy: keyof Data;
  setOrderBy: Dispatch<SetStateAction<keyof Data>>;
  rowsAlignment: Record<keyof Data, 'left' | 'right'>;
}

export type PaginatedTableFunctionComponentType = <
  T extends { [index in string]: string | number | ReactNode | undefined }
>(
  props: PropsWithChildren<PaginatedTableProps<T>>
) => JSX.Element;

export const PaginatedTable: PaginatedTableFunctionComponentType = ({
  data,
  headCells,
  orderBy,
  setOrderBy,
  rowsAlignment,
}) => {
  type Data = typeof data[0];

  const classes = useStyles();
  const [order, setOrder] = useState<Order>(Order.asc);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const headCellIds = useMemo(() => headCells.map((headCell) => headCell.id), [
    headCells,
  ]);

  const handleRequestSort = (property: keyof Data) => {
    const isAsc = orderBy === property && order === Order.asc;
    setOrder(isAsc ? Order.desc : Order.asc);
    setOrderBy(property);
    console.log('Sort table!!!! -> TODO');
  };

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <StyledPaginatedTable>
      <Paper className={classes.paper}>
        <Table className={classes.table} size={'medium'} aria-label="table">
          <TableHeader<keyof Data>
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
            headCells={headCells}
            rowsAlignment={rowsAlignment}
          />
          <TableBody<Data>
            rows={data}
            rowsAlignment={rowsAlignment}
            rowsPerPage={rowsPerPage}
            page={page}
            headCellIds={headCellIds}
          />
        </Table>
        <TableFooter
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={rowsPerPageOptions}
          totalNumberOfRows={data.length}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </StyledPaginatedTable>
  );
};

export default PaginatedTable;
