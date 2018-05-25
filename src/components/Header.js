import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { history } from '../helpers/history';

export class Header extends Component {
  genMenu = () => {
    const { user } = this.props;
    const { pathname } = history.location;
    let arrMenu = [];
    if(!user) {
      arrMenu = [
        {id: 1, path: '/', text: 'Home'},
        {id: 2, path: '/login', text: 'Sign in'},
        {id: 3, path: '/register', text: 'Sign up'}
      ]

    } else {
      const profile = user.image ? `<img alt='img user' src=${user.image} class="user-pic" />${user.username}` : user.username
      arrMenu = [
        {id: 1, path: '/', text: 'Home'},
        {id: 2, path: '/editor', text: '<i class="ion-compose"></i>&nbsp;New Post'},
        {id: 3, path: '/settings', text: '<i class="ion-gear-a"></i>&nbsp;Settings', name: 'settings'},
        {id: 4, path: `/${user.username}`, text: profile},
      ]
    }
    return arrMenu.map(menu =>
      <li
        key={menu.id}
        className={pathname === menu.path ? 'nav-item active' : 'nav-item'}
      >
        <Link
          className="nav-link"
          to={menu.path}
          dangerouslySetInnerHTML={{ __html: menu.text }}
        />
      </li>
    );
  }
  render() {
    return (
      <nav className="navbar navbar-light">
        <div className="container">
          <Link className="navbar-brand" to="/">conduit</Link>
          <ul className="nav navbar-nav pull-xs-right">
            {this.genMenu()}
          </ul>
        </div>
      </nav>
    );
  }
}