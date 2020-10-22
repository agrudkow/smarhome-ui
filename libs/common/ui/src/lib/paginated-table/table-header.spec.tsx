import React from 'react';
import TableHeader, { Order, Cell } from './table-header';
import { customRender } from '@smarthome/common/logic';

const cells: Cell<'test'>[] = [
  {
    disablePadding: false,
    id: 'test',
    align: 'center',
    label: 'Test',
  },
  {
    disablePadding: false,
    id: 'test',
    align: 'center',
    label: 'Test',
  },
];

describe(' TableHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = customRender(
      <table>
        <TableHeader<'test'>
          order={Order.asc}
          orderBy="test"
          cells={cells}
          onRequestSort={jest.fn()}
        />
      </table>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should match snapshot when expanded', () => {
    const { baseElement } = customRender(
      <table>
        <TableHeader<'test'>
          order={Order.asc}
          orderBy="test"
          cells={cells}
          onRequestSort={jest.fn()}
        />
      </table>
    );
    expect(baseElement.firstChild).toMatchSnapshot();
  });
});
