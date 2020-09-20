import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { call, put } from '@redux-saga/core/effects';
import {
  all,
  fork,
  takeLeading,
  SagaReturnType,
} from '@redux-saga/core/effects';
import { SnackbarSlice, LoadingSlice } from '@smarthome/common/state';
import { DatasetDTO } from '@smarthome/data';
import { fetchDatasetsList } from '@smarthome/consumer/feature/datasets/service';

interface DatasetsState {
  loading: boolean;
  error: string | null;
  datasets: DatasetDTO[];
  searchPhrase: string;
}

const initialState: DatasetsState = {
  loading: false,
  error: null,
  datasets: [],
  searchPhrase: '',
};

export const name = 'datasetsList' as const;

const datasets = createSlice({
  name,
  initialState,
  reducers: {
    fetchDatasetsStart(state, action: PayloadAction<string>) {
      state.loading = true;
      state.error = null;
      state.searchPhrase = action.payload;
    },
    fetchDatasetsSuccess(state, action: PayloadAction<DatasetDTO[]>) {
      state.loading = false;
      state.error = null;
      state.datasets = action.payload;
    },
    fetchDatasetsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
      state.datasets = [];
    },
    clearError(state) {
      state.error = null;
    },
  },
});

export const {
  fetchDatasetsFailure,
  fetchDatasetsStart,
  fetchDatasetsSuccess,
  clearError,
} = datasets.actions;
export const { reducer } = datasets;

function* handleFetchDatasetsStart(action: PayloadAction<string>) {
  try {
    yield put(LoadingSlice.pushLoading());
    const response: SagaReturnType<typeof fetchDatasetsList> = yield call(
      fetchDatasetsList,
      action.payload
    );
    yield put(fetchDatasetsSuccess(response));
  } catch (error) {
    yield put(
      SnackbarSlice.pushMessage({ message: error.message, variant: 'error' })
    );
    yield put(fetchDatasetsFailure(error.message));
  } finally {
    yield put(LoadingSlice.popLoading());
  }
}

function* watchFetchDatasetsStart() {
  yield takeLeading(fetchDatasetsStart.type, handleFetchDatasetsStart);
}

export function* saga() {
  yield all([fork(watchFetchDatasetsStart)]);
}
