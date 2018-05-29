import { connect } from 'react-redux';

import { fetchArticleAction } from '../actions';
import { ArticleDetails } from '../components/Articles/ArticleDetails';

const mapStateToProps = (state) => {
  return {
    articles: state.articles,
    article: state.article,
    user: state.user
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onGetArticle: (id) => {
      dispatch(fetchArticleAction(id));
    }
  }
};

export const ArticleDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(ArticleDetails);