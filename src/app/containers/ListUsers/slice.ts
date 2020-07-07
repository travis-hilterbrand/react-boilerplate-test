import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the ListUsers container
export const initialState: ContainerState = {
  test: 'test-initial',
};

const listUsersSlice = createSlice({
  name: 'listUsers',
  initialState,
  reducers: {
    setTest(state, action: PayloadAction<ContainerState>) {
      const { test } = action.payload;
      state.test = test;
    },
  },
});

export const { actions, reducer, name: sliceKey } = listUsersSlice;
