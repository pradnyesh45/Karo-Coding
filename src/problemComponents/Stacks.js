import React from "react";
import { Table, Container } from "react-bootstrap";

function Stacks(props) {
  return (
    <tr>
      <td>{props.StacksList.id}</td>
      <td>{props.StacksList.problemStatement}</td>
      <td>
        {props.StacksList.problemLink === "No Link" ? (
          "No Link"
        ) : (
          <a href={props.StacksList.problemLink} target="_blank">
            Problem Link
          </a>
        )}
      </td>
      <td>
        {props.StacksList.tutorialLink === "No Link" ? (
          "No Link"
        ) : (
          <a href={props.StacksList.tutorialLink} target="_blank">
            Tutorial Link
          </a>
        )}
      </td>
    </tr>
  );
}

export default Stacks;
