import React from "react";
import { Table, Container } from "react-bootstrap";

function PatternPrinting(props) {
  return (
    <tr>
      <td>{props.PatternPrintingList.id}</td>
      <td>{props.PatternPrintingList.problemStatement}</td>
      <td>
        {props.PatternPrintingList.problemLink === "No Link" ? (
          "No Link"
        ) : (
          <a href={props.PatternPrintingList.problemLink} target="_blank">
            Problem Link
          </a>
        )}
      </td>
      <td>
        {props.PatternPrintingList.tutorialLink === "No Link" ? (
          "No Link"
        ) : (
          <a href={props.PatternPrintingList.tutorialLink} target="_blank">
            Tutorial Link
          </a>
        )}
      </td>
    </tr>
  );
}

export default PatternPrinting;
