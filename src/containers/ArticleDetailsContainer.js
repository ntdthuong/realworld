import { connect } from 'react-redux';

import {
  fetchArticleAction,
  fetchCommentsAction,
  postCommentAction,
  delCommentAction
} from '../actions';
import { ArticleDetails } from '../components/Articles/ArticleDetails';

const mapStateToProps = (state) => {
  return {
    // articles: state.articles,
    article: state.article,
    user: state.user,
    comments: state.comments
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onGetArticle: (id) => {
      dispatch(fetchArticleAction(id));
    },
    onGetComments: (id) => {
      dispatch(fetchCommentsAction(id));
    },
    onPostComment: (id, comment) => {
      dispatch(postCommentAction(id, comment));
    },
    onDelComment: (slug, id) => {
      dispatch(delCommentAction(slug, id));
    }
  }
};

export const ArticleDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(ArticleDetails);