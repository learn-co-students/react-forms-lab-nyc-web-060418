import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  // call handleChange on your onChange event listener
  // need to pass in an event
  // then we will setState to change state
  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  characterCounter = () => {
    return ` ${this.props.maxChars - this.state.value.length} `
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        {/* add an onChange to capture when there's a change*/}
        <input value={this.state.value} onChange={this.handleChange} type="text" />
        <p>Char Count: {this.characterCounter()}</p>
      </div>
    );
  }
}

export default TwitterMessage;
