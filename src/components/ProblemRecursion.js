import React from "react";
import { Table, Container } from "react-bootstrap";
import Recursion from "../problemComponents/Recursion";

var RecursionList = [
  {
    id: 1,
    problemStatement: "Recursion in C",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=kepBmgvWNDw",
  },
  {
    id: 2,
    problemStatement: "How to write Recursive Functions",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=ggk7HbcnLG8",
  },
];

function ProblemRecursion() {
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
            {RecursionList.map((listItem) => {
              return <Recursion RecursionList={listItem} key={listItem.id} />;
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default ProblemRecursion;
