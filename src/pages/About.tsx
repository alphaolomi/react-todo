import React from "react";
import { Container } from "react-bulma-components";

function About() {
  return (
    <Container>
      <div className="columns">
        <div className="column">
        <h1 className="title">About</h1>
        <p>This is the Todo app v2.0.0</p>
        </div>
      </div>
    </Container>
  );
}

export default About;
