import React from "react";
import { Table, Container } from "react-bootstrap";
import Cpp from "../problemComponents/Cpp";

var CppList = [
  {
    id: 1,
    problemStatement: "cpp1",
    problemLink: 0,
    tutorialLink: 0,
  },
  {
    id: 2,
    problemStatement: 1,
    problemLink: 1,
    tutorialLink: 1,
  },
];

function ProblemCpp() {
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
            {CppList.map((listItem) => {
              return <Cpp CppList={listItem} key={listItem.id} />;
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default ProblemCpp;
