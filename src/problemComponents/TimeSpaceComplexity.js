import React from "react";

function TimeSpaceComplexity(props) {
  return (
    <tr>
      <td>{props.TimeSpaceComplexityList.id}</td>
      <td>{props.TimeSpaceComplexityList.problemStatement}</td>
      <td>
        {props.TimeSpaceComplexityList.problemLink === "No Link" ? (
          "No Link"
        ) : (
          <a href={props.TimeSpaceComplexityList.problemLink} target="_blank">
            Problem Link
          </a>
        )}
      </td>
      <td>
        {props.TimeSpaceComplexityList.tutorialLink === "No Link" ? (
          "No Link"
        ) : (
          <a href={props.TimeSpaceComplexityList.tutorialLink} target="_blank">
            Tutorial Link
          </a>
        )}
      </td>
    </tr>
  );
}

export default TimeSpaceComplexity;
