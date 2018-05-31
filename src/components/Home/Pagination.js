import React, { Component } from 'react';

export class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      currentPage: 1,
      articleTag: '',
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if ((prevState.currentPage !== nextProps.pageNow) || ((prevState.articleTag !== '') && (prevState.articleTag !== nextProps.articleTag))) {
      const currentPage = nextProps.pageNow;
      return {
        page: 1,
        currentPage,
        articleTag: nextProps.articleTag
      };
    }
    return null;
  }

  handleClick = (i, e) => {
    e.preventDefault();
    this.setState({ page: i });
    const {
      pageNow,
      onFetchPaging,
      onFetchArticleByUser,
      onFetchArticleByTag,
      articleTag
    } = this.props;
    if (pageNow === 'feed') onFetchArticleByUser(i);
    if (pageNow === 'global') onFetchPaging(i);
    if (pageNow === 'tag') onFetchArticleByTag(articleTag, i);
  }

  genPaging = () => {
    const { articlesCount } = this.props;
    const { page } = this.state;
    let arrPage = [];
    for (let i = 1; i <= Math.ceil(articlesCount / 10); i++) {
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
