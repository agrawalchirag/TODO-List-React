import React from 'react';
import './style.css'
import TableRow from './TableRow';

const TaskTable = (props) =>

  (
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
          {props.taskDetails.map((task, index) => (
            <TableRow key={index}
              handleDelete={() => props.handleDelete(index)}
              handleUpdate={() => props.handleUpdate(index)}
              task={task}
            />))}
        </tbody>
      </table>
    </div>
  )

export default TaskTable;

