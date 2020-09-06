import React from 'react';
import { render } from '@testing-library/react';

import ConsumerFeatureAlgorithmsLogic from './consumer-feature-algorithms-logic';

describe(' ConsumerFeatureAlgorithmsLogic', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ConsumerFeatureAlgorithmsLogic />);
    expect(baseElement).toBeTruthy();
  });
});
