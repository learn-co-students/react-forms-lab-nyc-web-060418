import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  setMessage = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  charRem = () => {
    return (this.props.maxChars - this.state.message.length)
  }

  render() {

    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={event => this.setState({message: event.target.value})} value={this.state.message} type="text" />
        <p>You have {this.charRem()} characters remaining.</p>
      </div>
    );
  }
}

export default TwitterMessage;
