import React from "react";
import { Table, Container } from "react-bootstrap";

function BinarySearchTrees(props) {
  return (
    <tr>
      <td>{props.BinarySearchTreesList.id}</td>
      <td>{props.BinarySearchTreesList.problemStatement}</td>
      <td>{props.BinarySearchTreesList.problemLink}</td>
      <td>{props.BinarySearchTreesList.tutorialLink}</td>
    </tr>
  );
}

export default BinarySearchTrees;
