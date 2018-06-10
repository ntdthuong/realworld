import React from 'react';
import { connect } from 'react-redux';

import { signUpAction } from '../actions';
import { SignUp } from '../components/User/SignUp';


const mapStateToProps = (state) => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSignUp: (user) => {
      dispatch(signUpAction(user));
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

const SignUpContainer = connect(mapStateToProps, mapDispatchToProps)(SignUp);
export default SignUpContainer;