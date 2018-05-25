import { connect } from 'react-redux';

import { profileAction } from '../actions';
import { Settings } from '../components/Settings';

const mapStateToProps = (state) => {
  return {
    user: state.user,
    profile: state.profile
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onGetProfile: (username) => {
      dispatch(profileAction(username));
    }
  }
};

export const SettingsContainer = connect(mapStateToProps, mapDispatchToProps)(Settings);