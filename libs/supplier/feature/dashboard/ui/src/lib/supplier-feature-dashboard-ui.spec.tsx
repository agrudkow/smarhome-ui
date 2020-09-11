import React from 'react';
import { render } from '@testing-library/react';

import SupplierFeatureDashboardUi from './supplier-feature-dashboard-ui';

describe(' SupplierFeatureDashboardUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SupplierFeatureDashboardUi />);
    expect(baseElement).toBeTruthy();
  });
});
