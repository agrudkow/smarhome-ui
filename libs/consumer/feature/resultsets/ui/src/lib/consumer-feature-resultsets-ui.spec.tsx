import React from 'react';
import { render } from '@testing-library/react';

import ConsumerFeatureResultsetsUi from './consumer-feature-resultsets-ui';

describe(' ConsumerFeatureResultsetsUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ConsumerFeatureResultsetsUi />);
    expect(baseElement).toBeTruthy();
  });
});
