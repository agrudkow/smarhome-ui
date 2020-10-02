import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { call, put } from '@redux-saga/core/effects';
import {
  all,
  fork,
  takeLeading,
  SagaReturnType,
} from '@redux-saga/core/effects';
import { SnackbarSlice, LoadingSlice } from '@smarthome/common/state';
import { AlgorithmDTO, AlgorithmTopExecDTO } from '@smarthome/data';
import {
  fetchTopRatingAlgorithms,
  fetchTopExecutionsAlgorithms,
} from '@smarthome/supplier/feature/dashboard/service';

interface TopAlgorithmsState {
  loading: boolean;
  error: string | null;
  topExecutionsAlgorithms: AlgorithmTopExecDTO[];
  topRatingAlgorithms: AlgorithmDTO[];
}

const initialState: TopAlgorithmsState = {
  loading: false,
  error: null,
  topExecutionsAlgorithms: [],
  topRatingAlgorithms: [],
};

export const name = 'topAlgorithms' as const;

const topalgorithms = createSlice({
  name,
  initialState,
  reducers: {
    fetchTopRatingAlgorithmsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchTopRatingAlgorithmsSuccess(
      state,
      action: PayloadAction<AlgorithmDTO[]>
    ) {
      state.loading = false;
      state.error = null;
      state.topRatingAlgorithms = action.payload;
    },
    fetchTopRatingAlgorithmsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    fetchTopExecutionsAlgorithmsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchTopExecutionsAlgorithmsSuccess(
      state,
      action: PayloadAction<AlgorithmTopExecDTO[]>
    ) {
      state.loading = false;
      state.error = null;
      state.topExecutionsAlgorithms = action.payload;
    },
    fetchTopExecutionsAlgorithmsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchTopRatingAlgorithmsFailure,
  fetchTopRatingAlgorithmsStart,
  fetchTopRatingAlgorithmsSuccess,
  fetchTopExecutionsAlgorithmsFailure,
  fetchTopExecutionsAlgorithmsStart,
  fetchTopExecutionsAlgorithmsSuccess,
} = topalgorithms.actions;
export const { reducer } = topalgorithms;

function* handleFetchTopRatingAlgorithmsStart() {
  try {
    yield put(LoadingSlice.pushLoading());
    const response: SagaReturnType<typeof fetchTopRatingAlgorithms> = yield call(
      fetchTopRatingAlgorithms
    );
    yield put(fetchTopRatingAlgorithmsSuccess(response));
  } catch (error) {
    yield put(
      SnackbarSlice.pushMessage({ message: error.message, variant: 'error' })
    );
    yield put(fetchTopRatingAlgorithmsFailure(error.message));
  } finally {
    yield put(LoadingSlice.popLoading());
  }
}

function* watchFetchTopRatingAlgorithmsStart() {
  yield takeLeading(
    fetchTopRatingAlgorithmsStart.type,
    handleFetchTopRatingAlgorithmsStart
  );
}

function* handleFetchTopExecutionsAlgorithmsStart() {
  try {
    yield put(LoadingSlice.pushLoading());
    const response: SagaReturnType<typeof fetchTopExecutionsAlgorithms> = yield call(
      fetchTopExecutionsAlgorithms
    );
    yield put(fetchTopExecutionsAlgorithmsSuccess(response));
  } catch (error) {
    yield put(
      SnackbarSlice.pushMessage({ message: error.message, variant: 'error' })
    );
    yield put(fetchTopExecutionsAlgorithmsFailure(error.message));
  } finally {
    yield put(LoadingSlice.popLoading());
  }
}

function* watchFetchTopExecutionsAlgorithmsStart() {
  yield takeLeading(
    fetchTopExecutionsAlgorithmsStart.type,
    handleFetchTopExecutionsAlgorithmsStart
  );
}

export function* saga() {
  yield all([
    fork(watchFetchTopRatingAlgorithmsStart),
    fork(watchFetchTopExecutionsAlgorithmsStart),
  ]);
}
