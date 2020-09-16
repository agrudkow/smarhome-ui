import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { call, put } from '@redux-saga/core/effects';
import { all, fork, takeEvery, SagaReturnType } from '@redux-saga/core/effects';
import { ErrorSlice, LoadingSlice } from '@smarthome/common/state';
import { UserDTO } from '@smarthome/data';
import { fetchUserDetails } from '@smarthome/supplier/feature/user/service';

interface UserState {
  loading: boolean;
  error: string | null;
  user: UserDTO | null;
}

const initialState: UserState = {
  loading: false,
  error: null,
  user: null,
};

export const name = 'user' as const;

const user = createSlice({
  name,
  initialState,
  reducers: {
    fetchUserStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchUserSuccess(state, action: PayloadAction<UserDTO>) {
      state.loading = false;
      state.error = null;
      state.user = action.payload;
    },
    fetchUserFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchUserFailure,
  fetchUserStart,
  fetchUserSuccess,
} = user.actions;
export const { reducer } = user;

function* handleFetchUserStart() {
  try {
    yield put(LoadingSlice.pushLoading());
    const response: SagaReturnType<typeof fetchUserDetails> = yield call(
      fetchUserDetails
    );
    yield put(fetchUserSuccess(response));
  } catch (error) {
    yield put(ErrorSlice.pushError(error.message));
    yield put(fetchUserFailure(error.message));
  } finally {
    yield put(LoadingSlice.popLoading());
  }
}

function* watchPostUserStart() {
  yield takeEvery(fetchUserStart.type, handleFetchUserStart);
}

export function* saga() {
  yield all([fork(watchPostUserStart)]);
}
