import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { profileAction } from '../actions';

export class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
      username: '',
      bio: '',
      email: '',
      password: ''
    }
  }

  componentDidMount() {
    if (Object.keys(this.props.user).length > 0) {
      const { image, username, bio, email, password } = this.props.user;
      this.setState({
        image,
        username,
        bio,
        email,
        password
      });
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.user) {
      const { image, username, bio, email, password } = nextProps.user;
      return {
        image,
        username,
        bio,
        email,
        password
      };
    }
    return null;
  }

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ ...this.state, [name]: value })
  }

  handleSumit = (e) => {
    e.preventDefault();
    const user = {user: {...this.state}};
    const notPass = {user: {...this.state}};
    delete notPass.user.password;
    console.log('state', this.state.password ? user : notPass);
  }
  render() {
    const { user } = this.props;
    return (
      <div className="settings-page">
        <div className="container page">
          <div className="row">

            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Your Settings</h1>

              <form onSubmit={this.handleSumit}>
                <fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      name='image'
                      placeholder="URL of profile picture"
                      value={this.state.image || ''}
                      onChange={this.onChange}
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="text" placeholder="Your Name"
                      name='username'
                      value={this.state.username || ''}
                      onChange={this.onChange}
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <textarea
                      className="form-control form-control-lg"
                      rows="8"
                      name='bio'
                      placeholder="Short bio about you"
                      value={this.state.bio || ''}
                      onChange={this.onChange}
                    ></textarea>
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Email"
                      name='email'
                      value={this.state.email || ''}
                      onChange={this.onChange}
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="password"
                      name='password'
                      placeholder="Password"
                      value={this.state.password || ''}
                      onChange={this.onChange}
                    />
                  </fieldset>
                  <button className="btn btn-lg btn-primary pull-xs-right">
                    Update Settings
                    </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}