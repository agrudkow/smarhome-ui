import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all, fork } from '@redux-saga/core/effects';
import { connectRouter } from 'connected-react-router';
import { routerMiddleware } from 'connected-react-router';
import { DeepReadonly } from 'utility-types';
import { history, SnackbarSlice, LoadingSlice } from '@smarthome/common/state';
import {
  AlgorithmsListSlice,
  AlgorithmDetailsSlice,
} from '@smarthome/supplier/feature/algorithms/state';
import {
  UserSlice,
  UpdateUserSlice,
} from '@smarthome/supplier/feature/user/state';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  router: connectRouter(history),
  [SnackbarSlice.name]: SnackbarSlice.reducer,
  [LoadingSlice.name]: LoadingSlice.reducer,
  [AlgorithmsListSlice.name]: AlgorithmsListSlice.reducer,
  [UserSlice.name]: UserSlice.reducer,
  [UpdateUserSlice.name]: UpdateUserSlice.reducer,
  [AlgorithmDetailsSlice.name]: AlgorithmDetailsSlice.reducer,
});

export const supplierStore = configureStore({
  reducer: rootReducer,
  middleware: [
    ...getDefaultMiddleware({
      thunk: false,
      serializableCheck: {
        ignoredActions: [
          AlgorithmDetailsSlice.uploadSourceCodeStart.toString(),
        ],
      },
    }),
    sagaMiddleware,
    routerMiddleware(history),
  ],
});

export type RootState = DeepReadonly<ReturnType<typeof rootReducer>>;
export type RootStore = typeof supplierStore;

export function* rootSaga() {
  yield all([
    fork(AlgorithmsListSlice.saga),
    fork(UserSlice.saga),
    fork(UpdateUserSlice.saga),
    fork(AlgorithmDetailsSlice.saga),
  ]);
}

sagaMiddleware.run(rootSaga);
