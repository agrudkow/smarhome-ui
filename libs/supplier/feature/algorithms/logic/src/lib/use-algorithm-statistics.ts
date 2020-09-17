import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@smarthome/supplier/store';
import { useEffect } from 'react';
import { AlgorithmDetailsSlice } from '@smarthome/supplier/feature/algorithms/state';
import { useMonthSwitch } from '@smarthome/common/logic';

export function useAlgortihmStatistics(algorithmId: string) {
  const dispatch = useDispatch();
  const { currentDate, handleChangeMonthFactory } = useMonthSwitch();
  const { statistics } = useSelector(
    (state: RootState) => state.algorithmDetails
  );

  useEffect(() => {
    dispatch(
      AlgorithmDetailsSlice.fetchAlgorithmStatisticsStart({
        algorithmId,
        startDate: new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          1
        ).getTime(),
        endData: new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          0
        ).getTime(),
      })
    );
  }, [algorithmId, currentDate, dispatch]);

  return { statistics, currentDate, handleChangeMonthFactory } as const;
}
