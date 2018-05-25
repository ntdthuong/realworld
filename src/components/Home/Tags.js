import React, { Component } from 'react';

export class Tags extends Component {
  genTags = () => {
    const { tags } = this.props;
    const copyTags = [...tags];
    return copyTags.map( (tag, index) => <a key={index} href="" className="tag-pill tag-default">{tag}</a>);
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