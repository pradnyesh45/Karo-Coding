import React from "react";
import { Table, Container } from "react-bootstrap";

function DynamicProgramming(props) {
  return (
    <tr>
      <td>{props.DynamicProgrammingList.id}</td>
      <td>{props.DynamicProgrammingList.problemStatement}</td>
      <td>
        {props.DynamicProgrammingList.problemLink === "No Link" ? (
          "No Link"
        ) : (
          <a href={props.DynamicProgrammingList.problemLink} target="_blank">
            Problem Link
          </a>
        )}
      </td>
      <td>
        {props.DynamicProgrammingList.tutorialLink === "No Link" ? (
          "No Link"
        ) : (
          <a href={props.DynamicProgrammingList.tutorialLink} target="_blank">
            Tutorial Link
          </a>
        )}
      </td>
    </tr>
  );
}

export default DynamicProgramming;
