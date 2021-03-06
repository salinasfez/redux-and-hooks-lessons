import React, { Component } from 'react';
import classes from './App.module.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';
import AuthContext from '../context/auth-context';

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js constructor');
  }
  state = {persons: [
    {id: 'asff', name: 'Max', age: 28},
    {id: 'ekja', name: 'Manu', age: 29},
    {id: 'kadd', name: 'Stephanie', age: 26}
  ],
  otherState: 'some other value',
  showPersons: false,
  showCockpit: true,
  changeCounter: 0,
  authenticated: false
}
static getDerivedStateFromProps(props, state){
  console.log('[App.js] getDerivedStateFromProps', props);
  return state;
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
componentDidMount() {
  console.log('[App.js] componentDidMount');
}
shouldComponentUpdate(){
  console.log('[App.js] shouldComponentUpdate');
  //has to return something
  //returning false would prevent the update
  return true;
}

componentDidUpdate(){
  console.log('[App.js] componentDidUpdate');
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
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      };
    });
  };
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }
  loginHandler = () => {
    this.setState({authenticated: true})
  };
  render(){
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPersons) {
      persons =  <Persons 
          isAuthenticated={this.state.authenticated}
          persons={this.state.persons}
          clicked = {this.deletePersonHandler}
          changed={this.nameChangedHandler}
          />
      };
    // classes assigned in app.css...turns array of strings into one string
    // let classes = ['red', 'bold'].join(' ');
 return (
      <Aux>
        <button onClick={() => {this.setState({showCockpit: false})}}>Remove Cockpit</button> 
      <AuthContext.Provider value={{authenticated: this.state.authenticated, login: this.loginHandler}}>
      {this.state.showCockpit ? 
      <Cockpit 
      title={this.props.title}
      showPersons={this.state.showPersons} 
      personsLength={this.state.persons.length}
      clicked={this.togglePersonsHandler}
      /> : null}
      {persons}
      </AuthContext.Provider>
    </Aux>
   
  );
}
}
export default withClass(App, classes.App);

