import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => { //State Lektion 49

  const [title, setTitle] = useState(props.title); //React Hook MUST be called ONLY inside component functions. setTitle = function die title updated


  const clickHandler = () => {     //per konvention werden Event-Funktionen mit *Handler beendet
    setTitle('Updated!');  //Variable wird nun mit dem setter geupdated
  }

  return (
    <Card className='expense-item'> {/* properties below are called in Card.js at props.children */}
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button> {/*clickHandler ohne Klammer, sonst wird function beim parse gerunned*/}
    </Card>
  );
}

export default ExpenseItem;