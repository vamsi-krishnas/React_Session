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
  swapstateHandler = () => {
    this.setState(
      {
        persons: [
          {name: "Vamsikrishna", city: "Vizag"},
          {name :"Dilip", city:"Hyd" },
          {name :"Gustavo", city:"Mexico"}
      ]
      }
    )
  }
  
  
  showPersonsHandler = (id) => {
    const doesShow = this.state.showPersons;
    const persons = [...this.state.persons]; 
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    })
    persons[personIndex] = Person;
    
    this.setState({ showPersons: !doesShow});
    this.setState({persons:persons})
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
          click={() => this.deleteHandler( index) }/>
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
