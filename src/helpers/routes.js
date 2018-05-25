import React from 'react';
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
    main: () => <ArticleDetailsContainer />
  }
];
export default routes;