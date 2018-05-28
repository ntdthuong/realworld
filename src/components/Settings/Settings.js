import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { profileAction } from '../../actions';
import { Input } from '../Share/Input';
import { Textarea } from './Textarea';

export class Settings extends Component {

  constructor(props) {
    super(props);
    const { image, username, bio, email, password } = props.user;
    this.state = {
      image,
      username,
      bio,
      email,
      password
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps && nextProps.user) {
      const { image, username, bio, email, password } = prevState.username ? prevState : nextProps.user;
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

  // genField = () => {
  //   console.log('user', this.props.user);
  //   const { image, username, bio, email } = this.props.user
  //   let arrField = [];
  //   arrField.push({name: 'image', type: 'text', placeholder: 'URL of profile picture', value: image});
  //   return arrField.map((field, index) => <Input key={index} fieldInfo={field} fcChange={this.onChange.bind(this)}/>);
  // }

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ ...this.state, [name]: value })
  }

  handleSumit = (e) => {
    e.preventDefault();
    // const { value } = e.target;
    // const user = { user: { image: value } }
    console.log('handleSumit', this.state);
  }

  render() {
    const { username, image, bio, email, password } = this.state;
    return (
      <div className="settings-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Your Settings</h1>
              <form onSubmit={this.handleSumit}>
                <fieldset>
                  {/* {this.genField()} */}
                  <Input name='image' placeholder='image' type='text' value={image} onChange={this.onChange} />
                  <Input name='username' placeholder='username' type='text' value={username} onChange={this.onChange} />
                  <Input name='bio' placeholder='bio' type='text' value={bio} onChange={this.onChange} />
                  <Input name='email' placeholder='email' type='email' value={email} onChange={this.onChange} />
                  <Input name='password' placeholder='password' type='password' value={password || ''} onChange={this.onChange} />
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
