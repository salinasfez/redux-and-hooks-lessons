import React, { Component } from 'react';
import classes from './App.module.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {persons: [
    {id: 'asff', name: 'Max', age: 28},
    {id: 'ekja', name: 'Manu', age: 29},
    {id: 'kadd', name: 'Stephanie', age: 26}
  ],
  otherState: 'some other value',
  showPersons: false
}
deletePersonHandler = (personIndex) => {
  // fetching up there/ slice() will make a copy of the array so when spliced the original is not mutated
  // const persons = this.state.persons.slice();
  // spreads out elements in array into a list of elements and gets added to new array without mutating
  const persons = [...this.state.persons];
  persons.splice(personIndex, 1);
  // setting the state of persons to the new persons...after it is spliced.
  this.setState({persons: persons})
}
  nameChangedHandler = (event, id) => {
    // updating the person only for the input field we typed in
    // almost like map
    const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;
    })
    // reach out to this.state.persons and accessing the element at the personIndex
    // const person = this.state.persons[personIndex];
    // better approach
    const person = {
      ...this.state.persons[personIndex]
    }
    // update the person name..from copy not from original object
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons});
  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }
  render(){

    let persons = null;

    if (this.state.showPersons) {
      persons =  <Persons 
          persons={this.state.persons}
          clicked = {this.deletePersonHandler}
          changed={this.nameChangedHandler}
          />
      };
    // classes assigned in app.css...turns array of strings into one string
    // let classes = ['red', 'bold'].join(' ');
 return (
      <div className={classes.App}> 
      <Cockpit 
      showPersons={this.state.showPersons} 
      persons={this.state.persons}
      clicked={this.togglePersonsHandler}
      />
      {persons}
    </div>
   
  );
}
}
export default App;

