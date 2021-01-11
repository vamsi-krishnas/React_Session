import React, {Component} from 'react';
import './Person.css';
import NewWrapper from '../../../hoc/NewWrapper';
import PropTypes from 'prop-types';

class person extends Component {
  componentWillUnmount(){
    console.log('Person js componentWillUnmount');
    return true;
  }
  componentDidMount(){
    this.inputElement.focus();
  } 
  render() {
    return (
      <div className="Persons">
        <p>{this.props.id}</p>
            <p onClick={this.props.click}>I'm {this.props.name} and I am from {this.props.city} </p>
            <input type="text" onChange={this.props.changed} value={this.props.name}></input>
            <p> My city Zip Code is {this.props.zip}</p>
            <input type="number" ref={ (ele)=> { this.inputElement = ele} }onChange={this.props.zipchange} value={this.props.zip}></input>
      </div>
    )
      
  } 
   
  // return React.createElement('h1', null, 'I am Vamsi');
} 
person.propTypes = {
  click : PropTypes.func,
  name: PropTypes.string,
  city: PropTypes.string,
  zip: PropTypes.number,
  changed: PropTypes.func
}
export default NewWrapper(person);