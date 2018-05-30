import React from 'react';
import { connect } from 'react-redux';

import { editorArticleAction, fetchArticleAction } from '../actions';
import { EditorArticle } from '../components/Articles/EditorArticle';

const mapStateToProps = (state) => {
  return {
    articles: state.articles,
    user: state.user,
    article: state.article
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onEditorArticle: (article, id) => {
      dispatch(editorArticleAction(article, id));
      console.log(editorArticleAction(article, id))
    },
    onGenErrors: (errors) => {
      let arrError = []
      if(errors) {
        for(let key in errors) {
          arrError.push(<li key={key}>{`${key} ${errors[key]}`}</li>)
        }
        return  <ul className="error-messages">{arrError}</ul>
      }
    },
    onGetArticle: (id) => {
      dispatch(fetchArticleAction(id));
    }
  }
};

export const EditorArticleContainer = connect(mapStateToProps, mapDispatchToProps)(EditorArticle);