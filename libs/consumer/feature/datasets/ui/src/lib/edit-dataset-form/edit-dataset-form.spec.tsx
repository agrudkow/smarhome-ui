import React from 'react';
import { render } from '@testing-library/react';

import EditDatasetFrom from './edit-dataset-form';

describe(' EditDataset', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EditDatasetFrom />);
    expect(baseElement).toBeTruthy();
  });
});
