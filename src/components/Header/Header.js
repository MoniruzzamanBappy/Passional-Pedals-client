import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "./../../firebase.init";
import "./Header.css";
import CustomLinks from "./../CustomLinks/CustomLinks";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <Navbar
      sticky="top"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container>
        <Navbar.Brand as={Link} to="/home">
          Passional Pedals
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <CustomLinks to="/home">Home</CustomLinks>
            <CustomLinks to="/blogs">Blogs</CustomLinks>
            <CustomLinks to="/aboutMe">About Me</CustomLinks>
            {!user ? (
              <CustomLinks className="login-btn rounded" to="/login">
                Login
              </CustomLinks>
            ) : (
              <>
                <CustomLinks to="/manageInventory">
                  Manage Inventory
                </CustomLinks>
                <CustomLinks to="/addItem">Add Item</CustomLinks>
                <CustomLinks to="/myItems">My Items</CustomLinks>
                <button
                  className="btn btn-link text-danger text-decoration-none"
                  onClick={handleSignOut}
                >
                  Sign Out
                </button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
