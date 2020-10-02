import React from 'react';
import { customRender } from '@smarthome/common/logic';
import Accordion from './accordion';

describe(' Accordion', () => {
  it('should render successfully', () => {
    const { baseElement } = customRender(
      <Accordion summary="" onChange={jest.fn()} expanded={true} />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should match snapshot when expanded', () => {
    const { baseElement } = customRender(
      <Accordion summary="" onChange={jest.fn()} expanded={true} />
    );
    expect(baseElement.firstChild).toMatchSnapshot();
  });

  it('should match snapshot when collapsed', () => {
    const { baseElement } = customRender(
      <Accordion summary="" onChange={jest.fn()} expanded={true} />
    );
    expect(baseElement.firstChild).toMatchSnapshot();
  });
});
