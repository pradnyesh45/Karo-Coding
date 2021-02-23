import React from "react";
import { Table, Container } from "react-bootstrap";
import Queues from "../problemComponents/Queues";

var QueuesList = [
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

function ProblemQueues() {
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
            {QueuesList.map((listItem) => {
              return <Queues QueuesList={listItem} key={listItem.id} />;
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default ProblemQueues;
