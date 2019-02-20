import React from "react";
import './style.css';
import DatePicker from 'react-date-picker';

const EnterTaskDetails = (props) =>

  (
    <div className="todolist-division split left" >
      <h1 className="heading">Enter Task Details</h1>
      Select Date: <br />
      < DatePicker
        caIlendarClassName="calender"
        onChange={date => props.changeDateUserInput('date', date)}
        value={props.date}
        required
      />
      <input
        className="input-task"
        placeholder="Enter task"
        onChange={userInput => props.changeDateUserInput('userInput', userInput.target.value)}
        value={props.userInput}
        type="text" required
      />
      <button
        className="button"
        onClick={props.handleSubmit}>
        {props.buttonName}
      </button>
    </div >
  )

export default EnterTaskDetails;

