import React from 'react';
import { render } from '@testing-library/react';

import CallapsableMessageBox from './callapsable-message-box';

describe(' CallapsableMessageBox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CallapsableMessageBox />);
    expect(baseElement).toBeTruthy();
  });
});
