import React from "react";
import { Table, Container } from "react-bootstrap";
import Stacks from "../problemComponents/Stacks";

var StacksList = [
  {
    id: 1,
    problemStatement: "Data structures: Introduction to stack",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=F1F2imiOJfk",
  },
  {
    id: 2,
    problemStatement: "Data structures: Introduction to Queues",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=XuCbpw6Bj1U",
  },
  {
    id: 3,
    problemStatement: "Data structures: Array implementation of Queue",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=okr-XE8yTO8",
  },
  {
    id: 4,
    problemStatement: "Data structures: Linked List implementation of Queue",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=A5_XdiK4J8A",
  },
  {
    id: 5,
    problemStatement: "Data structures: Array implementation of stacks",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=sFVxsglODoo",
  },
  {
    id: 6,
    problemStatement: "Data Structures: Linked List implementation of stacks",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=MuwxQ2IB8lQ",
  },
  {
    id: 7,
    problemStatement: "1 Stack Introduction And Identification",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=P1bAPZg5uaE",
  },
  {
    id: 8,
    problemStatement: "2 NGR | Nearest Greater to right | Next Largest Element",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/next-larger-element-1587115620/1",
    tutorialLink: "https://www.youtube.com/watch?v=NXOOYYwpbg4",
  },
  {
    id: 9,
    problemStatement: "3 NGL | Nearest Greater to left",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=T5s96ynzArg",
  },
  {
    id: 10,
    problemStatement: "4 NSL | NEAREST SMALLER TO LEFT",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/immediate-smaller-element1142/1",
    tutorialLink: "https://www.youtube.com/watch?v=85LWui3FlVk",
  },
  {
    id: 11,
    problemStatement: "5 NSR | Nearest Smaller to Right",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=nc1AYFyvOR4",
  },
  {
    id: 12,
    problemStatement: "6 Stock Span Problem",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/stock-span-problem-1587115621/1",
    tutorialLink: "https://www.youtube.com/watch?v=p9T-fE1g1pU",
  },
  {
    id: 13,
    problemStatement: "7 Maximum Area Histogram | MAH",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/maximum-rectangular-area-in-a-histogram-1587115620/1",
    tutorialLink: "https://www.youtube.com/watch?v=J2X70jj_I1o",
  },
  {
    id: 14,
    problemStatement: "8 Max Area Rectangle in binary matrix",
    problemLink: "https://practice.geeksforgeeks.org/problems/max-rectangle/1",
    tutorialLink: "https://www.youtube.com/watch?v=St0Jf_VmG_g",
  },
  {
    id: 15,
    problemStatement: "9 Rain Water Trapping",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/trapping-rain-water-1587115621/1",
    tutorialLink: "https://www.youtube.com/watch?v=FbGG2qpNp4U",
  },
  {
    id: 16,
    problemStatement: "10 Minimum Element in Stack with Extra space",
    problemLink: "https://practice.geeksforgeeks.org/problems/special-stack/1",
    tutorialLink: "https://www.youtube.com/watch?v=asf9P2Rcopo",
  },
  {
    id: 17,
    problemStatement: "11 Minimum Element in Stack in O(1) Space",
    problemLink:
      "https://www.geeksforgeeks.org/design-a-stack-that-supports-getmin-in-o1-time-and-o1-extra-space/",
    tutorialLink: "https://www.youtube.com/watch?v=ZvaRHYYI0-4",
  },
];

function ProblemStacks() {
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
            {StacksList.map((listItem) => {
              return <Stacks StacksList={listItem} key={listItem.id} />;
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default ProblemStacks;
