import React, { PropsWithChildren, CSSProperties } from 'react';
import {
  makeStyles,
  createStyles,
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
  Size,
} from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
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

export enum Order {
  asc = 'asc',
  desc = 'desc',
}

export interface HeadCell<Keys extends string | symbol | number> {
  disablePadding: boolean;
  id: Keys;
  label: string;
  numeric: boolean;
  enableSorting?: boolean;
  style?: CSSProperties;
}

export interface TableHeaderProps<Keys extends string | symbol | number> {
  onRequestSort: (property: Keys) => void;
  order: Order;
  orderBy: Keys;
  headCells: HeadCell<Keys>[];
  rowsAlignment: Record<Keys, 'left' | 'right'>;
}

export type TableHeaderFunctionComponentType = <
  Keys extends string | symbol | number
>(
  props: PropsWithChildren<TableHeaderProps<Keys>>
) => JSX.Element;

export const TableHeader: TableHeaderFunctionComponentType = ({
  order,
  orderBy,
  headCells,
  rowsAlignment,
  onRequestSort,
}) => {
  const classes = useStyles();

  const createSortHandler = (
    property: Parameters<typeof onRequestSort>[0]
  ) => () => {
    onRequestSort(property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell, index) => (
          <TableCell
            key={`table-cell-${headCell.id}-${index}`}
            align={rowsAlignment[headCell.id]}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
            style={headCell.style}
          >
            {headCell.enableSorting ? (
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
            ) : (
              headCell.label
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
