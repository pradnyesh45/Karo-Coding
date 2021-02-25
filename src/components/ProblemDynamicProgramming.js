import React from "react";
import { Table, Container } from "react-bootstrap";
import DynamicProgramming from "../problemComponents/DynamicProgramming";

var DynamicProgrammingList = [
  {
    id: 1,
    problemStatement: "L00 : Course Overview ",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=_dbviFz2aZs",
  },
  {
    id: 2,
    problemStatement: "L01 : Staircase Problem ",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=2eNnuR0vlFA",
  },
  {
    id: 3,
    problemStatement: "L02 : Staircase Problem Recursive Approach ",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/count-ways-to-reach-the-nth-stair-1587115620/1",
    tutorialLink: "https://www.youtube.com/watch?v=oRBL9som81Q",
  },
  {
    id: 4,
    problemStatement: "L03 : 2 x N Tiling Problem ",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/ways-to-tile-a-floor5836/1",
    tutorialLink: "https://www.youtube.com/watch?v=0j-snD1b-R4",
  },
  {
    id: 5,
    problemStatement: "L07 : Coin Change",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/coin-change2448/1",
    tutorialLink: "https://www.youtube.com/watch?v=ximB2-AwoS8",
  },
  {
    id: 6,
    problemStatement: "L08 : Subset Sum Part 1 ",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/subset-sum-problem2014/1",
    tutorialLink: "https://www.youtube.com/watch?v=BT_ACNC47Os",
  },
  {
    id: 7,
    problemStatement: "L09 : Subset Sum with Linear Space",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=-httet0UVUU",
  },
  {
    id: 8,
    problemStatement: "L10 : Printing Result from DP Array",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=HjJI1tbtn_M",
  },
  {
    id: 9,
    problemStatement: "L11 : Min / Max Path Queries On 2D Grid",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=su3cE9RpGJk",
  },
  {
    id: 10,
    problemStatement: "L12 : Min / Max Path Query on 2D grid Part 2",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=Xz-nXdUzEh4",
  },
  {
    id: 11,
    problemStatement: "E002 : Minimum Falling Path Sum ",
    problemLink: "https://leetcode.com/problems/minimum-falling-path-sum/",
    tutorialLink: "https://www.youtube.com/watch?v=Xr_LRdr9IPQ",
  },
  {
    id: 12,
    problemStatement: "E003 : Minimum Path Sum",
    problemLink: "https://leetcode.com/problems/minimum-path-sum/",
    tutorialLink: "https://www.youtube.com/watch?v=8SgF_mGfRI0",
  },
  {
    id: 13,
    problemStatement: "L13 : Longest Palindromic Substring ",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=OjaUemQyDmw",
  },
  {
    id: 14,
    problemStatement: "E004 : Longest Palindromic Substring ",
    problemLink: "https://leetcode.com/problems/longest-palindromic-substring/",
    tutorialLink: "https://www.youtube.com/watch?v=5SrTJ4D9hKw",
  },
  {
    id: 15,
    problemStatement: "L14 : Unique Ways to reach (N , M) from (1 , 1) ",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/count-all-possible-paths-from-top-left-to-bottom-right3011/1",
    tutorialLink: "https://www.youtube.com/watch?v=WvfCbcUjBds",
  },
  {
    id: 16,
    problemStatement: "E005 : Unique Paths ",
    problemLink: "https://leetcode.com/problems/unique-paths/",
    tutorialLink: "https://www.youtube.com/watch?v=Z8mISTcAyjA",
  },
  {
    id: 17,
    problemStatement: "E006 : Unique Paths II ",
    problemLink: "https://leetcode.com/problems/unique-paths-ii/",
    tutorialLink: "https://www.youtube.com/watch?v=PeX4IiF9x9w",
  },
  {
    id: 18,
    problemStatement: "L15 : Rod Cutting Problem ",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/cutted-segments1642/1",
    tutorialLink: "https://www.youtube.com/watch?v=gl14h24cngc",
  },
  {
    id: 19,
    problemStatement: "Dynamic Programming | Introduction",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=nqowUJzG-iM",
  },
  {
    id: 20,
    problemStatement: "2 Types of knapsack",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=l02UxPYRmCQ",
  },
  {
    id: 21,
    problemStatement: "3 01 Knapsack Recursive",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=kvyShbFVaY8",
  },
  {
    id: 22,
    problemStatement: "4 01Knapsack Memoization",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=fJbIuhs24zQ",
  },
];

function ProblemDynamicProgramming() {
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
            {DynamicProgrammingList.map((listItem) => {
              return (
                <DynamicProgramming
                  DynamicProgrammingList={listItem}
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

export default ProblemDynamicProgramming;
