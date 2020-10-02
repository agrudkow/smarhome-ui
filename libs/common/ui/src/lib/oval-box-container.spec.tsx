import React from 'react';
import { customRender } from '@smarthome/common/logic';
import OvalBoxContainer from './oval-box-container';

describe(' OvalBoxContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = customRender(<OvalBoxContainer />);
    expect(baseElement).toBeTruthy();
  });

  it('should match snapshot', () => {
    const { baseElement } = customRender(<OvalBoxContainer />);
    expect(baseElement).toMatchSnapshot();
  });

  it('should set height', () => {
    const height = 200;
    const { container } = customRender(<OvalBoxContainer height={height} />);
    expect(container.firstChild).toHaveStyleRule('height', `${height}px`);
  });

  it('should set width', () => {
    const width = 200;
    const { container } = customRender(<OvalBoxContainer width={width} />);
    expect(container.firstChild).toHaveStyleRule('width', `${width}px`);
  });

  it('should set backgroundColor', () => {
    const backgroundColor = 'red';
    const { container } = customRender(
      <OvalBoxContainer backgroundColor={backgroundColor} />
    );
    expect(container.firstChild).toHaveStyleRule(
      'background-color',
      backgroundColor
    );
  });

  it('should set opacity', () => {
    const opacity = 0.4;
    const { container } = customRender(<OvalBoxContainer opacity={opacity} />);
    expect(container.firstChild).toHaveStyleRule('opacity', `${opacity}`);
  });

  it('should set boxShadow', () => {
    const boxShadow = true;
    const { container } = customRender(
      <OvalBoxContainer boxShadow={boxShadow} />
    );
    expect(container.firstChild).toHaveStyleRule(
      'box-shadow',
      '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)'
    );
  });
});
