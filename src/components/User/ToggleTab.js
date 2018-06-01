import React, { Component } from 'react';

export class ToggleTab extends Component {

  hanldeClick = (name, page, e) => {
    e.preventDefault();
    console.log('clicked');
    // const { onFetchPaging, onFetchArticleByUser } = this.props;
    // if(name === 'global') onFetchPaging(page);
    // if(name === 'feed') onFetchArticleByUser();
  }

  genTabs = () => {
    let arrTabs = [{name:'myArticles', text: 'My Articles'}, {name:'favoritedArticles', text: 'Favorited Articles'}];
    return arrTabs.map((ele, index) =>
      <li key={index} className="nav-item"
        onClick={(e) => this.hanldeClick(ele.name, 0, e)}
      >
        <a className={`nav-link ${ele.name === 123 ? 'active' : ''}`} href=""
        >{ele.text}</a>
      </li>
    );
  }

  render() {
    return (
      <div className="articles-toggle">
        <ul className="nav nav-pills outline-active">
          {this.genTabs()}
        </ul>
      </div>
    );
  }
}