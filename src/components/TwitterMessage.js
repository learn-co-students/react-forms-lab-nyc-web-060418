import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
    };
  }

  handleChange = event => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.message}/><br/>
        <em>Characters Remaining: {this.props.maxChars - this.state.message.length}</em>
      </div>
    );
  }
}

export default TwitterMessage;
