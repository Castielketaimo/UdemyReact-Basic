import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: '1',name: 'Max', age: 28},
      { id: '2',name: 'Manu', age: 29},
      { id: '3',name: 'Stephanie', age: 26 }
    ],
    otherStates: 'some states',
    showPersons: false
  }


  deletePersonHandler = (personIndex) => {
    //calling slice so we can make a new element instead using reference
    //const persons = this.state.persons.slice();
    //same as above, es6 way, newer and better
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  nameChangedHandler = (event, id)=> {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = {...this.state.persons};
    persons[personIndex] = person;

    this.setState({persons: persons})
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
                    key={person.id}
                    changed={(event) => this.nameChangedHandler(event, person.id)} />
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
