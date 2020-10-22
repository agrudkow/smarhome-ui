import { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AlgorithmDetailsSlice } from '@smarthome/supplier/feature/algorithms/state';

export function useDeleteAlgorithm() {
  const dispatch = useDispatch();
  const { id: algorithmId } = useParams<{ id: string }>();
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  const handleDeleteAlgorithm = useCallback(() => {
    dispatch(AlgorithmDetailsSlice.deleteAlgorithmStart(algorithmId));
    setOpenDeleteDialog(false);
  }, [algorithmId, dispatch]);

  const handleDeleteDialogClose = useCallback(() => {
    setOpenDeleteDialog(false);
  }, []);

  const handleDeleteDialogOpen = useCallback(() => {
    setOpenDeleteDialog(true);
  }, []);

  return {
    handleDeleteAlgorithm,
    handleDeleteDialogClose,
    handleDeleteDialogOpen,
    openDeleteDialog,
  } as const;
}
