import { connect } from 'react-redux';

import { } from '../actions';
import { Settings } from '../components/Settings';

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {

  }
};

export const ContentSettingsContainer = connect(mapStateToProps, mapDispatchToProps)(Settings);