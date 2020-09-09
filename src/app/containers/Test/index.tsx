/**
 *
 * Test
 *
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectTest } from './selectors';
import { testSaga } from './saga';

interface Props {}

export function Test(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: testSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const test = useSelector(selectTest);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      <Div>{t('')}</Div>
    </>
  );
}

const Div = styled.div``;
