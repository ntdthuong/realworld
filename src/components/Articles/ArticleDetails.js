import React, { Component } from 'react';

import { Comment } from '../Common/Comment';

export class ArticleDetails extends Component {
  constructor(props) {
    super(props);
    const { id } = this.props.info.match.params;
    const { onGetArticle, onGetComments } = this.props;
    onGetArticle(id);
    onGetComments(id);
  }

  genTag = (tags) => {
    if(tags) return tags.map((tag, index) => <li key={index} className="tag-default tag-pill tag-outline">{tag}</li>)
  }

  formatDate = (originDate) => {
    if (originDate) {
      const date = new Date(originDate);
      const options = { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric' };
      return new Intl.DateTimeFormat('en-Asia', options).format(date);
    }
  }

  render() {
    const { id } = this.props.info.match.params;
    const { article, comments, user, onPostComment } = this.props;
    const body = article.body ? article.body.split('\n'): '';
    const { username, image } = article.author ? article.author : '';
    return (
      <div className="article-page">
        <div className="banner">
          <div className="container">
            <h1>{article.title}</h1>
            <div className="article-meta">
              <a href=""><img src={image} alt="img"/></a>
              <div className="info">
                <a href={`/${username}`} className="author">{username}</a>
                <span className="date">{this.formatDate(article.createdAt)}</span>
              </div>
              <a className="btn btn-outline-secondary btn-sm" href={`/editor/${id}`}><i className="ion-edit"></i>&nbsp;&nbsp;Edit Article</a>
              &nbsp;&nbsp;
              <button className="btn btn-sm btn-outline-danger">
                <i className="ion-trash-a"></i>
                &nbsp;
                Delete Article
              </button>
            </div>

          </div>
        </div>

        <div className="container page">
          <div className="row article-content">
            <div className="col-md-12">
              <div>
                {body ? body.map((p, index) => <p key={index}>{p}</p>) : ''}
              </div>
              <ul className="tag-list">
                {this.genTag(article.tagList)}
              </ul>
            </div>
          </div>
          <hr />
          <Comment comments={comments} user={user} id={id} onPostComment={onPostComment}/>
        </div>
      </div>
    );
  }
}