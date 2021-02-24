import React from "react";
import { Table, Container } from "react-bootstrap";
import Searching from "../problemComponents/Searching";

var SearchingList = [
  {
    id: 1,
    problemStatement: "Searching & Sorting Techniques | Introduction",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=bE_MYkWukwI",
  },
  {
    id: 2,
    problemStatement: "Linear Search Algorithm with Example in Hindi, English",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/searching-a-number0324/1",
    tutorialLink: "https://www.youtube.com/watch?v=84qK9SI_IXI",
  },
  {
    id: 3,
    problemStatement: "Binary Search Algorithm with example",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/who-will-win-1587115621/1",
    tutorialLink: "https://www.youtube.com/watch?v=rr51AXBIeuQ",
  },
  {
    id: 4,
    problemStatement: "Bubble Sort Algorithm and its Complexity",
    problemLink: "https://practice.geeksforgeeks.org/problems/bubble-sort/1",
    tutorialLink: "https://www.youtube.com/watch?v=DETQztlOs30",
  },
  {
    id: 5,
    problemStatement: "Selection Sort Algorithm and its Complexity",
    problemLink: "https://practice.geeksforgeeks.org/problems/selection-sort/1",
    tutorialLink: "https://www.youtube.com/watch?v=WDw1F0N8zys",
  },
  {
    id: 6,
    problemStatement: "Insertion Sort Algorithm and its Complexity",
    problemLink: "https://practice.geeksforgeeks.org/problems/insertion-sort/1",
    tutorialLink: "https://www.youtube.com/watch?v=-IzbgURu3f0",
  },
  {
    id: 7,
    problemStatement: "Quick Sort Algorithm",
    problemLink: "https://practice.geeksforgeeks.org/problems/quick-sort/1",
    tutorialLink: "https://www.youtube.com/watch?v=Lr4qUz1OgmY",
  },
  {
    id: 8,
    problemStatement: "Quick Sort Algorithm Complexity",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=gorpHuhOWJA",
  },
  {
    id: 9,
    problemStatement:
      "Merge Sort Algorithm with Example in Hindi, English(Part1)",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=jI5JtfPj2q0",
  },
  {
    id: 10,
    problemStatement:
      "Merge Sort Algorithm with Example in Hindi, English(Part2)",
    problemLink: "https://practice.geeksforgeeks.org/problems/merge-sort/1",
    tutorialLink: "https://www.youtube.com/watch?v=90olJjO5CYs",
  },
  {
    id: 11,
    problemStatement: "Radix Sort Algorithm's easiest explanation",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=4fRvut0zOdk",
  },
  {
    id: 12,
    problemStatement: "Topological Sort Algorithm",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/topological-sort/1",
    tutorialLink: "https://www.youtube.com/watch?v=fTcjapZ_yiw",
  },
];

function ProblemSearching() {
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
            {SearchingList.map((listItem) => {
              return <Searching SearchingList={listItem} key={listItem.id} />;
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default ProblemSearching;
