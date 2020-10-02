import React from 'react';
import { customRender } from '@smarthome/common/logic';
import TableBody from './table-body';
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

describe(' TableBody', () => {
  it('should render successfully', () => {
    const { baseElement } = customRender(
      <table>
        <TableBody<typeof rows[0]>
          page={0}
          rows={rows}
          rowsPerPage={10}
          cells={cells}
          showBodyPlaceholder={false}
          bodyPlaceholderText=""
        />
      </table>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should match snapshot when expanded', () => {
    const { baseElement } = customRender(
      <table>
        <TableBody<typeof rows[0]>
          page={0}
          rows={rows}
          rowsPerPage={10}
          cells={cells}
          showBodyPlaceholder={false}
          bodyPlaceholderText=""
        />
      </table>
    );
    expect(baseElement.firstChild).toMatchSnapshot();
  });

  describe('should render correct number of rows', () => {
    it('number of rows is less than rowsPerPage', () => {
      const { baseElement } = customRender(
        <table>
          <TableBody<typeof rows[0]>
            page={0}
            rows={rows}
            rowsPerPage={10}
            cells={cells}
            showBodyPlaceholder={false}
            bodyPlaceholderText=""
          />
        </table>
      );
      //equal to 4 -> rows length + empty row since rows is less than 10 (rowsPerPage)
      expect(baseElement.querySelector('tbody')?.childNodes.length).toEqual(4);
    });
    it('number of rows is less than rowsPerPage', () => {
      const { baseElement } = customRender(
        <table>
          <TableBody<typeof rows[0]>
            page={0}
            rows={rows}
            rowsPerPage={2}
            cells={cells}
            showBodyPlaceholder={false}
            bodyPlaceholderText=""
          />
        </table>
      );
      expect(baseElement.querySelector('tbody')?.childNodes.length).toEqual(2);
    });
  });

  it('should show placeholder', () => {
    const { getByText } = customRender(
      <table>
        <TableBody<typeof rows[0]>
          page={0}
          rows={rows}
          rowsPerPage={10}
          cells={cells}
          showBodyPlaceholder={true}
          bodyPlaceholderText="Test placeholder"
        />
      </table>
    );
    expect(getByText('Test placeholder')).toBeTruthy();
  });
});
