import { 
  testAction,
 } from "../actions/testAction";

const initialState = {
  count: 0,
  str: "hello world!",
}

const testReducerHandler = {
  [testAction.test.start]: (state, action) => {
    return {
      ...state,
      count: state.count + 1,
    }
  },
}

const testReducer = (state = initialState, action) => {
  const handler = testReducerHandler[action.type];

  if(handler === undefined) {
    return state;
  }

  return handler(state, action);
}

export default testReducer;
