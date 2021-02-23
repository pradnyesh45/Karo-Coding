import React from "react";
import { Button, ButtonGroup, Container } from "react-bootstrap";

function Navigation({ value, onChildClick }) {
  function handleClick(event) {
    onChildClick(event.target.value);
  }
  return (
    <div>
      <Container>
        <Button
          value="BeforeStarting"
          onClick={handleClick}
          style={{ margin: 5, backgroundColor: "#ff0000" }}
        >
          Before Starting
        </Button>
        <Button
          value="C++"
          style={{ margin: 5, backgroundColor: "#ff0000" }}
          onClick={handleClick}
        >
          C++
        </Button>
        <Button
          value="PatternPrinting"
          onClick={handleClick}
          style={{ margin: 5, backgroundColor: "#ff0000" }}
        >
          Pattern Printing
        </Button>
        <Button
          value="Arrays"
          onClick={handleClick}
          style={{ margin: 5, backgroundColor: "#ff0000" }}
        >
          Arrays
        </Button>
        <Button
          value="Searching"
          onClick={handleClick}
          style={{ margin: 5, backgroundColor: "#ff0000" }}
        >
          Searching
        </Button>
        <Button
          value="Sorting"
          onClick={handleClick}
          style={{ margin: 5, backgroundColor: "#ff0000" }}
        >
          Sorting
        </Button>
        <Button
          value="Strings"
          onClick={handleClick}
          style={{ margin: 5, backgroundColor: "#ff0000" }}
        >
          Strings
        </Button>
        <Button
          value="Pointers"
          onClick={handleClick}
          style={{ margin: 5, backgroundColor: "#ff0000" }}
        >
          Pointers
        </Button>
        <Button
          value="TimeSpaceComplexity"
          onClick={handleClick}
          style={{ margin: 5, backgroundColor: "#ff0000" }}
        >
          Time and Space Complexity
        </Button>
        <Button
          value="Recursion"
          onClick={handleClick}
          style={{ margin: 5, backgroundColor: "#ff0000" }}
        >
          Recursion
        </Button>
        <Button
          value="OOPS"
          onClick={handleClick}
          style={{ margin: 5, backgroundColor: "#ff0000" }}
        >
          OOPS
        </Button>
        <Button
          value="Vectors"
          onClick={handleClick}
          style={{ margin: 5, backgroundColor: "#ff0000" }}
        >
          Vectors
        </Button>
        <Button
          value="STL"
          onClick={handleClick}
          style={{ margin: 5, backgroundColor: "#ff0000" }}
        >
          STL
        </Button>
        <Button
          value="LinkedList"
          onClick={handleClick}
          style={{ margin: 5, backgroundColor: "#ff0000" }}
        >
          Linked List
        </Button>
        <Button
          value="Stacks"
          onClick={handleClick}
          style={{ margin: 5, backgroundColor: "#ff0000" }}
        >
          Stacks
        </Button>
        <Button
          value="Queues"
          onClick={handleClick}
          style={{ margin: 5, backgroundColor: "#ff0000" }}
        >
          Queues
        </Button>
        <Button
          value="Trees"
          onClick={handleClick}
          style={{ margin: 5, backgroundColor: "#ff0000" }}
        >
          Trees
        </Button>
        <Button
          value="BinaryTrees"
          onClick={handleClick}
          style={{ margin: 5, backgroundColor: "#ff0000" }}
        >
          Binary Trees
        </Button>
        <Button
          value="BinarySearchTrees"
          onClick={handleClick}
          style={{ margin: 5, backgroundColor: "#ff0000" }}
        >
          Binary Search Trees
        </Button>
        <Button
          value="Hashmaps"
          onClick={handleClick}
          style={{ margin: 5, backgroundColor: "#ff0000" }}
        >
          Hashmaps
        </Button>
        <Button
          value="PriorityQueues"
          onClick={handleClick}
          style={{ margin: 5, backgroundColor: "#ff0000" }}
        >
          Priority Queues
        </Button>
        <Button
          value="Tries"
          onClick={handleClick}
          style={{ margin: 5, backgroundColor: "#ff0000" }}
        >
          Tries
        </Button>
        <Button
          value="Greedy"
          onClick={handleClick}
          style={{ margin: 5, backgroundColor: "#ff0000" }}
        >
          Greedy
        </Button>
        <Button
          value="DynamicProgramming"
          onClick={handleClick}
          style={{ margin: 5, backgroundColor: "#ff0000" }}
        >
          Dynamic Programming
        </Button>
        <Button
          value="Graphs"
          onClick={handleClick}
          style={{ margin: 5, backgroundColor: "#ff0000" }}
        >
          Graphs
        </Button>
        <Button
          value="BitManipulation"
          onClick={handleClick}
          style={{ margin: 5, backgroundColor: "#ff0000" }}
        >
          Bit Manipulation
        </Button>
      </Container>
    </div>
  );
}

export default Navigation;
