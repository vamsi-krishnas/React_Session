import React, { useEffect } from 'react';
import './Cabin.css';

const Cabin = (props) => {
    useEffect(() => {
      console.log('cabin js useEffect');
      // http calls
    }, [props.persons]);
    const style = {
        background : 'white',
        margin : '10px',
        color: 'black',
        border: '1px solid blue',
        padding: '8px'
      }
    const classes = [];
   if(props.persons.length <= 2) {
     classes.push('hihgligt');
   }
   if(props.persons.length <= 1) {
    classes.push('secondary');
  }
    return (
        <div>
           <p className={classes.join(' ')}>Look at Me</p>
           <button style={style} onClick={props.clicked}>Toggle Me</button>
        </div>
    )
}
export default Cabin;