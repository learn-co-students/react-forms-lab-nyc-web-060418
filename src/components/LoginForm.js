import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  passWordChanger = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  usernameChanger = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handleSubmit= (e) => {
    e.preventDefault();
    (this.state.password.length > 0 && this.state.username.length > 0)? this.props.onSubmit(this.state) : alert('Fill in form please')
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.usernameChanger}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.passWordChanger}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
