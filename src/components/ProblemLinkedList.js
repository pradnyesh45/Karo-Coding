import React from "react";
import { Table, Container } from "react-bootstrap";
import LinkedList from "../problemComponents/LinkedList";

var LinkedListList = [
  {
    id: 1,
    problemStatement: "Linked List - Basics using C++",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=Zgzoe8jjidk",
  },
  {
    id: 2,
    problemStatement: "Linked List - Insert Node at beginning or end using C++",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/linked-list-insertion/1",
    tutorialLink: "https://www.youtube.com/watch?v=wVEX3UsKEVA",
  },
  {
    id: 3,
    problemStatement: "Linked List - Delete Node at beginning or end using C++",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=i3b3O7slIzk",
  },
  {
    id: 4,
    problemStatement: "Linked List - Middle Element using C++",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/finding-middle-element-in-a-linked-list/1",
    tutorialLink: "https://www.youtube.com/watch?v=M497FJW9mPk",
  },
  {
    id: 5,
    problemStatement: "Linked List - Reverse a Linked List using C++",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/reverse-a-linked-list/1",
    tutorialLink: "https://www.youtube.com/watch?v=PQIHq0vfADI",
  },
  {
    id: 6,
    problemStatement: "Linked List - Find or Detect Loop using C++",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/detect-loop-in-linked-list/1",
    tutorialLink: "https://www.youtube.com/watch?v=-V9BbUt8SbI",
  },
  {
    id: 7,
    problemStatement:
      "Linked List - Delete Node given single pointer to that node using C++",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=owMmoSdqIfI",
  },
  {
    id: 8,
    problemStatement: "Doubly Linked List Part 1 Hindi",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=qdmUcQjdGkg",
  },
  {
    id: 9,
    problemStatement:
      "#1 Introduction Doubly Linked List Program in C language",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=r6FvVztP-og",
  },
  {
    id: 10,
    problemStatement:
      "#2 Insertion at start of doubly linked list in C language",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=qhgK4mC309Q",
  },
  {
    id: 11,
    problemStatement:
      "#3 Insertion as a last node in Doubly Linked List in C Language",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=lxP1nRGe6M8",
  },
  {
    id: 12,
    problemStatement:
      "#4 Insertion after a node in Doubly Linked List in C Language",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/insert-a-node-in-doubly-linked-list/1",
    tutorialLink: "https://www.youtube.com/watch?v=ku0sKeJfWhc",
  },
  {
    id: 13,
    problemStatement: "#5 Search in Doubly Linked List in C Language",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=QDSnLJiWSwc",
  },
  {
    id: 14,
    problemStatement:
      "#6 Deletion of first node in doubly linked list C program",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=B39JTIvqwGE",
  },
  {
    id: 14,
    problemStatement:
      "#7 Deletion of last node in Doubly Linked List C program",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=sEfyAy6a-y0",
  },
  {
    id: 15,
    problemStatement:
      "#8 Deletion of intermediate node in doubly linked list C Program",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/delete-node-in-doubly-linked-list/1",
    tutorialLink: "https://www.youtube.com/watch?v=D2l4DXH69ic",
  },
  {
    id: 16,
    problemStatement: "Program of circular linked list in C Part 1 Hindi",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=R090kjqt3NY",
  },
  {
    id: 17,
    problemStatement: "Program of circular linked list in C Part 2 Hindi",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=wSzAoYVOh7Q",
  },
  {
    id: 18,
    problemStatement: "Program of circular linked list in C Part 3 Hindi",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=YIV1tLKrt80",
  },
  {
    id: 19,
    problemStatement: "Program of Circular linked list in C Part 4 Hindi",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=M-jeTKpb9A4",
  },
  {
    id: 20,
    problemStatement: "Program of circular linked list in C Part 5 Hindi",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=pDFaR0dBqTw",
  },
  {
    id: 21,
    problemStatement: "Program of circular linked list in C Part 6 Hindi",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=RmnUA1UpqnY",
  },
  {
    id: 22,
    problemStatement: "Program of circular linked list in C Part 7 hindi",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=jeJObT3K8Ls",
  },
  {
    id: 23,
    problemStatement: "Program of circular linked list in C Part 8 Hindi",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=6eSoubJSCDc",
  },
];

function ProblemLinkedList() {
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
            {LinkedListList.map((listItem) => {
              return <LinkedList LinkedListList={listItem} key={listItem.id} />;
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default ProblemLinkedList;
