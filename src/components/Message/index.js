import React, { Component } from "react";

class Message extends Component {
  state = {
    message: "",
    animate: false
  };

  componentDidUpdate({score, topScore}, prevState) {
    const newMessage = { animate: true };
    if (score === 0 && topScore === 0) {
      newMessage.message = "";
    } else if (score === 0 && topScore > 0) {
      newMessage.message = "wrong";
    } else {
      newMessage.message = "right";
    }
    if (score !== this.props.score || this.state.message !== newMessage.message) {
      this.setState(newMessage);
    }
  }

  renderMessage = () => {
    switch (this.state.message) {
    case "right":
      return "You guessed right";
    case "wrong":
      return "You guessed wrong";
    default:
      return "Click an image to start";
    }
  };

  render() {
    return (
      <li className={this.state.animate ? this.state.message : ""}
        imagestate={() => this.setState({ animate: false })}>
        {this.renderMessage()}
      </li>
    );
  }
}

export default Message;
