import React from "react";
import { Table, Container } from "react-bootstrap";

function PriorityQueues(props) {
  return (
    <tr>
      <td>{props.PriorityQueuesList.id}</td>
      <td>{props.PriorityQueuesList.problemStatement}</td>
      <td>{props.PriorityQueuesList.problemLink}</td>
      <td>{props.PriorityQueuesList.tutorialLink}</td>
    </tr>
  );
}

export default PriorityQueues;
