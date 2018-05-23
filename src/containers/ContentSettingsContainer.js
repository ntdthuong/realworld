import React, { Component } from 'react';
import { connect } from 'react-redux';

import {

} from '../actions';
import { Settings } from '../components/Settings';

class ContentSettings extends Component {
  render() {
    // const { user } = this.props;
    return (
      <Settings
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

  }
};

export const ContentSettingsContainer = connect(mapStateToProps, mapDispatchToProps)(ContentSettings);