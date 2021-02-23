import React from "react";
import { Table, Container } from "react-bootstrap";

function Trees(props) {
  return (
    <tr>
      <td>{props.TreesList.id}</td>
      <td>{props.TreesList.problemStatement}</td>
      <td>{props.TreesList.problemLink}</td>
      <td>{props.TreesList.tutorialLink}</td>
    </tr>
  );
}

export default Trees;
