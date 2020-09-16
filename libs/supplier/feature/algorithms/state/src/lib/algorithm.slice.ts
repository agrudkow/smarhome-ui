// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { call, put } from '@redux-saga/core/effects';
// import { all, fork, takeLeading, SagaReturnType } from '@redux-saga/core/effects';
// import { ErrorSlice, LoadingSlice } from '@smarthome/common/state';
// import { AlgorithmDTO } from '@smarthome/data';

// interface AlgorithmState {
//   loading: boolean;
//   error: string | null;
//   algorithm: AlgorithmDTO[];
//   searchPhrase: string;
// }

// const initialState: AlgorithmState = {
//   loading: false,
//   error: null,
//   algorithm: [],
//   searchPhrase: '',
// };

// export const name = 'algorithm' as const;

// const algorithm = createSlice({
//   name,
//   initialState,
//   reducers: {
//     fetchAlgorithmStart(state, action: PayloadAction<string>) {
//       state.loading = true;
//       state.error = null;
//       state.searchPhrase = action.payload;
//     },
//     fetchAlgorithmSuccess(state, action: PayloadAction<AlgorithmDTO[]>) {
//       state.loading = false;
//       state.error = null;
//       state.algorithm = action.payload;
//     },
//     fetchAlgorithmFailure(state, action: PayloadAction<string>) {
//       state.loading = false;
//       state.error = action.payload;
//       state.algorithm = [];
//     },
//     clearError(state) {
//       state.error = null;
//     },
//   },
// });

// export const {
//   fetchAlgorithmFailure,
//   fetchAlgorithmStart,
//   fetchAlgorithmSuccess,
//   clearError,
// } = algorithm.actions;
// export const { reducer } = algorithm;

// function* handleFetchAlgorithmStart(action: PayloadAction<string>) {
//   try {
//     yield put(LoadingSlice.pushLoading());
//     const response: SagaReturnType<typeof fetchAlgorithmList> = yield call(
//       fetchAlgorithmList,
//       action.payload
//     );
//     yield put(fetchAlgorithmSuccess());
//   } catch (error) {
//     yield put(ErrorSlice.pushError(error.message));
//     yield put(fetchAlgorithmFailure(error.message));
//   } finally {
//     yield put(LoadingSlice.popLoading());
//   }
// }

// function* watchFetchAlgorithmStart() {
//   yield takeLeading(fetchAlgorithmStart.type, handleFetchAlgorithmStart);
// }

// export function* saga() {
//   yield all([fork(watchFetchAlgorithmStart)]);
// }
