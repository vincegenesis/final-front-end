import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function DashBoardNav(props) {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="#140078" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link href="/">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
