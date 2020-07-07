/**
 *
 * MainPage
 *
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectMainPage } from './selectors';
import { mainPageSaga } from './saga';

interface Props {}

export function MainPage(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: mainPageSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const mainPage = useSelector(selectMainPage);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      <div>{t('')}</div>
    </>
  );
}
