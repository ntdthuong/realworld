import React, { Component } from 'react';
import { connect } from 'react-redux';

import {

} from '../actions';
import { Profile } from '../components/Profile';

const mapStateToProps = (state) => {
  return {
    articles: state.articles,
    user: state.user
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {

  }
};

export const ContentProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);