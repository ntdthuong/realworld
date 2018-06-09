import { connect } from 'react-redux';

import {
  profileAction,
  fetchArticlesByUserAction,
  favoriteAction,
  fetchFavoritedArticlesAction,
  followAction
} from '../actions';
import { Profile } from '../components/User/Profile';

const mapStateToProps = (state) => {
  return {
    articles: state.articles,
    profile: state.profile,
    user: state.user
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onGetProfile: (username) => {
      dispatch(profileAction(username));
    },
    onGetMyArticles : (username, page) => {
      dispatch(fetchArticlesByUserAction(username, page));
    },
    onFavoriteAction: (favorited, slug, index) => {
      dispatch(favoriteAction(favorited, slug, index));
    },
    onGetFavoriteAction: (username, page) => {
      dispatch(fetchFavoritedArticlesAction(username, page));
    },
    onFollowAction: (username, follow) => {
      dispatch(followAction(username, follow));
    }

  }
};

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);