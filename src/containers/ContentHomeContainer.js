import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  fetchPagingAction
} from '../actions';
import { Banner } from '../components/Banner';
import { FeedToggle } from '../components/FeedToggle';
import { ListArticlePreview } from '../components/ListArticlePreview';
import { Tags } from '../components/Tags';

class ContentHome extends Component {
  genBanner = () => {
    const { user } = this.props;
    if(!user) return <Banner />
  }
  render() {
    const { articles, onFetchPaging } = this.props;
    return (
      <div className="home-page">
        {this.genBanner()}
        <div className="container page">
          <div className="row">
            <div className="col-md-9">
              <FeedToggle />
              <ListArticlePreview
                articles={articles.articles}
                articlesCount={articles.articlesCount}
                onFetchPaging={onFetchPaging}
              />
            </div>
            <div className="col-md-3">
              <Tags />
            </div>
          </div>
        </div>
      </div>
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
    onFetchPaging: (page) => {
      dispatch(fetchPagingAction(page));
    },
  }
};

export const ContentHomeContainer = connect(mapStateToProps, mapDispatchToProps)(ContentHome);