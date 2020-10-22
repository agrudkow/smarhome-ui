import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { call, put } from '@redux-saga/core/effects';
import {
  all,
  fork,
  takeLeading,
  SagaReturnType,
} from '@redux-saga/core/effects';
import { SnackbarSlice, LoadingSlice } from '@smarthome/common/state';
import { UserDTO } from '@smarthome/data';
import {
  fetchUserDetails,
  signUp,
  SignUpProps,
  SessionProps,
} from '@smarthome/consumer/feature/user/service';
import { push } from 'connected-react-router';
import { ConsumerRoutes } from '@smarthome/common/service';

interface UserState {
  loading: boolean;
  error: string | null;
  user: UserDTO | null;
  idToken: string | null;
  expiresAt: number | null;
}

const initialState: UserState = {
  loading: false,
  error: null,
  user: null,
  idToken: null,
  expiresAt: null,
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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    signUpStart(state, action: PayloadAction<SignUpProps>) {
      state.loading = true;
      state.error = null;
      state.idToken = null;
      state.expiresAt = null;
    },
    signUpSuccess(
      state,
      { payload: { expiresAt, idToken } }: PayloadAction<SessionProps>
    ) {
      state.loading = false;
      state.error = null;
      state.idToken = idToken;
      state.expiresAt = expiresAt;
    },
    signUpFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    login(
      state,
      { payload: { expiresAt, idToken } }: PayloadAction<SessionProps>
    ) {
      state.loading = false;
      state.error = null;
      state.idToken = idToken;
      state.expiresAt = expiresAt;
    },
    logout(state) {
      state.loading = false;
      state.error = null;
      state.idToken = null;
      state.expiresAt = null;
    },
    clear(state) {
      state.expiresAt = 0;
    },
  },
});

export const {
  fetchUserFailure,
  fetchUserStart,
  fetchUserSuccess,
  signUpFailure,
  signUpStart,
  signUpSuccess,
  login,
  logout,
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
    yield put(
      SnackbarSlice.pushMessage({ message: error.message, variant: 'error' })
    );
    yield put(fetchUserFailure(error.message));
  } finally {
    yield put(LoadingSlice.popLoading());
  }
}

function* handleSignUpStart(action: PayloadAction<SignUpProps>) {
  try {
    yield put(LoadingSlice.pushLoading());
    yield call(signUp, action.payload);

    const { expiresAt, idToken } = action.payload;

    yield put(signUpSuccess({ expiresAt, idToken }));
  } catch (error) {
    yield put(
      SnackbarSlice.pushMessage({ message: error.message, variant: 'error' })
    );
    yield put(signUpFailure(error.message));
  } finally {
    yield put(LoadingSlice.popLoading());
  }
}

function* handleSignUpSuccess() {
  yield put(push(`/${ConsumerRoutes.Dashboard}`));
}

function* handleLogin() {
  yield put(push(`/${ConsumerRoutes.Dashboard}`));
}

function* handleLogout() {
  yield put(push(`/${ConsumerRoutes.SignIn}`));
}

function* watchFetchUserStart() {
  yield takeLeading(fetchUserStart.type, handleFetchUserStart);
}

function* watchSingUpStart() {
  yield takeLeading(signUpStart.type, handleSignUpStart);
}

function* watchSingUpSuccess() {
  yield takeLeading(signUpSuccess.type, handleSignUpSuccess);
}

function* watchLogin() {
  yield takeLeading(login.type, handleLogin);
}

function* watchLogout() {
  yield takeLeading(logout.type, handleLogout);
}

export function* saga() {
  yield all([
    fork(watchFetchUserStart),
    fork(watchSingUpStart),
    fork(watchSingUpSuccess),
    fork(watchLogin),
    fork(watchLogout),
  ]);
}
