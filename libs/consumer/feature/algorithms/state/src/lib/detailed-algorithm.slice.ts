import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { push } from 'connected-react-router';
import { call, put } from '@redux-saga/core/effects';
import {
  all,
  fork,
  takeLeading,
  takeEvery,
  SagaReturnType,
} from '@redux-saga/core/effects';
import { SnackbarSlice, LoadingSlice } from '@smarthome/common/state';
import { ConsumerRoutes } from '@smarthome/common/service';
import { AlgorithmDetailsDTO } from '@smarthome/data';
import {
  fetchAlgorithmDetails,
  rateAlgorithm,
  RateAlgorithmProps,
} from '@smarthome/consumer/feature/algorithms/service';

interface AlgorithmDetailsState {
  loading: boolean;
  error: string | null;
  algorithmDetails: AlgorithmDetailsDTO | null;
}

const initialState: AlgorithmDetailsState = {
  loading: false,
  error: null,
  algorithmDetails: null,
};

export const name = 'algorithmDetails' as const;

const algorithmDetails = createSlice({
  name,
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    fetchAlgorithmDetailsStart(state, action: PayloadAction<string>) {
      state.loading = true;
      state.error = null;
    },
    fetchAlgorithmDetailsSuccess(
      state,
      action: PayloadAction<AlgorithmDetailsDTO>
    ) {
      state.loading = false;
      state.error = null;
      state.algorithmDetails = action.payload;
    },
    fetchAlgorithmDetailsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
      state.algorithmDetails = null;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    rateAlgorithmStart(state, action: PayloadAction<RateAlgorithmProps>) {
      state.loading = true;
      state.error = null;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    rateAlgorithmSuccess(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = null;
    },
    rateAlgorithmFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchAlgorithmDetailsFailure,
  fetchAlgorithmDetailsStart,
  fetchAlgorithmDetailsSuccess,
  rateAlgorithmFailure,
  rateAlgorithmStart,
  rateAlgorithmSuccess,
} = algorithmDetails.actions;
export const { reducer } = algorithmDetails;
// -------------------------handlers-------------------------------
function* handleFetchAlgorithmDetailsStart(action: PayloadAction<string>) {
  try {
    yield put(LoadingSlice.pushLoading());
    const response: SagaReturnType<typeof fetchAlgorithmDetails> = yield call(
      fetchAlgorithmDetails,
      action.payload
    );
    yield put(fetchAlgorithmDetailsSuccess(response));
  } catch (error) {
    yield put(
      SnackbarSlice.pushMessage({ message: error.message, variant: 'error' })
    );
    yield put(fetchAlgorithmDetailsFailure(error.message));
  } finally {
    yield put(LoadingSlice.popLoading());
  }
}

function* handleFetchAlgorithmDetailsFailure() {
  yield put(push(`/${ConsumerRoutes.Algorithms}`));
}
function* handleRateAlgorithmStart(action: PayloadAction<RateAlgorithmProps>) {
  try {
    yield put(LoadingSlice.pushLoading());
    yield call(rateAlgorithm, action.payload);
    yield put(rateAlgorithmSuccess(action.payload.algorithmId));
  } catch (error) {
    yield put(
      SnackbarSlice.pushMessage({ message: error.message, variant: 'error' })
    );
    yield put(rateAlgorithmFailure(error.message));
  } finally {
    yield put(LoadingSlice.popLoading());
  }
}

function* handleRateAlgorithmSuccess(action: PayloadAction<string>) {
  yield put(
    SnackbarSlice.pushMessage({
      message: 'Algorithm was successfully rated.',
      variant: 'success',
    })
  );
  yield put(fetchAlgorithmDetailsStart(action.payload));
}

// ------------------watchers--------------------------------------------
function* watchFetchAlgorithmDetailsStart() {
  yield takeLeading(
    fetchAlgorithmDetailsStart.type,
    handleFetchAlgorithmDetailsStart
  );
}

function* watchFetchAlgorithmDetailsFailure() {
  yield takeEvery(
    fetchAlgorithmDetailsFailure.type,
    handleFetchAlgorithmDetailsFailure
  );
}
function* watchRateAlgorithmStart() {
  yield takeLeading(rateAlgorithmStart.type, handleRateAlgorithmStart);
}

function* watchRateAlgorithmSuccess() {
  yield takeEvery(rateAlgorithmSuccess.type, handleRateAlgorithmSuccess);
}

export function* saga() {
  yield all([
    fork(watchFetchAlgorithmDetailsStart),
    fork(watchFetchAlgorithmDetailsFailure),
    fork(watchRateAlgorithmStart),
    fork(watchRateAlgorithmSuccess),
  ]);
}
