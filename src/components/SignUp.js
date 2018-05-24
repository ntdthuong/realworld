import React, { Component } from 'react';

export class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
  }
  onChangeName = (e) => {
    const {value} = e.target;
    this.setState({...this.state, username: value})
  }
  onChangeEmail = (e) => {
    const {value} = e.target;
    this.setState({...this.state, email: value})
  }
  onChangePassword = (e) => {
    const {value} = e.target;
    this.setState({...this.state, password: value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { onSignUp } = this.props;
    onSignUp({user: this.state});
  }

  handleError = () => {
    const { onGenErrors, user } = this.props;
    return onGenErrors(user.errors);
  }

  render() {
    const { username, email, password } = this.state;
    return (
      <div className="auth-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign up</h1>
              <p className="text-xs-center">
                <a href="">Have an account?</a>
              </p>
              {this.handleError()}
              <form
                onSubmit={this.handleSubmit}
              >
                <fieldset className="form-group">
                  <input
                    onChange={this.onChangeName}
                    value={username}
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Your Name"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    onChange={this.onChangeEmail}
                    value={email}
                    className="form-control form-control-lg"
                    type="email"
                    placeholder="Email"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    onChange={this.onChangePassword}
                    value={password}
                    className="form-control form-control-lg"
                    type="password"
                    placeholder="Password"
                  />
                </fieldset>
                <button className="btn btn-lg btn-primary pull-xs-right" type='submit'>
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
