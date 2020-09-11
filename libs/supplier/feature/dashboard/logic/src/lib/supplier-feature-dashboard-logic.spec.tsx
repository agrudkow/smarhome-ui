import React from 'react';
import { render } from '@testing-library/react';

import SupplierFeatureDashboardLogic from './supplier-feature-dashboard-logic';

describe(' SupplierFeatureDashboardLogic', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SupplierFeatureDashboardLogic />);
    expect(baseElement).toBeTruthy();
  });
});
