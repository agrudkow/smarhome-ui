import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { call, put } from '@redux-saga/core/effects';
import {
  all,
  fork,
  takeLatest,
  SagaReturnType,
} from '@redux-saga/core/effects';
import { SnackbarSlice, LoadingSlice } from '@smarthome/common/state';
import { ConsumerTotalMonthlyBillingDTO } from '@smarthome/data';
import {
  fetchTotalBilling,
  FetchTotalBillingProps,
} from '@smarthome/consumer/feature/dashboard/service';

interface BillingState {
  loading: boolean;
  error: string | null;
  billing: ConsumerTotalMonthlyBillingDTO | null;
}

const initialState: BillingState = {
  loading: false,
  error: null,
  billing: null,
};

export const name = 'billing' as const;

const billing = createSlice({
  name,
  initialState,
  reducers: {
    fetchBillingStart(
      state,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      action: PayloadAction<FetchTotalBillingProps>
    ) {
      state.loading = true;
      state.error = null;
    },
    fetchBillingSuccess(
      state,
      action: PayloadAction<ConsumerTotalMonthlyBillingDTO>
    ) {
      state.loading = false;
      state.error = null;
      state.billing = action.payload;
    },
    fetchBillingFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchBillingFailure,
  fetchBillingStart,
  fetchBillingSuccess,
} = billing.actions;
export const { reducer } = billing;

function* handleFetchBillingStart(
  action: PayloadAction<FetchTotalBillingProps>
) {
  try {
    yield put(LoadingSlice.pushLoading());
    const response: SagaReturnType<typeof fetchTotalBilling> = yield call(
      fetchTotalBilling,
      action.payload
    );
    yield put(fetchBillingSuccess(response));
  } catch (error) {
    yield put(
      SnackbarSlice.pushMessage({ message: error.message, variant: 'error' })
    );
    yield put(fetchBillingFailure(error.message));
  } finally {
    yield put(LoadingSlice.popLoading());
  }
}

function* watchFetchBillingStart() {
  yield takeLatest(fetchBillingStart.type, handleFetchBillingStart);
}

export function* saga() {
  yield all([fork(watchFetchBillingStart)]);
}
