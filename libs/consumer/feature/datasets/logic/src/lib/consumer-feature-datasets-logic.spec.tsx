import React from 'react';
import { render } from '@testing-library/react';

import ConsumerFeatureDatasetsLogic from './consumer-feature-datasets-logic';

describe(' ConsumerFeatureDatasetsLogic', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ConsumerFeatureDatasetsLogic />);
    expect(baseElement).toBeTruthy();
  });
});
