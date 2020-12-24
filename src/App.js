import './App.css';
import Person from './Components/Person/Person';
import { Component } from 'react';

class App extends Component {
  state = {
    persons: [
      {id : "name2", name: "Vamsi", city: "Hyd"},
      {id : "name1", name :"Dilip", city:"Hyd" },
      {id : "name4", name :"Gustavo", city:"Tijuana"}
  ],
  showPersons : false
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    })
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;
    const persons = [...this.state.persons]; 
    persons[personIndex] = person;
    this.setState({persons:persons})

  }
  
  showPersonsHandler = (id) => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow});
    
  }
  deleteHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons:persons})
  }
  render() {
    let personsList = [];
    if (this.state.showPersons) {
      personsList = (
      <div>
        {this.state.persons.map( (persons, index)=> {
          return <Person name={persons.name}
          city={persons.city}
          key= {persons.id}
          click={() => this.deleteHandler( index) }
          changed={(event) => this.nameChangeHandler(event, persons.id)}/>
        })}
      </div>
      )
    }
  
  return (
    <div className="App">
      <button onClick={this.showPersonsHandler}>Click Me</button>
      { personsList }
    </div>
  );
  }
}

export default App;
