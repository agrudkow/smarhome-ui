import React from 'react';
import { render } from '@testing-library/react';

import ConsumerFeatureResultsetsLogic from './consumer-feature-resultsets-logic';

describe(' ConsumerFeatureResultsetsLogic', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ConsumerFeatureResultsetsLogic />);
    expect(baseElement).toBeTruthy();
  });
});
