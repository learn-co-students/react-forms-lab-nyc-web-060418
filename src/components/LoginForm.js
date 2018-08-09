import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    (this.state.username !== '' && this.state.password !== '') ? this.props.onSubmit(this.state) : alert('NOO!')
    
  }

  render() {
    return (
    
      <form onSubmit={this.handleSubmit} >
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.usernameVal} onChange={this.handleInputChange}  />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.passwordVal} onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>

        </div>
      </form>
    );
  }
}

export default LoginForm;
