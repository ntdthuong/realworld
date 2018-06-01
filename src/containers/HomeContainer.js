import { connect } from 'react-redux';

import {
  fetchPagingAction,
  profileAction,
  fetchArticleByTagAction,
  fetchArticleByUserAction,
  favoriteAction
} from '../actions';
import { ContentHome } from '../components/Home/ContentHome';

const mapStateToProps = (state) => {
  return {
    articles: state.articles,
    user: state.user,
    profile: state.profile,
    tags: state.tags
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onFetchPaging: (page) => {
      dispatch(fetchPagingAction(page));
    },
    onGetProfile: (username) => {
      dispatch(profileAction(username));
    },
    onFetchArticleByTag: (tag, page) => {
      dispatch(fetchArticleByTagAction(tag, page));
    },
    onFetchArticleByUser: (token) => {
      dispatch(fetchArticleByUserAction(token));
    },
    onFavoriteAction: (favorited, slug) => {
      dispatch(favoriteAction(favorited, slug));
    }
  }
};

export const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(ContentHome);