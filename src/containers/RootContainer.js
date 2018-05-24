import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Router } from 'react-router-dom';
import { history } from '../helpers/history';

// import { } from '../actions';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
// import { ContentHomeContainer } from './ContentHomeContainer';
// import { ContentSignUpContainer } from './ContentSignUpContainer';
// import { ContentSignInContainer } from './ContentSignInContainer';
// import { ContentSettingsContainer } from './ContentSettingsContainer';
// import { ContentEditorArticleContainer } from './ContentEditorArticleContainer';
// import { ContentProfileContainer } from './ContentProfileContainer';
// import { ContentArticleDetailsContainer } from './ContentArticleDetailsContainer';

import routes from '../helpers/routes';

class Root extends Component {
  genRoute = () => {
    return routes.map((route, index) =>
      <Route
        key={index}
        path={route.path}
        exact={route.exact}
        component={route.main}
      />
    )
  }
  render() {
    const { user } = this.props;
    return (
      <Router history={history}>
        <div>
          <Header user={user}/>
          <Switch>{this.genRoute()}</Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    articles: state.articles,
    user: state.user
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {

  }
};

export const RootContainer = connect(mapStateToProps, mapDispatchToProps)(Root);