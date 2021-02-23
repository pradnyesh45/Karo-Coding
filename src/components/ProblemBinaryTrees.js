import React from "react";
import { Table, Container } from "react-bootstrap";
import BinaryTrees from "../problemComponents/BinaryTrees";

var BinaryTreesList = [
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

function ProblemBinaryTrees() {
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
            {BinaryTreesList.map((listItem) => {
              return (
                <BinaryTrees BinaryTreesList={listItem} key={listItem.id} />
              );
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default ProblemBinaryTrees;
