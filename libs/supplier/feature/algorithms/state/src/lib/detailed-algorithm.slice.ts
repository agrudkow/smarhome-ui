import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { call, put } from '@redux-saga/core/effects';
import {
  all,
  fork,
  takeLeading,
  SagaReturnType,
} from '@redux-saga/core/effects';
import { ErrorSlice, LoadingSlice } from '@smarthome/common/state';
import { AlgorithmDetailsDTO } from '@smarthome/data';
import {
  fetchAlgorithmDetails,
  testSyntax,
} from '@smarthome/supplier/feature/algorithms/service';

interface AlgorithmDetailsState {
  loading: boolean;
  error: string | null;
  algorithmDetails: AlgorithmDetailsDTO | null;
  status: string | null;
}

const initialState: AlgorithmDetailsState = {
  loading: false,
  error: null,
  algorithmDetails: null,
  status: null,
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
    testSyntaxStart(state, action: PayloadAction<string>) {
      state.loading = true;
      state.error = null;
    },
    testSyntaxSuccess(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = null;
      state.status = action.payload;
    },
    testSyntaxFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
      state.status = null;
    },
  },
});

export const {
  fetchAlgorithmDetailsFailure,
  fetchAlgorithmDetailsStart,
  fetchAlgorithmDetailsSuccess,
  testSyntaxStart,
  testSyntaxFailure,
  testSyntaxSuccess,
} = algorithmDetails.actions;
export const { reducer } = algorithmDetails;

function* handleFetchAlgorithmDetailsStart(action: PayloadAction<string>) {
  try {
    yield put(LoadingSlice.pushLoading());
    const response: SagaReturnType<typeof fetchAlgorithmDetails> = yield call(
      fetchAlgorithmDetails,
      action.payload
    );
    yield put(fetchAlgorithmDetailsSuccess(response));
  } catch (error) {
    yield put(ErrorSlice.pushError(error.message));
    yield put(fetchAlgorithmDetailsFailure(error.message));
  } finally {
    yield put(LoadingSlice.popLoading());
  }
}

function* handleTestSyntaxStart(action: PayloadAction<string>) {
  try {
    yield put(LoadingSlice.pushLoading());
    const response: SagaReturnType<typeof testSyntax> = yield call(
      testSyntax,
      action.payload
    );
    yield put(testSyntaxSuccess(response));
  } catch (error) {
    yield put(ErrorSlice.pushError(error.message));
    yield put(testSyntaxFailure(error.message));
  } finally {
    yield put(LoadingSlice.popLoading());
  }
}

function* watchFetchAlgorithmDetailsStart() {
  yield takeLeading(
    fetchAlgorithmDetailsStart.type,
    handleFetchAlgorithmDetailsStart
  );
}

function* watchTestSyntaxStart() {
  yield takeLeading(testSyntaxStart.type, handleTestSyntaxStart);
}

export function* saga() {
  yield all([
    fork(watchFetchAlgorithmDetailsStart),
    fork(watchTestSyntaxStart),
  ]);
}
