import React, { Component } from 'react';

export class Page extends Component {
  handleClick = (e) => {
    e.preventDefault();
    const { index, onFetchPaging, onPageChange } = this.props;
    onFetchPaging(index);
    onPageChange(index);
  }
  render() {
    const { index, customClass } = this.props;
    return (
      <li
        className={customClass}
        onClick={this.handleClick}
      >
        <a className="page-link" href="">{index}</a>
      </li>
    );
  }
}

export class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
    };
  }
  onPageChange = (page) => {
    this.setState({page: page});
  }
  genPaging = () => {
    const { articlesCount, onFetchPaging } = this.props;
    const { page } = this.state;
    let arrPage = [];
    for(let i=1; i<= Math.ceil(articlesCount/10); i++) {
      const customClass = page === i ? 'page-item active' : 'page-item';
      arrPage.push(
        <Page
          key={i}
          index={i}
          customClass={customClass}
          onFetchPaging={onFetchPaging}
          onPageChange={this.onPageChange}
        />
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
