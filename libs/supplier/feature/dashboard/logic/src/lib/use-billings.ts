import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@smarthome/supplier/store';
import { BillingSlice } from '@smarthome/supplier/feature/dashboard/state';
import { useMonthSwitch } from '@smarthome/common/logic';

export function useBillings() {
  const dispatch = useDispatch();
  const { currentDate, handleChangeMonthFactory } = useMonthSwitch();

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

  return {
    billing,
    currentDate,
    handleChangeMonthFactory,
  };
}
