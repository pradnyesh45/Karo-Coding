import React from "react";
import { Table, Container } from "react-bootstrap";

function Queues(props) {
  return (
    <tr>
      <td>{props.QueuesList.id}</td>
      <td>{props.QueuesList.problemStatement}</td>
      <td>{props.QueuesList.problemLink}</td>
      <td>{props.QueuesList.tutorialLink}</td>
    </tr>
  );
}

export default Queues;
