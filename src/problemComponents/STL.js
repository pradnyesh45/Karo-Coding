import React from "react";
import { Table, Container } from "react-bootstrap";

function STL(props) {
  return (
    <tr>
      <td>{props.STLList.id}</td>
      <td>{props.STLList.problemStatement}</td>
      <td>{props.STLList.problemLink}</td>
      <td>{props.STLList.tutorialLink}</td>
    </tr>
  );
}

export default STL;
