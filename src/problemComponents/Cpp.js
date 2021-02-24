import React from "react";

function Cpp(props) {
  return (
    <tr>
      <td>{props.CppList.id}</td>
      <td>{props.CppList.problemStatement}</td>
      <td>
        {props.CppList.problemLink === "No Link" ? (
          "No Link"
        ) : (
          <a href={props.CppList.problemLink} target="_blank">
            Problem Link
          </a>
        )}
      </td>
      <td>
        {props.CppList.tutorialLink === "No Link" ? (
          "No Link"
        ) : (
          <a href={props.CppList.tutorialLink} target="_blank">
            Tutorial Link
          </a>
        )}
      </td>
    </tr>
  );
}

export default Cpp;
