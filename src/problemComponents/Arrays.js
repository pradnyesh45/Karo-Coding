import React from "react";
import { Table, Container } from "react-bootstrap";

function Arrays(props) {
  return (
    <tr>
      <td>{props.ArraysList.id}</td>
      <td>{props.ArraysList.problemStatement}</td>
      <td>{props.ArraysList.problemLink}</td>
      <td>{props.ArraysList.tutorialLink}</td>
    </tr>
  );
}

export default Arrays;
