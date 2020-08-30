import React, {
  useState,
  ChangeEvent,
  Dispatch,
  SetStateAction,
  ReactNode,
} from 'react';
import styled from 'styled-components';
import {
  Table,
  makeStyles,
  Theme,
  createStyles,
  Paper,
} from '@material-ui/core';
import TableHeader, { Cell, Order } from './table-header';
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
    border-radius: ${({
      theme: {
        layout: { borderRadius },
      },
    }) => borderRadius}px;
  }
`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      width: '100%',
      marginBottom: theme.spacing(2),
    },
    table: {
      minWidth: 350,
      tableLayout: 'fixed',
    },
  })
);

const rowsPerPageOptions = [10, 25, 50];

interface PaginatedTableProps<
  Data extends { [index in string]: string | number | ReactNode | undefined }
> {
  cells: Cell<keyof Data>[];
  data: Data[];
  orderBy: keyof Data;
  setOrderBy: Dispatch<SetStateAction<keyof Data>>;
  bodyPlaceholderText?: string;
}

export type PaginatedTableFunctionComponentType = <
  T extends { [index in string]: string | number | ReactNode | undefined }
>(
  props: PaginatedTableProps<T>
) => JSX.Element;

export const PaginatedTable: PaginatedTableFunctionComponentType = ({
  cells,
  data,
  orderBy,
  setOrderBy,
  bodyPlaceholderText = '',
}) => {
  type Data = typeof data[0];

  const classes = useStyles();
  const [order, setOrder] = useState<Order>(Order.asc);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

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
            cells={cells}
          />
          <TableBody<Data>
            rows={data}
            rowsPerPage={rowsPerPage}
            page={page}
            cells={cells}
            showBodyPlaceholder={data.length === 0}
            bodyPlaceholderText={bodyPlaceholderText}
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
