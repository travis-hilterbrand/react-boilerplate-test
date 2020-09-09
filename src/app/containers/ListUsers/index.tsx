/**
 *
 * ListUsers
 *
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, actions } from './slice';
import { selectTest } from './selectors';
import { listUsersSaga } from './saga';

interface Props {}

export function ListUsers(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: listUsersSaga });

  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  const test = useSelector(selectTest);
  const handleTestChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(actions.setTest({ test: event.currentTarget.value }));
  };
  React.useEffect(() => {
    dispatch(actions.setMountCount({}));
  }, [dispatch]);

  return (
    <>
      <div>List users</div>
      <hr />
      <input value={test} onChange={handleTestChange} />
    </>
  );
}
