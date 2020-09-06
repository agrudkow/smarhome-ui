import React from 'react';
import { render } from '@testing-library/react';

import ConsumerFeatureDashboardUi from './consumer-feature-dashboard-ui';

describe(' ConsumerFeatureDashboardUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ConsumerFeatureDashboardUi />);
    expect(baseElement).toBeTruthy();
  });
});
