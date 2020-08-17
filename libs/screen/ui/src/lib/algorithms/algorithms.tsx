import React, { FC } from 'react';
import { PaginatedTable } from '@smarthome/common/ui';

interface AlgorithmTableRowType {
  name: string;
  description: string;
  rating?: number;
}

const columns = [
  {
    title: 'Name',
    field: 'name',
  },
  {
    title: 'Description',
    field: 'description',
  },
  {
    title: 'Rating',
    field: 'rating',
  },
];

const data: AlgorithmTableRowType[] = [
  {
    name: 'Algorithm name 1',
    description: 'Test description',
    rating: 4.3,
  },
  {
    name: 'Algorithm name 2',
    description: 'Test description',
    rating: 3.9,
  },
  {
    name: 'Algorithm name 3',
    description: 'Test description',
    rating: 1.2,
  },
  {
    name: 'Algorithm name 3',
    description: 'Test description',
    rating: 1.2,
  },
  {
    name: 'Algorithm name 3',
    description: 'Test description',
    rating: 1.2,
  },
  {
    name: 'Algorithm name 3',
    description: 'Test description',
    rating: 1.2,
  },
  {
    name: 'Algorithm name 3',
    description: 'Test description',
    rating: 1.2,
  },
  {
    name: 'Algorithm name 3',
    description: 'Test description',
    rating: 1.2,
  },
  {
    name: 'Algorithm name 3',
    description: 'Test description',
    rating: 1.2,
  },
  {
    name: 'Algorithm name 3',
    description: 'Test description',
    rating: 1.2,
  },
  {
    name: 'Algorithm name 3',
    description: 'Test description',
    rating: 1.2,
  },
  {
    name: 'Algorithm name 3',
    description: 'Test description',
    rating: 1.2,
  },
  {
    name: 'Algorithm name 3',
    description: 'Test description',
    rating: 1.2,
  },
  {
    name: 'Algorithm name 3',
    description: 'Test description',
    // rating: 1.2,
  },
];

export const Algorithms: FC = () => {
  return (
    <PaginatedTable<AlgorithmTableRowType> columns={columns} data={data} />
  );
};

export default Algorithms;
