import React from 'react';
import { customRender } from '@smarthome/common/logic';
import ArrowButton from './arrow-button';

describe(' ArrowButton', () => {
  it('should render successfully', () => {
    const { baseElement } = customRender(<ArrowButton />);
    expect(baseElement).toBeTruthy();
  });

  it('should match snapshot', () => {
    const { baseElement } = customRender(<ArrowButton />);
    expect(baseElement.firstChild).toMatchSnapshot();
  });
});
