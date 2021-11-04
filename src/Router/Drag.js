import React, { useMemo, useEffect, useState } from "react";
import mainLogo from "../../src/assets/img/MKTFY_wordmark.svg";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  Nav,
  NavLink,
  DropdownItem,
  NavbarText,
  Container,
  Row,
  Col,
} from "reactstrap";
import "./Drag.css";
import { SearchInput } from "../pages/NavBar/NavBarElements";
import { Categories } from "../pages/NavBar/NavBarElements";

function StyledDropzone(props) {
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
        <NavbarBrand href="/home" className="mt-xl-4">
          <img src={mainLogo} alt="/" />
        </NavbarBrand>

        {/*ul*/}
        <Row className="w-100 ms-4 ">
          <Collapse navbar isOpen={open}>
            <Nav className="me-auto w-100" navbar>
              {/*li*/}
              <Col lg="8">
                <NavItem>
                  <SearchInput />
                  <Categories />
                </NavItem>
              </Col>
              <Col className="mt-xl-4">
                <NavItem></NavItem>
              </Col>
              <Col className="mt-xl-4">
                <NavItem>
                  <NavLink
                    href="https://github.com/reactstrap/reactstrap"
                    className="d-xl-none"
                  >
                    Notification Small
                  </NavLink>
                  <NavLink
                    href="https://github.com/reactstrap/reactstrap"
                    className="d-none d-xl-inline-flex "
                  >
                    Notification Large
                  </NavLink>
                </NavItem>
              </Col>
              <Col className="mt-xl-4">
                <NavItem>
                  <NavLink href="/components/">Button</NavLink>
                </NavItem>
              </Col>
            </Nav>
          </Collapse>
        </Row>
      </Container>
    </Navbar>
  );
}

export default StyledDropzone;
