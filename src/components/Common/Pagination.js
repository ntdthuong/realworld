import React, { Component } from 'react';

export class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      pageNow: props.pageNow || '',
      articleTag: props.articleTag || '',
      loading: props.loading
    };
    console.log('constructor', this.state);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('nextProps--Pagination', nextProps);
    console.log('prevState--Pagination', prevState);
    if ((prevState.pageNow !== nextProps.pageNow) || (prevState.articleTag !== nextProps.articleTag)) {
      console.log('vao`');
      return {
        page: 1,
        pageNow: nextProps.pageNow,
        articleTag: nextProps.articleTag
      };
    }
    return null;
  }

  handleClick = (i, e) => {
    e.preventDefault();
    this.setState({
      page: i,
      loading: true
    });
    const {
      pageNow,
      onFetchPaging,
      onFetchFeedByUser,
      onFetchArticleByTag,
      articleTag
    } = this.props;
    if(pageNow === 'feed') onFetchFeedByUser((i-1)*2);
    if(pageNow === 'global') onFetchPaging((i-1)*2);
    if(pageNow === 'tag') onFetchArticleByTag(articleTag, (i-1)*2);
  }

  genPaging = () => {
    console.log('genPaging-props',this.props);
    console.log('genPaging-state',this.state);
    const { articlesCount } = this.props;
    const { page, loading } = this.state;
    console.log('loading-genPaging', loading);
    let arrPage = [];
    for(let i=1; i<= Math.ceil(articlesCount/2); i++) {
      const customClass = page === i ? 'page-item active' : 'page-item';
      arrPage.push(
        <li
          key={i}
          className={customClass}
          onClick={(e) => this.handleClick(i, e)}
        >
          <a className="page-link" href="">{i}</a>
        </li>
      );
    }
    return arrPage
  }

  render() {
    return (
      <nav>
        <ul className="pagination">
          {this.genPaging()}
        </ul>
      </nav>
    );
  }
}
