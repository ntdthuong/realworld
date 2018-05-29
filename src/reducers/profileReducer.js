import {
  FETCH_PROFILE_SUCCESS,
  EDIT_PROFILE_SUCCESS,
  FETCH_PROFILE_FAILED,
  EDIT_PROFILE_FAILED
} from '../actions/actionTypes';

export function profileReducer(state = {} , action) {
  switch(action.type) {
    case FETCH_PROFILE_SUCCESS:
      return action.receivedProfile;
    case EDIT_PROFILE_SUCCESS:
      return action.receivedProfile;
    case FETCH_PROFILE_FAILED:
      return action.error;
    case EDIT_PROFILE_FAILED:
      return action.error;
    default :
      return state;
  }
}