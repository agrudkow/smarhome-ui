import { HeadCell as IHeadCell } from './table-header';
export type HeadCell<T extends string | symbol | number> = IHeadCell<T>;

export * from './paginated-table';
