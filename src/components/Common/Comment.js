import React, { Component } from 'react';

import { Textarea } from '../Common/Textarea';

export class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ''
    };
    this.onChange = this.onChange.bind(this)
  }

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ ...this.state, [name]: value });
  }

  handleSumit = (e) => {
    e.preventDefault();
    const comment =  {comment: this.state};
    const { onPostComment, id } = this.props;
    onPostComment(id, comment);
    this.setState({...this.state, body: ''});
  }

  handleClick = (id, e) => {
    e.preventDefault();
    const { onDelComment } = this.props;
    const slug = this.props.id;
    onDelComment(slug, id);
  }

  genCmts = () => {
    const { comments, user } = this.props;
    if(comments.length) return comments.map((cmt, index) => {
      const del = cmt.author.username === user.username
                  ? <span
                      className="mod-options"
                      onClick={(e) => this.handleClick(cmt.id, e)}
                    >
                      <i className="ion-trash-a"></i>
                    </span>
                  : '';
      return <div key={index} className="card">
        <div className="card-block">
          <p className="card-text">{cmt.body}</p>
        </div>
        <div className="card-footer">
          <a href={`/${cmt.author.username}`} className="comment-author">
            <img src={cmt.author.image} className="comment-author-img" alt="img user"/>
          </a>
          &nbsp;
          <a href={`/${cmt.author.username}`} className="comment-author">{cmt.author.username}</a>
          <span className="date-posted">{this.formatDate(cmt.createdAt)}</span>
          {del}
        </div>
      </div>
    })
  }

  genForm = () => {
    const { user } = this.props;
    let form;
    if(user) {
      form =  <form
                className="card comment-form"
                onSubmit={this.handleSumit}
              >
                <div className="card-block">
                  <Textarea
                    className="form-control"
                    placeholder="Write a comment..."
                    rows="3"
                    name='body'
                    type='text'
                    value={this.state.body}
                    onChange={this.onChange}
                  />
                </div>
                <div className="card-footer">
                  <img src={user.image} className="comment-author-img" alt="img user"/>
                  <button className="btn btn-sm btn-primary">
                  Post Comment
                  </button>
                </div>
              </form>
    } else {
      form = <p><a className="" href="/login">Sign in</a>&nbsp;or&nbsp;<a className="" href="/register">Sign up</a>&nbsp;to add comments on this article.</p>
    }
    return form;
  }

  formatDate = (originDate) => {
    if (originDate) {
      const date = new Date(originDate);
      const options = { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric' };
      return new Intl.DateTimeFormat('en-Asia', options).format(date);
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-md-8 offset-md-2">
          {this.genForm()}
          {this.genCmts()}
        </div>
      </div>
    );
  }
}