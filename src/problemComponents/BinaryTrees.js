import React from "react";
import { Table, Container } from "react-bootstrap";

function BinaryTrees(props) {
  return (
    <tr>
      <td>{props.BinaryTreesList.id}</td>
      <td>{props.BinaryTreesList.problemStatement}</td>
      <td>{props.BinaryTreesList.problemLink}</td>
      <td>{props.BinaryTreesList.tutorialLink}</td>
    </tr>
  );
}

export default BinaryTrees;
