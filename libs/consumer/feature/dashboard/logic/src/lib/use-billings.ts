import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@smarthome/consumer/store';
import { BillingSlice } from '@smarthome/consumer/feature/dashboard/state';
import { useMonthSwitch } from '@smarthome/common/logic';

export function useBillings() {
  const dispatch = useDispatch();
  const { currentDate, handleChangeMonthFactory } = useMonthSwitch();
  const [time, setTime] = useState<string | undefined>();

  const { billing } = useSelector((state: RootState) => state.billing);

  useEffect(() => {
    dispatch(
      BillingSlice.fetchBillingStart({
        startDate: new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          1
        ).getTime(),
        endDate: new Date(
          currentDate.getFullYear() + (currentDate.getMonth() !== 11 ? 0 : 1),
          currentDate.getMonth() + 1,
          0
        ).getTime(),
      })
    );
  }, [currentDate, dispatch]);

  useEffect(() => {
    setTime(billing?.milliseconds.toString());
  }, [billing?.milliseconds?.toString]);

  return {
    billing,
    currentDate,
    handleChangeMonthFactory,
  };
}
