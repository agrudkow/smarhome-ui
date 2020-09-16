import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  call,
  put,
  all,
  fork,
  takeLeading,
  takeEvery,
} from '@redux-saga/core/effects';
import { push } from 'connected-react-router';
import { SnackbarSlice, LoadingSlice } from '@smarthome/common/state';
import { SupplierRoutes } from '@smarthome/common/service';
import { updateUser } from '@smarthome/supplier/feature/user/service';
import { UserDTO } from '@smarthome/data';

interface UserState {
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  loading: false,
  error: null,
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
      state.error = null;
    },
    updateUserFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  updateUserFailure,
  updateUserStart,
  updateUserSuccess,
} = user.actions;
export const { reducer } = user;

function* handleupdateUserStart(action: PayloadAction<UserDTO>) {
  try {
    yield put(LoadingSlice.pushLoading());
    yield call(updateUser, action.payload);
    yield put(updateUserSuccess());
  } catch (error) {
    yield put(
      SnackbarSlice.pushMessage({ message: error.message, variant: 'error' })
    );
    yield put(updateUserFailure(error.message));
  } finally {
    yield put(LoadingSlice.popLoading());
  }
}

function* handleupdateUserSuccess() {
  yield put(push(`/${SupplierRoutes.User}`));
  yield put(
    SnackbarSlice.pushMessage({
      message: 'User was successfully updated.',
      variant: 'success',
    })
  );
}

function* watchUpdateUserStart() {
  yield takeLeading(updateUserStart.type, handleupdateUserStart);
}

function* watchUpdateUserSuccess() {
  yield takeEvery(updateUserSuccess.type, handleupdateUserSuccess);
}

export function* saga() {
  yield all([fork(watchUpdateUserStart), fork(watchUpdateUserSuccess)]);
}
