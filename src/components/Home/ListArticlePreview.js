import React, { Component } from 'react';
import { ArticlePreview } from './ArticlePreview';
import { Pagination } from './Pagination';
export class ListArticlePreview extends Component {
  genList = () => {
    const { articles, onGetProfile } = this.props;
    if(articles) {
      if(articles.length) return articles.map((article, index) =>
        <ArticlePreview
          key={index}
          articleInfo={article}
          onGetProfile={onGetProfile}
        />
      );
      if(!articles.length) return <div className="article-preview">No articles are here... yet.</div>
    }
  }

  render() {
    const {
      articlesCount,
      onFetchPaging,
      pageNow,
      onFetchArticleByUser,
      articleTag,
      onFetchArticleByTag
    } = this.props;

    return (
      <div>
        {this.genList()}
        <Pagination
          articlesCount={articlesCount}
          onFetchPaging={onFetchPaging}
          pageNow={pageNow}
          onFetchArticleByUser={onFetchArticleByUser}
          onFetchArticleByTag={onFetchArticleByTag}
          articleTag={articleTag}
        />
      </div>
    );
  }
}