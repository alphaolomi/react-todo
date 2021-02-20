import React from "react";

import { Container, Content, Hero, Footer } from "react-bulma-components";

export default function AppFooter() {
  return (
    <div>
      <Hero size="fullheight">
        <Hero.Head renderAs="header" />
        <Hero.Body />
        <Hero.Footer>
          <Footer>
            <Container>
              <Content style={{ textAlign: "center" }}>
                <p>
                  <strong>xCode</strong> by{" "}
                  <a href="http://jgthms.com">Alpha</a>. The source code
                  is licensed
                  <a href="http://opensource.org/licenses/mit-license.php">
                    MIT
                  </a>
                  . The website content is licensed{" "}
                  <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
                    CC BY NC SA 4.0
                  </a>
                  .
                </p>
              </Content>
            </Container>
          </Footer>
        </Hero.Footer>
      </Hero>
    </div>
  );
}
