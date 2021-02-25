import React from "react";
import { Table, Container } from "react-bootstrap";
import DynamicProgramming from "../problemComponents/DynamicProgramming";

var DynamicProgrammingList = [
  {
    id: 1,
    problemStatement: "Course Overview ",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=_dbviFz2aZs",
  },
  {
    id: 2,
    problemStatement: "Staircase Problem ",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=2eNnuR0vlFA",
  },
  {
    id: 3,
    problemStatement: "Staircase Problem Recursive Approach ",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/count-ways-to-reach-the-nth-stair-1587115620/1",
    tutorialLink: "https://www.youtube.com/watch?v=oRBL9som81Q",
  },
  {
    id: 4,
    problemStatement: "2 x N Tiling Problem ",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/ways-to-tile-a-floor5836/1",
    tutorialLink: "https://www.youtube.com/watch?v=0j-snD1b-R4",
  },
  {
    id: 5,
    problemStatement: "Coin Change",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/coin-change2448/1",
    tutorialLink: "https://www.youtube.com/watch?v=ximB2-AwoS8",
  },
  {
    id: 6,
    problemStatement: "Subset Sum Part 1 ",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/subset-sum-problem2014/1",
    tutorialLink: "https://www.youtube.com/watch?v=BT_ACNC47Os",
  },
  {
    id: 7,
    problemStatement: "Subset Sum with Linear Space",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=-httet0UVUU",
  },
  {
    id: 8,
    problemStatement: "Printing Result from DP Array",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=HjJI1tbtn_M",
  },
  {
    id: 9,
    problemStatement: "Min / Max Path Queries On 2D Grid",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=su3cE9RpGJk",
  },
  {
    id: 10,
    problemStatement: "Min / Max Path Query on 2D grid Part 2",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=Xz-nXdUzEh4",
  },
  {
    id: 11,
    problemStatement: "Minimum Falling Path Sum ",
    problemLink: "https://leetcode.com/problems/minimum-falling-path-sum/",
    tutorialLink: "https://www.youtube.com/watch?v=Xr_LRdr9IPQ",
  },
  {
    id: 12,
    problemStatement: "Minimum Path Sum",
    problemLink: "https://leetcode.com/problems/minimum-path-sum/",
    tutorialLink: "https://www.youtube.com/watch?v=8SgF_mGfRI0",
  },
  {
    id: 13,
    problemStatement: "Longest Palindromic Substring ",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=OjaUemQyDmw",
  },
  {
    id: 14,
    problemStatement: "Longest Palindromic Substring ",
    problemLink: "https://leetcode.com/problems/longest-palindromic-substring/",
    tutorialLink: "https://www.youtube.com/watch?v=5SrTJ4D9hKw",
  },
  {
    id: 15,
    problemStatement: "Unique Ways to reach (N , M) from (1 , 1) ",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/count-all-possible-paths-from-top-left-to-bottom-right3011/1",
    tutorialLink: "https://www.youtube.com/watch?v=WvfCbcUjBds",
  },
  {
    id: 16,
    problemStatement: "Unique Paths ",
    problemLink: "https://leetcode.com/problems/unique-paths/",
    tutorialLink: "https://www.youtube.com/watch?v=Z8mISTcAyjA",
  },
  {
    id: 17,
    problemStatement: "Unique Paths II ",
    problemLink: "https://leetcode.com/problems/unique-paths-ii/",
    tutorialLink: "https://www.youtube.com/watch?v=PeX4IiF9x9w",
  },
  {
    id: 18,
    problemStatement: "Rod Cutting Problem ",
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
    problemStatement: "Types of knapsack",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=l02UxPYRmCQ",
  },
  {
    id: 21,
    problemStatement: "01 Knapsack Recursive",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=kvyShbFVaY8",
  },
  {
    id: 22,
    problemStatement: "01Knapsack Memoization",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=fJbIuhs24zQ",
  },
  {
    id: 23,
    problemStatement:
      "01 Knapsack Top Down DP(*Video author made mistake in naming Top-Down and Bottom-Up)",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/0-1-knapsack-problem0945/1",
    tutorialLink: "https://www.youtube.com/watch?v=ntCGbPMeqgg",
  },
  {
    id: 24,
    problemStatement: "Identification of Knapsack Problems and Introduction",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=iBnWHZmlIyY",
  },
  {
    id: 25,
    problemStatement: "Subset Sum Problem",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/subset-sum-problem2014/1",
    tutorialLink: "https://www.youtube.com/watch?v=_gPcYovP7wc",
  },
  {
    id: 27,
    problemStatement: "Equal Sum Partition Problem",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=UmMh7xp07kY",
  },
  {
    id: 28,
    problemStatement: "Count of Subsets Sum with a Given Sum",
    problemLink:
      "https://www.geeksforgeeks.org/count-of-subsets-with-sum-equal-to-x/",
    tutorialLink: "https://www.youtube.com/watch?v=F7wqWbqYn9g",
  },
  {
    id: 29,
    problemStatement: "Minimum Subset Sum Difference",
    problemLink:
      "https://www.geeksforgeeks.org/partition-a-set-into-two-subsets-such-that-the-difference-of-subset-sums-is-minimum/",
    tutorialLink: "https://www.youtube.com/watch?v=-GtpxG6l_Mc",
  },
  {
    id: 30,
    problemStatement: "Count the number of subset with a given difference",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=ot_XBHyqpFc",
  },
  {
    id: 31,
    problemStatement: "Target sum",
    problemLink: "https://leetcode.com/problems/target-sum/",
    tutorialLink: "https://www.youtube.com/watch?v=Hw6Ygp3JBYw",
  },
  {
    id: 32,
    problemStatement: "Unbounded Knapsack",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/knapsack-with-duplicate-items4201/1",
    tutorialLink: "https://www.youtube.com/watch?v=aycn9KO8_Ls",
  },
  {
    id: 33,
    problemStatement: "Rod Cutting Problem",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/cutted-segments1642/1",
    tutorialLink: "https://www.youtube.com/watch?v=SZqAQLjDsag",
  },
  {
    id: 34,
    problemStatement: "Coin change problem: Maximum number of ways",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/coin-change2448/1",
    tutorialLink: "https://www.youtube.com/watch?v=I4UR2T6Ro3w",
  },
  {
    id: 35,
    problemStatement: "Coin change problem: Maximum number of ways",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/coin-change2448/1",
    tutorialLink: "https://www.youtube.com/watch?v=I4UR2T6Ro3w",
  },
  {
    id: 36,
    problemStatement: "Coin change problem: Minimum number of coins",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=I-l6PBeERuc",
  },
  {
    id: 36,
    problemStatement: "Coin change problem Contd.",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/number-of-coins1824/1",
    tutorialLink: "https://www.youtube.com/watch?v=rMfOgY07TFs",
  },
  {
    id: 37,
    problemStatement: "Longest common subsequence Introduction",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=4dMlCZTONj8",
  },
  {
    id: 38,
    problemStatement: "Longest common subsequence Recursive",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=4Urd0a0BNng",
  },
  {
    id: 39,
    problemStatement: "Longest common subsequence Memoization",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=g_hIx4yn9zg",
  },
  {
    id: 40,
    problemStatement: "Longest common subsequence Top down DP",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/longest-common-subsequence-1587115620/1",
    tutorialLink: "https://www.youtube.com/watch?v=hR3s9rGlMTU",
  },
  {
    id: 41,
    problemStatement: "Longest Common Substring",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/longest-common-substring1452/1",
    tutorialLink: "https://www.youtube.com/watch?v=HrybPYpOvz0",
  },
  {
    id: 42,
    problemStatement: "Printing Longest common subsequence",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=x5hQvnUcjiM",
  },
  {
    id: 43,
    problemStatement: "Shortest Common SuperSequence",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/shortest-common-supersequence0322/1",
    tutorialLink: "https://www.youtube.com/watch?v=823Grn4_dCQ",
  },
  {
    id: 44,
    problemStatement:
      "Minimum Number of Insertion and Deletion to convert String a to String b",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/minimum-number-of-deletions-and-insertions0209/1",
    tutorialLink: "https://www.youtube.com/watch?v=-fx6aDxcWyg",
  },
  {
    id: 45,
    problemStatement: "Longest Palindromic Subsequence",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=wuOOOATz_IA",
  },
  {
    id: 46,
    problemStatement:
      "Minimum number of deletion in a string to make it a palindrome",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/minimum-deletitions/0",
    tutorialLink: "https://www.youtube.com/watch?v=CFwCCNbRuLY",
  },
  {
    id: 47,
    problemStatement: "Print shortest common Supersequence",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=VDhRg-ZJTuc",
  },
  {
    id: 48,
    problemStatement: "Longest repeating subsequence",
    problemLink: "https://www.geeksforgeeks.org/longest-repeating-subsequence/",
    tutorialLink: "https://www.youtube.com/watch?v=hbTaCmQGqLg",
  },
  {
    id: 49,
    problemStatement: "Sequence Pattern Matching",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/wildcard-pattern-matching/1",
    tutorialLink: "https://www.youtube.com/watch?v=QVntmksK2es",
  },
  {
    id: 50,
    problemStatement:
      "Minimum number of insertion in a string to make it a palindrome",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/form-a-palindrome/0",
    tutorialLink: "https://www.youtube.com/watch?v=AEcRW4ylm_c",
  },
  {
    id: 51,
    problemStatement:
      "Matrix chain multiplication Introduction Identification and General Format",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=D7AFvtnDeMU",
  },
  {
    id: 52,
    problemStatement: "Matrix Chain Multiplication Recursive",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=kMK148J9qEE",
  },
  {
    id: 53,
    problemStatement: "Matrix chain multiplication Memoization",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/matrix-chain-multiplication0303/1",
    tutorialLink: "https://www.youtube.com/watch?v=9uUVFNOT3_Y",
  },
  {
    id: 54,
    problemStatement: "Palindrome Partitioning Recursive",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=szKVpQtBHh8",
  },
  {
    id: 55,
    problemStatement: "Palindrome Partitioning Memoization",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=fOUlNlawdAU",
  },
  {
    id: 56,
    problemStatement: "Palindrome Partitioning Memoized Optimisation",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/palindromic-patitioning4845/1",
    tutorialLink: "https://www.youtube.com/watch?v=9h10fqkI7Nk",
  },
  {
    id: 57,
    problemStatement:
      "Evaluate Expression to True Boolean Parenthesization Recursive",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=pGVguAcWX4g",
  },
  {
    id: 58,
    problemStatement:
      "Evaluate Expression To True Boolean Parenthesization Memoized",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/boolean-parenthesization5610/1",
    tutorialLink: "https://www.youtube.com/watch?v=bzXM1Zond9U",
  },
  {
    id: 59,
    problemStatement: "Scrambled String Recursive",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=SqA0o-DGmEw",
  },
  {
    id: 60,
    problemStatement: "crambled String Memoized",
    problemLink: "https://www.interviewbit.com/problems/scramble-string/#",
    tutorialLink: "https://www.youtube.com/watch?v=VyHEglhbm-A",
  },
  {
    id: 61,
    problemStatement: "Egg Dropping Problem Recursive",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=S49zeUjeUL0",
  },
  {
    id: 62,
    problemStatement: "Egg Dropping Problem Memoization",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=gr2NtY-2QUY",
  },
  {
    id: 63,
    problemStatement: "Egg Dropping Problem Memoization Optimization",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/egg-dropping-puzzle-1587115620/1",
    tutorialLink: "https://www.youtube.com/watch?v=jkygQmOiCCI",
  },
  {
    id: 64,
    problemStatement:
      "Dynamic programming on Trees Introduction and Identification",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=qZ5zayHSH2g",
  },
  {
    id: 65,
    problemStatement: "Dynamic Programming on Tree General Syntax",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=d1u2t018Kjg",
  },
  {
    id: 66,
    problemStatement: "Diameter of a Binary Tree",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/diameter-of-binary-tree/1",
    tutorialLink: "https://www.youtube.com/watch?v=zmPj_Ee3B8c",
  },
  {
    id: 67,
    problemStatement: "Maximum Path Sum | From any node to any node",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=Osz-Vwer6rw",
  },
  {
    id: 68,
    problemStatement: "Maximum Path sum | From leaf node to leaf node",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=ArNyupe-XH0",
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
