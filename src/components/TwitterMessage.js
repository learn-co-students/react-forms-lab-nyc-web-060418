import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      counter: this.props.maxChars,
    };
  }

  handleChange = (event) => {
    const content = event.target.value
    const rem = this.props.maxChars - content.length
    this.setState({
      inputValue: content,
      counter: rem,
    }, () => console.log(this.state))
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.inputValue} onChange={this.handleChange} />
        {this.state.counter}
      </div>
    );
  }
}

export default TwitterMessage;
