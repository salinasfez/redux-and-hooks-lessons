import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import '../Person/Person.css';
import classes from './Person.module.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';
class Person extends Component {
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef()
    }
    // has to be static and typed exactly like that
    static contextType = AuthContext;
    
    
    componentDidMount(){
        // componentDidMount executes after dom
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }
    render(){
        console.log('[Person.js] rendering...');
        {/* two way binding.. listen to changes at input tag*/}
        return (
            <Aux>
                
                    
                {this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>}
                
                <p key='i1'onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p key='i2'>{this.props.children}</p>
                <input key='i3'
                // ref={(inputEl) => {this.inputElement = inputEl}} 
                ref={this.inputElementRef}
                type='text' 
                onChange={this.props.changed} 
                value={this.props.name} />
            </Aux>
        );
     }
};
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};
export default withClass(Person, classes.Person);