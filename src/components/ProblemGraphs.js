import React from "react";
import { Table, Container } from "react-bootstrap";
import Graphs from "../problemComponents/Graphs";

var GraphsList = [
  {
    id: 1,
    problemStatement: "Types of graph",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=caAVlibiTkY",
  },
  {
    id: 2,
    problemStatement:
      "Representation of graph using adjacency matrix and adjacency list",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=4R7chuhzq7k",
  },
  {
    id: 3,
    problemStatement: "Depth first search | DFS | Depth first traversal",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/depth-first-traversal-for-a-graph/1",
    tutorialLink: "https://www.youtube.com/watch?v=CvUMf8c2JFo",
  },
  {
    id: 4,
    problemStatement: "Breadth first search | BFS | Breadth first traversal",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/bfs-traversal-of-graph/1",
    tutorialLink: "https://www.youtube.com/watch?v=YYq38LTz774",
  },
  {
    id: 5,
    problemStatement: "Detect cycle in a directed graph",
    problemLink: "https://www.geeksforgeeks.org/detect-cycle-in-a-graph/",
    tutorialLink: "https://www.youtube.com/watch?v=0dJmTuMrUZM",
  },
  {
    id: 6,
    problemStatement:
      "Detect cycle in an undirected graph | Graph coloring method",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1",
    tutorialLink: "https://www.youtube.com/watch?v=L0DcePeWHnM",
  },
  {
    id: 7,
    problemStatement: "Number of islands ",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/find-the-number-of-islands/1",
    tutorialLink: "https://www.youtube.com/watch?v=__98uL6wst8",
  },
  {
    id: 8,
    problemStatement: "Possible Bipartition | Bipartite graph | Graph coloring",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/bipartite-graph/1",
    tutorialLink: "https://www.youtube.com/watch?v=0ACfAqs8mm0",
  },
  {
    id: 9,
    problemStatement: "Course Schedule | Deadlock detection | Graph coloring",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=kXy0ABd1vwo",
  },
  {
    id: 10,
    problemStatement: "Cheapest Flights Within K Stops | DFS + Pruning ",
    problemLink:
      "https://leetcode.com/problems/cheapest-flights-within-k-stops/",
    tutorialLink: "https://www.youtube.com/watch?v=60RbWlDFsmI",
  },
  {
    id: 11,
    problemStatement: "Reconstruct Itinerary",
    problemLink: "https://leetcode.com/problems/reconstruct-itinerary/",
    tutorialLink: "https://www.youtube.com/watch?v=WYqsg5dziaQ",
  },
  {
    id: 12,
    problemStatement: "Clone graph ",
    problemLink: "https://leetcode.com/problems/clone-graph/",
    tutorialLink: "https://www.youtube.com/watch?v=f2EfGComRKM",
  },
  {
    id: 13,
    problemStatement: "Topological sort | Course schedule 2",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=qe_pQCh09yU",
  },
  {
    id: 14,
    problemStatement: "Kahn's algorithm | Topological sort | Course schedule 2",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/topological-sort/1",
    tutorialLink: "https://www.youtube.com/watch?v=tggiFvaxjrY",
  },
  {
    id: 15,
    problemStatement: "Disjoint Set | UNION and FIND",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=eTaWFhPXPz4",
  },
  {
    id: 16,
    problemStatement: "Disjoint set UNION by RANK and Path Compression",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=kaBX2s3pYO4",
  },
  {
    id: 17,
    problemStatement: "Spanning Tree | MST | Graph Theory",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=jMioOe2eTcY",
  },
  {
    id: 18,
    problemStatement: "Prims algorithm | MST | Code implementation",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/minimum-spanning-tree/1",
    tutorialLink: "https://www.youtube.com/watch?v=xthRL0lcx2w",
  },
];

function ProblemGraphs() {
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
            {GraphsList.map((listItem) => {
              return <Graphs GraphsList={listItem} key={listItem.id} />;
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default ProblemGraphs;
