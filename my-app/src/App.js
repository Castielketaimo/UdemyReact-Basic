import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28},
      { name: 'Manu', age: 29},
      { name: 'Stephanie', age: 26 }
    ],
    otherStates: 'some states'
  }
  //handler means its an event handler
  switchNameHandler = (newName) => {
    //console.log('was clicked')
    //DON'T DOD THIS: this.state.persons[0].name = 'LovelyBags';
    this.setState({
      persons: [
        { name: newName, age: 10 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    })
  }

  nameChangedHandler = (event)=> {
    this.setState({
      persons: [
        { name: 'Max', age: 10 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    })
  }

  render() {
    const style ={
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    
    return (
      //can't use resolve word for js such as class since its jsx not html
      //can only have a single div or element 
      <div className="App">
        <h1>Hi Its my first app</h1>
        <p>Stupid as fuck</p>
        <button 
          style={style}
          onClick={() => this.switchNameHandler('MaxMiao')}>Switch Button</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Nah')}
          changed={this.nameChangedHandler}
          >
          My Hobbie is : Racing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
    //return React.createElement('div', {className: 'App'},React.createElement('h1', null, 'does this works?'));
  }
}

export default App;
