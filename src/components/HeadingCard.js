import React from "react";
import { Card, Button, Accordion } from "react-bootstrap";

function headingCard() {
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Click here to know how does Karo Coding makes you good at Coding?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              So many great YouTubers have created awsome content to learn
              Coding. But just passive learning is not enough. You need to write
              Code in order to learn to Code. Here you will be either given a
              link to problem where you can practice before watching the
              tutorial or you will be told to follow a certain methodology in
              order to gain practicle knowledge.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Click here to know the instructions for Biginners
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              Follow the topic sequence row wise i.e, Before Starting, C++ and
              so on...
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}

export default headingCard;
