import React from 'react';
import { render } from '@testing-library/react';

import SupplierFeatureAlgorithmsUi from './supplier-feature-algorithms-ui';

describe(' SupplierFeatureAlgorithmsUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SupplierFeatureAlgorithmsUi />);
    expect(baseElement).toBeTruthy();
  });
});
