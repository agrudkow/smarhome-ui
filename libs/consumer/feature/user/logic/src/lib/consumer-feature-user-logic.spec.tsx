import React from 'react';
import { render } from '@testing-library/react';

import ConsumerFeatureUserLogic from './consumer-feature-user-logic';

describe(' ConsumerFeatureUserLogic', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ConsumerFeatureUserLogic />);
    expect(baseElement).toBeTruthy();
  });
});
