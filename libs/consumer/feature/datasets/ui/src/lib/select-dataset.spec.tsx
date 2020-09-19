import React from 'react';
import { render } from '@testing-library/react';

import SelectDataset from './select-dataset';

describe(' SelectDataset', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SelectDataset />);
    expect(baseElement).toBeTruthy();
  });
});
