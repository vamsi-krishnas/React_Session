import React from 'react';
import './Person.css';

const person = (props) => {
    return (
      <div className="Persons">
            <p onClick={props.click}>I'm {props.name} and I am from {props.city} </p>
        </div>
    )
    
  // return React.createElement('h1', null, 'I am Vamsi');
} 
export default person;