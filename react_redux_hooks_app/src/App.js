import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {persons: [
    {name: 'Max', age: 28},
    {name: 'Manu', age: 29},
    {name: 'Stephanie', age: 26}
  ],
  otherState: 'some other value',
  showPersons: false
}
switchNameHandler = (newName) => {
    // console.log('was clicked');
    // this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        {name: newName, age: 28},
        {name: 'Manu', age: 29},
        {name: 'Stephanie', age: 27}
      ]
    } )
  };
  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Max', age: 28},
        {name: event.target.value, age: 29},
        {name: 'Stephanie', age: 26}
      ]
    } )
  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }
  render(){
    const style = {
      backGroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
        {this.state.persons.map(person => {
           return (
            <Person 
            name={person.name} 
            age={person.age}/>
           )
        })}
      </div> 
      )
    }
  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <button 
        style={style}
        onClick={this.togglePersonsHandler}>Toggle Persons
      </button>
      
      {persons}
        
    </div>
    // React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'I am a React App!'))
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

