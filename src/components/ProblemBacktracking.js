import React from "react";
import { Table, Container } from "react-bootstrap";
import Backtracking from "../problemComponents/Backtracking";

var BacktrackingList = [
  {
    id: 1,
    problemStatement: "Recursion Demystified. ",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=srHuVbv2M7M",
  },
  {
    id: 2,
    problemStatement: "Permutations Of String using recursion backtracking",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/permutations-of-a-given-string/0",
    tutorialLink: "https://www.youtube.com/watch?v=VfXbTKzRHV8",
  },
  {
    id: 3,
    problemStatement: "Boggle Backtracking.",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/word-boggle4143/1",
    tutorialLink: "https://www.youtube.com/watch?v=T0z1VFXegQk",
  },
  {
    id: 4,
    problemStatement: "Rat In a Maze.",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/rat-in-a-maze-problem/1",
    tutorialLink: "https://www.youtube.com/watch?v=BNEVpkwYqpk",
  },
  {
    id: 5,
    problemStatement: "Knight Tour Problem Backtracking",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=pwlxQeHchFQ",
  },
  {
    id: 6,
    problemStatement: "N Queen Problem",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/n-queen-problem0315/1",
    tutorialLink: "https://www.youtube.com/watch?v=CeIsWZLxZTk",
  },
];

function ProblemBacktracking() {
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
            {BacktrackingList.map((listItem) => {
              return (
                <Backtracking BacktrackingList={listItem} key={listItem.id} />
              );
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default ProblemBacktracking;
