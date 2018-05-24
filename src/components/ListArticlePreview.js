import React, { Component } from 'react';
import {ArticlePreview} from './ArticlePreview';
import {Pagination} from './Pagination';
export class ListArticlePreview extends Component {

  genList = () => {
    const { articles, onGetProfile } = this.props;
    if(articles) return articles.map((article, index) =>
      <ArticlePreview
        key={index}
        articleInfo={article}
        onGetProfile={onGetProfile}
      />
    );
  }
  render() {
    const { articlesCount, onFetchPaging } = this.props;
    return (
      <div>
        {this.genList()}
        <Pagination
          articlesCount={articlesCount}
          onFetchPaging={onFetchPaging}
        />
      </div>
    );
  }
}