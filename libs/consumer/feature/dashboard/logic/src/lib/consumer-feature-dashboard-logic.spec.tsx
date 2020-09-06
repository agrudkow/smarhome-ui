import React from 'react';
import { render } from '@testing-library/react';

import ConsumerFeatureDashboardLogic from './consumer-feature-dashboard-logic';

describe(' ConsumerFeatureDashboardLogic', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ConsumerFeatureDashboardLogic />);
    expect(baseElement).toBeTruthy();
  });
});
