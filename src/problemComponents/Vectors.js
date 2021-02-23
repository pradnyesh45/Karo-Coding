import React from "react";
import { Table, Container } from "react-bootstrap";

function Vectors(props) {
  return (
    <tr>
      <td>{props.VectorsList.id}</td>
      <td>{props.VectorsList.problemStatement}</td>
      <td>{props.VectorsList.problemLink}</td>
      <td>{props.VectorsList.tutorialLink}</td>
    </tr>
  );
}

export default Vectors;
