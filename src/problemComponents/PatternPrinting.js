import React from "react";
import { Table, Container } from "react-bootstrap";

function PatternPrinting(props) {
  return (
    <tr>
      <td>{props.PatternPrintingList.id}</td>
      <td>{props.PatternPrintingList.problemStatement}</td>
      <td>{props.PatternPrintingList.problemLink}</td>
      <td>{props.PatternPrintingList.tutorialLink}</td>
    </tr>
  );
}

export default PatternPrinting;
