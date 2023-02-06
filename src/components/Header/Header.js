import React from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaBuilding } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="justify-content-space-between shadow-lg bg-body-tertiary "
    >
      <Container>
        <Navbar.Brand>
          <div className="d-flex lh-sm">
            <FaBuilding className="fs-2 text-light  "></FaBuilding>
            <p className="text-white fs-2  ">Express Hotel</p>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto ">
            <Link className="text-decoration-none me-3 text-light  " to="/">
              Home
            </Link>
            <Link className="text-decoration-none me-3 text-light" to="/rooms">
              Rooms
            </Link>
            <Link
              className="text-decoration-none me-3 text-light"
              to="/booking"
            >
              Booking
            </Link>
            <Link className="text-decoration-none me-3 text-light" to="/about">
              About
            </Link>
            <Link
              className="text-decoration-none me-3 text-light"
              to="/contact"
            >
              Contact Us
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
