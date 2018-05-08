import React, { Component } from 'react';

class MessageItems extends Component {
  createTasks(item) {
    return <li style={{ listStyleType: "none", color: "white" }} key={item.key}>{item.text}</li>
  }

  render() {
    let messageEntries = this.props.entries;
    let listItems = messageEntries.map(this.createTasks);

    return(
      <ul className="messageList">
        {listItems}
      </ul>
    );
  }
}

export default MessageItems;
