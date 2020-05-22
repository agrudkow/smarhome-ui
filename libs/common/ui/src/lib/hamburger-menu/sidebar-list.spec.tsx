import React from 'react';
import { render } from '@testing-library/react';

import SidebarList from './sidebar-list';

describe(' SidebarList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SidebarList />);
    expect(baseElement).toBeTruthy();
  });
});
