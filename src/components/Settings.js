import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { profileAction } from '../actions';

export class Settings extends Component {
  // static defaultProps = {
  //   user: {
  //     image: '',
  //     username: '2',
  //     bio: '3',
  //     email: '4',
  //     password: ''
  //   }
  // };

  constructor(props) {
    super(props);
    console.log('props in constructor', props);
    // console.log('defaultProps in constructor', defaultProps);
    const { image, username, bio, email, password } = props.user;
    this.state = {
      image,
      username,
      bio,
      email,
      password
    };
  }
  // componentWillReceiveProps(newProps, prevProps) {
  //   console.log('newProps',newProps);
  //   console.log('prevProps',prevProps);
  // }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('newProps', nextProps);
    console.log('prevProps', prevState);
    if (nextProps.user !== prevState) {
      return ({
        image: nextProps.user.image || '',
        username: nextProps.user.username || '',
        bio: nextProps.user.bio || '',
        email: nextProps.user.email || '',
        password: nextProps.user.password || ''
      });
      return;
    }
    return null;
  }

  componentDidUpdate() {
    // return this.setState({
    //   image: nextProps.user.image,
    //   username: nextProps.user.username,
    //   bio: nextProps.user.bio,
    //   email: nextProps.user.email,
    //   password: nextProps.user.password
    // });
  }
  onChangeName = (e) => {
    // const { value } = e.target;
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    const { user } = this.props;
    const { username, bio, email, password, image } = this.state;
    console.log('bio', bio);
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
                      value={this.state.image}
                      onChange={(value) => this.onChange(value)}
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="text" placeholder="Your Name"
                      value={this.state.username}
                      onChange={(value) => this.onChange(value)}
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <textarea
                      className="form-control form-control-lg"
                      rows="8"
                      placeholder="Short bio about you"
                      value={this.state.bio}
                      onChange={(value) => this.onChange(value)}
                    ></textarea>
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Email"
                      value={this.state.email}
                      onChange={(value) => this.onChange(value)}
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="password"
                      placeholder="Password"
                      value={this.state.password}
                      onChange={(value) => this.onChange(value)}
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