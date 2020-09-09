import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the Test2 container
export const initialState: ContainerState = {
  myData: 'test',
};

const test2Slice = createSlice({
  name: 'test2',
  initialState,
  reducers: {
    test(state, action: PayloadAction<any>) {},
  },
});

export const { actions, reducer, name: sliceKey } = test2Slice;
