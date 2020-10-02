import React from 'react';
import { customRender } from '@smarthome/common/logic';
import MonthSwitch from './month-switch';

describe(' MonthSwitch', () => {
  it('should render successfully', () => {
    const { baseElement } = customRender(
      <MonthSwitch
        month={5}
        year={2020}
        onNextMonthClick={jest.fn()}
        onPreviousMonthClick={jest.fn()}
      />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should match snapshot', () => {
    const { baseElement } = customRender(
      <MonthSwitch
        month={5}
        year={2020}
        onNextMonthClick={jest.fn()}
        onPreviousMonthClick={jest.fn()}
      />
    );
    expect(baseElement.firstChild).toMatchSnapshot();
  });
});
