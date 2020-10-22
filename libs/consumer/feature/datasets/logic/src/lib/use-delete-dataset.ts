import { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { DatasetDetailsSlice } from '@smarthome/consumer/feature/datasets/state';

export function useDeleteDataset() {
  const dispatch = useDispatch();
  const { id: datasetId } = useParams<{ id: string }>();
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  const handleDeleteDataset = useCallback(() => {
    dispatch(DatasetDetailsSlice.deleteDatasetStart(datasetId));
    setOpenDeleteDialog(false);
  }, [datasetId, dispatch]);

  const handleDeleteDialogClose = useCallback(() => {
    setOpenDeleteDialog(false);
  }, []);

  const handleDeleteDialogOpen = useCallback(() => {
    setOpenDeleteDialog(true);
  }, []);

  return {
    handleDeleteDataset,
    handleDeleteDialogClose,
    handleDeleteDialogOpen,
    openDeleteDialog,
  } as const;
}
