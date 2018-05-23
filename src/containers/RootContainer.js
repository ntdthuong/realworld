import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Router } from 'react-router-dom';
import { history } from '../helpers/history';

// import { } from '../actions';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ContentHomeContainer } from './ContentHomeContainer';
import { ContentSignUpContainer } from './ContentSignUpContainer';
import { ContentSignInContainer } from './ContentSignInContainer';
import { ContentSettingsContainer } from './ContentSettingsContainer';
import { ContentEditorArticleContainer } from './ContentEditorArticleContainer';
import { ContentProfileContainer } from './ContentProfileContainer';
// import { ContentArticleDetailsContainer } from './ContentArticleDetailsContainer';

// import routes from '../routes';

class Root extends Component {
  render() {
    const { user } = this.props;
    const idUser = `/@${user.username}`;
    console.log(history.location)
    return (
      <Router history={history}>
        <div>
          <Header user={user}/>
          <Switch>
            <Route exact path="/"
              component={ContentHomeContainer}
            />
            <Route exact path="/login"
              component={ContentSignInContainer}
            />
            <Route exact path="/register" component={ContentSignUpContainer}/>
            <Route exact path="/settings" component={ContentSettingsContainer}/>
            <Route path="/editor" component={ContentEditorArticleContainer}/>
            <Route path={idUser} component={ContentProfileContainer}/>
          </Switch>
          {/*<ContentArticleDetailsContainer/>*/}
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