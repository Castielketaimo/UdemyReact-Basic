import React, { Component } from 'react';
import './App.css';
import Input from './Input/Input'
import Output from './Output/Output';

class App extends Component {
  state = {
    users: [
      {name: 'kerry'}
    ]
  }

  switchNameHandler = (event) => {
    this.setState({
      users:[
        {name: event.target.value}
      ]
    })
  }

  render() {
    return (
      <div>
        <Input 
          changed={this.switchNameHandler}
          username={this.state.users[0].name} />
        <Output username='Castiel' />
        <Output username= {this.state.users[0].name} />
      </div>
    );
  }
}

export default App;
