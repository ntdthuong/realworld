import React, { Component } from 'react';
import { NavTab } from '../Common/NavTab'

export class FeedToggle extends Component {

  // genTab = () => {

  // }

  render() {
    return (
      <div className="feed-toggle">
        <ul className="nav nav-pills outline-active">
          <NavTab />
        </ul>
      </div>
    );
  }
}