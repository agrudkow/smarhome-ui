import React from 'react';
import { render } from '@testing-library/react';

import InfoHeader from './info-header';

describe(' InfoHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InfoHeader />);
    expect(baseElement).toBeTruthy();
  });
});
