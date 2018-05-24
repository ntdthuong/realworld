import React, { Component } from 'react';

export class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
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
    const { onSignIn } = this.props;
    onSignIn({user: this.state});
  }
  handleError = () => {
    const { onGenErrors, user } = this.props;
    return onGenErrors(user.errors);
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="auth-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign in</h1>
              <p className="text-xs-center">
                <a href="">Need an account?</a>
              </p>

              {this.handleError()}

              <form
                onSubmit={this.handleSubmit}
              >
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
