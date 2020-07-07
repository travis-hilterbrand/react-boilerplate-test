import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.listUsers || initialState;

export const selectTest = (state: RootState) => state.listUsers?.test;

export const selectListUsers = createSelector(
  [selectDomain],
  listUsersState => listUsersState,
);
