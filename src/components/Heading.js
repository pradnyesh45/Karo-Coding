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
          <Col>
            <HeadingCard />
          </Col>
          <Col>
            <HeadingCard />
          </Col>
          {/* <Col>Meet the Creator</Col>
          <Col>Become Intermediate Coder from Sratch</Col>
          <Col>
            If you find the application useful, then you can donate Here!
          </Col> */}
        </Row>
      </Container>
    </div>
  );
}

export default heading;
