import React, {Component} from 'react';
import './Person.css';

class person extends Component {
  componentWillUnmount(){
    console.log('Person js componentWillUnmount');
    return true;
  }
  render() {
    return (
      <div className="Persons">
            <p onClick={this.props.click}>I'm {this.props.name} and I am from {this.props.city} </p>
            <input type="text" onChange={this.props.changed} value={this.props.name}></input>
        </div>
    )

  }
    
    
  // return React.createElement('h1', null, 'I am Vamsi');
} 
export default person;