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
import { SupplierRoutes } from '@smarthome/common/service';
import { AlgorithmDetailsDTO, AlgorithmStatisticsDTO } from '@smarthome/data';
import {
  fetchAlgorithmDetails,
  testSyntax,
  uploadSourceCode,
  addAlgorithm,
  deleteAlgorithm,
  UploadSourceCodeProps,
  updateAlgorithmDetails,
  fetchAlgorithmStatistics,
} from '@smarthome/supplier/feature/algorithms/service';

interface AlgorithmDetailsState {
  loading: boolean;
  error: string | null;
  algorithmDetails: AlgorithmDetailsDTO | null;
  syntaxTestStatus: string | null;
  statistics: Array<AlgorithmStatisticsDTO> | null;
}

const initialState: AlgorithmDetailsState = {
  loading: false,
  error: null,
  algorithmDetails: null,
  syntaxTestStatus: null,
  statistics: null,
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
      state.syntaxTestStatus = action.payload;
    },
    testSyntaxFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
      state.syntaxTestStatus = null;
    },
    uploadSourceCodeStart(
      state,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      action: PayloadAction<UploadSourceCodeProps>
    ) {
      state.loading = true;
      state.error = null;
    },
    uploadSourceCodeSuccess(state) {
      state.loading = false;
      state.error = null;
    },
    uploadSourceCodeFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addAlgorithmStart(
      state,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      action: PayloadAction<Omit<AlgorithmDetailsDTO, 'algorithmId'>>
    ) {
      state.loading = true;
      state.error = null;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    addAlgorithmSuccess(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = null;
    },
    addAlgorithmFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    deleteAlgorithmStart(state, action: PayloadAction<string>) {
      state.loading = true;
      state.error = null;
    },
    deleteAlgorithmSuccess(state) {
      state.loading = false;
      state.error = null;
    },
    deleteAlgorithmFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    updateAlgorithmStart(state, action: PayloadAction<AlgorithmDetailsDTO>) {
      state.loading = true;
      state.error = null;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    updateAlgorithmSuccess(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = null;
    },
    updateAlgorithmFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    fetchAlgorithmStatisticsStart(
      state,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      action: PayloadAction<{
        algorithmId: string;
        startDate: number;
        endData: number;
      }>
    ) {
      state.loading = true;
      state.error = null;
    },
    fetchAlgorithmStatisticsSuccess(
      state,
      action: PayloadAction<AlgorithmStatisticsDTO[]>
    ) {
      state.loading = false;
      state.error = null;
      state.statistics = action.payload;
    },
    fetchAlgorithmStatisticsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
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
  uploadSourceCodeFailure,
  uploadSourceCodeStart,
  uploadSourceCodeSuccess,
  addAlgorithmFailure,
  addAlgorithmStart,
  addAlgorithmSuccess,
  deleteAlgorithmFailure,
  deleteAlgorithmStart,
  deleteAlgorithmSuccess,
  updateAlgorithmFailure,
  updateAlgorithmStart,
  updateAlgorithmSuccess,
  fetchAlgorithmStatisticsFailure,
  fetchAlgorithmStatisticsStart,
  fetchAlgorithmStatisticsSuccess,
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
  yield put(push(`/${SupplierRoutes.Algorithms}`));
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
    yield put(
      SnackbarSlice.pushMessage({ message: error.message, variant: 'error' })
    );
    yield put(testSyntaxFailure(error.message));
  } finally {
    yield put(LoadingSlice.popLoading());
  }
}

function* handleUploadSourceCodeStart(
  action: PayloadAction<UploadSourceCodeProps>
) {
  try {
    yield put(LoadingSlice.pushLoading());
    yield call(uploadSourceCode, action.payload);
    yield put(uploadSourceCodeSuccess());
  } catch (error) {
    yield put(
      SnackbarSlice.pushMessage({ message: error.message, variant: 'error' })
    );
    yield put(uploadSourceCodeFailure(error.message));
  } finally {
    yield put(LoadingSlice.popLoading());
  }
}

function* handleUploadSourceCodeSuccess() {
  yield put(
    SnackbarSlice.pushMessage({
      message: 'Source code was successfully updated.',
      variant: 'success',
    })
  );
}

function* handleAddAlgorithmStart(
  action: PayloadAction<Omit<AlgorithmDetailsDTO, 'algorithmId'>>
) {
  try {
    yield put(LoadingSlice.pushLoading());
    const response: SagaReturnType<typeof addAlgorithm> = yield call(
      addAlgorithm,
      action.payload
    );
    yield put(addAlgorithmSuccess(response));
  } catch (error) {
    yield put(
      SnackbarSlice.pushMessage({ message: error.message, variant: 'error' })
    );
    yield put(addAlgorithmFailure(error.message));
  } finally {
    yield put(LoadingSlice.popLoading());
  }
}

function* handleAddAlgorithmSccess(action: PayloadAction<string>) {
  yield put(push(`/${SupplierRoutes.Algorithms}/${action.payload}`));
  yield put(
    SnackbarSlice.pushMessage({
      message: 'Algorithm was successfully created.',
      variant: 'success',
    })
  );
}

function* handleDeleteAlgorithmStart(action: PayloadAction<string>) {
  try {
    yield put(LoadingSlice.pushLoading());
    yield call(deleteAlgorithm, action.payload);
    yield put(deleteAlgorithmSuccess());
  } catch (error) {
    yield put(
      SnackbarSlice.pushMessage({ message: error.message, variant: 'error' })
    );
    yield put(deleteAlgorithmFailure(error.message));
  } finally {
    yield put(LoadingSlice.popLoading());
  }
}

function* handleDeleteAlgorithmSuccess() {
  yield put(push(`/${SupplierRoutes.Algorithms}`));
  yield put(
    SnackbarSlice.pushMessage({
      message: 'Algorithm was successfully deleted.',
      variant: 'success',
    })
  );
}
function* handleUpdateAlgorithmStart(
  action: PayloadAction<AlgorithmDetailsDTO>
) {
  try {
    yield put(LoadingSlice.pushLoading());
    yield call(updateAlgorithmDetails, action.payload);
    yield put(updateAlgorithmSuccess(action.payload.algorithmId));
  } catch (error) {
    yield put(
      SnackbarSlice.pushMessage({ message: error.message, variant: 'error' })
    );
    yield put(updateAlgorithmFailure(error.message));
  } finally {
    yield put(LoadingSlice.popLoading());
  }
}

function* handleUpdateAlgorithmSuccess(action: PayloadAction<string>) {
  yield put(
    SnackbarSlice.pushMessage({
      message: 'Algorithm was successfully updated.',
      variant: 'success',
    })
  );
  yield put(fetchAlgorithmDetailsStart(action.payload));
}

function* handleFetchAlgorithmStatisticsStart(
  action: PayloadAction<{
    algorithmId: string;
    startDate: number;
    endDate: number;
  }>
) {
  try {
    yield put(LoadingSlice.pushLoading());
    const response: SagaReturnType<typeof fetchAlgorithmStatistics> = yield call(
      fetchAlgorithmStatistics,
      action.payload
    );
    yield put(fetchAlgorithmStatisticsSuccess(response));
  } catch (error) {
    yield put(
      SnackbarSlice.pushMessage({ message: error.message, variant: 'error' })
    );
    yield put(fetchAlgorithmStatisticsFailure(error.message));
  } finally {
    yield put(LoadingSlice.popLoading());
  }
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

function* watchTestSyntaxStart() {
  yield takeLeading(testSyntaxStart.type, handleTestSyntaxStart);
}

function* watchUploadSourceCodeStart() {
  yield takeLeading(uploadSourceCodeStart.type, handleUploadSourceCodeStart);
}

function* watchUploadSourceCodeSuccess() {
  yield takeEvery(uploadSourceCodeSuccess.type, handleUploadSourceCodeSuccess);
}

function* watchAddAlgorithmStart() {
  yield takeLeading(addAlgorithmStart.type, handleAddAlgorithmStart);
}

function* watchAddAlgorithmSuccess() {
  yield takeEvery(addAlgorithmSuccess.type, handleAddAlgorithmSccess);
}

function* watchDeleteAlgorithmStart() {
  yield takeLeading(deleteAlgorithmStart.type, handleDeleteAlgorithmStart);
}

function* watchDeleteAlgorithmSuccess() {
  yield takeEvery(deleteAlgorithmSuccess.type, handleDeleteAlgorithmSuccess);
}

function* watchUpdateAlgorithmStart() {
  yield takeLeading(updateAlgorithmStart.type, handleUpdateAlgorithmStart);
}

function* watchUpdateAlgorithmSuccess() {
  yield takeEvery(updateAlgorithmSuccess.type, handleUpdateAlgorithmSuccess);
}

function* watchFetchAlgorithmStatisticsStart() {
  yield takeLeading(
    fetchAlgorithmStatisticsStart.type,
    handleFetchAlgorithmStatisticsStart
  );
}

export function* saga() {
  yield all([
    fork(watchFetchAlgorithmDetailsStart),
    fork(watchFetchAlgorithmDetailsFailure),
    fork(watchTestSyntaxStart),
    fork(watchUploadSourceCodeStart),
    fork(watchUploadSourceCodeSuccess),
    fork(watchAddAlgorithmStart),
    fork(watchAddAlgorithmSuccess),
    fork(watchDeleteAlgorithmStart),
    fork(watchDeleteAlgorithmSuccess),
    fork(watchUpdateAlgorithmStart),
    fork(watchUpdateAlgorithmSuccess),
    fork(watchFetchAlgorithmStatisticsStart),
  ]);
}
