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
import { ResultsetDTO } from '@smarthome/data';
import {
  fetchResultsetDetails,
  execute,
  ExecuteProps,
  deleteResultset,
} from '@smarthome/consumer/feature/resultsets/service';

interface ResultsetDetailsState {
  loading: boolean;
  error: string | null;
  resultsetDetails: ResultsetDTO | null;
  newResultsetId: string | null;
}

const initialState: ResultsetDetailsState = {
  loading: false,
  error: null,
  resultsetDetails: null,
  newResultsetId: null,
};

export const name = 'resultsetDetails' as const;

const resultsetDetails = createSlice({
  name,
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    fetchResultsetDetailsStart(state, action: PayloadAction<string>) {
      state.loading = true;
      state.error = null;
    },
    fetchResultsetDetailsSuccess(state, action: PayloadAction<ResultsetDTO>) {
      state.loading = false;
      state.error = null;
      state.resultsetDetails = action.payload;
    },
    fetchResultsetDetailsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
      state.resultsetDetails = null;
    },
    clearResultsetId(state) {
      state.newResultsetId = null;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    executeStart(state, action: PayloadAction<ExecuteProps>) {
      state.loading = true;
      state.error = null;
      state.newResultsetId = null;
    },
    executeSuccess(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = null;
      state.newResultsetId = action.payload;
    },
    executeFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    deleteResultsetStart(state, action: PayloadAction<string>) {
      state.loading = true;
      state.error = null;
    },
    deleteResultsetSuccess(state) {
      state.loading = false;
      state.error = null;
    },
    deleteResultsetFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchResultsetDetailsFailure,
  fetchResultsetDetailsStart,
  fetchResultsetDetailsSuccess,
  deleteResultsetFailure,
  deleteResultsetStart,
  deleteResultsetSuccess,
  executeFailure,
  executeStart,
  executeSuccess,
  clearResultsetId,
} = resultsetDetails.actions;
export const { reducer } = resultsetDetails;
// -------------------------handlers-------------------------------
function* handleFetchResultsetDetailsStart(action: PayloadAction<string>) {
  try {
    yield put(LoadingSlice.pushLoading());
    const response: SagaReturnType<typeof fetchResultsetDetails> = yield call(
      fetchResultsetDetails,
      action.payload
    );
    yield put(fetchResultsetDetailsSuccess(response));
  } catch (error) {
    yield put(
      SnackbarSlice.pushMessage({ message: error.message, variant: 'error' })
    );
    yield put(fetchResultsetDetailsFailure(error.message));
  } finally {
    yield put(LoadingSlice.popLoading());
  }
}

function* handleFetchResultsetDetailsFailure() {
  yield put(push(`/${ConsumerRoutes.Dashboard}`));
}

function* handleExecuteStart(action: PayloadAction<ExecuteProps>) {
  try {
    yield put(LoadingSlice.pushLoading());
    const response: SagaReturnType<typeof execute> = yield call(
      execute,
      action.payload
    );
    yield put(executeSuccess(response));
  } catch (error) {
    yield put(
      SnackbarSlice.pushMessage({ message: error.message, variant: 'error' })
    );
    yield put(executeFailure(error.message));
  } finally {
    yield put(LoadingSlice.popLoading());
  }
}

function* handleExecuteSuccess() {
  yield put(
    SnackbarSlice.pushMessage({
      message: 'Execution finished successfully',
      variant: 'success',
    })
  );
}

function* handleExecuteFailure() {
  yield put(push(`/${ConsumerRoutes.Dashboard}`));
}

function* handleDeleteResultsetStart(action: PayloadAction<string>) {
  try {
    yield put(LoadingSlice.pushLoading());
    yield call(deleteResultset, action.payload);
    yield put(deleteResultsetSuccess());
  } catch (error) {
    yield put(
      SnackbarSlice.pushMessage({ message: error.message, variant: 'error' })
    );
    yield put(deleteResultsetFailure(error.message));
  } finally {
    yield put(LoadingSlice.popLoading());
  }
}

function* handleDeleteResultsetSuccess() {
  yield put(push(`/${ConsumerRoutes.Datasets}`));
  yield put(
    SnackbarSlice.pushMessage({
      message: 'Resultset was successfully deleted.',
      variant: 'success',
    })
  );
}

// ------------------watchers--------------------------------------------
function* watchFetchResultsetDetailsStart() {
  yield takeLeading(
    fetchResultsetDetailsStart.type,
    handleFetchResultsetDetailsStart
  );
}

function* watchFetchResultsetDetailsFailure() {
  yield takeEvery(
    fetchResultsetDetailsFailure.type,
    handleFetchResultsetDetailsFailure
  );
}

function* watchExecuteStart() {
  yield takeLeading(executeStart.type, handleExecuteStart);
}

function* watchExecuteSuccess() {
  yield takeEvery(executeSuccess.type, handleExecuteSuccess);
}

function* watchExecuteFailure() {
  yield takeEvery(executeFailure.type, handleExecuteFailure);
}

function* watchDeleteResultsetStart() {
  yield takeLeading(deleteResultsetStart.type, handleDeleteResultsetStart);
}

function* watchDeleteResultsetSuccess() {
  yield takeEvery(deleteResultsetSuccess.type, handleDeleteResultsetSuccess);
}

export function* saga() {
  yield all([
    fork(watchFetchResultsetDetailsStart),
    fork(watchFetchResultsetDetailsFailure),
    fork(watchExecuteStart),
    fork(watchExecuteSuccess),
    fork(watchExecuteFailure),
    fork(watchDeleteResultsetStart),
    fork(watchDeleteResultsetSuccess),
  ]);
}
