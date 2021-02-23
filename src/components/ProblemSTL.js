import React from "react";
import { Table, Container } from "react-bootstrap";
import STL from "../problemComponents/STL";

var STLList = [
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

function ProblemSTL() {
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
            {STLList.map((listItem) => {
              return <STL STLList={listItem} key={listItem.id} />;
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default ProblemSTL;
