import React from "react";
import { Table, Container } from "react-bootstrap";

function Stacks(props) {
  return (
    <tr>
      <td>{props.StacksList.id}</td>
      <td>{props.StacksList.problemStatement}</td>
      <td>{props.StacksList.problemLink}</td>
      <td>{props.StacksList.tutorialLink}</td>
    </tr>
  );
}

export default Stacks;
