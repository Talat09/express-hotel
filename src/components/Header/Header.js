import React, { useContext } from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaBuilding, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
const Header = () => {
  const { user, LogOut } = useContext(AuthContext);
  const handleLogOut = () => {
    LogOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="justify-content-space-between shadow-lg bg-body-tertiary nav-custom "
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
            <>
              {user?.uid ? (
                <>
                  <span className="text-light me-3">{user?.displayName}</span>
                  <Button
                    className="ms-2 me-3"
                    onClick={handleLogOut}
                    variant="light"
                  >
                    Log Out
                  </Button>
                </>
              ) : (
                <>
                  <Link
                    className="text-decoration-none me-3 text-light"
                    to="/login"
                  >
                    Sign in
                  </Link>
                  <Link
                    className="text-decoration-none me-3 text-light"
                    to="/register"
                  >
                    Register
                  </Link>
                </>
              )}
            </>
            <Link to="/profile">
              {user?.photoURL ? (
                <Image
                  style={{ height: "30px" }}
                  roundedCircle
                  src={user?.photoURL}
                ></Image>
              ) : (
                <FaUserCircle></FaUserCircle>
              )}
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
