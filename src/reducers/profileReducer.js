import {
  FETCH_PROFILE_SUCCESS,
  FETCH_FAILED,
} from '../actions/actionTypes';

export function profileReducer(state = {} , action) {
  switch(action.type) {
    case FETCH_PROFILE_SUCCESS:
      return action.receivedProfile;
    case FETCH_FAILED:
      console.log('fail')
      return action.error;
    default :
      return state;
  }
}