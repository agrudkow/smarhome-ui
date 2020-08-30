import React from 'react';
import { render } from '@testing-library/react';

import UnderlinedContainer from './underlined-container';

describe(' UnderlinedContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UnderlinedContainer />);
    expect(baseElement).toBeTruthy();
  });
});
