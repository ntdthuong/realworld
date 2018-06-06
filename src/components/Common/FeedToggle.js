import React, { Component } from 'react';

export class FeedToggle extends Component {

  hanldeClick = (name, page, e) => {
    e.preventDefault();
    console.log('click tabs');
    const { onFetchPaging, onFetchFeedByUser } = this.props;
    if(name === 'global') onFetchPaging(page);
    if(name === 'feed') onFetchFeedByUser();
  }

  genTabs = () => {
    let arrTabs = [{name:'global', text: 'Global Feed'}];
    const { user, articleTag, articles } = this.props;
    if(user) arrTabs.unshift({name:'feed', text: 'Your Feed'});
    if(articleTag) arrTabs.push({name:'tag', text: `#${articleTag}`});
    const pageNow = articles.pageNow ? articles.pageNow : '';
    return arrTabs.map((ele, index) =>
      <li key={index} className="nav-item"
        onClick={(e) => this.hanldeClick(ele.name, 0, e)}
      >
        <a className={`nav-link ${ele.name === pageNow ? 'active' : ''}`} href=""
        >{ele.text}</a>
      </li>
    );
  }

  render() {
    return (
      <div className="feed-toggle">
        <ul className="nav nav-pills outline-active">
          {this.genTabs()}
        </ul>
      </div>
    );
  }
}