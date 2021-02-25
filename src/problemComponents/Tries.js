import React from "react";
import { Table, Container } from "react-bootstrap";

function Tries(props) {
  return (
    <tr>
      <td>{props.TriesList.id}</td>
      <td>{props.TriesList.problemStatement}</td>
      <td>
        {props.TriesList.problemLink === "No Link" ? (
          "No Link"
        ) : (
          <a href={props.TriesList.problemLink} target="_blank">
            Problem Link
          </a>
        )}
      </td>
      <td>
        {props.TriesList.tutorialLink === "No Link" ? (
          "No Link"
        ) : (
          <a href={props.TriesList.tutorialLink} target="_blank">
            Tutorial Link
          </a>
        )}
      </td>
    </tr>
  );
}

export default Tries;
