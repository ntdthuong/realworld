import React from 'react';
// import Loadable from 'react-loadable';

import { HomeContainer } from '../containers/HomeContainer';
import { SignUpContainer } from '../containers/SignUpContainer';
import { SignInContainer } from '../containers/SignInContainer';
import { SettingsContainer } from '../containers/SettingsContainer';
import { EditorArticleContainer } from '../containers/EditorArticleContainer';
import { ProfileContainer } from '../containers/ProfileContainer';
import { ArticleDetailsContainer } from '../containers/ArticleDetailsContainer';

const routes = [
  {
    path: '/',
    exact: true,
    main: (info) => <HomeContainer info={info}/>
  },
  {
    path: '/login',
    exact: true,
    main: () => <SignInContainer />
  },
  {
    path: '/register',
    exact: true,
    main: () => <SignUpContainer />
  },
  {
    path: '/editor',
    exact: true,
    main: () => <EditorArticleContainer />
  },
  {
    path: '/editor/:id',
    exact: true,
    main: (info) => <EditorArticleContainer info={info}/>
  },
  {
    path: '/settings',
    exact: true,
    main: () => <SettingsContainer />
  },
  {
    path: '/:id',
    exact: true,
    main: (info) => <ProfileContainer info={info}/>
  },
  {
    path: '/article/:id',
    exact: true,
    main: (info) => <ArticleDetailsContainer info={info}/>
  }
];
export default routes;

// const LoadableOtherComponent = Loadable({
//   loader: () => routes,
//   loading: () => <div>Loading...</div>,
// });
