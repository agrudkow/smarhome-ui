import React from 'react';
import { render } from '@testing-library/react';

import SidebarListItem from './sidebar-list-item';

describe(' SidebarListItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SidebarListItem />);
    expect(baseElement).toBeTruthy();
  });
});
