import React from 'react';
import { customRender } from '@smarthome/common/logic';
import CallapsableMessageBox from './callapsable-message-box';

describe(' CallapsableMessageBox', () => {
  it('should render successfully', () => {
    const { baseElement } = customRender(<CallapsableMessageBox show={true} />);
    expect(baseElement).toBeTruthy();
  });

  it('should match snapshot', () => {
    const { baseElement } = customRender(<CallapsableMessageBox show={true} />);
    expect(baseElement.firstChild).toMatchSnapshot();
  });

  it('should be hidden on show set to false', () => {
    const { container } = customRender(<CallapsableMessageBox show={false} />);
    expect(container.firstChild).toHaveStyleRule('visibility', 'hidden');
    expect(container.firstChild).toHaveStyleRule('height', '0');
    expect(container.firstChild).toHaveStyleRule('margin', '0');
  });
});
