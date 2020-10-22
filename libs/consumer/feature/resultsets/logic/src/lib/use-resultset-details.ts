import { useCallback, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@smarthome/consumer/store';
import { ResultsetDetailsSlice } from '@smarthome/consumer/feature/resultsets/state';
import {
  ConsumerDatasetRoutes,
  ConsumerRoutes,
} from '@smarthome/common/service';
import { AlgorithmDetailsSlice } from '@smarthome/consumer/feature/algorithms/state';

export function useResultsetDetails() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id: resultsetId } = useParams<{ id: string }>();
  const [openRatingDialog, setOpenRatingDialog] = useState<boolean>(false);
  const [rating, setRating] = useState<number>(0);

  const { resultsetDetails } = useSelector((state: RootState) => ({
    resultsetDetails: state.resultsetDetails.resultsetDetails,
  }));

  const handleRerun = useCallback(() => {
    if (resultsetDetails) {
      const { datasetId, algorithmId } = resultsetDetails;
      history.push(
        `/${ConsumerRoutes.Datasets}/${encodeURIComponent(datasetId)}/${
          ConsumerDatasetRoutes.Execute
        }/${encodeURIComponent(algorithmId)}`
      );
    }
  }, [history, resultsetDetails]);

  const handleDeleteResultset = useCallback(() => {
    dispatch(ResultsetDetailsSlice.deleteResultsetStart(resultsetId));
  }, [dispatch, resultsetId]);

  const handleDownloadResultSet = useCallback(() => {
    console.log(`Download resultset ${resultsetId}`);
  }, [resultsetId]);

  const handleOpenRatingDialog = useCallback(() => {
    setOpenRatingDialog(true);
  }, []);

  const handleCloseRatingDialog = useCallback(() => {
    setOpenRatingDialog(false);
    setRating(0);
  }, []);

  const handleSendRating = useCallback(() => {
    if (resultsetDetails) {
      dispatch(
        AlgorithmDetailsSlice.rateAlgorithmStart({
          algorithmId: resultsetDetails.algorithmId,
          rating,
        })
      );
      handleCloseRatingDialog();
    }
  }, [dispatch, handleCloseRatingDialog, rating, resultsetDetails]);

  const handleRatingChange = useCallback((_, newValue: number | null) => {
    if (newValue !== null) {
      setRating(newValue);
    }
  }, []);

  const handleBackClick = useCallback(() => {
    history.goBack();
  }, [history]);

  useEffect(() => {
    dispatch(ResultsetDetailsSlice.fetchResultsetDetailsStart(resultsetId));
  }, [resultsetId, dispatch]);

  return {
    handleBackClick,
    handleRerun,
    handleDeleteResultset,
    handleDownloadResultSet,
    handleOpenRatingDialog,
    handleCloseRatingDialog,
    handleRatingChange,
    handleSendRating,
    resultsetDetails,
    openRatingDialog,
    rating,
  };
}
