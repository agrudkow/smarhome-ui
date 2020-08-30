import React from 'react';
import { render } from '@testing-library/react';

import DetailedDataset from './detailed-dataset';

describe(' DetailedDataset', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DetailedDataset />);
    expect(baseElement).toBeTruthy();
  });
});
