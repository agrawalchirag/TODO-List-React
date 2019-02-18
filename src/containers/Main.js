import React from 'react';
import EnterTaskDetails from './EnterTaskDetails';
import TaskTable from './TaskTable';

let task = {
  userInput: ``,
  date: ``
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskDetails: [],
      userInput: '',
      buttonName: `Add Task`,
      date: new Date(),
    }
  }

  dateChange = (date) => {
    this.setState({
      date
    })
  }

  changeUserInput = (e) => {
    this.setState({
      userInput: e.target.value
    });
  }

  handleDelete = (i) => {
    this.setState((id) => ({
      taskDetails: id.taskDetails.filter(el => el !== i)
    }));
  }

  handleUpdate = (e, i) => {
    if (this.state.buttonName === `Add Task`) {
      this.setState({
        buttonName: `Update Task`,
        userInput: e.userInput
      })
      this.handleDelete(e);
    }
  }

  componentDidUpdate() {
    task = {}
  }

  handleSubmit = () => {
    if (this.state.userInput.length > 0) {
      task.userInput = this.state.userInput;
      task.date = this.state.date;
      this.setState(() => ({
        buttonName: `Add Task`,
        taskDetails: [...this.state.taskDetails, task],
        userInput: '',
      }))
    }
    else {
      window.alert("Enter Task")
    }
  }

  render() {
    return (
      <div>
        <EnterTaskDetails
          handleSubmit={this.handleSubmit}
          changeUserInput={this.changeUserInput}
          userInput={this.state.userInput}
          date={this.state.date}
          dateChange={this.dateChange}
          buttonName={this.state.buttonName} />
        <TaskTable
          handleDelete={this.handleDelete}
          handleUpdate={this.handleUpdate}
          val={this.state.taskDetails}
        />
      </div>
    )
  }
}
export default Main;