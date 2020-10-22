import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AlgorithmDetailsSlice } from '@smarthome/supplier/feature/algorithms/state';
import { AlgorithmDetailsDTO } from '@smarthome/data';

export function useAddAlgorithm() {
  const dispatch = useDispatch();
  const [algorithmData, setAlgorithmData] = useState<
    Omit<AlgorithmDetailsDTO, 'algorithmId'>
  >({
    algorithmRating: 3.4,
    algorithmSummary: 'Test',
    displayName: 'Test',
    algorithmDescription: 'Test',
    author: 'Test',
    linkURL: 'Test',
  });

  const handleAddAlgorithm = useCallback(() => {
    if (algorithmData) {
      dispatch(AlgorithmDetailsSlice.addAlgorithmStart(algorithmData));
    }
  }, [algorithmData, dispatch]);

  return {
    handleAddAlgorithm,
    algorithmData,
    setAlgorithmData,
  };
}
