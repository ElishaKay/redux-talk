import { combineReducers } from 'redux';

function root(state = {}, action) {
  return state;
}

export const rootReducer = combineReducers({
  root,
});
