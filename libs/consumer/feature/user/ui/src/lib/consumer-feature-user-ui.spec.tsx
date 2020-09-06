import React from 'react';
import { render } from '@testing-library/react';

import ConsumerFeatureUserUi from './consumer-feature-user-ui';

describe(' ConsumerFeatureUserUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ConsumerFeatureUserUi />);
    expect(baseElement).toBeTruthy();
  });
});
