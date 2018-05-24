import React, { Component } from 'react';
import { history } from '../helpers/history';
import { profileAction } from '../actions';

export class ArticlePreview extends Component {
  formatDate = () => {
    const { createdAt } = this.props.articleInfo;
    const date = new Date(createdAt);
    const options = { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric' };
    return new Intl.DateTimeFormat('en-Asia', options).format(date);
  }
  handleClick = (username) => {
    const { articleInfo, onGetProfile } = this.props;
    onGetProfile(username);
  }
  render() {
    const { articleInfo } = this.props;
    return (
      <div className="article-preview">
        <div className="article-meta"
        >
          <a
            href={`/@${articleInfo.author.username}`}
          >
            <img alt='aaa' src={articleInfo.author.image} />
          </a>
          <div className="info">
            <a href={`/@${articleInfo.author.username}`} className="author">{articleInfo.author.username}</a>
            <span className="date">{this.formatDate()}</span>
          </div>
          <button className="btn btn-outline-primary btn-sm pull-xs-right">
            <i className="ion-heart"></i> {articleInfo.favoritesCount}
          </button>
        </div>
        <a href={`/article/${articleInfo.slug}`} className="preview-link">
          <h1>{articleInfo.title}</h1>
          <p>{articleInfo.body}</p>
          <span>Read more...</span>
        </a>
      </div>
    );
  }
}