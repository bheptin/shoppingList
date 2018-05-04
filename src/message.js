import React, { Component } from 'react';

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: [],
    };
    this.addMessage = this.addMessage.bind(this);
  }


  addMessage(event) {
    if (this._inputElement.value !== "") {
      var newMessage = {
        text: this._inputElement.value,
        key: Date.now()
      };
      this.setState((prevState) => {
        return {
          message: prevState.message.concat(newMessage)
        };
      });
    }
    this._inputElement.value = "";
    event.preventDefault();
    console.log(this.state.message);
  }

  render() {
    return(
      <form  onSubmit={this.addMessage}>
        <input
        ref={(a) => this._inputElement = a}
        placeholder="Add to the list" />
        <button type="submit">add</button>

      </form>
    );
  };
}

export default Message;
