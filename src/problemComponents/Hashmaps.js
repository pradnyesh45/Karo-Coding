import React from "react";

function Hashmaps(props) {
  return (
    <tr>
      <td>{props.HashmapsList.id}</td>
      <td>{props.HashmapsList.problemStatement}</td>
      <td>
        {props.HashmapsList.problemLink === "No Link" ? (
          "No Link"
        ) : (
          <a href={props.HashmapsList.problemLink} target="_blank">
            Problem Link
          </a>
        )}
      </td>
      <td>
        {props.HashmapsList.tutorialLink === "No Link" ? (
          "No Link"
        ) : (
          <a href={props.HashmapsList.tutorialLink} target="_blank">
            Tutorial Link
          </a>
        )}
      </td>
    </tr>
  );
}

export default Hashmaps;
