import React, { PropsWithChildren } from 'react';
import {
  makeStyles,
  createStyles,
  Theme,
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
} from '@material-ui/core';
import { Order } from './paginated-table';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    paper: {
      width: '100%',
      marginBottom: theme.spacing(2),
    },
    table: {
      minWidth: 750,
    },
    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1,
    },
  })
);

interface HeadCell<Data extends Record<string, string | number>> {
  disablePadding: boolean;
  id: Extract<keyof Data, string>;
  label: string;
  numeric: boolean;
}

export interface TableHeaderProps<
  Data extends Record<string, string | number>
> {
  classes: ReturnType<typeof useStyles>;
  numSelected: number;
  onRequestSort: (property: keyof Data) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
  headCells: HeadCell<Data>[];
}

export type TableHeaderFunctionComponentType = <
  Data extends Record<string, string | number>
>(
  props: PropsWithChildren<TableHeaderProps<Data>>
) => JSX.Element;

export const TableHeader: TableHeaderFunctionComponentType = ({
  classes,
  order,
  orderBy,
  headCells,
  onRequestSort,
}) => {
  const createSortHandler = (
    property: Parameters<typeof onRequestSort>[0]
  ) => () => {
    onRequestSort(property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : Order.asc}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === Order.desc
                    ? 'sorted descending'
                    : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
