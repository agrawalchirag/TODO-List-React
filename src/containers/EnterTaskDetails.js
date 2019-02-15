import React from "react";
import './style.css';
import DatePicker from 'react-date-picker';
import TaskTable from "./TaskTable";

let task = {
  userInput: ``,
  date: ``
}

class EnterTaskDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      date: new Date(),
      taskDetails: [],
      isEditing: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dateChange = this.dateChange.bind(this);
    this.changeUserInput = this.changeUserInput.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  dateChange(date) {
    this.setState({
      date
    })
  }

  changeUserInput(e) {
    this.setState({
      userInput: e.target.value
    });
  }

  componentDidUpdate() {
    task = {}
  }

  handleSubmit = () => {
    task.userInput = this.state.userInput;
    task.date = this.state.date;
    this.setState(() => ({
      taskDetails: [...this.state.taskDetails, task],
      //array.push(task)
      userInput: '',
    }))
  }

  handleDelete(i) {
    this.setState((id) => ({
      taskDetails: id.taskDetails.filter(el => el !== i)
    }));
  }

  render() {
    return (
      <div className="todolist-division split left">
        Select Date:<br />
        <DatePicker
          calendarClassName="calender"
          onChange={this.dateChange}
          value={this.state.date}
          required
        />
        <input className="input-task"
          placeholder="Enter task"
          onChange={this.changeUserInput}
          value={this.state.userInput}
          type="text" required/>
        <button className="button" onClick={this.handleSubmit}>Add Task</button>
        <TaskTable val={this.state.taskDetails} handleDelete={this.handleDelete} />
      </div>
    )
  }
}
export default EnterTaskDetails;
