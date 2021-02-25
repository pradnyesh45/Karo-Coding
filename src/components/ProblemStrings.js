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
    problemStatement: "String Method resize in C++",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=Nj6n_xwCP8s",
  },
  {
    id: 3,
    problemStatement: "C++ string at",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=-Jb0lFr-HKg",
  },
  {
    id: 4,
    problemStatement: "Concatenation - C++",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=t1-B2ctZU1E",
  },
  {
    id: 5,
    problemStatement: "Concatenation Continued - Continuous Adding",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=gOpj8maoMWw",
  },
  {
    id: 6,
    problemStatement: "Removing Characters from Strings",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=Y8AOR51K04g",
  },
  {
    id: 7,
    problemStatement: "C++ string substr",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=V3sKbgpvgwY",
  },
  {
    id: 8,
    problemStatement: "C++ String Methods: find and find_first_of",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=hkJT-209AuI",
  },
  {
    id: 9,
    problemStatement: "ASCII Values - C++",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=9PBbI69BGy8",
  },
  {
    id: 10,
    problemStatement: "Inserting text into an existing string in C++",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=V3DKF5CdBcQ",
  },
  {
    id: 11,
    problemStatement: "Removing Specific Text from a String in C++",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=MJyNX2dfbn8",
  },
  {
    id: 12,
    problemStatement:
      "Substitute some piece of a string with a different piece",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=FhRZIAA4a5Y",
  },
  {
    id: 13,
    problemStatement: "How to Add onto a String",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=3_jdQnJ4noo",
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
