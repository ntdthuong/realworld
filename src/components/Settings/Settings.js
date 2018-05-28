import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { profileAction } from '../../actions';
import { Input } from '../Share/Input';
import { Textarea } from './Textarea';

export class Settings extends Component {

  // constructor(props) {
  //   super(props);
  //   const { image, username, bio, email } = props.user;
  //   this.state = {
  //     image,
  //     username,
  //     bio,
  //     email,
  //     password: ''
  //   }
  // }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   if (nextProps.user) {
  //     const { image, username, bio, email } = prevState.username ? prevState : nextProps.user
  //     return {
  //       image,
  //       username,
  //       bio,
  //       email,
  //       password: ''
  //     };
  //   }
  //   return null;
  // }

  genField = () => {
    console.log('user', this.props.user);
    const { image, username, bio, email } = this.props.user
    let arrField = [];
    arrField.push({name: 'image', type: 'text', placeholder: 'URL of profile picture', value: image});
    return arrField.map((field, index) => <Input key={index} fieldInfo={field} fcChange={this.onChange}/>);
  }

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ ...this.state, [name]: value })
  }

  handleSumit = (e) => {
    e.preventDefault();
    // const user = {user: {...this.state}};
    // const notPass = {user: {...this.state}};
    // delete notPass.user.password;
    // console.log('state', this.state.password ? user : notPass);
    const { value } = e.target;
    const user = { user : {image: value}}
    console.log('state', user);
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
