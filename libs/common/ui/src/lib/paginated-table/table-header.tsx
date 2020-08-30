import React, { PropsWithChildren, CSSProperties } from 'react';
import {
  makeStyles,
  createStyles,
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
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

export interface Cell<Keys extends string | symbol | number> {
  disablePadding: boolean;
  id: Keys;
  label: string;
  align: 'left' | 'right' | 'inherit' | 'center' | 'justify';
  enableSorting?: boolean;
  style?: CSSProperties;
}

export interface TableHeaderProps<Keys extends string | symbol | number> {
  onRequestSort: (property: Keys) => void;
  order: Order;
  orderBy: Keys;
  cells: Cell<Keys>[];
}

export type TableHeaderFunctionComponentType = <
  Keys extends string | symbol | number
>(
  props: PropsWithChildren<TableHeaderProps<Keys>>
) => JSX.Element;

export const TableHeader: TableHeaderFunctionComponentType = ({
  order,
  orderBy,
  cells,
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
        {cells.map((cell, index) => (
          <TableCell
            key={`table-cell-${cell.id}-${index}`}
            padding={cell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === cell.id ? order : false}
            align={cell.align}
            style={cell.style}
          >
            {cell.enableSorting ? (
              <TableSortLabel
                active={orderBy === cell.id}
                direction={orderBy === cell.id ? order : Order.asc}
                onClick={createSortHandler(cell.id)}
              >
                {cell.label}
                {orderBy === cell.id ? (
                  <span className={classes.visuallyHidden}>
                    {order === Order.desc
                      ? 'sorted descending'
                      : 'sorted ascending'}
                  </span>
                ) : null}
              </TableSortLabel>
            ) : (
              cell.label
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
