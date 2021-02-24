import React from "react";
import { Table, Container } from "react-bootstrap";

function Vectors(props) {
  return (
    <tr>
      <td>{props.VectorsList.id}</td>
      <td>{props.VectorsList.problemStatement}</td>
      <td>
        {props.VectorsList.problemLink === "No Link" ? (
          "No Link"
        ) : (
          <a href={props.VectorsList.problemLink} target="_blank">
            Problem Link
          </a>
        )}
      </td>
      <td>
        {props.VectorsList.tutorialLink === "No Link" ? (
          "No Link"
        ) : (
          <a href={props.VectorsList.tutorialLink} target="_blank">
            Tutorial Link
          </a>
        )}
      </td>
    </tr>
  );
}

export default Vectors;
