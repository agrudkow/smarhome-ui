import React from 'react';
import { customRender } from '@smarthome/common/logic';
import BackButton from './back-button';

describe(' BackButton', () => {
  it('should render successfully', () => {
    const { baseElement } = customRender(<BackButton />);
    expect(baseElement).toBeTruthy();
  });

  it('should match snapshot', () => {
    const { baseElement } = customRender(<BackButton />);
    expect(baseElement.firstChild).toMatchSnapshot();
  });
});
