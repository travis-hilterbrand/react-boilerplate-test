import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.test || initialState;

export const selectTest = createSelector(
  [selectDomain],
  testState => testState,
);
