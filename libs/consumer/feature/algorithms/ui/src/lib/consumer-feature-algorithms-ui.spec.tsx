import React from 'react';
import { render } from '@testing-library/react';

import ConsumerFeatureAlgorithmsUi from './consumer-feature-algorithms-ui';

describe(' ConsumerFeatureAlgorithmsUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ConsumerFeatureAlgorithmsUi />);
    expect(baseElement).toBeTruthy();
  });
});
