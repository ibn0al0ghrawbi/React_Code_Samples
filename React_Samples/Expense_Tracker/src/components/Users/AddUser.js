import React, { useState, useRef } from "react";
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from "../Helpers/Wrapper";


const AddUser = props => {
    const nameInputRef = useRef(); //always rendered as an object with a current prop
    const ageInputRef = useRef();
    //advantage of ref against state is, that it is not submitted at any key stroke, which can improve perfomance and is far less work
    // useState in this case will set after each new key, so useState is obsolete

    //const [enteredName, setEnteredName] = useState('');
    //const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();


    const addUserHandler = event => {
        event.preventDefault(); //prevent that a request is sent
        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;

        if ((enteredName.trim().length === 0) || (enteredAge.trim().length === 0)) { //prevent empty fields
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid name and age (non-empty values)',
            });
            return;
        }
        if (+enteredAge < 1) { //+ converts age to a number (to be sure)
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (>0)',
            });
            return;
        }
        props.onAddUser(enteredName, enteredAge);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
        //this is used to reset the input-field. however manipulating the dom without react should 
        //in general not be used but in this case it is considerable
    };

    const errorHandler = () => {
        setError(null);
    }

    return (
        <Wrapper>
            <Card cssClass={classes.input}> {/*calls input label from AddUser.module.css */}
                {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
                <form onSubmit={addUserHandler}>
                    <label htmlFor="userName">User Name</label>
                    <input
                        id="userName"
                        type="text"
                        ref={nameInputRef}
                        >
                    </input>
                    <label htmlFor="userAge">User Age (in Years)</label>
                    <input
                        id="userAge"
                        type="number"
                        ref={ageInputRef}
                        >
                    </input>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
};

export default AddUser;