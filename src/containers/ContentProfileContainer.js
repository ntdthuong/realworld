import { connect } from 'react-redux';

import { profileAction } from '../actions';
import { Profile } from '../components/Profile';

const mapStateToProps = (state) => {
  return {
    articles: state.articles,
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

export const ContentProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);