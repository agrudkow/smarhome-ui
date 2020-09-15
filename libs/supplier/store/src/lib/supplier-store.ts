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
import { history, ErrorSlice, LoadingSlice } from '@smarthome/common/state';
import { AlgorithmsListSlice } from '@smarthome/supplier/feature/algorithms/state';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  router: connectRouter(history),
  [ErrorSlice.name]: ErrorSlice.reducer,
  [LoadingSlice.name]: LoadingSlice.reducer,
  [AlgorithmsListSlice.name]: AlgorithmsListSlice.reducer,
});

export const supplierStore = configureStore({
  reducer: rootReducer,
  middleware: [
    ...getDefaultMiddleware({
      thunk: false,
    }),
    sagaMiddleware,
    routerMiddleware(history),
  ],
});

export type RootState = DeepReadonly<ReturnType<typeof rootReducer>>;
export type RootStore = typeof supplierStore;

export function* rootSaga() {
  yield all([fork(AlgorithmsListSlice.saga)]);
}

sagaMiddleware.run(rootSaga);
