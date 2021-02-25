import React from "react";
import { Table, Container } from "react-bootstrap";

function PriorityQueues(props) {
  return (
    <tr>
      <td>{props.PriorityQueuesList.id}</td>
      <td>{props.PriorityQueuesList.problemStatement}</td>
      <td>
        {props.PriorityQueuesList.problemLink === "No Link" ? (
          "No Link"
        ) : (
          <a href={props.PriorityQueuesList.problemLink} target="_blank">
            Problem Link
          </a>
        )}
      </td>
      <td>
        {props.PriorityQueuesList.tutorialLink === "No Link" ? (
          "No Link"
        ) : (
          <a href={props.PriorityQueuesList.tutorialLink} target="_blank">
            Tutorial Link
          </a>
        )}
      </td>
    </tr>
  );
}

export default PriorityQueues;
