import React from "react";
import './style.css';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      isSubmit: false
    };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
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
              onChange={this.handleChange}
              required>
            </input>
            <br />
            <br />
            Password:<br />
            <input
              className="input-field"
              type="password" value={this.state.password}
              onChange={this.handleChange}
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