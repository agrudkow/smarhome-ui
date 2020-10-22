import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { customRender } from '@smarthome/common/logic';
import Sidebar from './sidebar';
import { fireEvent } from '@testing-library/react';

const itemsList = [
  { icon: <div />, route: '', text: '' },
  { icon: <div />, route: '', text: '' },
  { icon: <div />, route: '', text: '' },
];

describe(' Sidebar', () => {
  it('should render successfully', () => {
    const { baseElement } = customRender(
      <Router>
        <Sidebar show={true} items={itemsList} onShowSidebarClick={jest.fn()} />
      </Router>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should match snapshot', () => {
    const { baseElement } = customRender(
      <Router>
        <Sidebar show={true} items={itemsList} onShowSidebarClick={jest.fn()} />
      </Router>
    );
    expect(baseElement.firstChild).toMatchSnapshot();
  });

  it('should call handler function on a button click', () => {
    const handleClick = jest.fn();
    const { getByText } = customRender(
      <Router>
        <Sidebar
          show={true}
          items={itemsList}
          onShowSidebarClick={handleClick}
        />
      </Router>
    );
    fireEvent.click(getByText('Collapse sidebar'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
