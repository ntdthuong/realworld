import React, { Component } from 'react';

import { Banner } from './Banner';
import { FeedToggle } from './FeedToggle';
import { ListArticlePreview } from './ListArticlePreview';
import { Tags } from './Tags';

export class ContentHome extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem('jwt');
    const { onFetchArticleByUser, onFetchPaging } = this.props;
    token ? onFetchArticleByUser(`Token ${token}`) : onFetchPaging();
  }

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
                articles={articles}
                articleTag={articles.tag ? articles.tag : ''}
                onFetchPaging={onFetchPaging}
                onFetchArticleByUser={onFetchArticleByUser}
              />
              <ListArticlePreview
                articles={articles.articles}
                articlesCount={articles.articlesCount}
                pageNow={articles.pageNow}
                onFetchPaging={onFetchPaging}
                onGetProfile={onGetProfile}
                onFetchArticleByUser={onFetchArticleByUser}
                onFetchArticleByTag={onFetchArticleByTag}
                articleTag={articles.tag ? articles.tag : ''}
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