import React from "react";
import '../presentational/style.css';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isSubmit: false
    };
  }

  handleChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  }

  handleChangePassword = (event) => {
    this.setState({ password: event.target.value });
  }

  handleSubmit = () => {
    this.setState(() => ({
      isSubmit: true
    }))
  }

  render() {
    if (this.state.isSubmit === true) {
      return <Redirect to='/main' />
    }

    return (
      <div className="login-division">
        <h1 className="heading">Login Page</h1>
        <form
          onSubmit={this.handleSubmit}
          align="center">
          <fieldset>
            <legend>LOGIN</legend><br />
            Email:<br />
            <input
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              className="input-field"
              type="email"
              value={this.state.email}
              onChange={this.handleChangeEmail}
              required>
            </input>
            <br />
            <br />
            Password:<br />
            <input
              className="input-field"
              type="password"
              value={this.state.password}
              onChange={this.handleChangePassword}
              required>
            </input>
            <br />
            <br />
            <input
              type="submit"
              className="button">
            </input>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default Login;

