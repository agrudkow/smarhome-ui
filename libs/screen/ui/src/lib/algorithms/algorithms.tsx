import React, { FC } from 'react';
import { PaginatedTable, InfoHeader, SearchBar } from '@smarthome/common/ui';
import TestTable from './test-table';
import EnhancedTable from './test';

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
    <>
      <InfoHeader
        headerText={'List of avaliable algorithms'}
        infoMessageText={
          'This view allows you to search through avaliable algortihms provided by suppliers. You can dispaly all algorithms by leaving search input empty or you can fill it up and search algorithms by key words (provided text will be treated as separate tags by which algorithms will be searched). Additionaly you can sort result by name and rating.'
        }
      />
      <SearchBar />
      {/* <PaginatedTable<AlgorithmTableRowType> columns={columns} data={data} /> */}
      {/* <TestTable /> */}
      <EnhancedTable />
    </>
  );
};

export default Algorithms;
