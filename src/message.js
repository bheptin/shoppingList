import React, { Component } from 'react';

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    }
  }
  render() {
    return(
      <div>
        <input onChange={event => this.setState({message: event.target.value})} />
        value of the input: {this.state.message}
      </div>
    );
  };
}

export default Message;
