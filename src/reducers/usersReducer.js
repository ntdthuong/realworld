import {
  SIGN_UP_SUCCESS,
  SIGN_IN_SUCCESS,
  FETCH_USER_FAILED,
} from '../actions/actionTypes';

export function userReducer(state = {} , action) {
  switch(action.type) {
    case SIGN_UP_SUCCESS:
      return action.receivedUser;
    case SIGN_IN_SUCCESS:
      return action.receivedUser;
    case FETCH_USER_FAILED:
      return action.error;
    default :
      return state;
  }
}