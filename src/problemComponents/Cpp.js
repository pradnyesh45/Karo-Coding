import React from "react";
import { Table, Container } from "react-bootstrap";

function Cpp(props) {
  return (
    <tr>
      <td>{props.CppList.id}</td>
      <td>{props.CppList.problemStatement}</td>
      <td>{props.CppList.problemLink}</td>
      <td>{props.CppList.tutorialLink}</td>
    </tr>
  );
}

export default Cpp;
