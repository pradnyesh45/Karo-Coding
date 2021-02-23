import React from "react";
import { Table, Container } from "react-bootstrap";

function Pointers(props) {
  return (
    <tr>
      <td>{props.PointersList.id}</td>
      <td>{props.PointersList.problemStatement}</td>
      <td>{props.PointersList.problemLink}</td>
      <td>{props.PointersList.tutorialLink}</td>
    </tr>
  );
}

export default Pointers;
