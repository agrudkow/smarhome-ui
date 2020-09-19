import { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@smarthome/consumer/store';
import { DatasetDetailsSlice } from '@smarthome/consumer/feature/datasets/state';

export function useUpdateDataset() {
  const dispatch = useDispatch();
  const [editView, setEditView] = useState(false);

  const { datasetDetails } = useSelector(
    (state: RootState) => state.datasetDetails
  );

  const handleEditSave = useCallback(() => {
    if (datasetDetails) {
      dispatch(DatasetDetailsSlice.updateDatasetStart(datasetDetails));
      setEditView(false);
    }
  }, [datasetDetails, dispatch]);

  const handleToggleEditView = useCallback(() => {
    setEditView((prevState) => !prevState);
  }, []);

  return {
    handleEditSave,
    handleToggleEditView,
    datasetDetails,
    editView,
  };
}
