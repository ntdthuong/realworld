// import React, { Component } from 'react';
import { connect } from 'react-redux';

import { } from '../actions';
import { ArticleDetails } from '../components/ArticleDetails';

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

export const ContentArticleDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(ArticleDetails);