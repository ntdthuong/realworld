import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  signInAction
} from '../actions';
import { SignIn } from '../components/SignIn';

class ContentSignIn extends Component {
  render() {
    const { user, onSignIn } = this.props;
    return (
      <SignIn
        onSignIn={onSignIn}
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
    onSignIn: (user) => {
      dispatch(signInAction(user));
    }
  }
};

export const ContentSignInContainer = connect(mapStateToProps, mapDispatchToProps)(ContentSignIn);