import React from "react";
import { Table, Container } from "react-bootstrap";

function DynamicProgramming(props) {
  return (
    <tr>
      <td>{props.DynamicProgrammingList.id}</td>
      <td>{props.DynamicProgrammingList.problemStatement}</td>
      <td>{props.DynamicProgrammingList.problemLink}</td>
      <td>{props.DynamicProgrammingList.tutorialLink}</td>
    </tr>
  );
}

export default DynamicProgramming;
