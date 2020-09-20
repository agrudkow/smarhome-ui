import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { useState, useCallback, useEffect } from 'react';
import { AlgorithmDetailsSlice } from '@smarthome/consumer/feature/algorithms/state';
import { DatasetDetailsSlice } from '@smarthome/consumer/feature/datasets/state';
import { RootState } from '@smarthome/consumer/store';
import { ResultsetDetailsSlice } from '@smarthome/consumer/feature/resultsets/state';

export function useExecute() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { algorithmId, datasetId } = useParams<{
    algorithmId: string;
    datasetId: string;
  }>();
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  const {
    algorithmDetails,
    datasetDetails,
    resultsetDetails: { newResultsetId },
  } = useSelector((state: RootState) => ({
    algorithmDetails: state.algorithmDetails.algorithmDetails,
    datasetDetails: state.datasetDetails.datasetDetails,
    resultsetDetails: state.resultsetDetails,
  }));

  const handleBackClick = useCallback(() => {
    history.goBack();
  }, [history]);

  const handleExecute = useCallback(() => {
    dispatch(ResultsetDetailsSlice.executeStart({ algorithmId, datasetId }));
  }, [algorithmId, datasetId, dispatch]);

  const handleDeleteDialogClose = useCallback(() => {
    setOpenDeleteDialog(false);
  }, []);

  const handleDeleteDialogOpen = useCallback(() => {
    setOpenDeleteDialog(true);
  }, []);

  const handleDeleteResultset = useCallback(() => {
    if (newResultsetId) {
      setOpenDeleteDialog(false);
      dispatch(ResultsetDetailsSlice.deleteResultsetStart(newResultsetId));
    }
  }, [dispatch, newResultsetId]);

  useEffect(() => {
    dispatch(AlgorithmDetailsSlice.fetchAlgorithmDetailsStart(algorithmId));
    dispatch(DatasetDetailsSlice.fetchDatasetDetailsStart(datasetId));
  }, [algorithmId, datasetId, dispatch]);

  return {
    handleBackClick,
    handleExecute,
    handleDeleteDialogClose,
    handleDeleteDialogOpen,
    handleDeleteResultset,
    openDeleteDialog,
    algorithmDetails,
    datasetDetails,
    allowActionButtons: newResultsetId !== null,
  } as const;
}
