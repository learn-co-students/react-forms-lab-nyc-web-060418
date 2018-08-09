import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }
  
  characterCounter = () => {
    return `${this.props.maxChars - this.state.value.length}`
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange} />

        <p>Character counter: {this.characterCounter()}</p>
      </div>
    );
  }
}

export default TwitterMessage;
