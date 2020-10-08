import { useState } from 'react';

/**
 * @function useMonthSwitch - custom hook which handles MonthSwitch component date state.
 *
 * @returns
 * @var currentDate - current MonthSwitch date.
 * @function handleChangeMonthFactory - factory function which retruns function which moves months by provided number (can be <0).
 */
export function useMonthSwitch() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleChangeMonthFactory = (value: number) => () =>
    setCurrentDate(
      (previousValue) =>
        new Date(
          previousValue.getFullYear(),
          previousValue.getMonth() + value,
          previousValue.getDate()
        )
    );

  return {
    currentDate,
    handleChangeMonthFactory,
  };
}
