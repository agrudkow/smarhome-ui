import React from 'react';
import { customRender } from '@smarthome/common/logic';
import UnderlinedContainer from './underlined-container';

describe(' UnderlinedContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = customRender(<UnderlinedContainer />);
    expect(baseElement).toBeTruthy();
  });

  it('should match snapshot', () => {
    const { baseElement } = customRender(<UnderlinedContainer />);
    expect(baseElement.firstChild).toMatchSnapshot();
  });

  it('should set border-bottom color to red', () => {
    const { container } = customRender(<UnderlinedContainer color="red" />);
    expect(container.firstChild).toHaveStyleRule(
      'border-bottom',
      '2px solid red'
    );
  });
});
