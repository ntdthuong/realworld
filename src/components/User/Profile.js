import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { ToggleTab } from './ToggleTab';
import { ArticlePreview } from '../Home/ArticlePreview';
import { Pagination } from '../Common/Pagination';

export class Profile extends Component {
  constructor(props) {
    super(props);
    const { onGetMyArticles, onGetProfile } = this.props;
    const username = this.props.info.match.params.id;
    onGetProfile(username);
    onGetMyArticles(username)
  }

  genList = () => {
    const { articles} = this.props.articles;
    if(articles) {
      if(articles.length) return articles.map((article, index) =>
        <ArticlePreview
          key={index}
          articleInfo={article}
          index={index}
        />
      );
      if(!articles.length) return <div className="article-preview">No articles are here... yet.</div>
    }
  }

  render() {
    const { profile, articles } = this.props;
    return (
      <div className="profile-page">
        <div className="user-info">
          <div className="container">
            <div className="row">

              <div className="col-xs-12 col-md-10 offset-md-1">
                <img src={profile.image ? profile.image : 'https://static.productionready.io/images/smiley-cyrus.jpg'} className="user-img" alt="img user"/>
                <h4>{profile.username}</h4>
                <p>{profile.bio}</p>
                <Link
                  className="btn btn-sm btn-outline-secondary action-btn"
                  to='/settings'
                >
                  <i className="ion-gear-a"></i>
                  &nbsp;
                  Edit Profile Settings
                </Link>
              </div>

            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
              <ToggleTab pageNow={articles.pageNow}/>
              <div>
                {this.genList()}
                <Pagination
                  articlesCount={articles.articlesCount}
                  pageNow={articles.pageNow}
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}