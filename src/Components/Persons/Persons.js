import React from 'react';
import Person from '../Persons/Person/Person'

const Persons= (props) => 
    props.persons.map( (persons, index)=> {
        return <Person 
        name={persons.name}
        city={persons.city}
        key= {persons.id}
        click={() => props.clicked(index) }
        changed={(event) => props.changed(event, persons.id)}/> 
    } );

export default Persons;
