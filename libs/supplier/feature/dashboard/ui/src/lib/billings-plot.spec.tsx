import React from 'react';
import { render } from '@testing-library/react';

import BillingsPlot from './billings-plot';

describe(' BillingsPlot', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BillingsPlot />);
    expect(baseElement).toBeTruthy();
  });
});
