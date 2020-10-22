import { createSlice } from '@reduxjs/toolkit';

export interface LoadingState {
  loadings: number;
}

const initialState: LoadingState = {
  loadings: 0,
};

export const name = 'loadings' as const;

const loadings = createSlice({
  name,
  initialState,
  reducers: {
    pushLoading(state) {
      state.loadings++;
    },
    popLoading(state) {
      state.loadings--;
    },
  },
});

export const { pushLoading, popLoading } = loadings.actions;
export const { reducer } = loadings;
