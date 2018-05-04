import React, { Component } from 'react';
import './index.css';
import Message from './message.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="todoListMain">
          <div className="header">
              <Message />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
