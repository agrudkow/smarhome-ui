import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { call, put } from '@redux-saga/core/effects';
import { all, fork, takeLeading } from '@redux-saga/core/effects';
import { ErrorSlice, LoadingSlice } from '@smarthome/common/state';
import { updateUser } from '@smarthome/supplier/feature/user/service';
import { UserDTO } from '@smarthome/data';

interface UserState {
  loading: boolean;
  error: string | null;
  finished: boolean;
}

const initialState: UserState = {
  loading: false,
  error: null,
  finished: false,
};

export const name = 'updateUser' as const;

const user = createSlice({
  name,
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    updateUserStart(state, _: PayloadAction<UserDTO>) {
      state.loading = true;
      state.error = null;
    },
    updateUserSuccess(state) {
      state.loading = false;
      state.finished = true;
      state.error = null;
    },
    updateUserFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.finished = true;
      state.error = action.payload;
    },
    resetFinish(state) {
      state.finished = false;
    },
  },
});

export const {
  updateUserFailure,
  updateUserStart,
  updateUserSuccess,
  resetFinish,
} = user.actions;
export const { reducer } = user;

function* handleupdateUserStart(action: PayloadAction<UserDTO>) {
  try {
    yield put(LoadingSlice.pushLoading());
    yield call(updateUser, action.payload);
    yield put(updateUserSuccess());
  } catch (error) {
    yield put(ErrorSlice.pushError(error.message));
    yield put(updateUserFailure(error.message));
  } finally {
    yield put(LoadingSlice.popLoading());
  }
}

function* watchUpdateUserStart() {
  yield takeLeading(updateUserStart.type, handleupdateUserStart);
}

export function* saga() {
  yield all([fork(watchUpdateUserStart)]);
}
