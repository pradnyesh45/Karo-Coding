import React from "react";
import { Table, Container } from "react-bootstrap";

function LinkedList(props) {
  return (
    <tr>
      <td>{props.LinkedListList.id}</td>
      <td>{props.LinkedListList.problemStatement}</td>
      <td>
        {props.LinkedListList.problemLink === "No Link" ? (
          "No Link"
        ) : (
          <a href={props.LinkedListList.problemLink} target="_blank">
            Problem Link
          </a>
        )}
      </td>
      <td>
        {props.LinkedListList.tutorialLink === "No Link" ? (
          "No Link"
        ) : (
          <a href={props.LinkedListList.tutorialLink} target="_blank">
            Tutorial Link
          </a>
        )}
      </td>
    </tr>
  );
}

export default LinkedList;
