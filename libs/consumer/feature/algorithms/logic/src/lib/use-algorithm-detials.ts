import { useCallback, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  ConsumerRoutes,
  ConsumerAlgorithmRoutes,
} from '@smarthome/common/service';
import { RootState } from '@smarthome/consumer/store';
import { AlgorithmDetailsSlice } from '@smarthome/consumer/feature/algorithms/state';

export function useAlgorithmDetails() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id: algorithmId } = useParams<{ id: string }>();

  const { algorithmDetails } = useSelector(
    (state: RootState) => state.algorithmDetails
  );

  const handleBackClick = useCallback(() => {
    history.push(`/${ConsumerRoutes.Algorithms}`);
  }, [history]);

  const handleRunOnDatasetClick = useCallback(() => {
    history.push(
      `/${ConsumerRoutes.Algorithms}/${encodeURIComponent(algorithmId)}/${
        ConsumerAlgorithmRoutes.SelectDataset
      }`
    );
  }, [algorithmId, history]);

  useEffect(() => {
    if (algorithmId) {
      dispatch(AlgorithmDetailsSlice.fetchAlgorithmDetailsStart(algorithmId));
    }
  }, [algorithmId, dispatch]);

  return {
    handleBackClick,
    handleRunOnDatasetClick,
    algorithmDetails,
  };
}
