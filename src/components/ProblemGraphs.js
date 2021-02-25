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
  {
    id: 19,
    problemStatement: "Kruskals algorithm | Construct MST",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=_Iz-QLBGKpM",
  },
  {
    id: 20,
    problemStatement: "Kruskal algorithm implementation",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=Ub-fJ-KoBQM",
  },
  {
    id: 21,
    problemStatement:
      "Dijkstra algorithm | Single source shortest path algorithm",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=Sj5Z-jaE2x0",
  },
  {
    id: 22,
    problemStatement: "Dijkstra algorithm | Code implementation",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/shortest-path-from-1-to-n0156/1",
    tutorialLink: "https://www.youtube.com/watch?v=t2d-XYuPfg0",
  },
  {
    id: 23,
    problemStatement: "Bellman Ford Algorithm",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=FrLWd1tJ_Wc",
  },
  {
    id: 24,
    problemStatement: "Bellman Ford Algorithm Code Implementation",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/negative-weight-cycle3504/1",
    tutorialLink: "https://www.youtube.com/watch?v=24HziTZ8_xo",
  },
  {
    id: 25,
    problemStatement: "Floyd Warshall algorithm | All pairs shortest path",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/implementing-floyd-warshall/0",
    tutorialLink: "https://www.youtube.com/watch?v=nV_wOZnhbog",
  },
  {
    id: 26,
    problemStatement:
      "Kosaraju Algorithm | Strongly connected components in a graph",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/strongly-connected-components-kosarajus-algo/1",
    tutorialLink: "https://www.youtube.com/watch?v=Rs6DXyWpWrI",
  },
  {
    id: 27,
    problemStatement: "Tarjans strongly connected components algorithm",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/strongly-connected-component-tarjanss-algo-1587115621/1",
    tutorialLink: "https://www.youtube.com/watch?v=ZeDNSeilf-Y",
  },
  {
    id: 28,
    problemStatement: "Tarjans strongly connected components algorithm",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=64KK9K4RpKE",
  },
  {
    id: 29,
    problemStatement:
      "Find Bridges in a graph using Tarjans Algorithm | Cut Edge",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=Rhxs4k6DyMM",
  },
  {
    id: 30,
    problemStatement:
      "Euler Graph | Euler Circuit | Euler Path | Eulerian Graph | Semi Eulerian Graph | Algorithm | CODE",
    problemLink:
      "https://practice.geeksforgeeks.org/problems/euler-circuit-and-path/1",
    tutorialLink: "https://www.youtube.com/watch?v=WY6Jsp3NxIk",
  },
  {
    id: 31,
    problemStatement: "Network Delay Time",
    problemLink: "https://leetcode.com/problems/network-delay-time/",
    tutorialLink: "https://www.youtube.com/watch?v=YHx6r9pM5e0",
  },
  {
    id: 32,
    problemStatement: "Word Ladder",
    problemLink: "https://leetcode.com/problems/word-ladder/",
    tutorialLink: "https://www.youtube.com/watch?v=ZVJ3asMoZ18",
  },
  {
    id: 33,
    problemStatement: "Word Ladder 2 ",
    problemLink: "https://leetcode.com/problems/word-ladder-ii/",
    tutorialLink: "https://www.youtube.com/watch?v=mIZJIuMpI2M",
  },
  {
    id: 34,
    problemStatement: "Critical Connections in a network ",
    problemLink:
      "https://leetcode.com/problems/critical-connections-in-a-network/",
    tutorialLink: "https://www.youtube.com/watch?v=HsBefuOqkd4",
  },
  {
    id: 35,
    problemStatement: "Number of Operations to Make Network Connected ",
    problemLink:
      "https://leetcode.com/problems/number-of-operations-to-make-network-connected/",
    tutorialLink: "https://www.youtube.com/watch?v=3JIwIRir2sM",
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
