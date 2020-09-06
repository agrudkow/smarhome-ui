import React from 'react';
import { render } from '@testing-library/react';

import ExecutionDetails from './execution-details';

describe(' ExecutionDetails', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ExecutionDetails />);
    expect(baseElement).toBeTruthy();
  });
});
