import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { DatasetDetailsSlice } from '@smarthome/consumer/feature/datasets/state';
import { DatasetDetailsDTO } from '@smarthome/data';

export function useAddDataset() {
  const dispatch = useDispatch();
  const [datasetData, setDatasetData] = useState<
    Omit<DatasetDetailsDTO, 'datasetId'>
  >({
    datasetSummary: 'Test',
    displayName: 'Test',
    datasetDescription: 'Test',
    linkURL: 'Test',
  });

  const handleAddDataset = useCallback(() => {
    if (datasetData) {
      dispatch(DatasetDetailsSlice.addDatasetStart(datasetData));
    }
  }, [datasetData, dispatch]);

  return {
    handleAddDataset,
    datasetData,
    setDatasetData,
  };
}
