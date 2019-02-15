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

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit = () => {
    this.setState(() => ({
      isSubmit: true
    }))
  }

  render() {
    if (this.state.isSubmit === true) {
      return <Redirect to='/todolist' />
    }
    return (
      <div className="login-division">
        <h1 className="heading">Login Page</h1>
        <form onSubmit={this.handleSubmit} align="center">
          <fieldset>
            <legend>LOGIN</legend><br />
            Email:<br />
            <input className="input-field" type="text" value={this.state.email} onChange={this.handleChange} required></input><br />
            <br />
            Password:<br />
            <input className="input-field" type="text" value={this.state.password} onChange={this.handleChange} required></input><br /><br />
            <input type="submit" className="button"></input>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default Login;