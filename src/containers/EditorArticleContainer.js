import React from 'react';
import { connect } from 'react-redux';

import { addArticleAction } from '../actions';
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
    onAddArticle: (article) => {
      dispatch(addArticleAction(article));
    },
    onGenErrors: (errors) => {
      let arrError = []
      if(errors) {
        for(let key in errors) {
          arrError.push(<li key={key}>{`${key} ${errors[key]}`}</li>)
        }
        return  <ul className="error-messages">{arrError}</ul>
      }
    }
  }
};

export const EditorArticleContainer = connect(mapStateToProps, mapDispatchToProps)(EditorArticle);