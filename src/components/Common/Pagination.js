import React, { Component } from 'react';

export class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: props.page,
      pageNow: props.pageNow || '',
      articleTag: props.articleTag || '',
      loading: true
    };
    this.handleChangeState = this.props.handleChangeState.bind(this);

  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if ((prevState.pageNow !== nextProps.pageNow) || (prevState.articleTag !== nextProps.articleTag)) {
      return {
        page: 1,
        pageNow: nextProps.pageNow,
        articleTag: nextProps.articleTag
      };
    }
    return {
      page: prevState.page,
    };
  }

  handleClick = (i, e) => {
    e.preventDefault();
    console.log('this.props', this.props);
    this.setState({
      page: i,
      loading: true
    });
    this.handleChangeState(i);
    const {
      pageNow,
      onFetchPaging,
      onFetchFeedByUser,
      onFetchArticleByTag,
      articleTag,
      onGetMyArticles,
      onGetFavoriteAction,
      username
    } = this.props;
    if (pageNow === 'feed') onFetchFeedByUser((i - 1) * 10);
    if (pageNow === 'global') onFetchPaging((i - 1) * 10);
    if (pageNow === 'tag') onFetchArticleByTag(articleTag, (i - 1) * 10);
    if (pageNow === 'myArticles') onGetMyArticles(username, (i - 1) * 5);
    if (pageNow === 'favoritedArticles') onGetFavoriteAction(username, (i - 1) * 5);
  }

  genPaging = () => {
    const { articlesCount, pathName } = this.props;
    const { page } = this.state;
    let arrPage = [];
    const limit = pathName === '/:id' ? 5 : 10;
    for (let i = 1; i <= Math.ceil(articlesCount / limit); i++) {
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
    if (articlesCount / limit > 1) return arrPage
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
