import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { call, put } from '@redux-saga/core/effects';
import {
  all,
  fork,
  takeLeading,
  SagaReturnType,
} from '@redux-saga/core/effects';
import { SnackbarSlice, LoadingSlice } from '@smarthome/common/state';
import { AlgorithmDTO } from '@smarthome/data';

interface TopAlgorithmsState {
  loading: boolean;
  error: string | null;
  topalgorithms: AlgorithmDTO[];
  searchPhrase: string;
}

const initialState: TopAlgorithmsState = {
  loading: false,
  error: null,
  topalgorithms: [],
  searchPhrase: '',
};

export const name = 'topAlgorithms' as const;

const topalgorithms = createSlice({
  name,
  initialState,
  reducers: {
    fetchTopAlgorithmsStart(state, action: PayloadAction<string>) {
      state.loading = true;
      state.error = null;
      state.searchPhrase = action.payload;
    },
    fetchTopAlgorithmsSuccess(state, action: PayloadAction<AlgorithmDTO[]>) {
      state.loading = false;
      state.error = null;
      state.topalgorithms = action.payload;
    },
    fetchTopAlgorithmsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
      state.topalgorithms = [];
    },
    clearError(state) {
      state.error = null;
    },
  },
});

export const {
  fetchTopAlgorithmsFailure,
  fetchTopAlgorithmsStart,
  fetchTopAlgorithmsSuccess,
  clearError,
} = topalgorithms.actions;
export const { reducer } = topalgorithms;

function* handleFetchTopAlgorithmsStart(action: PayloadAction<string>) {
  try {
    console.log('');
  } catch (error) {
    yield put(
      SnackbarSlice.pushMessage({ message: error.message, variant: 'error' })
    );
    yield put(fetchTopAlgorithmsFailure(error.message));
  } finally {
    yield put(LoadingSlice.popLoading());
  }
}

function* watchFetchTopAlgorithmsStart() {
  yield takeLeading(
    fetchTopAlgorithmsStart.type,
    handleFetchTopAlgorithmsStart
  );
}

export function* saga() {
  yield all([fork(watchFetchTopAlgorithmsStart)]);
}
