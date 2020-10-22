import React from 'react';
import { customRender } from '@smarthome/common/logic';
import InfoButton from './info-button';
import { fireEvent } from '@testing-library/react';

describe(' InfoButton', () => {
  it('should render successfully', () => {
    const { baseElement } = customRender(<InfoButton onClick={jest.fn()} />);
    expect(baseElement).toBeTruthy();
  });

  it('should match snapshot', () => {
    const { baseElement } = customRender(<InfoButton onClick={jest.fn()} />);
    expect(baseElement.firstChild).toMatchSnapshot();
  });

  it('should call handler function on click', () => {
    const handleClick = jest.fn();
    const { getByTestId } = customRender(<InfoButton onClick={handleClick} />);
    fireEvent.click(getByTestId('info-button-icon'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
