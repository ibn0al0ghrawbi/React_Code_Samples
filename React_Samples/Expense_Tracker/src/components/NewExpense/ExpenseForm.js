import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState(''); //leer weil urspr. string beim ersten Rendern der Component leer ist
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => { //in event wird durch 'onChange' der input uebergeben
        setEnteredTitle(event.target.value);    //set wird hier aufgerufen um variable über die Lebensdauer der Komponente hinaus zu speichern
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault(); //prevents that default submit is sent and page reloaded

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        };

        props.onSaveExpenseData(expenseData); //rufe  objekt in Mutterfunktion auf in NewExpense
        setEnteredTitle('');    //refresh of the input fields
        setEnteredAmount('');
        setEnteredDate('');
    };

    

    return (
        
            <form onSubmit={submitHandler}>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input type='text'
                            value={enteredTitle}
                            onChange={titleChangeHandler} />
                    </div>

                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input type='number'
                            min='0.01'
                            step='0.01'
                            value={enteredAmount}
                            onChange={amountChangeHandler}
                        />
                    </div>
                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input type='date'
                            min='2019-01-01'
                            max='2023-12-31'
                            value={enteredDate}
                            onChange={dateChangeHandler} />
                    </div>
                </div>
                <div className='new-expense__actions'>
                    <button type='button' onClick={props.onCancel}>Cancel</button>
                    <button type='submit'>Add Expense</button>
                </div>
            </form>
            
        
    )

}

export default ExpenseForm;