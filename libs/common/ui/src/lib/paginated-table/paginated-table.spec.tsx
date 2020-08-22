import React from 'react';
import { render } from '@testing-library/react';

import PaginatedTable from './paginated-table';

describe(' PaginatedTable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PaginatedTable />);
    expect(baseElement).toBeTruthy();
  });
});
