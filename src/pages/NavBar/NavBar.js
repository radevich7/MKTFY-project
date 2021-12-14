import React, { useState } from "react";
import "./NavBar.css";
import mainLogo from "../../assets/img/MKTFY_wordmark.svg";
import { Link, useLocation, useHistory } from "react-router-dom";
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
import { useEffect } from "react";

const NavBar = () => {
  const [open, setIsOpen] = useState(false);
  const [city, setCity] = useState("Calgary");
  const [category, setCategory] = useState("All");
  const [showButton, setShowButton] = useState(false);
  const toggleNav = () => setIsOpen((prevState) => !prevState);
  let location = useLocation();

  useEffect(() => {
    if (
      location.pathname === "/home" ||
      location.pathname === "/home/mylistings" ||
      location.pathname === "/content"
    ) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, [location]);

  return (
    // NAVBAR
    <div>
      <Navbar
        expand="xl"
        fixed="top"
        style={{ backgroundColor: "#6318AF" }}
        className="d-flex flex-column p-md-2 p-0"
        dark
      >
        <Container className="navbar_container align-items-start " fluid>
          <Link
            to="/home"
            onClick={(e) => setCategory("All")}
            className="navbar-brand pt-4 me-4 d-none d-lg-flex"
          >
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
            {showButton && (
              <Link to="/home/create" className="button_create_listing">
                <span id="container">
                  <span>+</span>
                </span>
                Create Listing
              </Link>
            )}
          </NavItem>
          {open && <CollapseMenu toggleNav={toggleNav} open={open} />}
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
