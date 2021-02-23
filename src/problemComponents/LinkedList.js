import React from "react";
import { Table, Container } from "react-bootstrap";

function LinkedList(props) {
  return (
    <tr>
      <td>{props.LinkedListList.id}</td>
      <td>{props.LinkedListList.problemStatement}</td>
      <td>{props.LinkedListList.problemLink}</td>
      <td>{props.LinkedListList.tutorialLink}</td>
    </tr>
  );
}

export default LinkedList;
