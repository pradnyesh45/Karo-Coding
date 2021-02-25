import React from "react";
import { Table, Container } from "react-bootstrap";
import Hashmaps from "../problemComponents/Hashmaps";

var HashmapsList = [
  {
    id: 1,
    problemStatement: "What is Hashing in Data Structure Hindi",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=196YgZPWsSo",
  },
  {
    id: 2,
    problemStatement: "Hash Functions in Data Structure Hindi",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=DomJ5vCQaCQ",
  },
  {
    id: 3,
    problemStatement: "Collision resolution in Hashing in Data Structure Hindi",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=VFttxMbSSos",
  },
  {
    id: 4,
    problemStatement: "Hashing and Hash table in data structure and algorithm",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=Ke_tII6Y0GE",
  },
  {
    id: 5,
    problemStatement:
      "Good Hash Function - (Even Distribution | Easy Computation) Hashing",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=4ZJQ6ehmAsg",
  },
  {
    id: 6,
    problemStatement:
      "Open Hashing (Separate Chaining) Collision Resolution in Hash Table/Hashing",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=_6IGfyI-6vM",
  },
  {
    id: 7,
    problemStatement:
      "Hashing - Collision Resolution with Linear Probing (Open Addressing)",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=CwM-Cxilk4g",
  },
  {
    id: 8,
    problemStatement: "Hashing - Quadratic Probing for Collision Resolution",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=_qEnJUPDUFU",
  },
  {
    id: 9,
    problemStatement: "Hashing - Double Hashing Collision Resolution",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=lDMc4hg1lUk",
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
