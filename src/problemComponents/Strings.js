import React from "react";
import { Table, Container } from "react-bootstrap";

function Strings(props) {
  return (
    <tr>
      <td>{props.StringsList.id}</td>
      <td>{props.StringsList.problemStatement}</td>
      <td>{props.StringsList.problemLink}</td>
      <td>{props.StringsList.tutorialLink}</td>
    </tr>
  );
}

export default Strings;
