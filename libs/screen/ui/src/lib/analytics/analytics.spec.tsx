import React from 'react';
import { render } from '@testing-library/react';

import Analytics from './analytics';

describe(' Analitics', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Analytics />);
    expect(baseElement).toBeTruthy();
  });
});
