import React, { useState } from "react";
import "./NavBar.css";
import mainLogo from "../../assets/img/MKTFY_wordmark.svg";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarToggler,
  Collapse,
  NavItem,
  Nav,
  NavLink,
  Container,
  Row,
  Col,
} from "reactstrap";

import {
  NotificationElement,
  SearchInput,
  UserProfileSettings,
} from "./NavBarElements";
import { Categories } from "./NavBarElements";

const NavBar = () => {
  const [open, setIsOpen] = useState(false);
  const toggleNav = () => setIsOpen((prevState) => !prevState);
  return (
    // NAVBAR
    <Navbar expand="lg" fixed="top" style={{ backgroundColor: "#6318AF" }}>
      <Container className="navbar_container d-flex align-items-start" fluid>
        {/* Toggle button for small screen  */}
        <NavbarToggler
          onClick={toggleNav}
          aria-controls="main-nav"
          aria-label="Toggle navigation"
          style={{ backgroundColor: "red" }}
        />
        <Link to="/home" className="mt-lg-4 pb-sm-4 ">
          <img src={mainLogo} alt="/" />
        </Link>

        {/*ul*/}
        <Row className="w-100 ms-3 g-0 ">
          <Collapse navbar isOpen={open}>
            <Nav className="me-auto w-100" navbar>
              {/*li*/}
              <Col lg="8" className="me-xl-3 ">
                <NavItem>
                  <SearchInput />
                  <Categories />
                </NavItem>
              </Col>
              <Col
                className="mt-lg-2 d-flex flex-row justify-content-around "
                lg="2"
              >
                <NavItem>
                  <UserProfileSettings />
                </NavItem>
                <NavItem>
                  {/* <NavLink className="d-xl-none">Notification Small</NavLink> */}
                  <NavLink className="d-none d-xxl-inline-flex ">
                    <NotificationElement />
                  </NavLink>
                </NavItem>
              </Col>

              <Col className="mt-lg-2 d-flex justify-content-end">
                <NavItem>
                  <Link to="/home/create" className="button_create_listing">
                    <span id="container">
                      <span>+</span>
                    </span>
                    Create Listing
                  </Link>
                </NavItem>
              </Col>
            </Nav>
          </Collapse>
        </Row>
      </Container>
    </Navbar>
  );
};

export default NavBar;
