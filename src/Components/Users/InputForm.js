import React, { useRef, useState } from "react";
import './InputForm.css'
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModel";

const InputForm = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();
    const clgInputRef = useRef();

    const nameChangeHandler = e => {
        
        setEnteredName(e.target.value)
    };
    const ageChangeHandler = e => {
        
        setEnteredAge(e.target.value)
    };

    const formSubmitHandler = (e) => {
        e.preventDefault()
        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title: 'Invalid Input',
                message: 'Both Name and Age should be non-empty'
            });
            return;
        };
        if (enteredAge <=1){
            setError({
                title: 'Invalid Age',
                message: 'Age should be greater than 1'
            });
            return;
        };
        const userData = {
            name: enteredName,
            age: enteredAge,
            clgName: clgInputRef.current.value
        };
        props.onSubmittingForm(userData);
        setEnteredAge('')
        setEnteredName('')
        clgInputRef.current.value = ''
    };
    const errorHandler = () => {
        setError(null)
    }
    return (
        <>
        {error && <div className="backdrop" onClick={errorHandler}/>}
        {error && <ErrorModel title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <Card className="input">
            <form onSubmit={formSubmitHandler}>
                <div>
                    <label htmlFor="username">Username: </label>
                    <input type="text" id="username" value={enteredName} onChange={nameChangeHandler}></input>
                </div>
                <div>
                    <label htmlFor="userage">Age: </label>
                    <input type="number" id="userage" value={enteredAge} onChange={ageChangeHandler}></input>
                </div>
                <div>
                    <label htmlFor="userclg">College Name: </label>
                    <input type="text" id="userclg" ref={clgInputRef}></input>
                </div>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
        </>
    )
};

export default InputForm;