import './App.css';
import { Component } from 'react';
import Cabin from './Cabin/Cabin';
import Persons from './Persons/Persons';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('App js Constructor')
  }
  state = {
    persons: [
      {id : "name2", name: "Vamsi", city: "Hyd"},
      {id : "name1", name :"Dilip", city:"Hyd" },
      {id : "name4", name :"Gustavo", city:"Tijuana"}
  ],
  showPersons : false
  }
  static getDerivedStateFromProps(props, state) {
    console.log('App js getDerivedStateFromProps', props, state);
    return state;
  }
  componentDidMount() {
    console.log(' App Js component Did Mount')
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
        <Persons 
        persons = {this.state.persons}
        clicked = {this.deleteHandler}
        changed = {this.nameChangeHandler}
        />
      </div>
      )
    }
   // let classes = ['hihgligt', 'secondary'].join(' ');
   
  return (
    <div className="App">
      <Cabin 
      persons = {this.state.persons}
      clicked= {this.showPersonsHandler}
      />
      { personsList }
    </div>
  );
  }
}

export default App;
