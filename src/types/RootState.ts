import { ListUsersState } from 'app/containers/ListUsers/types';
import { MainPageState } from 'app/containers/MainPage/types';
import { TestState } from 'app/containers/Test/types';
import { Test2State } from 'app/containers/Test2/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  listUsers?: ListUsersState;
  mainPage?: MainPageState;
  test?: TestState;
  test2?: Test2State;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
