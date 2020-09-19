import { useCallback, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { SupplierRoutes } from '@smarthome/common/service';
import { RootState } from '@smarthome/supplier/store';
import { AlgorithmDetailsSlice } from '@smarthome/supplier/feature/algorithms/state';

export function useAlgorithmDetails() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id: algorithmId } = useParams<{ id: string }>();

  const { algorithmDetails } = useSelector(
    (state: RootState) => state.algorithmDetails
  );

  const handleBackClick = useCallback(() => {
    history.push(`/${SupplierRoutes.Algorithms}`);
  }, [history]);

  useEffect(() => {
    if (algorithmId) {
      dispatch(AlgorithmDetailsSlice.fetchAlgorithmDetailsStart(algorithmId));
    }
  }, [algorithmId, dispatch]);

  return {
    handleBackClick,
    algorithmDetails,
    algorithmId,
  };
}
