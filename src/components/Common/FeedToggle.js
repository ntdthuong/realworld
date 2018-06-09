import React, { Component } from 'react';

export class FeedToggle extends Component {

  hanldeClick = (name, page, e) => {
    e.preventDefault();

    const {
      onFetchPaging,
      onFetchFeedByUser,
      onGetMyArticles,
      username,
      onGetFavoriteAction
    } = this.props;
    if(name === 'global') onFetchPaging(page);
    if(name === 'feed') onFetchFeedByUser();
    if(name === 'myArticles') onGetMyArticles(username);
    if(name === 'favoritedArticles') onGetFavoriteAction(username);
  }

  genTabs = () => {
    let arrTabs;
    const { user, articleTag, articles, pathName } = this.props;
    if(pathName === '/') {
      arrTabs = [{name:'global', text: 'Global Feed'}];
      if(user) arrTabs.unshift({name:'feed', text: 'Your Feed'});
      if(articleTag) arrTabs.push({name:'tag', text: `#${articleTag}`});
    } else {
      arrTabs = [{name:'myArticles', text: 'My Articles'}, {name:'favoritedArticles', text: 'Favorited Articles'}];
    }
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