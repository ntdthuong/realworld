import React, { Component } from 'react';

import { Banner } from './Banner';
import { FeedToggle } from '../Common/FeedToggle';
import { ListArticlePreview } from './ListArticlePreview';
import { Tags } from './Tags';

export class ContentHome extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem('jwt');
    const { onFetchFeedByUser, onFetchPaging } = this.props;
    token ? onFetchFeedByUser() : onFetchPaging();
  }

  genBanner = () => {
    const { user } = this.props;
    if(!user) return <Banner />
  }

  render() {
    const {
      articles,
      onFetchPaging,
      onGetProfile,
      tags,
      onFetchArticleByTag,
      onFetchFeedByUser,
      user,
      onFavoriteAction
    } = this.props;
    return (
      <div className="home-page">
        {this.genBanner()}
        <div className="container page">
          <div className="row">
            <div className="col-md-9">
              <FeedToggle
                user={user}
                articles={articles}
                articleTag={articles.tag ? articles.tag : ''}
                onFetchPaging={onFetchPaging}
                onFetchFeedByUser={onFetchFeedByUser}
              />
              <ListArticlePreview
                articles={articles.articles}
                articlesCount={articles.articlesCount}
                pageNow={articles.pageNow}
                onFetchPaging={onFetchPaging}
                onGetProfile={onGetProfile}
                onFetchFeedByUser={onFetchFeedByUser}
                onFetchArticleByTag={onFetchArticleByTag}
                articleTag={articles.tag ? articles.tag : ''}
                onFavoriteAction={onFavoriteAction}
              />
            </div>
            <div className="col-md-3">
              <Tags tags={tags} onFetchArticleByTag={onFetchArticleByTag}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}