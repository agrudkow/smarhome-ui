import React, { FC, useState, ReactNode } from 'react';
import {
  InfoHeader,
  SearchBar,
  PaginatedTable,
  Cell,
  BaseButton,
} from '@smarthome/common/ui';

type Data = {
  name: string;
  description: string;
  button?: ReactNode;
};

const cells: Cell<keyof Data>[] = [
  {
    id: 'name',
    label: 'Name',
    align: 'left',
    disablePadding: false,
    enableSorting: true,
  },
  {
    id: 'description',
    label: 'Description',
    align: 'left',
    disablePadding: false,
  },
  {
    id: 'button',
    label: '',
    align: 'right',
    disablePadding: true,
    style: { width: '100px' },
  },
];

const data: Data[] = [
  {
    name: 'Datasate 1',
    description: 'Test description',
    button: (
      <BaseButton
        onClick={() => console.log('Click me boiiii')}
        style={{
          width: '70px',
          height: '25px',
          fontSize: '12px',
          whiteSpace: 'nowrap',
        }}
      >
        More
      </BaseButton>
    ),
  },
  {
    name: 'Datasate 1',
    description:
      'Test description This view allows you to search through avaliable algortihms provided by suppliers. You can dispaly all algorithms by leaving search input empty or you can fill it up and search algorithms by key words (provided text will be treated as separate tags by which algorithms will be searched). Additionaly you can sort result by name and rating.',
    button: (
      <BaseButton
        onClick={() => console.log('Click me boiiii')}
        style={{
          width: '70px',
          height: '25px',
          fontSize: '12px',
          whiteSpace: 'nowrap',
        }}
      >
        More
      </BaseButton>
    ),
  },
  {
    name: 'Datasate 1',
    description: 'Test description',
    button: (
      <BaseButton
        onClick={() => console.log('Click me boiiii')}
        style={{
          width: '70px',
          height: '25px',
          fontSize: '12px',
          whiteSpace: 'nowrap',
        }}
      >
        More
      </BaseButton>
    ),
  },
  {
    name: 'Datasate 1',
    description: 'Test description',
    button: (
      <BaseButton
        onClick={() => console.log('Click me boiiii')}
        style={{
          width: '70px',
          height: '25px',
          fontSize: '12px',
          whiteSpace: 'nowrap',
        }}
      >
        More
      </BaseButton>
    ),
  },
  {
    name: 'Datasate 1',
    description: 'Test description',
    button: (
      <BaseButton
        onClick={() => console.log('Click me boiiii')}
        style={{
          width: '70px',
          height: '25px',
          fontSize: '12px',
          whiteSpace: 'nowrap',
        }}
      >
        More
      </BaseButton>
    ),
  },
  {
    name: 'Datasate 1',
    description: 'Test description',
    button: (
      <BaseButton
        onClick={() => console.log('Click me boiiii')}
        style={{
          width: '70px',
          height: '25px',
          fontSize: '12px',
          whiteSpace: 'nowrap',
        }}
      >
        More
      </BaseButton>
    ),
  },
  {
    name: 'Datasate 1',
    description: 'Test description',
    button: (
      <BaseButton
        onClick={() => console.log('Click me boiiii')}
        style={{
          width: '70px',
          height: '25px',
          fontSize: '12px',
          whiteSpace: 'nowrap',
        }}
      >
        More
      </BaseButton>
    ),
  },
  {
    name: 'Datasate 1',
    description: 'Test description',
    button: (
      <BaseButton
        onClick={() => console.log('Click me boiiii')}
        style={{
          width: '70px',
          height: '25px',
          fontSize: '12px',
          whiteSpace: 'nowrap',
        }}
      >
        More
      </BaseButton>
    ),
  },
  {
    name: 'Datasate 1',
    description: 'Test description',
    button: (
      <BaseButton
        onClick={() => console.log('Click me boiiii')}
        style={{
          width: '70px',
          height: '25px',
          fontSize: '12px',
          whiteSpace: 'nowrap',
        }}
      >
        More
      </BaseButton>
    ),
  },
];

export const Datasets: FC = () => {
  const [orderBy, setOrderBy] = useState<keyof Data>('name');

  return (
    <>
      <InfoHeader
        headerText={'List of owned datasets'}
        infoMessageText={
          'This view allows you to search through owned dataset. You can dispaly all dataset by leaving search input empty or you can fill it up and search dataset by key words (provided text will be treated as separate tags by which datasets will be searched). Additionaly you can sort result by name.'
        }
      />
      <SearchBar />
      <PaginatedTable<Data>
        data={data}
        cells={cells}
        orderBy={orderBy}
        setOrderBy={setOrderBy}
      />
    </>
  );
};

export default Datasets;
