import { connect } from 'react-redux';

import {
  profileAction,
  fetchArticlesByUserAction,
  favoriteAction,
  fetchFavoritedArticlesAction
} from '../actions';
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
    },
    onFavoriteAction: (favorited, slug, index) => {
      dispatch(favoriteAction(favorited, slug, index));
    },
    onGetFavoriteAction: (username, page) => {
      dispatch(fetchFavoritedArticlesAction(username, page));
    }

  }
};

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);