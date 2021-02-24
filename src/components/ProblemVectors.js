import React from "react";
import { Table, Container } from "react-bootstrap";
import Vectors from "../problemComponents/Vectors";

var VectorsList = [
  {
    id: 1,
    problemStatement: "Vector In C++ STL ",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=wKDvMcJiEPM",
  },
];

function ProblemVectors() {
  return (
    <div>
      <Container>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Problem </th>
              <th>Problem Link</th>
              <th>Tutorial Link</th>
            </tr>
          </thead>
          <tbody>
            {VectorsList.map((listItem) => {
              return <Vectors VectorsList={listItem} key={listItem.id} />;
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default ProblemVectors;
