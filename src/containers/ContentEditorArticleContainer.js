import React, { Component } from 'react';
import { connect } from 'react-redux';

import {

} from '../actions';
import { EditorArticle } from '../components/EditorArticle';

class ContentEditorArticle extends Component {
  render() {
    // const { user, articles } = this.props;
    return (
      <EditorArticle
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    articles: state.articles,
    user: state.user
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {

  }
};

export const ContentEditorArticleContainer = connect(mapStateToProps, mapDispatchToProps)(ContentEditorArticle);