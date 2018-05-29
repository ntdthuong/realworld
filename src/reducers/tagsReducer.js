import {
  FETCH_TAGS_SUCCEEDED,
  FETCH_TAGS_FAILED,
} from '../actions/actionTypes';

export function tagsReducer(state = {} , action) {
  switch(action.type) {
    case FETCH_TAGS_SUCCEEDED:
      return action.receivedTags;
    case FETCH_TAGS_FAILED:
      return [];
    default :
      return state;
  }
}