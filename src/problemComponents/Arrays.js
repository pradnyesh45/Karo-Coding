import React from "react";

function Arrays(props) {
  return (
    <tr>
      <td>{props.ArraysList.id}</td>
      <td>{props.ArraysList.problemStatement}</td>
      <td>
        {props.ArraysList.problemLink === "No Link" ? (
          "No Link"
        ) : (
          <a href={props.ArraysList.problemLink} target="_blank">
            Problem Link
          </a>
        )}
      </td>
      <td>
        {props.ArraysList.tutorialLink === "No Link" ? (
          "No Link"
        ) : (
          <a href={props.ArraysList.tutorialLink} target="_blank">
            Tutorial Link
          </a>
        )}
      </td>
    </tr>
  );
}

export default Arrays;
