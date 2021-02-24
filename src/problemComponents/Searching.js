import React from "react";
import { Table, Container } from "react-bootstrap";

function Searching(props) {
  return (
    <tr>
      <td>{props.SearchingList.id}</td>
      <td>{props.SearchingList.problemStatement}</td>
      <td>
        {props.SearchingList.problemLink === "No Link" ? (
          "No Link"
        ) : (
          <a href={props.SearchingList.problemLink} target="_blank">
            Problem Link
          </a>
        )}
      </td>
      <td>
        {props.SearchingList.tutorialLink === "No Link" ? (
          "No Link"
        ) : (
          <a href={props.SearchingList.tutorialLink} target="_blank">
            Tutorial Link
          </a>
        )}
      </td>
    </tr>
  );
}

export default Searching;
