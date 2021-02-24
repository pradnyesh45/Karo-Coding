import React from "react";
import { Container } from "react-bootstrap";

function BeforeStarting() {
  return (
    <div>
      <Container>
        <hr></hr>
        <h3>Before You Start Your Journey...</h3>
        <ul>
          <hr></hr>
          <li>
            Most of the Problems have a Problem link where you can read the
            question and try to solve it. In case you are not able to solve the
            problem, then you can refer to the Tutorial link.
          </li>
          <hr></hr>
          <li>
            Some of the Problems do not have a Problem link, in such a case one
            is supposed to start watching the tutorial and try to understand the
            question. Then one should try to solve it on his/her local/online
            IDE before watching the complete Tutorial.
          </li>
          <hr></hr>
          <li>
            When you have finished with one topic, if you want you can head over
            to various sites such HackerRank, ect. and try to solve problems on
            the given topic.
          </li>
          <hr></hr>
          <li>
            There are various things available to explore after completing these
            questions. One can further improve his problem solving skills
            through Competitive Programming or one can dwelve into technical
            domains of his/her interest.
          </li>
          <hr></hr>
          <li>Last but not the least, Happy Coding!</li>
        </ul>
      </Container>
    </div>
  );
}

export default BeforeStarting;
