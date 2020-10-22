import { Cell as ICell } from './table-header';
export type Cell<T extends string | symbol | number> = ICell<T>;

export * from './paginated-table';
export * from './cell-container';
