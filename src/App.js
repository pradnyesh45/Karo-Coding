import background from "./img/mike-yukhtenko-wfh8dDlNFOk-unsplash.jpg";
import Heading from "../src/components/Heading";
import Navigation from "../src/components/Navigation";
import Problem from "../src/components/Problem";
import Introduction from "../src/components/Introduction";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#e4e6e4",
        // backgroundImage: `url(${background})`,
      }}
    >
      <Introduction />
      <br></br>
      <Heading />
      <br></br>
      <Navigation />
      <br></br>
      <Problem />
    </div>
  );
}

export default App;
