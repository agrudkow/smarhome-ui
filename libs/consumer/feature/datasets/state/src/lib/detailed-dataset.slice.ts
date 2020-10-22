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
import { DatasetDetailsDTO } from '@smarthome/data';
import {
  fetchDatasetDetails,
  UploadEntityProps,
  uploadEntity,
  deleteDataset,
  updateDatasetDetails,
  addDataset,
} from '@smarthome/consumer/feature/datasets/service';

interface DatasetDetailsState {
  loading: boolean;
  error: string | null;
  datasetDetails: DatasetDetailsDTO | null;
  syntaxTestStatus: string | null;
}

const initialState: DatasetDetailsState = {
  loading: false,
  error: null,
  datasetDetails: null,
  syntaxTestStatus: null,
};

export const name = 'datasetDetails' as const;

const datasetDetails = createSlice({
  name,
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    fetchDatasetDetailsStart(state, action: PayloadAction<string>) {
      state.loading = true;
      state.error = null;
    },
    fetchDatasetDetailsSuccess(
      state,
      action: PayloadAction<DatasetDetailsDTO>
    ) {
      state.loading = false;
      state.error = null;
      state.datasetDetails = action.payload;
    },
    fetchDatasetDetailsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
      state.datasetDetails = null;
    },
    uploadEntityStart(
      state,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      action: PayloadAction<UploadEntityProps>
    ) {
      state.loading = true;
      state.error = null;
    },
    uploadEntitySuccess(state) {
      state.loading = false;
      state.error = null;
    },
    uploadEntityFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addDatasetStart(
      state,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      action: PayloadAction<Omit<DatasetDetailsDTO, 'datasetId'>>
    ) {
      state.loading = true;
      state.error = null;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    addDatasetSuccess(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = null;
    },
    addDatasetFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    deleteDatasetStart(state, action: PayloadAction<string>) {
      state.loading = true;
      state.error = null;
    },
    deleteDatasetSuccess(state) {
      state.loading = false;
      state.error = null;
    },
    deleteDatasetFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    updateDatasetStart(state, action: PayloadAction<DatasetDetailsDTO>) {
      state.loading = true;
      state.error = null;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    updateDatasetSuccess(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = null;
    },
    updateDatasetFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchDatasetDetailsFailure,
  fetchDatasetDetailsStart,
  fetchDatasetDetailsSuccess,
  uploadEntityFailure,
  uploadEntityStart,
  uploadEntitySuccess,
  addDatasetFailure,
  addDatasetStart,
  addDatasetSuccess,
  deleteDatasetFailure,
  deleteDatasetStart,
  deleteDatasetSuccess,
  updateDatasetFailure,
  updateDatasetStart,
  updateDatasetSuccess,
} = datasetDetails.actions;
export const { reducer } = datasetDetails;
// -------------------------handlers-------------------------------
function* handleFetchDatasetDetailsStart(action: PayloadAction<string>) {
  try {
    yield put(LoadingSlice.pushLoading());
    const response: SagaReturnType<typeof fetchDatasetDetails> = yield call(
      fetchDatasetDetails,
      action.payload
    );
    yield put(fetchDatasetDetailsSuccess(response));
  } catch (error) {
    yield put(
      SnackbarSlice.pushMessage({ message: error.message, variant: 'error' })
    );
    yield put(fetchDatasetDetailsFailure(error.message));
  } finally {
    yield put(LoadingSlice.popLoading());
  }
}
function* handleFetchDatasetDetailsFailure() {
  yield put(push(`/${ConsumerRoutes.Datasets}`));
}

function* handleUploadEntityStart(action: PayloadAction<UploadEntityProps>) {
  try {
    yield put(LoadingSlice.pushLoading());
    yield call(uploadEntity, action.payload);
    yield put(uploadEntitySuccess());
  } catch (error) {
    yield put(
      SnackbarSlice.pushMessage({ message: error.message, variant: 'error' })
    );
    yield put(uploadEntityFailure(error.message));
  } finally {
    yield put(LoadingSlice.popLoading());
  }
}

function* handleUploadEntitySuccess() {
  yield put(
    SnackbarSlice.pushMessage({
      message: 'Entity was sucessfully added.',
      variant: 'success',
    })
  );
}

function* handleAddDatasetStart(
  action: PayloadAction<Omit<DatasetDetailsDTO, 'datasetId'>>
) {
  try {
    yield put(LoadingSlice.pushLoading());
    const response: SagaReturnType<typeof addDataset> = yield call(
      addDataset,
      action.payload
    );
    yield put(addDatasetSuccess(response));
  } catch (error) {
    yield put(
      SnackbarSlice.pushMessage({ message: error.message, variant: 'error' })
    );
    yield put(addDatasetFailure(error.message));
  } finally {
    yield put(LoadingSlice.popLoading());
  }
}

function* handleAddDatasetSccess(action: PayloadAction<string>) {
  yield put(push(`/${ConsumerRoutes.Datasets}/${action.payload}`));
  yield put(
    SnackbarSlice.pushMessage({
      message: 'Dataset was successfully created.',
      variant: 'success',
    })
  );
}

function* handleDeleteDatasetStart(action: PayloadAction<string>) {
  try {
    yield put(LoadingSlice.pushLoading());
    yield call(deleteDataset, action.payload);
    yield put(deleteDatasetSuccess());
  } catch (error) {
    yield put(
      SnackbarSlice.pushMessage({ message: error.message, variant: 'error' })
    );
    yield put(deleteDatasetFailure(error.message));
  } finally {
    yield put(LoadingSlice.popLoading());
  }
}

function* handleDeleteDatasetSuccess() {
  yield put(push(`/${ConsumerRoutes.Datasets}`));
  yield put(
    SnackbarSlice.pushMessage({
      message: 'Dataset was successfully deleted.',
      variant: 'success',
    })
  );
}

function* handleUpdateDatasetStart(action: PayloadAction<DatasetDetailsDTO>) {
  try {
    yield put(LoadingSlice.pushLoading());
    yield call(updateDatasetDetails, action.payload);
    yield put(updateDatasetSuccess(action.payload.datasetId));
  } catch (error) {
    yield put(
      SnackbarSlice.pushMessage({ message: error.message, variant: 'error' })
    );
    yield put(updateDatasetFailure(error.message));
  } finally {
    yield put(LoadingSlice.popLoading());
  }
}

function* handleUpdateDatasetSuccess(action: PayloadAction<string>) {
  yield put(
    SnackbarSlice.pushMessage({
      message: 'Dataset was successfully updated.',
      variant: 'success',
    })
  );
  yield put(fetchDatasetDetailsStart(action.payload));
}

// ------------------watchers--------------------------------------------
function* watchFetchDatasetDetailsStart() {
  yield takeLeading(
    fetchDatasetDetailsStart.type,
    handleFetchDatasetDetailsStart
  );
}

function* watchFetchDatasetDetailsFailure() {
  yield takeEvery(
    fetchDatasetDetailsFailure.type,
    handleFetchDatasetDetailsFailure
  );
}

function* watchUploadEntityStart() {
  yield takeLeading(uploadEntityStart.type, handleUploadEntityStart);
}

function* watchUploadEntitySuccess() {
  yield takeEvery(uploadEntitySuccess.type, handleUploadEntitySuccess);
}

function* watchAddDatasetStart() {
  yield takeLeading(addDatasetStart.type, handleAddDatasetStart);
}

function* watchAddDatasetSuccess() {
  yield takeEvery(addDatasetSuccess.type, handleAddDatasetSccess);
}

function* watchDeleteDatasetStart() {
  yield takeLeading(deleteDatasetStart.type, handleDeleteDatasetStart);
}

function* watchDeleteDatasetSuccess() {
  yield takeEvery(deleteDatasetSuccess.type, handleDeleteDatasetSuccess);
}

function* watchUpdateDatasetStart() {
  yield takeLeading(updateDatasetStart.type, handleUpdateDatasetStart);
}

function* watchUpdateDatasetSuccess() {
  yield takeEvery(updateDatasetSuccess.type, handleUpdateDatasetSuccess);
}

export function* saga() {
  yield all([
    fork(watchFetchDatasetDetailsStart),
    fork(watchFetchDatasetDetailsFailure),
    fork(watchUploadEntityStart),
    fork(watchUploadEntitySuccess),
    fork(watchAddDatasetStart),
    fork(watchAddDatasetSuccess),
    fork(watchDeleteDatasetStart),
    fork(watchDeleteDatasetSuccess),
    fork(watchUpdateDatasetStart),
    fork(watchUpdateDatasetSuccess),
  ]);
}
