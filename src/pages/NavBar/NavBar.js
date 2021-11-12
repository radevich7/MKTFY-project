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
    <div>
      <Navbar
        expand="lg"
        fixed="top"
        style={{ backgroundColor: "#6318AF" }}
        className="d-flex flex-column"
        // color="dark"
        dark
      >
        <Container className="navbar_container align-items-start" fluid>
          <Link to="/home" className="navbar-brand pt-4 me-4">
            <img src={mainLogo} alt="/" />
          </Link>
          <Col className="form-group ms-1 me-5 col-xl-7 col-lg-6 ">
            <SearchInput toggleNav={toggleNav} />
            {/* <Categories /> */}
            <Categories />
          </Col>

          <Collapse navbar isOpen={open}>
            <Nav className="me-auto w-100 " navbar>
              <Col className="pt-1 d-flex justify-content-between">
                <NavItem>
                  <UserProfileSettings />
                </NavItem>
                <NavItem className="pb-5 d-xxl-flex d-none justify-content-start">
                  <NotificationElement />
                </NavItem>
              </Col>

              <Col className="d-flex justify-content-xl-end">
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
          {/* </Row> */}
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
