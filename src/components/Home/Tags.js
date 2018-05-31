import React, { Component } from 'react';

export class Tags extends Component {

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

  render() {
    return (
      <div className="sidebar">
        <p>Popular Tags</p>
        <div className="tag-list">
          {this.genTags()}
        </div>
      </div>
    );
  }
}