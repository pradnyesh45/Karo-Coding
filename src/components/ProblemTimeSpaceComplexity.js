import React from "react";
import { Table, Container } from "react-bootstrap";
import TimeSpaceComplexity from "../problemComponents/TimeSpaceComplexity";

var TimeSpaceComplexityList = [
  {
    id: 1,
    problemStatement: "Introduction",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=8PW4jFQYOcA",
  },
  {
    id: 2,
    problemStatement: "Processor Operations",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=NS75aNnbpF8",
  },
  {
    id: 3,
    problemStatement: "Algorithm Comparison-Linear Search",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=OIOEbrLkCNY",
  },
  {
    id: 4,
    problemStatement: "Algorithm Comparison-2",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=eBKLHTkwb6s",
  },
  {
    id: 5,
    problemStatement: "best and worst case",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=uLWbq6YN9-E",
  },
  {
    id: 6,
    problemStatement: "Comparison using Time Complexity-1 ",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=AXcWMWc0L30",
  },
  {
    id: 7,
    problemStatement: "Comparison using time complexity-2 ",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=TNOJwae50Nw",
  },
  {
    id: 8,
    problemStatement: "Big O notation ",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=cYgeZC_HAdo",
  },
  {
    id: 9,
    problemStatement: "Find Time Complexity",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=gdZQjY2jsJo",
  },
  {
    id: 10,
    problemStatement: "Space Complexity of Algorithms",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=yOb0BL-84h8",
  },
];

function ProblemTimeSpaceComplexity() {
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
            {TimeSpaceComplexityList.map((listItem) => {
              return (
                <TimeSpaceComplexity
                  TimeSpaceComplexityList={listItem}
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

export default ProblemTimeSpaceComplexity;
