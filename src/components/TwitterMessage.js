import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      inputVal : ""
    };
  }

  handleChange = (e) => {
    this.setState({
      inputVal : e.target.value
    })
  }

  remainingChars = () => {
    return this.props.maxChars - this.state.inputVal.length
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleChange} value={this.state.inputVal}/>
        <p> {this.remainingChars()} </p>
      </div>
    );
  }
}

export default TwitterMessage;
