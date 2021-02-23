import React from "react";
import { Table, Container } from "react-bootstrap";

function TimeSpaceComplexity(props) {
  return (
    <tr>
      <td>{props.TimeSpaceComplexityList.id}</td>
      <td>{props.TimeSpaceComplexityList.problemStatement}</td>
      <td>{props.TimeSpaceComplexityList.problemLink}</td>
      <td>{props.TimeSpaceComplexityList.tutorialLink}</td>
    </tr>
  );
}

export default TimeSpaceComplexity;
