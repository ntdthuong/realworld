import React, { Component } from 'react';

export class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <div className="container">
          <h1 className="logo-font">conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>
    );
  }
}