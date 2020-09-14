import React from 'react';
import { render } from '@testing-library/react';

import AddAlgorithm from './add-algorithm';

describe(' AddAlgorithm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AddAlgorithm />);
    expect(baseElement).toBeTruthy();
  });
});
