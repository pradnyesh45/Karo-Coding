import React from "react";
import { Table, Container } from "react-bootstrap";

function OOPS(props) {
  return (
    <tr>
      <td>{props.OOPSList.id}</td>
      <td>{props.OOPSList.problemStatement}</td>
      <td>{props.OOPSList.problemLink}</td>
      <td>{props.OOPSList.tutorialLink}</td>
    </tr>
  );
}

export default OOPS;
