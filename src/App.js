import './App.css';
import Radium from 'radium';
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
    const style = {
      background : 'white',
      margin : '10px',
      color: 'black',
      border: '1px solid blue',
      padding: '8px',
      ':hover' : {
        background: 'lightgreen',
        color: 'red',
      }
    }

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
   // let classes = ['hihgligt', 'secondary'].join(' ');
   const classes = [];
   if(this.state.persons.length <= 2) {
     classes.push('hihgligt');
   }
   if(this.state.persons.length <= 1) {
    classes.push('secondary');
  }
  return (
    <div className="App">
      <p className={classes.join(' ')}>Look at Me</p>
      <button style={style} onClick={this.showPersonsHandler}>Toggle Me</button>
      { personsList }
    </div>
  );
  }
}

export default Radium(App);
