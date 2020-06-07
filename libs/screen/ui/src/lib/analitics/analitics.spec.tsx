import React from 'react';
import { render } from '@testing-library/react';

import Analitics from './analitics';

describe(' Analitics', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Analitics />);
    expect(baseElement).toBeTruthy();
  });
});
