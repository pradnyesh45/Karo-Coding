import React from "react";
import { Table, Container } from "react-bootstrap";

function Hashmaps(props) {
  return (
    <tr>
      <td>{props.HashmapsList.id}</td>
      <td>{props.HashmapsList.problemStatement}</td>
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

export default Hashmaps;
