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
import { history, ErrorSlice } from '@smarthome/common/state';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  router: connectRouter(history),
  [ErrorSlice.name]: ErrorSlice.reducer,
});

export const cunsumerStore = configureStore({
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
export type RootStore = typeof cunsumerStore;

export function* rootSaga() {
  yield all([]);
}

sagaMiddleware.run(rootSaga);
