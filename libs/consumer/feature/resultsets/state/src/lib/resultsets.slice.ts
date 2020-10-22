import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { call, put } from '@redux-saga/core/effects';
import {
  all,
  fork,
  takeLeading,
  SagaReturnType,
} from '@redux-saga/core/effects';
import { SnackbarSlice, LoadingSlice } from '@smarthome/common/state';
import { ExecutionBillingDTO } from '@smarthome/data';
import { fetchExecutionBillingList } from '@smarthome/consumer/feature/resultsets/service';

interface ResultsetsState {
  loading: boolean;
  error: string | null;
  resultsets: ExecutionBillingDTO[];
}

const initialState: ResultsetsState = {
  loading: false,
  error: null,
  resultsets: [],
};

export const name = 'resultsetsList' as const;

const resultsets = createSlice({
  name,
  initialState,
  reducers: {
    fetchResultsetsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchResultsetsSuccess(
      state,
      action: PayloadAction<ExecutionBillingDTO[]>
    ) {
      state.loading = false;
      state.error = null;
      state.resultsets = action.payload;
    },
    fetchResultsetsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
      state.resultsets = [];
    },
  },
});

export const {
  fetchResultsetsFailure,
  fetchResultsetsStart,
  fetchResultsetsSuccess,
} = resultsets.actions;
export const { reducer } = resultsets;

function* handleFetchResultsetsStart() {
  try {
    yield put(LoadingSlice.pushLoading());
    const response: SagaReturnType<typeof fetchExecutionBillingList> = yield call(
      fetchExecutionBillingList
    );
    yield put(fetchResultsetsSuccess(response));
  } catch (error) {
    yield put(
      SnackbarSlice.pushMessage({ message: error.message, variant: 'error' })
    );
    yield put(fetchResultsetsFailure(error.message));
  } finally {
    yield put(LoadingSlice.popLoading());
  }
}

function* watchFetchResultsetsStart() {
  yield takeLeading(fetchResultsetsStart.type, handleFetchResultsetsStart);
}

export function* saga() {
  yield all([fork(watchFetchResultsetsStart)]);
}
