import React from "react";
import { Table, Container } from "react-bootstrap";
import Graphs from "../problemComponents/Graphs";

var GraphsList = [
  {
    id: 1,
    problemStatement: "pattern1",
    problemLink: "problem1",
    tutorialLink: 0,
  },
  {
    id: 2,
    problemStatement: 1,
    problemLink: 1,
    tutorialLink: 1,
  },
];

function ProblemGraphs() {
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
            {GraphsList.map((listItem) => {
              return <Graphs GraphsList={listItem} key={listItem.id} />;
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default ProblemGraphs;
