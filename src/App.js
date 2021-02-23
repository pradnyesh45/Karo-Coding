import Heading from "../src/components/Heading";
import Navigation from "../src/components/Navigation";
import Problem from "../src/components/Problem";
import Introduction from "../src/components/Introduction";

var ProblemComponent = () => {
  switch (true) {
    case true:
      return <Problem />;
    default:
      return null;
  }
};

function App() {
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
      <Navigation />
      <br></br>
      {ProblemComponent()}
    </div>
  );
}

export default App;
