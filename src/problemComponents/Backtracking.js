import React from "react";

function Backtracking(props) {
  return (
    <tr>
      <td>{props.BacktrackingList.id}</td>
      <td>{props.BacktrackingList.problemStatement}</td>
      <td>
        {props.BacktrackingList.problemLink === "No Link" ? (
          "No Link"
        ) : (
          <a href={props.BacktrackingList.problemLink} target="_blank">
            Problem Link
          </a>
        )}
      </td>
      <td>
        {props.BacktrackingList.tutorialLink === "No Link" ? (
          "No Link"
        ) : (
          <a href={props.BacktrackingList.tutorialLink} target="_blank">
            Tutorial Link
          </a>
        )}
      </td>
    </tr>
  );
}

export default Backtracking;
