import React, { Component } from 'react';

import { Banner } from '../components/Banner';
import { FeedToggle } from '../components/FeedToggle';
import { ListArticlePreview } from '../components/ListArticlePreview';
import { Tags } from '../components/Tags';

export class ContentHome extends Component {
  genBanner = () => {
    const { user } = this.props;
    if(!user) return <Banner />
  }
  render() {
    const { articles, onFetchPaging, onGetProfile, tags } = this.props;
    console.log('a',this.props.info)
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
                onGetProfile={onGetProfile}
              />
            </div>
            <div className="col-md-3">
              <Tags tags={tags}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}