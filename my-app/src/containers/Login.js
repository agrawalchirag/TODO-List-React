import React from "react";
import './Login.css'
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {value: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <form onSubmit={this.handleSubmit} align = "center">
        <fieldset>
          <legend>LOGIN</legend><br/>
            Email:<br/>
          <input type="text"  value={this.state.email} onChange={this.handleChange} required></input><br/>
          <br/>
            Password:<br/>
          <input type="text"  value={this.state.password} onChange={this.handleChange} required></input><br/><br/>  
          <input type="submit" ></input>
          </fieldset>
          
        </form>
      </div>
    )
  }
}

export default Login;