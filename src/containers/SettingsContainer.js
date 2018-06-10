import React from 'react';
import { connect } from 'react-redux';

import { profileAction, editProfileAction, signOutAction } from '../actions';
import { Settings } from '../components/Settings/Settings';
// let SettingsContainer ;
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
    },
    onEditProfile: (userInfo) => {
      dispatch(editProfileAction(userInfo));
    },
    onGenErrors: (errors) => {
      let arrError = []
      if(errors) {
        for(let key in errors) {
          arrError.push(<li key={key}>{`${key} ${errors[key]}`}</li>)
        }
        return  <ul className="error-messages">{arrError}</ul>
      }
    },
    onSignOut: () => {
      dispatch(signOutAction());
    }
  }
};

const SettingsContainer = connect(mapStateToProps, mapDispatchToProps)(Settings);
export default SettingsContainer;