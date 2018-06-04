import { connect } from 'react-redux';

import { profileAction, fetchArticlesByUserAction } from '../actions';
import { Profile } from '../components/User/Profile';

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
    },
    onGetMyArticles : (page) => {
      dispatch(fetchArticlesByUserAction(page));
    }
  }
};

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);