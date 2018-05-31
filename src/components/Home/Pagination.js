import React, { Component } from 'react';

export class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      pageNow: props.pageNow || '',
      articleTag: props.articleTag || '',
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if ((prevState.pageNow !== nextProps.pageNow) || (prevState.articleTag !== nextProps.articleTag)) {
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
    this.setState({page: i});
    const {
      pageNow,
      onFetchPaging,
      onFetchArticleByUser,
      onFetchArticleByTag,
      articleTag
    } = this.props;
    if(pageNow === 'feed') onFetchArticleByUser((i-1)*10);
    if(pageNow === 'global') onFetchPaging((i-1)*10);
    if(pageNow === 'tag') onFetchArticleByTag(articleTag, (i-1)*10);
  }

  genPaging = () => {
    const { articlesCount } = this.props;
    const { page } = this.state;
    let arrPage = [];
    for(let i=1; i<= Math.ceil(articlesCount/10); i++) {
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
