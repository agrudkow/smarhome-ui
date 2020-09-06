import React from 'react';
import { render } from '@testing-library/react';

import AddDataset from './add-dataset';

describe(' AddDataset', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AddDataset />);
    expect(baseElement).toBeTruthy();
  });
});
