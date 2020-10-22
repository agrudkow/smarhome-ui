import React from 'react';
import { customRender } from '@smarthome/common/logic';
import BaseButton from './base-button';

describe(' BaseButtonr', () => {
  it('should render successfully', () => {
    const { baseElement } = customRender(<BaseButton />);
    expect(baseElement).toBeTruthy();
  });

  it('should match snapshot', () => {
    const { baseElement } = customRender(<BaseButton />);
    expect(baseElement.firstChild).toMatchSnapshot();
  });
});
