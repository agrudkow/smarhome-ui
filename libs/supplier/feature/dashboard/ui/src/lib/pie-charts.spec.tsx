import React from 'react';
import { render } from '@testing-library/react';

import PieCharts from './pie-charts';

describe(' PieCharts', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PieCharts />);
    expect(baseElement).toBeTruthy();
  });
});
