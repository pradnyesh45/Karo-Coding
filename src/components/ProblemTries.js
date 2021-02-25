import React from "react";
import { Table, Container } from "react-bootstrap";
import Tries from "../problemComponents/Tries";

var TriesList = [
  {
    id: 1,
    problemStatement: "Basics of trie",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=6PX6wqDQE20",
  },
  {
    id: 2,
    problemStatement: "Trie insertion and search",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/trie-insert-and-search0651/1",
    tutorialLink: "https://www.youtube.com/watch?v=0k79LqIaHyQ",
  },
  {
    id: 3,
    problemStatement: "Trie deletion and search",
    problemLink: "https://practice.geeksforgeeks.org/problems/trie-delete/1",
    tutorialLink: "https://www.youtube.com/watch?v=ict1UawpXMM",
  },
  {
    id: 4,
    problemStatement: "Count number of strings with given prefix",
    problemLink:
      "https://www.geeksforgeeks.org/count-the-number-of-words-with-given-prefix-using-trie/",
    tutorialLink: "https://www.youtube.com/watch?v=UsWDLWuBUls",
  },
  {
    id: 5,
    problemStatement: "Auto complete feature using trie",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=DfkLGiW8vNA",
  },
  {
    id: 6,
    problemStatement:
      "Add and search word | Data structure design | Trie + Backtracking",
    problemLink:
      "https://leetcode.com/problems/design-add-and-search-words-data-structure/",
    tutorialLink: "https://www.youtube.com/watch?v=h-F2jRUzpBo",
  },
  {
    id: 7,
    problemStatement:
      "Longest Duplicate Substring | TRIE | Rolling Hash | Binary Search ",
    problemLink: "https://leetcode.com/problems/longest-duplicate-substring/",
    tutorialLink: "https://www.youtube.com/watch?v=FQ8hcOOzQMU",
  },
];

function ProblemTries() {
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
            {TriesList.map((listItem) => {
              return <Tries TriesList={listItem} key={listItem.id} />;
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default ProblemTries;
