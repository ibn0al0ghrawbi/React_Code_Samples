import './NewExpense.css';
import React, { useState } from "react";
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);


    const saveExpenseDataHandler = (enteredExpenseData) => { //hier wird expenseData von Child empfangen Lektion 59 
        const expenseData = {
            ...enteredExpenseData,  //object aus dem submithandler von expenseform
            id: Math.random().toString() //not perfect as id generator but sufficient for this purpose
        }
        props.onAddExpense(expenseData); //call mother function with enriched information from grandchild ExpenseForm^
        setIsEditing(false);
    }

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => { //when cancel is clicked
        setIsEditing(false);
    }


    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler}>Add new Expense</button> /*if editing false set this */}
            {isEditing && <ExpenseForm 
            onSaveExpenseData={saveExpenseDataHandler} //help-property fuer child to parent communic. Namenswahl frei};
            
            onCancel={stopEditingHandler} //pass the function to the Cancel button in ExpenseForm
            />}
            {//Child-Parent Komm. funktioniert geht nur ueber Funktionen
            }
        </div>

    )

}


export default NewExpense;