import React, { Component } from 'react';
import {Header} from './Header';
import {Content} from './Content';
import {Footer} from './Footer';
export class Root extends Component {
  render() {
    return (
      <div className="home-page">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}