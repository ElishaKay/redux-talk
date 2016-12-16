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

const USER_INITIAL_STATE = {
  name: 'Jesse Pinho',
  handle: 'jessepinho',
  headerPhotoURL: 'https://pbs.twimg.com/profile_banners/16901789/1398787929/1500x500',
  profilePhotoURL: 'https://pbs.twimg.com/profile_images/378800000310650745/5e38031f42fdbacc2c2041f021460f02.jpeg',
};
function user(state = USER_INITIAL_STATE, action) {
  return state;
}

export const rootReducer = combineReducers({
  newPostIds,
  posts,
  user,
});
