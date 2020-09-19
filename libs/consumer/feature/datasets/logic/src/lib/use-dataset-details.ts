import { useCallback, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  ConsumerRoutes,
  ConsumerDatasetRoutes,
} from '@smarthome/common/service';
import { RootState } from '@smarthome/consumer/store';
import { DatasetDetailsSlice } from '@smarthome/consumer/feature/datasets/state';

export function useDatasetDetails() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id: datasetId } = useParams<{ id: string }>();

  const { datasetDetails } = useSelector(
    (state: RootState) => state.datasetDetails
  );

  const handleBackClick = useCallback(() => {
    history.push(`/${ConsumerRoutes.Datasets}`);
  }, [history]);

  const handleRunWithAlgorithmClick = useCallback(() => {
    history.push(
      `/${ConsumerRoutes.Datasets}/${encodeURIComponent(datasetId)}/${
        ConsumerDatasetRoutes.SelectAlgorithm
      }`
    );
  }, [datasetId, history]);

  useEffect(() => {
    if (datasetId) {
      dispatch(DatasetDetailsSlice.fetchDatasetDetailsStart(datasetId));
    }
  }, [datasetId, dispatch]);

  return {
    handleBackClick,
    handleRunWithAlgorithmClick,
    datasetDetails,
  };
}
