import Heading from "../src/components/Heading";
import Navigation from "../src/components/Navigation";
import ProblemCpp from "./components/ProblemCpp";
import Introduction from "../src/components/Introduction";
import ProblemPatternPrinting from "../src/components/ProblemPatternPrinting";
import { useState } from "react";

function App() {
  let [component, setComponent] = useState("Pattern Printing");

  function handleChildClick(value) {
    setComponent(value);
  }

  var ProblemComponent = (component) => {
    switch (component) {
      case "C++":
        return <ProblemCpp />;
      case "Pattern Printing":
        return <ProblemPatternPrinting />;
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
      <Introduction />
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
