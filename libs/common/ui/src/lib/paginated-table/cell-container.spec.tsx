import React from 'react';
import { render } from '@testing-library/react';

import CellContainer from './cell-container';

describe(' CellContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CellContainer />);
    expect(baseElement).toBeTruthy();
  });
});
