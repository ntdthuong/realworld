import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { profileAction } from '../actions';

export class Settings extends Component {
  static defaultProps = {
    user: {
      image: '',
      username: '2',
      bio: '3',
      email: '4',
      password: ''
    }
  };

  constructor(props, defaultProps) {
    super(props, defaultProps);
    const { image, username, bio, email, password} = props.user;
    this.state = {
      image,
      username,
      bio,
      email,
      password
    }
  }

  onChangeName = (e) => {
    const {value} = e.target;
    this.setState({...this.state, username: value})
  }

  render() {
    const { user } = this.props;
    console.log('username', this.state.username)
    return (
      <div className="settings-page">
        <div className="container page">
          <div className="row">

            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Your Settings</h1>

              <form>
                <fieldset>
                    <fieldset className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="URL of profile picture"
                        defaultValue={this.state.image}
                      />
                    </fieldset>
                    <fieldset className="form-group">
                      <input
                        className="form-control form-control-lg"
                        type="text" placeholder="Your Name"
                        defaultValue={this.state.username}
                        onChange={this.onChangeName}
                      />
                    </fieldset>
                    <fieldset className="form-group">
                      <textarea
                        className="form-control form-control-lg"
                        rows="8"
                        placeholder="Short bio about you"
                        defaultValue={this.state.bio}
                      ></textarea>
                    </fieldset>
                    <fieldset className="form-group">
                      <input
                        className="form-control form-control-lg"
                        type="text"
                        placeholder="Email"
                        defaultValue={this.state.email}
                      />
                    </fieldset>
                    <fieldset className="form-group">
                      <input
                        className="form-control form-control-lg"
                        type="password"
                        placeholder="Password"
                        defaultValue={this.state.password}
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