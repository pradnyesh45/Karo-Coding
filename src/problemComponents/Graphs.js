import React from "react";
import { Table, Container } from "react-bootstrap";

function Graphs(props) {
  return (
    <tr>
      <td>{props.GraphsList.id}</td>
      <td>{props.GraphsList.problemStatement}</td>
      <td>
        {props.GraphsList.problemLink === "No Link" ? (
          "No Link"
        ) : (
          <a href={props.GraphsList.problemLink} target="_blank">
            Problem Link
          </a>
        )}
      </td>
      <td>
        {props.GraphsList.tutorialLink === "No Link" ? (
          "No Link"
        ) : (
          <a href={props.GraphsList.tutorialLink} target="_blank">
            Tutorial Link
          </a>
        )}
      </td>
    </tr>
  );
}

export default Graphs;
