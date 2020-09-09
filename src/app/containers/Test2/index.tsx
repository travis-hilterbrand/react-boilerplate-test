import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer } from 'utils/redux-injectors';
import { reducer, sliceKey, actions } from './slice';
import { selectTest2 } from './selectors';

interface Props {}

export function Test2(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const test2 = useSelector(selectTest2);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(actions.test({}));
  };

  return (
    <>
      <Div>{test2.myData}</Div>
      <button onClick={handleClick}>Dispatch Test2</button>
    </>
  );
}

const Div = styled.div``;
