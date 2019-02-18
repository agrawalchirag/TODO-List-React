import React from "react";
import './style.css';
import DatePicker from 'react-date-picker';


class EnterTaskDetails extends React.Component {


  dateChange = (date) => {
    this.props.dateChange(date);
  }

  changeUserInput = (userInput) => {
    this.props.changeUserInput(userInput);
  }

  handleSubmit = () => {
    this.props.handleSubmit();
  }

  render() {
    return (
      <div className="todolist-division split left">
        <h1 className="heading">Enter Task Details</h1>
        Select Date:<br />
        <DatePicker
          calendarClassName="calender"
          onChange={this.dateChange}
          value={this.props.date}
          required
        />
        <input
          className="input-task"
          placeholder="Enter task"
          onChange={this.changeUserInput}
          value={this.props.userInput}
          type="text" required
        />
        <button
          className="button"
          onClick={this.handleSubmit}>
          {this.props.buttonName}
        </button>
      </div>
    )
  }
}

export default EnterTaskDetails;