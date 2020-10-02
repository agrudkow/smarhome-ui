import React from 'react';
import { customRender } from '@smarthome/common/logic';
import PaginatedTable from './paginated-table';
import { Cell } from './table-header';

const rows = [
  {
    id: 'test-1',
    name: 'test-name',
  },
  {
    id: 'test-2',
    name: 'test-name',
  },
  {
    id: 'test-3',
    name: 'test-name',
  },
];

const cells: Cell<'id' | 'name'>[] = [
  {
    disablePadding: false,
    id: 'id',
    align: 'center',
    label: 'Test',
  },
  {
    disablePadding: false,
    id: 'name',
    align: 'center',
    label: 'Test',
  },
];

describe(' PaginatedTable', () => {
  it('should render successfully', () => {
    const { baseElement } = customRender(
      <PaginatedTable<typeof rows[0]> data={rows} cells={cells} />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should match snapshot (without footer)', () => {
    const { baseElement } = customRender(
      <PaginatedTable<typeof rows[0]>
        data={rows}
        cells={cells}
        footer={false}
      />
    );
    expect(baseElement.firstChild).toMatchSnapshot();
  });
});
