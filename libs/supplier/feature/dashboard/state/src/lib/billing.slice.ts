import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { call, put } from '@redux-saga/core/effects';
import {
  all,
  fork,
  takeLatest,
  SagaReturnType,
} from '@redux-saga/core/effects';
import { SnackbarSlice, LoadingSlice } from '@smarthome/common/state';
import {
  SupplierTotalMonthlyBillingDTO,
  AlgorithmTopExecDTO,
  AlgorithmDTO,
} from '@smarthome/data';
import { fetchTotalBilling } from '@smarthome/supplier/feature/dashboard/service';

interface BillingState {
  loading: boolean;
  error: string | null;
  billing: SupplierTotalMonthlyBillingDTO | null;
  topExecutionAlgorithms: AlgorithmTopExecDTO[];
  topRatingAlgorithms: AlgorithmDTO[];
}

const initialState: BillingState = {
  loading: false,
  error: null,
  billing: null,
  topExecutionAlgorithms: [],
  topRatingAlgorithms: [],
};

export const name = 'billing' as const;

const billing = createSlice({
  name,
  initialState,
  reducers: {
    fetchBillingStart(
      state,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      action: PayloadAction<{
        startDate: number;
        endDate: number;
      }>
    ) {
      state.loading = true;
      state.error = null;
    },
    fetchBillingSuccess(
      state,
      action: PayloadAction<SupplierTotalMonthlyBillingDTO>
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
  action: PayloadAction<{ startDate: number; endDate: number }>
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
