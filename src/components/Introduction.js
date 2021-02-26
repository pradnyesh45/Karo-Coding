import React from "react";
import { Jumbotron, Container, Button } from "react-bootstrap";

function Introduction({ value, onDonateClick }) {
  function handleClick(event) {
    onDonateClick(event.target.value);
  }
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1>Welcome to Karo Coding!</h1>
          <h2>Making you Intermediate at Coding from Scratch</h2>
          <h3>You don't even have to pay Rs. 0.00 </h3>
          <h3> It's Completely FREE! FREE! FREE!</h3>
          <p>
            For any issue, contact me through Email. Click on Donate and you
            will find my email id in the About Creator Section.
          </p>
          <p>
            If you are someone who wants to start a carrer in Tech Industry,
            then Coding is one of the most essential skills required to excel in
            this field. So, if you are someone who have just started his/her
            Coding journey or you are someone who wants to switch career into
            Tech. Then you are at the exact right place. Video Tutotials are
            provided in Hinglish(Hindi + English) Language. Happy Coding!
          </p>
          <Button value="true" onClick={handleClick} variant="success">
            Donate
          </Button>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default Introduction;
