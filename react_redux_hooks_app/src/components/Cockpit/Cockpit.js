import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';



const Cockpit = (props) => {
    const toggleButtonRef = useRef(null);
    // toggleButtonRef.current.click();


    const authContext = useContext(AuthContext);
    
    console.log(authContext.authenticated)
    // useEffect runs after the dom
    useEffect(() => {
        //runs for every update
        console.log('[Cockpit.js] useEffect');
        // setTimeout(() => {
        //     alert('saved data to cloud');
        // }, 1000);
        toggleButtonRef.current.click();
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
            <button ref={toggleButtonRef} className={btnClass.join(' ')} onClick={props.clicked}>
            Toggle Persons
            </button>
            
            <button onClick={authContext.login}>Log in</button>
           
        </div>
    );
}

export default React.memo(Cockpit);