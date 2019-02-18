import React from 'react';
import './style.css'

class TaskTable extends React.Component {

  handleDelete = (i) => {
    this.props.handleDelete(i);
  }

  handleUpdate = (e, i) => {
    this.props.handleUpdate(e, i);
  }

  render() {
    return (
      <div className="todolist-division split right">
        <h1 className="heading">List of Tasks</h1>
        <table className="table">
          <tbody>
            <tr>
              <th>Date</th>
              <th>Task</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
            {this.props.val.map((e, i) =>
              <tr key={i}>
                <td>{e.date.toDateString()}</td>
                <td>{e.userInput}</td>
                <td><button onClick={this.handleUpdate.bind(this, e)}>Update</button></td>
                <td><button onClick={this.handleDelete.bind(this, e)}>Delete</button></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    )
  }
}

export default TaskTable;
