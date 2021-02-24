import React from "react";
import { Table, Container } from "react-bootstrap";

function Recursion(props) {
  return (
    <tr>
      <td>{props.RecursionList.id}</td>
      <td>{props.RecursionList.problemStatement}</td>
      <td>
        {props.RecursionList.problemLink === "No Link" ? (
          "No Link"
        ) : (
          <a href={props.RecursionList.problemLink} target="_blank">
            Problem Link
          </a>
        )}
      </td>
      <td>
        {props.RecursionList.tutorialLink === "No Link" ? (
          "No Link"
        ) : (
          <a href={props.RecursionList.tutorialLink} target="_blank">
            Tutorial Link
          </a>
        )}
      </td>
    </tr>
  );
}

export default Recursion;
