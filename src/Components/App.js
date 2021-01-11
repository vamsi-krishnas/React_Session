import './App.css';
import React, { Component } from 'react';
import Cabin from './Cabin/Cabin';
import Persons from './Persons/Persons';
import newWrapper from '../hoc/NewWrapper';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('App js Constructor')
  }
  state = {
    persons: [
      {id : "name2", name: "Vamsi", city: "Hyd", zip:234567},
      {id : "name1", name :"Dilip", city:"Hyd", zip:458900 },
      {id : "name4", name :"Gustavo", city:"Tijuana", zip: 751920}
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
    this.setState({persons:persons, })
  }
  zipChangeHandler = (event, id) => {
    
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    })
    const person = {
      ...this.state.persons[personIndex]
    }
    person.zip = event.target.value;
    console.log(person.zip);
    const persons = [...this.state.persons]; 
    persons[personIndex] = person;
    this.setState({persons:persons, })
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
        zipchange = {this.zipChangeHandler}
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

export default newWrapper(App);
