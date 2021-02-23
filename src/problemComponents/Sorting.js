import React from "react";
import { Table, Container } from "react-bootstrap";

function Sorting(props) {
  return (
    <tr>
      <td>{props.SortingList.id}</td>
      <td>{props.SortingList.problemStatement}</td>
      <td>{props.SortingList.problemLink}</td>
      <td>{props.SortingList.tutorialLink}</td>
    </tr>
  );
}

export default Sorting;
