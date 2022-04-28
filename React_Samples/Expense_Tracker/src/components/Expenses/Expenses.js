import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';
import './ExpensesList.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
    const [filterDate, setfilterDate] = useState('2019'); //Standard-select, has to match 1 of the options


    const filterDateHandler = (enteredDate) => {
        setfilterDate(enteredDate)
        console.log('Expenses.js, entered Data: ' + enteredDate);
    };

    const filterList = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filterDate;
    });

    let expensesContent = <h2 className='expenses-list__fallback'>No Content found</h2>;

    if (filterList.length > 0) { //if no content for year available
        expensesContent = filterList.map((expense) =>         //maps over the input array from App.js/filtered List
        (<ExpenseItem
            key={expense.id} //key can be added to EVERY object and makes them unique to react. should always be used for mapped items
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
        />
        ));
    } else if (filterDate === '') { //if no filter selected
        expensesContent = props.items.map((expense) =>         //maps over the input array from App.js/filtered List
        (<ExpenseItem
            key={expense.id} //key can be added to EVERY object and makes them unique to react. should always be used for mapped items
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
        />
        ));
    }

    return (
        <Card className='expenses'>
            <ExpensesFilter 
                selected={filterDate}
                onFilterDate={filterDateHandler}
            />
            <ExpensesChart expenses={filterList}/>
            {expensesContent /*Vorbedingungen werden vor dem return gemacht und dann jeweils ueberschrieben */}
        </Card>

    );
}


export default Expenses;