import React from 'react';
import { render } from '@testing-library/react';

import TableDataPaceholder from './table-body-paceholder';

describe(' TableDataPaceholder', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TableDataPaceholder />);
    expect(baseElement).toBeTruthy();
  });
});
