import React from "react";
import { Table, Container } from "react-bootstrap";

function Recursion(props) {
  return (
    <tr>
      <td>{props.RecursionList.id}</td>
      <td>{props.RecursionList.problemStatement}</td>
      <td>{props.RecursionList.problemLink}</td>
      <td>{props.RecursionList.tutorialLink}</td>
    </tr>
  );
}

export default Recursion;
