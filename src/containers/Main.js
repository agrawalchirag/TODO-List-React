import React from 'react';
import EnterTaskDetails from '../presentational/EnterTaskDetails';
import TaskTable from '../presentational/TaskTable';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      taskDetails: [],
      userInput: '',
      buttonName: `Add Task`,
      date: new Date(),
      index: -1,
    }
  }

  changeDateUserInput = (inputkey, value) => {
    this.setState({
      [inputkey]: value
    })
  }

  handleDelete = (index) => {
    this.setState((prevState) => ({
      taskDetails: prevState.taskDetails.filter(el => el !== this.state.taskDetails[index])
    }));
  }

  handleUpdate = (index) => {
    if (this.state.index === -1) {
      this.setState({
        buttonName: `Update Task`,
        userInput: this.state.taskDetails[index].userInput,
        date: this.state.taskDetails[index].date,
        index: index,
      })
    }
  }

  handleSubmit = () => {
    const task = {
      userInput: this.state.userInput,
      date: this.state.date
    }
    if (this.state.userInput.length > 0) {
      if (this.state.index === -1) {
        this.setState({
          buttonName: `Add Task`,
          taskDetails: [...this.state.taskDetails, task],
          userInput: '',
          date: new Date()
        })
      }
      else {
        let prev = this.state.taskDetails;
        prev[this.state.index] = task
        this.setState({
          buttonName: `Add Task`,
          taskDetails: prev,
          userInput: '',
          date: new Date(),
          index: -1
        })
      }
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
          changeDateUserInput={this.changeDateUserInput}
          userInput={this.state.userInput}
          date={this.state.date}
          buttonName={this.state.buttonName} />
        <TaskTable
          handleDelete={this.handleDelete}
          handleUpdate={this.handleUpdate}
          taskDetails={this.state.taskDetails}

        />
      </div>
    )
  }
}
export default Main;