import React from 'react';
import { customRender } from '@smarthome/common/logic';
import SearchBar from './search-bar';
import { fireEvent } from '@testing-library/react';

describe(' SearchBar', () => {
  it('should render successfully', () => {
    const { baseElement } = customRender(
      <SearchBar
        onSearch={jest.fn()}
        onInputValueChange={jest.fn()}
        inputValue=""
        inputPlaceHolder=""
      />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should match snapshot', () => {
    const { baseElement } = customRender(
      <SearchBar
        onSearch={jest.fn()}
        onInputValueChange={jest.fn()}
        inputValue=""
        inputPlaceHolder=""
      />
    );
    expect(baseElement).toMatchSnapshot();
  });

  it('should set placeholder', () => {
    const { getByPlaceholderText } = customRender(
      <SearchBar
        onSearch={jest.fn()}
        onInputValueChange={jest.fn()}
        inputValue=""
        inputPlaceHolder="Test place holder"
      />
    );
    expect(getByPlaceholderText('Test place holder')).toBeTruthy();
  });

  it('should call handler function on input value change', () => {
    const handleChange = jest.fn();
    const { getByPlaceholderText } = customRender(
      <SearchBar
        onSearch={jest.fn()}
        onInputValueChange={handleChange}
        inputValue=""
        inputPlaceHolder="InputPlaceHolder"
      />
    );
    const input = getByPlaceholderText('InputPlaceHolder');
    fireEvent.change(input, { target: { value: 'test change' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('should call handler function on search click', () => {
    const handleSearch = jest.fn();
    const { getByText } = customRender(
      <SearchBar
        onSearch={handleSearch}
        onInputValueChange={jest.fn()}
        inputValue=""
        inputPlaceHolder="InputPlaceHolder"
      />
    );
    const input = getByText('Search');
    fireEvent.click(input);
    expect(handleSearch).toHaveBeenCalledTimes(1);
  });
});
