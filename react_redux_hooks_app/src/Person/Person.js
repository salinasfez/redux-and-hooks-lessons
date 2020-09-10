import React from 'react';
import '../Person/Person.css'

const person = (props) => {
    return (
        <div className='Person'>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            {/* two way binding.. listen to changes and  */}
            <input type='text' onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default person;