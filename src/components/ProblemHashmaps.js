import React from "react";
import { Table, Container } from "react-bootstrap";
import Hashmaps from "../problemComponents/Hashmaps";

var HashmapsList = [
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

function ProblemHashmaps() {
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
            {HashmapsList.map((listItem) => {
              return <Hashmaps HashmapsList={listItem} key={listItem.id} />;
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default ProblemHashmaps;
