import React, { useEffect } from 'react';
import classes from './Cockpit.module.css';




const Cockpit = (props) => {
    useEffect(() => {
        //runs for every update
        console.log('[Cockpit.js] useEffect');
        setTimeout(() => {
            alert('saved data to cloud');
        }, 1000);
        return () => {
            //cancelling timeout because cockpit is removed before the 1 sec
            // clearTimeout(timer);
            console.log('[Cockpit.js] cleanup work in useEffect');
        }
        //will only alert when props.persons changes, if empty [] it will fun of the first time ONLY 
    }, [props.persons]);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        };
    });

    const assignedClasses = [];
    let btnClass = [classes.Button];
    if (props.showPersons){
        btnClass.push(classes.Red);
    }
    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red); //classes = 'red'
    }
    if (props.personsLength <= 1) {
        assignedClasses.push(classes.bold); //classes = ['red','bold'];
    }

    return (
        <div>
            <h1>{props.title}</h1>
            {/* assigning a string by using join() */}
            <p className={assignedClasses.join(' ')}>This is really working</p>
            <button className={btnClass.join(' ')} onClick={props.clicked}>
            Toggle Persons
            </button>
        </div>
    );
}

export default React.memo(Cockpit);