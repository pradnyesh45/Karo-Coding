import React from "react";
import { Button, ButtonGroup, Container } from "react-bootstrap";

function Navigation() {
  return (
    <div>
      <Container>
        <Button style={{ margin: 10 }}>Left</Button>
        <Button style={{ margin: 10 }}>Middle</Button>
        <Button style={{ margin: 10 }}>Right</Button>
      </Container>
    </div>
  );
}

export default Navigation;
