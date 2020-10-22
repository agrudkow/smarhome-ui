import React from 'react';
import { customRender } from '@smarthome/common/logic';
import TableFooter from './table-footer';

describe(' TableFooter', () => {
  it('should render successfully', () => {
    const { baseElement } = customRender(
      <TableFooter
        page={1}
        rowsPerPage={10}
        rowsPerPageOptions={[10, 15, 25]}
        totalNumberOfRows={100}
        handleChangePage={jest.fn()}
        handleChangeRowsPerPage={jest.fn()}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
