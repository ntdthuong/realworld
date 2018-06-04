import React, { Component } from 'react';

export class Tags extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.tags && nextProps.tags.length) {
      return {
        loading: false
      };
    }
    return null;
  }

  hanldeClick = (tag, e) => {
    e.preventDefault();
    const { onFetchArticleByTag } = this.props;
    onFetchArticleByTag(tag)
  }

  genTags = () => {
    const { tags } = this.props;
    const copyTags = [...tags];
    return copyTags.map( (tag, index) =>
      <a
        key={index} href=""
        className="tag-pill tag-default"
        onClick={ (e) => this.hanldeClick(tag, e) }
      >{tag}</a>
    );
  }

  genContent = () => {
    const { loading } = this.state;
    let content;
    content = loading
    ? <div className="article-preview">Tags are been loading...</div>
    : this.genTags();
    return content
  }

  render() {
    return (
      <div className="sidebar">
        <p>Popular Tags</p>
        <div className="tag-list">
          {this.genContent()}
        </div>
      </div>
    );
  }
}