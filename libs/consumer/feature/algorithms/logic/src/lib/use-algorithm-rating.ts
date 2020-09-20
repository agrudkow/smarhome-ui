import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { AlgorithmDetailsSlice } from '@smarthome/consumer/feature/algorithms/state';
import { useParams } from 'react-router-dom';

export function useAlgorithmRating() {
  const dispatch = useDispatch();
  const { id: algorithmId } = useParams<{ id: string }>();
  const [openRatingDialog, setOpenRatingDialog] = useState<boolean>(false);
  const [rating, setRating] = useState<number>(0);

  const handleOpenRatingDialog = useCallback(() => {
    setOpenRatingDialog(true);
  }, []);

  const handleCloseRatingDialog = useCallback(() => {
    setOpenRatingDialog(false);
    setRating(0);
  }, []);

  const handleSendRating = useCallback(() => {
    dispatch(AlgorithmDetailsSlice.rateAlgorithmStart({ algorithmId, rating }));
    handleCloseRatingDialog();
  }, [algorithmId, dispatch, handleCloseRatingDialog, rating]);

  const handleRatingChange = useCallback((_, newValue: number | null) => {
    if (newValue !== null) {
      setRating(newValue);
    }
  }, []);

  return {
    rating,
    openRatingDialog,
    handleOpenRatingDialog,
    handleCloseRatingDialog,
    handleSendRating,
    handleRatingChange,
  } as const;
}
