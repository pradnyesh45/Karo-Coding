import React from "react";
import { Table, Container } from "react-bootstrap";

function Strings(props) {
  return (
    <tr>
      <td>{props.StringsList.id}</td>
      <td>{props.StringsList.problemStatement}</td>
      <td>
        {props.StringsList.problemLink === "No Link" ? (
          "No Link"
        ) : (
          <a href={props.StringsList.problemLink} target="_blank">
            Problem Link
          </a>
        )}
      </td>
      <td>
        {props.StringsList.tutorialLink === "No Link" ? (
          "No Link"
        ) : (
          <a href={props.StringsList.tutorialLink} target="_blank">
            Tutorial Link
          </a>
        )}
      </td>
    </tr>
  );
}

export default Strings;
