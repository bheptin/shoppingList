import React, { Component } from 'react';

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    }
  };


  handleClick(event) {
    console.log(this.state.message);
    event.preventDefault();
  }

  render() {
    return(
      <form  onSubmit={this.handleClick}>
        <input onChange={event => this.setState({message: event.target.value})} />
        <button onClick={(e) => this.handleClick(e)}  type="submit">add</button>

      </form>
    );
  };
}

export default Message;
