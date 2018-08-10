import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handlePassChange =(e) => {
    this.setState({
      password: e.target.value
    })
  }

  handleNameChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    (this.state.password.length > 0 && this.state.username.length) > 0 ? this.props.onSubmit(this.state) : console.log("Please fill out the form");
  }

  render() {
    return (
      <form>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleNameChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handlePassChange}/>
          </label>
        </div>
        <div>
          <button type="submit" onClick={this.handleSubmit}>Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
