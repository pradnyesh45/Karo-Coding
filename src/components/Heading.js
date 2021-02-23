import React from "react";
import HeadingCard from "./HeadingCard";
import { Container, Row, Col } from "react-bootstrap";

function heading() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <HeadingCard />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default heading;
