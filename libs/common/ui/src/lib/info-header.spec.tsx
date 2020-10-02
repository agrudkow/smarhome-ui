import React from 'react';
import { customRender } from '@smarthome/common/logic';
import InfoHeader from './info-header';

describe(' InfoHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = customRender(
      <InfoHeader headerText="test" infoMessageText="test" />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should match snapshot', () => {
    const { baseElement } = customRender(
      <InfoHeader headerText="test" infoMessageText="test" />
    );
    expect(baseElement.firstChild).toMatchSnapshot();
  });
});
