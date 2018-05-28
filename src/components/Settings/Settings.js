import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { profileAction } from '../../actions';
import { Input } from '../Share/Input';
import { Textarea } from '../Share/Textarea';

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
    };
    this.onChange = this.onChange.bind(this)
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

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ ...this.state, [name]: value });
  }

  genField = () => {
    const { username, image, bio, email, password } = this.state;
    const arrField = [
      { name: 'image', placeholder: 'URL of profile picture', type: 'text', value: image },
      { name: 'username', placeholder: 'Username', type: 'text', value: username },
      { rows: 8, name: 'bio', placeholder: 'Short bio about you', type: 'text', value: bio },
      { name: 'email', placeholder: 'Email', type: 'email', value: email },
      { name: 'password', placeholder: 'New Password', type: 'text', value: password }
    ];
    return arrField.map(
      (field, index) => 
      field.rows
      ? <Textarea 
          key={index} 
          rows={field.rows}
          name={field.name} 
          placeholder={field.placeholder} 
          type={field.type} 
          value={field.value} 
          onChange={this.onChange}
        />
      : <Input 
        key={index} 
        name={field.name} 
        placeholder={field.placeholder} 
        type={field.type} 
        value={field.value} 
        onChange={this.onChange}
      />
    )
  }

  handleSumit = (e) => {
    e.preventDefault();
    const havePass = {user: {...this.state}};
    const notPass = {user: {...this.state}};
    delete notPass.user.password;
    const userInfo = this.state.password ? havePass : notPass;
    console.log('handleSumit', userInfo);
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
                  {this.genField()}
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
