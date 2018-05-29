import React from 'react';
import { connect } from 'react-redux';

import { signInAction } from '../actions';
import { SignIn } from '../components/User/SignIn';

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSignIn: (user) => {
      dispatch(signInAction(user));
    },
    onGenErrors: (errors) => {
      let arrError = []
      if(errors) {
        for(let key in errors) {
          arrError.push(<li key={key}>{`${key} ${errors[key]}`}</li>)
        }
        return  <ul className="error-messages">{arrError}</ul>
      }
    }
  }
};

export const SignInContainer = connect(mapStateToProps, mapDispatchToProps)(SignIn);