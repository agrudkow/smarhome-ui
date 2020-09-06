import React from 'react';
import { render } from '@testing-library/react';

import ConsumerFeatureDatasetsUi from './consumer-feature-datasets-ui';

describe(' ConsumerFeatureDatasetsUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ConsumerFeatureDatasetsUi />);
    expect(baseElement).toBeTruthy();
  });
});
