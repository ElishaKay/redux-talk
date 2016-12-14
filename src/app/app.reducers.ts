import { combineReducers } from 'redux';

import { mockPosts } from './timeline/mock-posts';
import { POST_ADD, NEW_POST_IDS_RESET } from './app.action-types';

const LAST_TWO_POST_IDS = mockPosts.slice(0, 2).map(post => post.id);
function newPostIds(state = LAST_TWO_POST_IDS, action) {
  if (action.type === POST_ADD) {
    return [action.value.id, ...state];
  }
  if (action.type === NEW_POST_IDS_RESET) {
    return [];
  }
  return state;
}

function posts(state = mockPosts, action) {
  if (action.type === POST_ADD) {
    return [action.value, ...state];
  }
  return state;
}

export const rootReducer = combineReducers({
  newPostIds,
  posts,
});
