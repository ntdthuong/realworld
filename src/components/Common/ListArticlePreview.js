import React, { Component } from 'react';
import { ArticlePreview } from './ArticlePreview';
import { Pagination } from '../Common/Pagination';
export class ListArticlePreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: props.page,
      currentPage: props.page,
      loading: true,
      pageNow: props.pageNow
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('nextProps', nextProps);
    console.log('prevState', prevState);
    if (nextProps && nextProps.articles && (nextProps.page === prevState.currentPage)) {
      console.log('vào1', nextProps.pageNow)
      return {
        loading: false,
        pageNow: nextProps.pageNow
      }
    } else if ((nextProps.page !== prevState.currentPage) && !prevState.loading) {
      console.log('vào2', nextProps.pageNow)
      return {
        loading: true,
        currentPage: 1,
        pageNow: nextProps.pageNow
      }
    } 
    return null;
  }
 
  genList = () => {
    const { articles, onGetProfile, onFavoriteAction } = this.props;
    if (articles) {
      if (articles.length) return articles.map((article, index) =>
        <ArticlePreview
          key={index}
          articleInfo={article}
          onGetProfile={onGetProfile}
          onFavoriteAction={onFavoriteAction}
          index={index}
        />
      );
      if (!articles.length) return <div className="article-preview">No articles are here... yet.</div>
    }
  }
  handleChangeState = (page) => {
    this.setState({
      page: page,
      currentPage: page
    })
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
    const { loading, page } = this.state;
    console.log(this.state.pageNow);
    console.log('loading-listarticle', loading);
    let content;
    content = loading
      ? <div className="article-preview">Articles are been loading...</div>
      : <div>
        {this.genList()}
        <Pagination
          page={page}
          articlesCount={articlesCount}
          onFetchPaging={onFetchPaging}
          pageNow={pageNow}
          onFetchFeedByUser={onFetchFeedByUser}
          onFetchArticleByTag={onFetchArticleByTag}
          articleTag={articleTag}
          handleChangeState={this.handleChangeState}
        />
      </div>
    return content;
  }

  render() {
    return (
      <div>
        {this.genContent()}
      </div>
    );
  }
}