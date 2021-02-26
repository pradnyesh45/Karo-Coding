import React, { Component } from "react";
import Disqus from "disqus-react";
import { Container } from "react-bootstrap";

export default class extends Component {
  render() {
    const disqusShortname = "karocoding-herokuapp-com";
    const disqusConfig = {
      url: "https://karocoding.herokuapp.com/",
      identifier: "article-id",
      title: "Title of Your Article",
    };

    return (
      <Container>
        <div className="article-container">
          <Disqus.DiscussionEmbed
            shortname={disqusShortname}
            config={disqusConfig}
          />
        </div>
      </Container>
    );
  }
}
