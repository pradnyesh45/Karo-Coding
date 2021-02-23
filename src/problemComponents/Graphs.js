import React from "react";
import { Table, Container } from "react-bootstrap";

function Graphs(props) {
  return (
    <tr>
      <td>{props.GraphsList.id}</td>
      <td>{props.GraphsList.problemStatement}</td>
      <td>{props.GraphsList.problemLink}</td>
      <td>{props.GraphsList.tutorialLink}</td>
    </tr>
  );
}

export default Graphs;
