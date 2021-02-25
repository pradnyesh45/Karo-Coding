import React from "react";
import { Table, Container } from "react-bootstrap";
import PriorityQueues from "../problemComponents/PriorityQueues";

var PriorityQueuesList = [
  {
    id: 1,
    problemStatement: "Priority Queue using Array",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=tWqMPc8ysjw",
  },
  {
    id: 2,
    problemStatement: "Priority Queue using Linked List",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=h476ly1vGMY",
  },
  {
    id: 3,
    problemStatement: "Priority Queue using Heap",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=Xa5j1SXZZvo",
  },
  {
    id: 4,
    problemStatement: "1 Heap Introduction and Identification",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=hW8PrQrvMNc",
  },
  {
    id: 5,
    problemStatement: "2 Kth Smallest Element",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/kth-smallest-element5635/1",
    tutorialLink: "https://www.youtube.com/watch?v=4BfL2Hjvh8g",
  },
  {
    id: 6,
    problemStatement: "3 Return K largest Elements in array",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/k-largest-elements3736/1",
    tutorialLink: "https://www.youtube.com/watch?v=3DdP6Ef8YZM",
  },
  {
    id: 7,
    problemStatement: "4 Sort a K Sorted Array | Sort Nearly Sorted Array",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/nearly-sorted-algorithm/0",
    tutorialLink: "https://www.youtube.com/watch?v=dYfM6J1y0mU",
  },
  {
    id: 8,
    problemStatement: "5 K Closest Numbers",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/k-closest-elements3619/1",
    tutorialLink: "https://www.youtube.com/watch?v=J8yLD-x7fBI",
  },
  {
    id: 9,
    problemStatement: "6 Top K Frequent Numbers",
    problemLink: "https://leetcode.com/problems/top-k-frequent-elements/",
    tutorialLink: "https://www.youtube.com/watch?v=7VoJn544QrM",
  },
  {
    id: 10,
    problemStatement: "7 Frequency Sort",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/sorting-elements-of-an-array-by-frequency/0",
    tutorialLink: "https://www.youtube.com/watch?v=hLR5aMzYGGk",
  },
  {
    id: 11,
    problemStatement: "8 K Closest Points To Origin",
    problemLink: "https://leetcode.com/problems/k-closest-points-to-origin/",
    tutorialLink: "https://www.youtube.com/watch?v=XC4EotTewro",
  },
  {
    id: 12,
    problemStatement: "9 Connect Ropes to Minimise the Cost",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/minimum-cost-of-ropes-1587115620/1",
    tutorialLink: "https://www.youtube.com/watch?v=_k_c9nqzKN0",
  },
  {
    id: 13,
    problemStatement:
      "10 Sum of Elements between k1 smallest and k2 smallest numbers",
    problemLink:
      "https://www.geeksforgeeks.org/sum-elements-k1th-k2th-smallest-elements/",
    tutorialLink: "https://www.youtube.com/watch?v=3ioQQQrnw4Q",
  },
];

function ProblemPriorityQueues() {
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
            {PriorityQueuesList.map((listItem) => {
              return (
                <PriorityQueues
                  PriorityQueuesList={listItem}
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

export default ProblemPriorityQueues;
