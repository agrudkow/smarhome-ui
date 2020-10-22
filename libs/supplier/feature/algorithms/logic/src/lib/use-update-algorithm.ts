import { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@smarthome/supplier/store';
import { AlgorithmDetailsSlice } from '@smarthome/supplier/feature/algorithms/state';

export function useUpdateAlgorithm() {
  const dispatch = useDispatch();
  const [editView, setEditView] = useState(false);

  const { algorithmDetails } = useSelector(
    (state: RootState) => state.algorithmDetails
  );

  const handleEditSave = useCallback(() => {
    if (algorithmDetails) {
      dispatch(AlgorithmDetailsSlice.updateAlgorithmStart(algorithmDetails));
      setEditView(false);
    }
  }, [algorithmDetails, dispatch]);

  const handleToggleEditView = useCallback(() => {
    setEditView((prevState) => !prevState);
  }, []);

  return {
    handleEditSave,
    handleToggleEditView,
    algorithmDetails,
    editView,
  };
}
