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
    otherStates: 'some states',
    showPersons: false
  }


  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
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

  togglePersonsHandler = () => {
    this.setState({showPersons: !this.state.showPersons})
  }

  render() {
    const style ={
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    
    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
                    click={() => this.deletePersonHandler(index)}
                    name = {person.name} 
                    age ={person.age}
                     />
          })}
        </div>
      );
    }

    return (
      //can't use resolve word for js such as class since its jsx not html
      //can only have a single div or element 
      <div className="App">
        <h1>Hi Its my first app</h1>
        <p>Stupid as fuck</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
    //return React.createElement('div', {className: 'App'},React.createElement('h1', null, 'does this works?'));
  }
}

export default App;
