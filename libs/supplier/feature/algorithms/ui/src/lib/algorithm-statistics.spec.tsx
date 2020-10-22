import React from 'react';
import { render } from '@testing-library/react';

import AlgorithmStatistics from './algorithm-statistics';

describe(' AlgorithmStatistics', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AlgorithmStatistics />);
    expect(baseElement).toBeTruthy();
  });
});
