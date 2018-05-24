import React from 'react';
import { ContentHomeContainer } from '../containers/ContentHomeContainer';
import { ContentSignUpContainer } from '../containers/ContentSignUpContainer';
import { ContentSignInContainer } from '../containers/ContentSignInContainer';
import { ContentSettingsContainer } from '../containers/ContentSettingsContainer';
import { ContentEditorArticleContainer } from '../containers/ContentEditorArticleContainer';
import { ContentProfileContainer } from '../containers/ContentProfileContainer';
import { ContentArticleDetailsContainer } from '../containers/ContentArticleDetailsContainer';

const routes = [
  {
    path: '/',
    exact: true,
    main: (info) => <ContentHomeContainer info={info}/>
  },
  {
    path: '/login',
    exact: true,
    main: () => <ContentSignInContainer />
  },
  {
    path: '/register',
    exact: true,
    main: () => <ContentSignUpContainer />
  },
  {
    path: '/editor',
    exact: true,
    main: () => <ContentEditorArticleContainer />
  },
  {
    path: '/settings',
    exact: true,
    main: () => <ContentSettingsContainer />
  },
  {
    path: '/:id',
    exact: true,
    main: (info) => <ContentProfileContainer info={info}/>
  },
  {
    path: '/article/:id',
    exact: true,
    main: () => <ContentArticleDetailsContainer />
  }
];
export default routes;