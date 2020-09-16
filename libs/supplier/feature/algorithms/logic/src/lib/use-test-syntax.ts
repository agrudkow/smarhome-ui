import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AlgorithmDetailsSlice } from '@smarthome/supplier/feature/algorithms/state';
import { RootState } from '@smarthome/supplier/store';

export function useTestSyntax(algorithmId?: string) {
  const dispatch = useDispatch();

  const { status } = useSelector((state: RootState) => state.algorithmDetails);

  const handleTestSyntax = useCallback(() => {
    if (algorithmId) {
      dispatch(AlgorithmDetailsSlice.testSyntaxStart(algorithmId));
    }
  }, [algorithmId, dispatch]);

  return { handleTestSyntax, status } as const;
}
