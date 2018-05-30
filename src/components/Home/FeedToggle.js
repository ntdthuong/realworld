import React, { Component } from 'react';
// import { NavTab } from '../Common/NavTab'

export class FeedToggle extends Component {

  hanldeClick = (name, page, e) => {
    e.preventDefault();
    const { onFetchPaging, onFetchArticleByUser } = this.props;
    if(name !== 'private' || name !== 'tag') onFetchPaging(page);
    if(name === 'private') onFetchArticleByUser();
  }

  genTabs = () => {
    let arrTabs = [{name:'global', text: 'Global Feed'}];
    const { user, articleTag } = this.props;
    if(user) arrTabs = [{name:'private', text: 'Your Feed'},{name:'global', text: 'Global Feed'}];
    if(articleTag) arrTabs = [{name:'private', text: 'Your Feed'},{text: 'Global Feed'}, {name:'tag', text: `#${articleTag}`}];
    return arrTabs.map((ele, index) =>
      <li key={index} className="nav-item"
        onClick={(e) => this.hanldeClick(ele.name, 0, e)}
      >
        <a className='nav-link' href=""
        >{ele.text}</a>
      </li>
    );
  }

  render() {
    return (
      <div className="feed-toggle">
        <ul className="nav nav-pills outline-active">
          {this.genTabs('sugar')}
        </ul>
      </div>
    );
  }
}