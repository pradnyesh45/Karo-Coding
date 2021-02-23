import React from "react";
import { Table, Container } from "react-bootstrap";

function BitManipulation(props) {
  return (
    <tr>
      <td>{props.BitManipulationList.id}</td>
      <td>{props.BitManipulationList.problemStatement}</td>
      <td>{props.BitManipulationList.problemLink}</td>
      <td>{props.BitManipulationList.tutorialLink}</td>
    </tr>
  );
}

export default BitManipulation;
