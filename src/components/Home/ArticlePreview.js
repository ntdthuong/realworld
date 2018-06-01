import React, { Component } from 'react';

export class ArticlePreview extends Component {
  formatDate = (originDate) => {
    const date = new Date(originDate);
    const options = { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric' };
    return new Intl.DateTimeFormat('en-Asia', options).format(date);
  }

  genTag = (tags) => {
    if(tags) return tags.map((tag, index) => <li key={index} className="tag-default tag-pill tag-outline">{tag}</li>)
  }

  handleClick = (username) => {
    const { onGetProfile } = this.props;
    onGetProfile(username);
  }

  favoriteClick = (favorited, slug, index) => {
    const { onFavoriteAction } = this.props;
    onFavoriteAction(favorited, slug, index);
    console.log('index', index)
  }

  render() {
    const { articleInfo, index } = this.props;
    const { slug, favorited } = articleInfo;
    return (
      <div className="article-preview">
        <div className="article-meta"
        >
          <a
            href={`/${articleInfo.author.username}`}
          >
            <img alt='aaa' src={articleInfo.author.image} />
          </a>
          <div className="info">
            <a href={`/${articleInfo.author.username}`} className="author">{articleInfo.author.username}</a>
            <span className="date">{this.formatDate(articleInfo.createdAt)}</span>
          </div>
          <button
            className={`btn ${favorited ? 'btn-primary' : 'btn-outline-primary'} btn-sm pull-xs-right`}
            onClick={() => this.favoriteClick(favorited, slug, index)}
          >
            <i className="ion-heart"></i> {articleInfo.favoritesCount}
          </button>
        </div>
        <a href={`/article/${articleInfo.slug}`} className="preview-link">
          <h1>{articleInfo.title}</h1>
          <p>{articleInfo.description}</p>
          <span>Read more...</span>
          <ul className="tag-list">
            {this.genTag(articleInfo.tagList)}
          </ul>
        </a>
      </div>
    );
  }
}