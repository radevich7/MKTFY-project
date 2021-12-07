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
  CollapseMenu,
  NotificationElement,
  SearchInput,
  UserProfileSettings,
} from "./NavBarElements";
import { Categories } from "./NavBarElements";

const NavBar = () => {
  const [open, setIsOpen] = useState(false);
  const [city, setCity] = useState("Calgary");
  const [category, setCategory] = useState("All");
  const toggleNav = () => setIsOpen((prevState) => !prevState);
  return (
    // NAVBAR
    <div>
      <Navbar
        expand="xl"
        fixed="top"
        style={{ backgroundColor: "#6318AF" }}
        className="d-flex flex-column"
        dark
      >
        <Container className="navbar_container align-items-start" fluid>
          <Link to="/home" className="navbar-brand pt-4 me-4 d-none d-lg-flex">
            <img src={mainLogo} alt="/" />
          </Link>
          <Col className="form-group  me-4 me-2 col-xl-7 col-lg-8 col-md-9 col-12 ">
            <SearchInput
              toggleNav={toggleNav}
              setCity={setCity}
              city={city}
              category={category}
            />
            <Categories
              city={city}
              setCategory={setCategory}
              category={category}
            />
          </Col>

          <Collapse navbar>
            <Nav className="me-auto w-100 " navbar>
              <Col className="pt-2  d-flex justify-content-xl-evenly justify-content-center">
                <NavItem>
                  <UserProfileSettings />
                </NavItem>
                <NavItem className=" pt-2 d-xxl-flex d-none">
                  <NotificationElement />
                </NavItem>
              </Col>
            </Nav>
          </Collapse>
          <Col>
            <NavItem className="d-none d-md-flex justify-content-center pt-2">
              <Link to="/home/create" className="button_create_listing">
                <span id="container">
                  <span>+</span>
                </span>
                Create Listing
              </Link>
            </NavItem>
          </Col>

          <NavItem className="d-md-none d-flex bottom-0">
            <Link to="/home/create" className="button_create_listing ">
              <span id="container">
                <span>+</span>
              </span>
              Create Listing
            </Link>
          </NavItem>
          {open && <CollapseMenu toggleNav={toggleNav} open={open} />}
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
