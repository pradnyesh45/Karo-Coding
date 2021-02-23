import React from "react";
import { Table, Container } from "react-bootstrap";

function Searching(props) {
  return (
    <tr>
      <td>{props.SearchingList.id}</td>
      <td>{props.SearchingList.problemStatement}</td>
      <td>{props.SearchingList.problemLink}</td>
      <td>{props.SearchingList.tutorialLink}</td>
    </tr>
  );
}

export default Searching;
