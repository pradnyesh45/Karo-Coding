import React from "react";
import { Table, Container } from "react-bootstrap";
import Recursion from "../problemComponents/Recursion";

var RecursionList = [
  {
    id: 1,
    problemStatement: "Recursion basics - using factorial",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=_OmRGjbyzno",
  },
  {
    id: 2,
    problemStatement: "Why recursion is not always good",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=GM9sA5PtznY",
  },
  {
    id: 3,
    problemStatement:
      "Time and space complexity analysis of recursive programs - using factorial",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=ncpTxqK35PI",
  },
  {
    id: 4,
    problemStatement:
      "Time Complexity analysis of recursion - Fibonacci Sequence",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=pqivnzmSbq4",
  },
  {
    id: 5,
    problemStatement: "Fibonacci Sequence - Recursion with memoization",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=UxICsjrdlJA",
  },
  {
    id: 6,
    problemStatement:
      "Fibonacci Sequence - Anatomy of recursion and space complexity analysis",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=dxyYP3BSdcQ",
  },
  {
    id: 7,
    problemStatement: "Exponentiation - Calculate Pow(x,n) using recursion",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=wAyrtLAeWvI",
  },
  {
    id: 8,
    problemStatement: "Modular exponentiation - using Recursion",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=nO7_qu2kd1Q",
  },
  {
    id: 9,
    problemStatement: "Exponentiation - Time Complexity analysis of recursion",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=VHcZtdp5054",
  },
  {
    id: 10,
    problemStatement: "Recursion Introduction and Identification",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=kHi1DUhp9kM",
  },
  {
    id: 11,
    problemStatement: "Recursion is Everywhere !!",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=ZQMQW8YVuZ4",
  },
  {
    id: 12,
    problemStatement: "Hypothesis-Induction-Base Condition",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=Xu5RqPdABRE",
  },
  {
    id: 13,
    problemStatement: "Beauty of Hypothesis And Induction",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=qDJJBZAIXIw",
  },
  {
    id: 14,
    problemStatement: "Sort An array using Recursion",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=AZ4jEY_JAVc",
  },
  {
    id: 15,
    problemStatement: "Kth Symbol in Grammar",
    problemLink: "https://leetcode.com/problems/k-th-symbol-in-grammar/",
    tutorialLink: "https://www.youtube.com/watch?v=5P84A0YCo_Y",
  },
  {
    id: 16,
    problemStatement: "Tower of Hanoi | Recursion",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/help-the-old-man3848/1",
    tutorialLink: "https://www.youtube.com/watch?v=l45md3RYX7c",
  },
  {
    id: 17,
    problemStatement:
      "Print Subsets | Print PowerSets | Print all Subsequences",
    problemLink: "https://practice.geeksforgeeks.org/problems/power-set4302/1",
    tutorialLink: "https://www.youtube.com/watch?v=Yg5a2FxU4Fo",
  },
  {
    id: 18,
    problemStatement: "Print unique subsets And Variations",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/subsets-1587115621/1",
    tutorialLink: "https://www.youtube.com/watch?v=lfFqW1DTsqM",
  },
  {
    id: 19,
    problemStatement: "Permutation with spaces",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/permutation-with-spaces3627/1",
    tutorialLink: "https://www.youtube.com/watch?v=1cspuQ6qHW0",
  },
  {
    id: 20,
    problemStatement: "Permutation with Case Change | Recursion",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=J2Er5XceU_I",
  },
  {
    id: 21,
    problemStatement: "Letter Case Permutation | Recursion",
    problemLink: "https://leetcode.com/problems/letter-case-permutation/",
    tutorialLink: "https://www.youtube.com/watch?v=4eOPYDOiwFo",
  },
  {
    id: 22,
    problemStatement: "Generate all Balanced Parentheses",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/generate-all-possible-parentheses/1",
    tutorialLink: "https://www.youtube.com/watch?v=eyCj_u3PoJE",
  },
  {
    id: 23,
    problemStatement:
      "Print N-bit binary numbers having more 1’s than 0’s for any prefix",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/print-n-bit-binary-numbers-having-more-1s-than-0s0252/1",
    tutorialLink: "https://www.youtube.com/watch?v=U81n0UYtk98",
  },
  {
    id: 24,
    problemStatement:
      "Josephus Problem | Game of Death in a circle | Execution in Circle",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/game-of-death-in-a-circle/0",
    tutorialLink: "https://www.youtube.com/watch?v=ULUNeD0N9yI",
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
