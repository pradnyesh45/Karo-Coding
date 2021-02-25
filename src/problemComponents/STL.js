import React from "react";
import { Table, Container } from "react-bootstrap";

function STL(props) {
  return (
    <tr>
      <td>{props.STLList.id}</td>
      <td>{props.STLList.problemStatement}</td>
      <td>
        {props.STLList.problemLink === "No Link" ? (
          "No Link"
        ) : (
          <a href={props.STLList.problemLink} target="_blank">
            Problem Link
          </a>
        )}
      </td>
      <td>
        {props.STLList.tutorialLink === "No Link" ? (
          "No Link"
        ) : (
          <a href={props.STLList.tutorialLink} target="_blank">
            Tutorial Link
          </a>
        )}
      </td>
    </tr>
  );
}

export default STL;
