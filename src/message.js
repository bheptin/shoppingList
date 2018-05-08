import React, { Component } from 'react';
import MessageItems from './messageItems.js';

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: [],
      name: [],
    };
    this.addMessage = this.addMessage.bind(this);
    //this.addName = this.addName.bind(this);
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
      <div className="shoppingListMain">
        <div className="header">
          <form  onSubmit={this.addMessage}>
            <input style={{marginRight: "10px"}}
            placeholder="Who's list is this for?" />
            <input style={{marginRight: "4px"}}
            ref={(a) => this._inputElement = a}
            placeholder="Add to the list" />
            <button type="submit">add</button>
          </form>
        </div>
          <MessageItems entries={this.state.message} />
      </div>
    );
  };
}

export default Message;
