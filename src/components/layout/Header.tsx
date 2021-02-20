import React from "react";
// import { Link } from "react-router-dom";

// import Navbar from "react-bulma-components/lib/components/navbar";
import { Navbar } from "react-bulma-components";

function Header() {
  return (
    <div className="App">
      <div className="container">
        <Navbar color={"info"} fixed={"top"} active={false} transparent={false}>
          <Navbar.Brand>
            <Navbar.Item renderAs="a" href="#">
              <h1 className="title">Todo App</h1>
            </Navbar.Item>
            <Navbar.Burger />
          </Navbar.Brand>
          <Navbar.Menu>
            <Navbar.Container>
              <Navbar.Item href="/">Home</Navbar.Item>
              <Navbar.Item href="/about">About</Navbar.Item>
            </Navbar.Container>
            {/* <Navbar.Container position="end">
          <Navbar.Item href="#">At the end</Navbar.Item>
        </Navbar.Container> */}
          </Navbar.Menu>
        </Navbar>
      </div>
    </div>
  );
}

export default Header;
