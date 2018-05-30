import React, { Component } from 'react';

import { Banner } from './Banner';
import { FeedToggle } from './FeedToggle';
import { ListArticlePreview } from './ListArticlePreview';
import { Tags } from './Tags';

export class ContentHome extends Component {
  genBanner = () => {
    const { user } = this.props;
    if(!user) return <Banner />
  }
  render() {
    const { articles, onFetchPaging, onGetProfile, tags, onFetchArticleByTag, onFetchArticleByUser, user } = this.props;
    return (
      <div className="home-page">
        {this.genBanner()}
        <div className="container page">
          <div className="row">
            <div className="col-md-9">
              <FeedToggle
                user={user}
                articleTag={articles.tag ? articles.tag : ''}
                onFetchPaging={onFetchPaging}
                onFetchArticleByUser={onFetchArticleByUser}
              />
              <ListArticlePreview
                articles={articles.articles}
                articlesCount={articles.articlesCount}
                onFetchPaging={onFetchPaging}
                onGetProfile={onGetProfile}
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