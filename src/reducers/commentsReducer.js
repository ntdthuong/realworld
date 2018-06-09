import {
  FETCH_COMMENTS_SUCCEEDED,
  FETCH_COMMENTS_FAILED,
  POST_COMMENT_SUCCEEDED,
  POST_COMMENT_FAILED,
  DEL_COMMENT_SUCCEEDED,
  DEL_COMMENT_FAILED
} from '../actions/actionTypes';

export function commentsReducer(state = {} , action) {
  switch(action.type) {
    case FETCH_COMMENTS_SUCCEEDED:
      return action.receivedCmts;
    case POST_COMMENT_SUCCEEDED:
      const newCmt = action.receivedCmt;
      return [newCmt, ...state];
    case DEL_COMMENT_SUCCEEDED:
      const { id } = action;
      return [...state].filter((cmt) => cmt.id !== id );
    case FETCH_COMMENTS_FAILED:
      return action.error;
    case POST_COMMENT_FAILED:
      return {...state};
    case DEL_COMMENT_FAILED:
      return {...state};
    default :
      return state;
  }
}