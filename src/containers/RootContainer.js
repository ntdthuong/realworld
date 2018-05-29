import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Router } from 'react-router-dom';
import { history } from '../helpers/history';

import { Header } from '../components/Common/Header';
import { Footer } from '../components/Common/Footer';

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
          <Header user={user} />
          <Switch>{this.genRoute()}</Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    articles: state.articles,
    user: state.user,
    profile: state.profile
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
  }
};

export const RootContainer = connect(mapStateToProps, mapDispatchToProps)(Root);