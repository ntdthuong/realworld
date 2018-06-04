import React, { Component } from 'react';
import { ArticlePreview } from './ArticlePreview';
import { Pagination } from '../Common/Pagination';
export class ListArticlePreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps && nextProps.articles) {
      return {
        loading: false
      };
    }
    return null;
  }

  genList = () => {
    const { articles, onGetProfile, onFavoriteAction } = this.props;
    if(articles) {
      if(articles.length) return articles.map((article, index) =>
        <ArticlePreview
          key={index}
          articleInfo={article}
          onGetProfile={onGetProfile}
          onFavoriteAction={onFavoriteAction}
          index={index}
        />
      );
      if(!articles.length) return <div className="article-preview">No articles are here... yet.</div>
    }
  }

  genContent = () => {
    const {
      articlesCount,
      onFetchPaging,
      pageNow,
      onFetchFeedByUser,
      articleTag,
      onFetchArticleByTag,
    } = this.props;
    const { loading } = this.state;
    let content;
    content = loading
    ? <div className="article-preview">Articles are been loading...</div>
    : <div>
        {this.genList()}
        <Pagination
          articlesCount={articlesCount}
          onFetchPaging={onFetchPaging}
          pageNow={pageNow}
          onFetchFeedByUser={onFetchFeedByUser}
          onFetchArticleByTag={onFetchArticleByTag}
          articleTag={articleTag}
        />
      </div>
    return content;
  }

  render() {
    return (
      <div>
        { this.genContent() }
      </div>
    );
  }
}