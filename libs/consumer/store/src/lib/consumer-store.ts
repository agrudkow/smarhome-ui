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
  DatasetsListSlice,
  DatasetDetailsSlice,
} from '@smarthome/consumer/feature/datasets/state';
import {
  UpdateUserSlice,
  UserSlice,
} from '@smarthome/consumer/feature/user/state';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  router: connectRouter(history),
  [SnackbarSlice.name]: SnackbarSlice.reducer,
  [LoadingSlice.name]: LoadingSlice.reducer,
  [DatasetsListSlice.name]: DatasetsListSlice.reducer,
  [DatasetDetailsSlice.name]: DatasetDetailsSlice.reducer,
  [UserSlice.name]: UserSlice.reducer,
  [UpdateUserSlice.name]: UpdateUserSlice.reducer,
});

export const cunsumerStore = configureStore({
  reducer: rootReducer,
  middleware: [
    ...getDefaultMiddleware({
      thunk: false,
      serializableCheck: {
        ignoredActions: [DatasetDetailsSlice.uploadEntityStart.toString()],
      },
    }),
    sagaMiddleware,
    routerMiddleware(history),
  ],
});

export type RootState = DeepReadonly<ReturnType<typeof rootReducer>>;
export type RootStore = typeof cunsumerStore;

export function* rootSaga() {
  yield all([
    fork(DatasetsListSlice.saga),
    fork(DatasetDetailsSlice.saga),
    fork(UserSlice.saga),
    fork(UpdateUserSlice.saga),
  ]);
}

sagaMiddleware.run(rootSaga);
