import React from 'react';
import './Person.css';

const person = (props) => {
    return (
      <div className="Persons">
            <p onClick={props.click}>I'm {props.name} and I am from {props.city} </p>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
    )
    
  // return React.createElement('h1', null, 'I am Vamsi');
} 
export default person;