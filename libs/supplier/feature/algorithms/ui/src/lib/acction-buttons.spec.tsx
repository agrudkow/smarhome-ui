import React from 'react';
import { render } from '@testing-library/react';

import AcctionButtons from './acction-buttons';

describe(' AcctionButtons', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AcctionButtons />);
    expect(baseElement).toBeTruthy();
  });
});
