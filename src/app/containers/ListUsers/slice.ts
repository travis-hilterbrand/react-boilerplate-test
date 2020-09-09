import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState, SetTestPayload } from './types';

// The initial state of the ListUsers container
export const initialState: ContainerState = {
  test: 'test-initial',
  mountCount: 0,
};

const listUsersSlice = createSlice({
  name: 'listUsers',
  initialState,
  reducers: {
    setTest(state, action: PayloadAction<SetTestPayload>) {
      const { test } = action.payload;
      state.test = test;
    },
    setMountCount(state, action: PayloadAction<any>) {
      state.mountCount++;
    },
  },
});

export const { actions, reducer, name: sliceKey } = listUsersSlice;
