import React, { Component } from 'react';

export class ArticlePreview extends Component {
  formatDate = () => {
    const { createdAt } = this.props.articleInfo;
    const date = new Date(createdAt);
    const options = { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric' };
    return new Intl.DateTimeFormat('en-Asia', options).format(date)
  }
  render() {
    const { articleInfo } = this.props;
    const linkArticle = `/article/${articleInfo.slug}`;
    const linkUser = `/@${articleInfo.author.username}`
    return (
      <div className="article-preview">
        <div className="article-meta">
          <a href={linkUser}><img alt='aaa' src={articleInfo.author.image} /></a>
          <div className="info">
            <a href={linkUser} className="author">{articleInfo.author.username}</a>
            <span className="date">{this.formatDate()}</span>
          </div>
          <button className="btn btn-outline-primary btn-sm pull-xs-right">
            <i className="ion-heart"></i> {articleInfo.favoritesCount}
          </button>
        </div>
        <a href={linkArticle} className="preview-link">
          <h1>{articleInfo.title}</h1>
          <p>{articleInfo.body}</p>
          <span>Read more...</span>
        </a>
      </div>
    );
  }
}