import React, { Component } from 'react';

export class ArticleDetails extends Component {
  constructor(props) {
    super(props);
    console.log('props111', this.props);
    this.props.onGetArticle(this.props.info.match.params.id);
    console.log('article', this.props.article);
  }
  genTag = (tags) => {
    if (tags) return tags.map((tag, index) => <li key={index} className="tag-default tag-pill tag-outline">{tag}</li>)
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
    const { article } = this.props;
    console.log('aricle',article);
    const { username } = article.author ? article.author : '';
    return (
      <div className="article-page">

        <div className="banner">
          <div className="container">

            <h1>{article.title}</h1>

            <div className="article-meta">
              <a href=""><img src="http://i.imgur.com/Qr71crq.jpg" alt="img article" /></a>
              <div className="info">
                <a href="" className="author">{username}</a>
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
                <p>{article.body}</p>
              </div>
              <ul className="tag-list">
                {this.genTag(article.tagList)}
              </ul>
            </div>
          </div>

          <hr />



          <div className="row">

            <div className="col-xs-12 col-md-8 offset-md-2">

              <form className="card comment-form">
                <div className="card-block">
                  <textarea className="form-control" placeholder="Write a comment..." rows="3"></textarea>
                </div>
                <div className="card-footer">
                  <img src="http://i.imgur.com/Qr71crq.jpg" className="comment-author-img" alt="img user" />
                  <button className="btn btn-sm btn-primary">
                    Post Comment
                  </button>
                </div>
              </form>

              <div className="card">
                <div className="card-block">
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
                <div className="card-footer">
                  <a href="" className="comment-author">
                    <img src="http://i.imgur.com/Qr71crq.jpg" className="comment-author-img" alt="img user" />
                  </a>
                  &nbsp;
                  <a href="" className="comment-author">Jacob Schmidt</a>
                  <span className="date-posted">Dec 29th</span>
                </div>
              </div>

              <div className="card">
                <div className="card-block">
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
                <div className="card-footer">
                  <a href="" className="comment-author">
                    <img src="http://i.imgur.com/Qr71crq.jpg" className="comment-author-img" alt="img user" />
                  </a>
                  &nbsp;
                  <a href="" className="comment-author">Jacob Schmidt</a>
                  <span className="date-posted">Dec 29th</span>
                  <span className="mod-options">
                    {/*<i className="ion-edit"></i>*/}
                    <i className="ion-trash-a"></i>
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    );
  }
}