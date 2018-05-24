import {
  FETCH_SUCCEEDED,
  FETCH_FAILED,
} from '../actions/actionTypes';

export function tagsReducer(state = {} , action) {
  switch(action.type) {
    case FETCH_SUCCEEDED:
      return action.receivedArticles;
    case FETCH_FAILED:
      return [];
    default :
      return state;
  }
}