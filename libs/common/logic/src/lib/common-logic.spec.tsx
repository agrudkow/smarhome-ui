import React from 'react';
import { render } from '@testing-library/react';

import CommonLogic from './common-logic';

describe(' CommonLogic', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CommonLogic />);
    expect(baseElement).toBeTruthy();
  });
});
