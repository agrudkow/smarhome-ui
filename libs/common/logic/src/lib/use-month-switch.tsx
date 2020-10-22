import { useState } from 'react';

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
