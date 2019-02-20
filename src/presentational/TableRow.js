import React from 'react';

const TableRow = (props) => (

  <tr>
    <td>{props.task.date.toDateString()}</td>
    <td>{props.task.userInput}</td>
    <td><button onClick={props.handleUpdate}>Update</button></td>
    <td><button onClick={props.handleDelete}>Delete</button></td>
  </tr>
)

export default TableRow;