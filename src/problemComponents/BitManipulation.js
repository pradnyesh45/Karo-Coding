import React from "react";
import { Table, Container } from "react-bootstrap";

function BitManipulation(props) {
  return (
    <tr>
      <td>{props.BitManipulationList.id}</td>
      <td>{props.BitManipulationList.problemStatement}</td>
      <td>
        {props.BitManipulationList.problemLink === "No Link" ? (
          "No Link"
        ) : (
          <a href={props.BitManipulationList.problemLink} target="_blank">
            Problem Link
          </a>
        )}
      </td>
      <td>
        {props.BitManipulationList.tutorialLink === "No Link" ? (
          "No Link"
        ) : (
          <a href={props.BitManipulationList.tutorialLink} target="_blank">
            Tutorial Link
          </a>
        )}
      </td>
    </tr>
  );
}

export default BitManipulation;
