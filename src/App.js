import Heading from "../src/components/Heading";
import Navigation from "../src/components/Navigation";
import ProblemCpp from "./components/ProblemCpp";
import { useState } from "react";
import Introduction from "../src/components/Introduction";
import ProblemPatternPrinting from "../src/components/ProblemPatternPrinting";
import ProblemArrays from "../src/components/ProblemArrays";
import ProblemSearching from "../src/components/ProblemSearching";
import ProblemStrings from "../src/components/ProblemStrings";
import ProblemTimeSpaceComplexity from "../src/components/ProblemTimeSpaceComplexity";
import ProblemRecursion from "../src/components/ProblemRecursion";
import ProblemVectors from "../src/components/ProblemVectors";
import ProblemSTL from "../src/components/ProblemSTL";
import ProblemLinkedList from "../src/components/ProblemLinkedList";
import ProblemStacks from "../src/components/ProblemStacks";
import ProblemQueues from "../src/components/ProblemQueues";
import ProblemTrees from "../src/components/ProblemTrees";
import ProblemBinaryTrees from "../src/components/ProblemBinaryTrees";
import ProblemBinarySearchTrees from "../src/components/ProblemBinarySearchTrees";
import ProblemHashmaps from "../src/components/ProblemHashmaps";
import ProblemPriorityQueues from "../src/components/ProblemPriorityQueues";
import ProblemTries from "../src/components/ProblemTries";
import ProblemGreedy from "../src/components/ProblemGreedy";
import ProblemDynamicProgramming from "../src/components/ProblemDynamicProgramming";
import ProblemGraphs from "../src/components/ProblemGraphs";
import ProblemBitManipulation from "../src/components/ProblemBitManipulation";
import BeforeStarting from "../src/components/BeforeStarting";
import Donate from "../src/components/Donate";

function App() {
  let [component, setComponent] = useState("BeforeStarting");

  function handleChildClick(value) {
    console.log(value);
    setComponent(value);
  }

  let [donate, setDonate] = useState(false);
  function handleDonateClick(value) {
    setDonate(value);
  }

  var ProblemComponent = (component) => {
    switch (component) {
      case "BeforeStarting":
        return <BeforeStarting />;
      case "C++":
        return <ProblemCpp />;
      case "PatternPrinting":
        return <ProblemPatternPrinting />;
      case "Arrays":
        return <ProblemArrays />;
      case "Recursion":
        return <ProblemRecursion />;
      case "Searching":
        return <ProblemSearching />;
      case "Strings":
        return <ProblemStrings />;
      case "TimeSpaceComplexity":
        return <ProblemTimeSpaceComplexity />;
      case "Vectors":
        return <ProblemVectors />;
      case "STL":
        return <ProblemSTL />;
      case "LinkedList":
        return <ProblemLinkedList />;
      case "Stacks":
        return <ProblemStacks />;
      case "Queues":
        return <ProblemQueues />;
      case "Trees":
        return <ProblemTrees />;
      case "BinaryTrees":
        return <ProblemBinaryTrees />;
      case "BinarySearchTrees":
        return <ProblemBinarySearchTrees />;
      case "Hashmaps":
        return <ProblemHashmaps />;
      case "PriorityQueues":
        return <ProblemPriorityQueues />;
      case "Tries":
        return <ProblemTries />;
      case "Greedy":
        return <ProblemGreedy />;
      case "DynamicProgramming":
        return <ProblemDynamicProgramming />;
      case "Graphs":
        return <ProblemGraphs />;
      case "BitManipulation":
        return <ProblemBitManipulation />;
      default:
        return null;
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#e4e6e4",
      }}
    >
      {donate === "true" ? (
        <Donate onDonateClick={handleDonateClick} />
      ) : (
        <Introduction onDonateClick={handleDonateClick} />
      )}

      <br></br>
      <Heading />
      <br></br>
      <Navigation onChildClick={handleChildClick} />
      <br></br>
      {ProblemComponent(component)}
    </div>
  );
}

export default App;
