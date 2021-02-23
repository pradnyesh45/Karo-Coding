import React from "react";
import { Table, Container } from "react-bootstrap";

function Greedy(props) {
  return (
    <tr>
      <td>{props.GreedyList.id}</td>
      <td>{props.GreedyList.problemStatement}</td>
      <td>{props.GreedyList.problemLink}</td>
      <td>{props.GreedyList.tutorialLink}</td>
    </tr>
  );
}

export default Greedy;
