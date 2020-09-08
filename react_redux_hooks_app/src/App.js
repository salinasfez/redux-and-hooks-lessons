import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26}
    ]
  }
  render(){
  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <button>Switch Name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[1].age}/>
    </div>
    // React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'I am a React App!'))
  );
}
}

export default App;
