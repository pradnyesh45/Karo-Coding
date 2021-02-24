import React from "react";
import { Table, Container } from "react-bootstrap";
import Arrays from "../problemComponents/Arrays";

var ArraysList = [
  {
    id: 1,
    problemStatement: "Definition of Array",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=55l-aZ7_F24",
  },
  {
    id: 2,
    problemStatement: "Declaration of Array",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=Bqud0_ozgcc",
  },
  {
    id: 3,
    problemStatement: "Accessing Array Elements",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=g0ClJ28-8LE",
  },
  {
    id: 4,
    problemStatement: "Initializing an Array",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=GtcRReso9Xk",
  },
  {
    id: 5,
    problemStatement: "Designated Initialization of Arrays",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=Sr21AdNJPKg",
  },
  {
    id: 6,
    problemStatement: "Arrays in C (Solved Problem 1)",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=hsmSDBBsifo",
  },
  {
    id: 7,
    problemStatement: "Arrays in C (Solved Problem 2)",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=C57wwOOF6ys",
  },
  {
    id: 8,
    problemStatement: "Count Array Elements using sizeof() Operator",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=iBFzKvCzXsw",
  },
  {
    id: 9,
    problemStatement: "Introduction to Multidimensional Arrays",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=36z4qgN3GWw",
  },
  {
    id: 10,
    problemStatement: "Introduction to Two-Dimensional (2D) Arrays",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=J1aQ9JN4vZY",
  },
  {
    id: 11,
    problemStatement: "Introduction to Three-Dimensional (3D) Arrays",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=bbkdiUbou74",
  },
  {
    id: 12,
    problemStatement: "Multidimensional Arrays (Solved Problem)",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=UbBCg0-xjkU",
  },
  {
    id: 13,
    problemStatement: "C Program for Matrix Multiplication (Part 1)",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=aAFP5wsmH2k",
  },
  {
    id: 14,
    problemStatement: "C Program for Matrix Multiplication (Part 2)",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=jzdQqoG1tZs",
  },
  {
    id: 15,
    problemStatement: "Constant Arrays in C",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=yK9AFU7fzEA",
  },
  {
    id: 16,
    problemStatement: "Variable Length Arrays in C",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=JW3Vg0xpJLY",
  },
  {
    id: 17,
    problemStatement: "Introduction to Pointers in C",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=f2i0CnUOniA",
  },
  {
    id: 18,
    problemStatement: "Declaring & Initializing Pointers in C",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=b3G9RjG4l2s",
  },
  {
    id: 19,
    problemStatement: "Value of Operator in Pointers",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=xlt_bEqfnxg",
  },
  {
    id: 20,
    problemStatement: "Pointer Assignment",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=qG01z8unrU4",
  },
  {
    id: 21,
    problemStatement:
      "Pointer Application (Finding the Largest & Smallest Elements in an Array)",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=qxUd5av1OYI",
  },
  {
    id: 22,
    problemStatement: "Returning Pointers",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=NVH4K-0O39E",
  },
  {
    id: 23,
    problemStatement: "Pointers (Important Questions)",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=cEphEIMaqms",
  },
];

function ProblemArrays() {
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
            {ArraysList.map((listItem) => {
              return <Arrays ArraysList={listItem} key={listItem.id} />;
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default ProblemArrays;
