import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.test2 || initialState;

export const selectTest2 = createSelector(
  [selectDomain],
  test2State => test2State,
);
