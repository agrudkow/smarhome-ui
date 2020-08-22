import React, { FC, useState, ReactNode } from 'react';
import {
  PaginatedTable,
  InfoHeader,
  SearchBar,
  HeadCell,
  BaseButton,
} from '@smarthome/common/ui';

type Data = {
  name: string;
  description: string;
  rating?: number;
  button?: ReactNode;
};

const headCells: HeadCell<keyof Data>[] = [
  {
    id: 'name',
    label: 'Name',
    numeric: false,
    disablePadding: false,
    enableSorting: true,
  },
  {
    id: 'description',
    label: 'Description',
    numeric: false,
    disablePadding: false,
  },
  {
    id: 'rating',
    label: 'Rating',
    numeric: true,
    disablePadding: false,
    enableSorting: true,
  },
  {
    id: 'button',
    label: '',
    numeric: false,
    disablePadding: false,
    style: { width: '100px' },
  },
];

const data: Data[] = [
  {
    name: 'Algorithm 1',
    description: 'Test description',
    rating: 3.4,
    button: (
      <BaseButton
        onClick={() => console.log('Click me boiiii')}
        style={{
          width: '70px',
          height: '30px',
          fontSize: '12px',
          whiteSpace: 'nowrap',
        }}
      >
        More
      </BaseButton>
    ),
  },
  {
    name: 'Algorithm 1',
    description: 'Test description',
    rating: 3.4,
  },
  {
    name: 'Algorithm 1',
    description: 'Test description',
    rating: 3.4,
  },
  {
    name: 'Algorithm 1',
    description: 'Test description',
    rating: 3.4,
  },
  {
    name: 'Algorithm 1',
    description: 'Test description',
    rating: 3.4,
  },
  {
    name: 'Algorithm 1',
    description: 'Test description',
    rating: 3.4,
  },
  {
    name: 'Algorithm 1',
    description: 'Test description',
    rating: 3.4,
  },
  {
    name: 'Algorithm 1',
    description: 'Test description',
    rating: 3.4,
  },
  {
    name: 'Algorithm 1',
    description: 'Test description',
    rating: 3.4,
  },
  {
    name: 'Algorithm 1',
    description: 'Test description',
    rating: 3.4,
  },
  {
    name: 'Algorithm 1',
    description: 'Test description',
    rating: 3.4,
  },
  {
    name: 'Algorithm 1',
    description: 'Test description',
    rating: 3.4,
  },
  {
    name: 'Algorithm 1',
    description: 'Test description',
    rating: 3.4,
  },
  {
    name: 'Algorithm 1',
    description: 'Test description',
    rating: 3.4,
  },
  {
    name: 'Algorithm 1',
    description: 'Test description',
    rating: 3.4,
  },
  {
    name: 'Algorithm 1',
    description: 'Test description',
    rating: 3.4,
  },
  {
    name: 'Algorithm 1',
    description: 'Test description',
    rating: 3.4,
  },
  {
    name: 'Algorithm 1',
    description: 'Test description',
    rating: 3.4,
  },
  {
    name: 'Algorithm 1',
    description: 'Test description',
    rating: 3.4,
  },
  {
    name: 'Algorithm 1',
    description: 'Test description',
    rating: 3.4,
  },
  {
    name: 'Algorithm 1',
    description: 'Test description',
    rating: 3.4,
  },
  {
    name: 'Algorithm 1',
    description: 'Test description',
    rating: 3.4,
  },
  {
    name: 'Algorithm 1',
    description: 'Test description',
    rating: 3.4,
  },
  {
    name: 'Algorithm 1',
    description: 'Test description',
    rating: 3.4,
  },
  {
    name: 'Algorithm 1',
    description: 'Test description',
    rating: 3.4,
  },
  {
    name: 'Algorithm 1',
    description: 'Test description',
    rating: 3.4,
  },
  {
    name: 'Algorithm 1',
    description: 'Test description',
    rating: 3.4,
  },
  {
    name: 'Algorithm 1',
    description: 'Test description',
    rating: 3.4,
  },
  {
    name: 'Algorithm 1',
    description: 'Test description',
    rating: 3.4,
  },
  {
    name: 'Algorithm 1',
    description: 'Test description',
    rating: 3.4,
  },
  {
    name: 'Algorithm 1',
    description: 'Test description',
    rating: 3.4,
  },
  {
    name: 'Algorithm 1',
    description: 'Test description',
    rating: 3.4,
  },
  {
    name: 'Algorithm 1',
    description: 'Test description',
    rating: 3.4,
  },
  {
    name: 'Algorithm 1',
    description: 'Test description',
    rating: 3.4,
  },
  {
    name: 'Algorithm 1',
    description: 'Test description',
    rating: 3.4,
  },
  {
    name: 'Algorithm 1',
    description: 'Test description',
    rating: 3.4,
  },
  {
    name: 'Algorithm 1',
    description: 'Test description',
    rating: 3.4,
  },
  {
    name: 'Algorithm 1',
    description: 'Test description',
    rating: 3.4,
  },
];

const rowsAlignment: Record<keyof Data, 'left' | 'right'> = {
  name: 'left',
  description: 'left',
  rating: 'right',
  button: 'right',
};

export const Algorithms: FC = () => {
  const [orderBy, setOrderBy] = useState<keyof Data>('rating');

  return (
    <>
      <InfoHeader
        headerText={'List of avaliable algorithms'}
        infoMessageText={
          'This view allows you to search through avaliable algortihms provided by suppliers. You can dispaly all algorithms by leaving search input empty or you can fill it up and search algorithms by key words (provided text will be treated as separate tags by which algorithms will be searched). Additionaly you can sort result by name and rating.'
        }
      />
      <SearchBar />
      <PaginatedTable<Data>
        data={data}
        headCells={headCells}
        orderBy={orderBy}
        setOrderBy={setOrderBy}
        rowsAlignment={rowsAlignment}
      />
    </>
  );
};

export default Algorithms;
