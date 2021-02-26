import Heading from "../src/components/Heading";
import Navigation from "../src/components/Navigation";
import ProblemCpp from "./components/ProblemCpp";
import { useState, useEffect } from "react";
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
import ProblemTrees from "../src/components/ProblemTrees";
import ProblemHashmaps from "../src/components/ProblemHashmaps";
import ProblemPriorityQueues from "../src/components/ProblemPriorityQueues";
import ProblemTries from "../src/components/ProblemTries";
import ProblemDynamicProgramming from "../src/components/ProblemDynamicProgramming";
import ProblemGraphs from "../src/components/ProblemGraphs";
import ProblemBitManipulation from "../src/components/ProblemBitManipulation";
import BeforeStarting from "../src/components/BeforeStarting";
import Donate from "../src/components/Donate";
import ProblemBacktracking from "../src/components/ProblemBacktracking";
import ReactGA from "react-ga";
import Disqus from "../src/components/Disqus";

function App() {
  useEffect(() => {
    ReactGA.initialize("UA-190607342-1");

    // to report page view
    ReactGA.pageview("/");
  }, []);

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
      case "Trees":
        return <ProblemTrees />;
      case "Hashmaps":
        return <ProblemHashmaps />;
      case "PriorityQueues":
        return <ProblemPriorityQueues />;
      case "Tries":
        return <ProblemTries />;

      case "DynamicProgramming":
        return <ProblemDynamicProgramming />;
      case "Graphs":
        return <ProblemGraphs />;
      case "BitManipulation":
        return <ProblemBitManipulation />;
      case "Backtracking":
        return <ProblemBacktracking />;
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
      <Disqus />
    </div>
  );
}

export default App;
