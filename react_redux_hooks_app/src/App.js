import React, { Component } from 'react';
import classes from './App.module.css';

import Person from './Person/Person';



 

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
    let btnClass = [classes.Button];

    if (this.state.showPersons) {
      persons = (
        <div>
        {this.state.persons.map((person, index) => {
           return (
            <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age}
            key={person.id}
            // rememember arrow function to pass data
            changed={(event) => this.nameChangedHandler(event, person.id)}/>
           )
        })}
      </div> 
      );
     btnClass.push(classes.Red);
    }
    // classes assigned in app.css...turns array of strings into one string
    // let classes = ['red', 'bold'].join(' ');
const assignedClasses = [];

    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); //classes = 'red'
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); //classes = ['red','bold'];
    }
    
  return (
    
    <div className={classes.App}>
      <h1>Hi, I'm a React App</h1>
      {/* assigning a string by using join() */}
      <p className={assignedClasses.join(' ')}>This is really working</p>
      <button className={btnClass.join(' ')} onClick={this.togglePersonsHandler}>
        Toggle Persons
      </button>
    
      
      {persons}
        
    </div>
   
  );
}
}



export default App;

//  functional component with state 
// const App = props => {
//   // personsState is equivalent to this.state/state
//   // setPersonsState is equivalent to this.setState()
//   // array destructuring is used to pull things out of the right side
//   const [ personsState, setPersonsState] = useState({persons: [
//     {name: 'Max', age: 28},
//     {name: 'Manu', age: 29},
//     {name: 'Stephanie', age: 26}
//   ],
//   otherState: 'some other value'
// });
// console.log(personsState)
//   const switchNameHandler = () => {
//     // console.log('was clicked');
//     // this.state.persons[0].name = 'Maximilian';
//     setPersonsState({
//       persons: [
//         {name: 'Maximilian', age: 28},
//         {name: 'Manu', age: 29},
//         {name: 'Stephanie', age: 27}
//       ],
//       otherState: personsState.otherState
//     } )
//   };

//   return (
//     <div className="App">
//       <h1>Hi, I'm a React App</h1>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Racing</Person>
//       <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
//     </div>
//     // React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'I am a React App!'))
//   );
// }

