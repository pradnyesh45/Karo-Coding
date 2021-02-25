import React from "react";
import { Table, Container } from "react-bootstrap";
import Trees from "../problemComponents/Trees";

var TreesList = [
  {
    id: 1,
    problemStatement: "Data structures: Introduction to Trees",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=qH6yxkw0u78",
  },
  {
    id: 2,
    problemStatement: "Data structures: Binary Tree",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=H5JubkIy_p8",
  },
  {
    id: 3,
    problemStatement: "Data structures: Binary Search Tree",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=pYT9F8_LFTM",
  },
  {
    id: 4,
    problemStatement: "Binary search tree - Implementation in C/C++",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/insert-a-node-in-a-bst/1",
    tutorialLink: "https://www.youtube.com/watch?v=COZK7NATh4k",
  },
  {
    id: 5,
    problemStatement:
      "BST implementation - memory allocation in stack and heap",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=hWokyBoo0aI",
  },
  {
    id: 6,
    problemStatement: "Find min and max element in a binary search tree",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/minimum-element-in-bst/1",
    tutorialLink: "https://www.youtube.com/watch?v=Ut90klNN264",
  },
  {
    id: 7,
    problemStatement: "Find height of a binary tree",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/height-of-binary-tree/1",
    tutorialLink: "https://www.youtube.com/watch?v=_pnqMz5nrRs",
  },
  {
    id: 8,
    problemStatement:
      "Binary tree traversal - breadth-first and depth-first strategies",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=9RHO6jU--GU",
  },
  {
    id: 9,
    problemStatement: "Binary tree: Level Order Traversal",
    problemLink:
      "Nhttps://leetcode.com/problems/binary-tree-level-order-traversal/",
    tutorialLink: "https://www.youtube.com/watch?v=86g8jAQug04",
  },
  {
    id: 10,
    problemStatement: "Binary tree traversal: Preorder, Inorder, Postorder",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/preorder-traversal/1",
    tutorialLink: "https://www.youtube.com/watch?v=gm8DUJJhmY4",
  },
  {
    id: 11,
    problemStatement: "Check if a binary tree is binary search tree or not",
    problemLink: "https://practice.geeksforgeeks.org/problems/check-for-bst/1",
    tutorialLink: "https://www.youtube.com/watch?v=yEwSGhSsT0U",
  },
  {
    id: 12,
    problemStatement: "Delete a node from Binary Search Tree",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/delete-a-node-from-bst/1",
    tutorialLink: "https://www.youtube.com/watch?v=gcULXE7ViZw",
  },
  {
    id: 13,
    problemStatement: "Inorder Successor in a binary search tree",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/inorder-successor-in-bst/1",
    tutorialLink: "https://www.youtube.com/watch?v=5cPbNCrdotA",
  },
  {
    id: 14,
    problemStatement:
      "Serialize & Deserialize A Binary Tree - Crafting Recursive Solutions To Interview Problems",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/serialize-and-deserialize-a-binary-tree/1",
    tutorialLink: "https://www.youtube.com/watch?v=suj1ro8TIVY",
  },
  {
    id: 15,
    problemStatement:
      "Lowest Common Ancestor Between 2 Binary Tree Nodes (A Recursive Approach)",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/lowest-common-ancestor-in-a-binary-tree/1",
    tutorialLink: "https://www.youtube.com/watch?v=py3R23aAPCA",
  },
  {
    id: 16,
    problemStatement:
      "All Nodes Distance K In A Binary Tree - Performing Bidirectional Search On A Tree Using A Hashtable",
    problemLink:
      "https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/",
    tutorialLink: "https://www.youtube.com/watch?v=nPtARJ2cYrg",
  },
  {
    id: 17,
    problemStatement:
      "Binary Tree Level Order Traversal - Drawing The Parallel Between Trees & Graphs",
    problemLink:
      "https://leetcode.com/problems/binary-tree-level-order-traversal/",
    tutorialLink: "https://www.youtube.com/watch?v=gcR28Hc2TNQ",
  },
  {
    id: 18,
    problemStatement:
      "Implement A Binary Heap - An Efficient Implementation of The Priority Queue ADT (Abstract Data Type)",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=g9YK6sftDi0",
  },
  {
    id: 19,
    problemStatement:
      "Test If A Binary Tree Is Height Balanced (Balanced Binary Tree on LeetCode)",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/check-for-balanced-tree/1",
    tutorialLink: "https://www.youtube.com/watch?v=LU4fGD-fgJQ",
  },
  {
    id: 20,
    problemStatement:
      "Count Total Unique Binary Search Trees - The nth Catalan Number (Dynamic Programming)",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/unique-bsts-1587115621/1",
    tutorialLink: "https://www.youtube.com/watch?v=GgP75HAvrlY",
  },
  {
    id: 21,
    problemStatement:
      "Test If A Binary Tree Is Symmetric (Symmetric Tree on Leetcode)",
    problemLink: "https://leetcode.com/problems/symmetric-tree/",
    tutorialLink: "https://www.youtube.com/watch?v=XV7Sg2hJO3Q",
  },
];

function ProblemTrees() {
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
            {TreesList.map((listItem) => {
              return <Trees TreesList={listItem} key={listItem.id} />;
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default ProblemTrees;
