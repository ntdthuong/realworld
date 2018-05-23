import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  signUpAction
} from '../actions';
import { SignUp } from '../components/SignUp';

class ContentSignUp extends Component {

  render() {
    const { user, onSignUp } = this.props;
    return (
      <SignUp
        onSignUp={onSignUp}
        user={user}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSignUp: (user) => {
      dispatch(signUpAction(user));
    }
  }
};

export const ContentSignUpContainer = connect(mapStateToProps, mapDispatchToProps)(ContentSignUp);