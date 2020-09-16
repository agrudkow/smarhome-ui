import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { call, put } from '@redux-saga/core/effects';
import { all, fork, takeEvery, SagaReturnType } from '@redux-saga/core/effects';
import { ErrorSlice, LoadingSlice } from '@smarthome/common/state';
import { AlgorithmDTO } from '@smarthome/data';
import { fetchAlgorithmsList } from '@smarthome/supplier/feature/algorithms/service';

interface AlgorithmsState {
  loading: boolean;
  error: string | null;
  algorithms: AlgorithmDTO[];
  searchPhrase: string;
}

const initialState: AlgorithmsState = {
  loading: false,
  error: null,
  algorithms: [],
  searchPhrase: '',
};

export const name = 'algorithmsList' as const;

const algorithms = createSlice({
  name,
  initialState,
  reducers: {
    fetchAlgorithmsStart(state, action: PayloadAction<string>) {
      state.loading = true;
      state.error = null;
      state.searchPhrase = action.payload;
    },
    fetchAlgorithmsSuccess(state, action: PayloadAction<AlgorithmDTO[]>) {
      state.loading = false;
      state.error = null;
      state.algorithms = action.payload;
    },
    fetchAlgorithmsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
      state.algorithms = [];
    },
    clearError(state) {
      state.error = null;
    },
  },
});

export const {
  fetchAlgorithmsFailure,
  fetchAlgorithmsStart,
  fetchAlgorithmsSuccess,
  clearError,
} = algorithms.actions;
export const { reducer } = algorithms;

function* handleFetchAlgorithmsStart(action: PayloadAction<string>) {
  try {
    yield put(LoadingSlice.pushLoading());
    const response: SagaReturnType<typeof fetchAlgorithmsList> = yield call(
      fetchAlgorithmsList,
      action.payload
    );
    yield put(fetchAlgorithmsSuccess(response));
  } catch (error) {
    yield put(ErrorSlice.pushError(error.message));
    yield put(fetchAlgorithmsFailure(error.message));
  } finally {
    yield put(LoadingSlice.popLoading());
  }
}

function* watchPostAlgorithmsStart() {
  yield takeEvery(fetchAlgorithmsStart.type, handleFetchAlgorithmsStart);
}

export function* saga() {
  yield all([fork(watchPostAlgorithmsStart)]);
}
