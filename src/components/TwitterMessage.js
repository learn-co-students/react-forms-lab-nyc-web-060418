import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      inputText: ''
    };
  }

  handleChange = (event) => {
    if (this.props.maxChars - this.state.inputText.length > 0){ // doesn't let you delete if you get to 140. maybe a validation phase that would only block changes that put it over the limit?
      this.setState({
        inputText: event.target.value
      })
    }
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleChange} value={this.state.inputText} />
        <span>{this.props.maxChars - this.state.inputText.length} characters remaining</span>
      </div>
    );
  }
}

export default TwitterMessage;
