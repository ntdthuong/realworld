import React, { Component } from 'react';
import { connect } from 'react-redux';

import {

} from '../actions';
import { Profile } from '../components/Profile';

class ContentProfile extends Component {
  render() {
    // const { user, articles } = this.props;
    return (
      <Profile
      />
    );
  }
}

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

export const ContentProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ContentProfile);