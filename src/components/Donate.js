import React from "react";
import { Card, Button, Container } from "react-bootstrap";
function Donate({ value, onDonateClick }) {
  function handleClick(event) {
    onDonateClick(event.target.value);
  }
  return (
    <div>
      <Container>
        <Card>
          <Card.Header as="h5">Donate</Card.Header>
          <Card.Body>
            <Card.Title>UPI: 8446779815@upi</Card.Title>
            <Card.Text>
              If you find this application useful then you can show your
              appreciation by donating some amount of your choice to the given
              UPI id. Happy Coding!
            </Card.Text>
            <Button value="false" onClick={handleClick} variant="primary">
              Back
            </Button>
          </Card.Body>
        </Card>
        <br></br>
        <Card>
          <Card.Header as="h5">About Creator</Card.Header>
          <Card.Body>
            <Card.Title>Pradnyesh Aglawe</Card.Title>
            <Card.Text>
              Pradnyesh is a 3rd year computer science student at ABV-IIITM
              Gwalior. He himself faced difficulties during intial years of
              college in understanding Coding. Mainly because he did not put in
              much efforts, also he realised it late that internet is a great
              source of knowledge. He never studied from internet before joining
              college and was made to think that internet is for timepass. He
              got addicted to all kinds of non-productive stuff on internet. But
              as time passed, he realised that all the information is available
              on the internet, it's just the right kind of discipline which was
              missing. He believes that with the right amount of efforts anyone
              can become good at Coding.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Donate;
