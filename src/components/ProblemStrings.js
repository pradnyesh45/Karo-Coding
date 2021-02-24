import React from "react";
import { Table, Container } from "react-bootstrap";
import Strings from "../problemComponents/Strings";

var StringsList = [
  {
    id: 1,
    problemStatement: "C++ string length",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=wAJnq4X_HeQ",
  },
  {
    id: 2,
    problemStatement: 1,
    problemLink: 1,
    tutorialLink: 1,
  },
];

function ProblemStrings() {
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
            {StringsList.map((listItem) => {
              return <Strings StringsList={listItem} key={listItem.id} />;
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default ProblemStrings;
