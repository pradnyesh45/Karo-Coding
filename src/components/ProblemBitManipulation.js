import React from "react";
import { Table, Container } from "react-bootstrap";
import BitManipulation from "../problemComponents/BitManipulation";

var BitManipulationList = [
  {
    id: 1,
    problemStatement: "Course Overview",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=efL86JCONH0",
  },
  {
    id: 2,
    problemStatement: "Binary Left and Right Shift ",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=Z8iOP_BPOHw",
  },
  {
    id: 3,
    problemStatement: "Checking for ith Set Bit",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/check-whether-k-th-bit-is-set-or-not-1587115620/1",
    tutorialLink: "https://www.youtube.com/watch?v=IO2D1g2QP6E",
  },
  {
    id: 4,
    problemStatement: "Counting Number Of Set Bits",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=_o7QBzM33J0",
  },
  {
    id: 5,
    problemStatement: "Number of 1 bits ",
    problemLink: "https://practice.geeksforgeeks.org/problems/set-bits0143/1",
    tutorialLink: "https://www.youtube.com/watch?v=v8GetgcrwXk",
  },
  {
    id: 6,
    problemStatement: "Counting Bits ",
    problemLink: "https://leetcode.com/problems/counting-bits/",
    tutorialLink: "https://www.youtube.com/watch?v=wKp07LXWQbw",
  },
  {
    id: 7,
    problemStatement: "Power of two ",
    problemLink: "https://leetcode.com/problems/power-of-two/",
    tutorialLink: "https://www.youtube.com/watch?v=zSxsECATphs",
  },
  {
    id: 8,
    problemStatement: "XOR and it's properties ",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=0n5p8o-smKE",
  },
  {
    id: 9,
    problemStatement: "XOR Queries on Subarray ",
    problemLink: "https://leetcode.com/problems/xor-queries-of-a-subarray/",
    tutorialLink: "https://www.youtube.com/watch?v=YudrUAYUr-k",
  },
  {
    id: 10,
    problemStatement: "All Pair Sum XOR ",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=LyMPfMe7T58",
  },
  {
    id: 11,
    problemStatement: "Total Sum of all Pair XOR ",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=7mDzRRug9Sg",
  },
  {
    id: 12,
    problemStatement: "Minimum Flips to make A OR B equal C ",
    problemLink:
      "https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/",
    tutorialLink: "https://www.youtube.com/watch?v=zQyF61cZDlY",
  },
  {
    id: 13,
    problemStatement: "Single Number II ",
    problemLink: "https://leetcode.com/problems/single-number-ii/",
    tutorialLink: "https://www.youtube.com/watch?v=dc7HF3PA250",
  },
  {
    id: 14,
    problemStatement: "AND Product",
    problemLink: "https://www.hackerrank.com/challenges/and-product/problem",
    tutorialLink: "https://www.youtube.com/watch?v=shKgCtEAVWQ",
  },
  {
    id: 15,
    problemStatement: "Sansa and XOR",
    problemLink: "https://www.hackerrank.com/challenges/sansa-and-xor/problem",
    tutorialLink: "https://www.youtube.com/watch?v=FEYXX81PCBc",
  },
];

function ProblemBitManipulation() {
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
            {BitManipulationList.map((listItem) => {
              return (
                <BitManipulation
                  BitManipulationList={listItem}
                  key={listItem.id}
                />
              );
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default ProblemBitManipulation;
