import React from "react";
import { Table, Container } from "react-bootstrap";

function Tries(props) {
  return (
    <tr>
      <td>{props.TriesList.id}</td>
      <td>{props.TriesList.problemStatement}</td>
      <td>{props.TriesList.problemLink}</td>
      <td>{props.TriesList.tutorialLink}</td>
    </tr>
  );
}

export default Tries;
