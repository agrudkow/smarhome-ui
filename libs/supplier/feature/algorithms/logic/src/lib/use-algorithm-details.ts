import { useCallback, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';
import { CustomerRoutes } from '@smarthome/common/service';
import { RootState } from '@smarthome/supplier/store';
import { AlgorithmDetailsSlice } from '@smarthome/supplier/feature/algorithms/state';

export function useAlgorithmDetails() {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const { id: algorithmId } = useParams<{ id: string }>();
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [editView, setEditView] = useState(false);

  const { algorithmDetails } = useSelector(
    (state: RootState) => state.algorithmDetails
  );

  const handleBackClick = useCallback(() => {
    history.push(`/${CustomerRoutes.Algorithms}`);
  }, [history]);

  const handleDeleteAlgorithm = useCallback(() => {
    console.log(`Delete dataset ${algorithmId}`);
    enqueueSnackbar(`Delete dataset ${algorithmId}`, { variant: 'success' });
    setOpenDeleteDialog(false);
  }, [algorithmId, enqueueSnackbar]);

  const handleDeleteDialogClose = useCallback(() => {
    setOpenDeleteDialog(false);
  }, []);

  const handleDeleteDialogOpen = useCallback(() => {
    setOpenDeleteDialog(true);
  }, []);

  const handleEditSave = useCallback(() => {
    setEditView(false);
  }, []);

  const handleToggleEditView = useCallback(() => {
    setEditView((prevState) => !prevState);
  }, []);

  useEffect(() => {
    if (algorithmId) {
      dispatch(AlgorithmDetailsSlice.fetchAlgorithmDetailsStart(algorithmId));
    }
  }, [algorithmId, dispatch]);

  return {
    handleBackClick,
    handleDeleteAlgorithm,
    handleDeleteDialogClose,
    handleDeleteDialogOpen,
    handleEditSave,
    handleToggleEditView,
    algorithmDetails,
    editView,
    openDeleteDialog,
    algorithmId,
  };
}
