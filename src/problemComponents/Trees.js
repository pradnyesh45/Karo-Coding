import React from "react";
import { Table, Container } from "react-bootstrap";

function Trees(props) {
  return (
    <tr>
      <td>{props.TreesList.id}</td>
      <td>{props.TreesList.problemStatement}</td>
      <td>
        {props.TreesList.problemLink === "No Link" ? (
          "No Link"
        ) : (
          <a href={props.TreesList.problemLink} target="_blank">
            Problem Link
          </a>
        )}
      </td>
      <td>
        {props.TreesList.tutorialLink === "No Link" ? (
          "No Link"
        ) : (
          <a href={props.TreesList.tutorialLink} target="_blank">
            Tutorial Link
          </a>
        )}
      </td>
    </tr>
  );
}

export default Trees;
