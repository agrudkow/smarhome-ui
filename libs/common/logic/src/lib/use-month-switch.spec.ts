import { renderHook, act } from '@testing-library/react-hooks';
import { useMonthSwitch } from './use-month-switch';

describe(' useMonthSwitch', () => {
  it('should init with current year, month and day', () => {
    const date = new Date();
    const { result } = renderHook(() => useMonthSwitch());

    expect(result.current.currentDate.getFullYear()).toEqual(
      date.getFullYear()
    );
    expect(result.current.currentDate.getMonth()).toEqual(date.getMonth());
    expect(result.current.currentDate.getDate()).toEqual(date.getDate());
  });

  it('should increment month', () => {
    const date = new Date();
    const { result } = renderHook(() => useMonthSwitch());

    act(() => {
      result.current.handleChangeMonthFactory(1)();
    });

    expect(result.current.currentDate).toEqual(
      new Date(date.getFullYear(), date.getMonth() + 1, date.getDate())
    );
  });

  it('should decrement month', () => {
    const date = new Date();
    const { result } = renderHook(() => useMonthSwitch());

    act(() => {
      result.current.handleChangeMonthFactory(-1)();
    });

    expect(result.current.currentDate).toEqual(
      new Date(date.getFullYear(), date.getMonth() - 1, date.getDate())
    );
  });
});
