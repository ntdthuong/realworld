import React, { Component } from 'react';

import { Banner } from './Banner';
import { FeedToggle } from '../Common/FeedToggle';
import { ListArticlePreview } from '../Common/ListArticlePreview';
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
    const pathName = this.props.info.match.path;
    const loading = articles.loading;
    console.log('content ome', loading)
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
                pageNow={articles.pageNow}
                pathName={pathName}
                page={1}
                loading= {loading}
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
                page={1}
                loading= {loading}
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