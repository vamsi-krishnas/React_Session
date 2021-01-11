import React, {Component} from 'react';
import Person from '../Persons/Person/Person'

class Persons extends Component {

    /* static getDerivedStateFromProps(props, state) {
        console.log('persons js getDerivedStateFromProps')
    } */
    shouldComponentUpdate(nextProps, nextState) {
        console.log('persons js shouldComponentUpdate')
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Persons js getSnapshotBeforeUpdate')
        return { message: 'Snapshot!'};
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('persons.js componentDidUpdate')
        console.log( snapshot)
    }
    render() {
        return this.props.persons.map( (persons, index)=> {
            return (<Person 
            id={persons.id}
            name={persons.name}
            city={persons.city}
            zip= {persons.zip}
            key= {persons.id}
            click={() => this.props.clicked(index) }
            changed={(event) => this.props.changed(event, persons.id)}
            zipchange= {(event) => this.props.zipchange(event, persons.id)}
            /> 
            )
        } );

    }
    
}
    

export default Persons;
