import React from "react";
import { Table, Container } from "react-bootstrap";

function Hashmaps(props) {
  return (
    <tr>
      <td>{props.HashmapsList.id}</td>
      <td>{props.HashmapsList.problemStatement}</td>
      <td>{props.HashmapsList.problemLink}</td>
      <td>{props.HashmapsList.tutorialLink}</td>
    </tr>
  );
}

export default Hashmaps;
