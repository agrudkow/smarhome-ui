import React from 'react';
import { render } from '@testing-library/react';

import EditDatasetAccordions from './edit-dataset-accordions';

describe(' EditDatasetAccordions', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EditDatasetAccordions />);
    expect(baseElement).toBeTruthy();
  });
});
